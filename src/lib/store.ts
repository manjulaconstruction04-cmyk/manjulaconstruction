import {
  Lead,
  Project,
  PackagePlan,
  MaterialBrand,
  Testimonial,
  Service,
  BlogPost,
  COMPANY_INFO,
  INITIAL_LEADS,
  INITIAL_PROJECTS,
  INITIAL_PACKAGES,
  INITIAL_BRANDS,
  INITIAL_TESTIMONIALS,
  INITIAL_SERVICES,
  INITIAL_BLOG_POSTS
} from './data-store';
import {
  saveLeadToDb,
  loadLeadsFromDb,
  savePackageToDb,
  loadPackagesFromDb,
  saveAdminPasswordToDb,
  loadAdminPasswordFromDb
} from './db-helpers';

class DataStoreService {
  private leads: Lead[] = [...INITIAL_LEADS];
  private projects: Project[] = [...INITIAL_PROJECTS];
  private packages: PackagePlan[] = [...INITIAL_PACKAGES];
  private brands: MaterialBrand[] = [...INITIAL_BRANDS];
  private testimonials: Testimonial[] = [...INITIAL_TESTIMONIALS];
  private services: Service[] = [...INITIAL_SERVICES];
  private blogPosts: BlogPost[] = [...INITIAL_BLOG_POSTS];
  private companyInfo = { ...COMPANY_INFO };
  private adminCredentials = {
    email: 'manjulaconstruction04@gmail.com',
    password: 'manjula2026'
  };
  private isInitialized = false;

  constructor() {
    this.initMongoSync();
  }

  private async initMongoSync() {
    if (this.isInitialized) return;
    this.isInitialized = true;
    try {
      const [dbLeads, dbPkgs, dbPass] = await Promise.all([
        loadLeadsFromDb(),
        loadPackagesFromDb(),
        loadAdminPasswordFromDb(this.adminCredentials.email)
      ]);

      if (dbLeads && dbLeads.length > 0) {
        this.leads = dbLeads;
      }
      if (dbPkgs && dbPkgs.length > 0) {
        this.packages = dbPkgs;
      }
      if (dbPass) {
        this.adminCredentials.password = dbPass;
      }
    } catch (e) {
      console.warn('MongoDB initial sync warning:', e);
    }
  }

  // ADMIN AUTH & SECURITY
  public getAdminCredentials() {
    return {
      id: "usr-admin-01",
      name: "Er. K. Manjunathan",
      email: this.adminCredentials.email,
      role: "SUPER_ADMIN"
    };
  }

  public verifyAdminCredentials(email: string, pass: string): boolean {
    return (
      email.trim().toLowerCase() === this.adminCredentials.email.toLowerCase() &&
      pass === this.adminCredentials.password
    );
  }

  public updateAdminPassword(currentPass: string, newPass: string): { success: boolean; error?: string } {
    if (currentPass !== this.adminCredentials.password) {
      return { success: false, error: 'Current password is incorrect' };
    }
    if (!newPass || newPass.trim().length < 6) {
      return { success: false, error: 'New password must be at least 6 characters long' };
    }
    this.adminCredentials.password = newPass;
    saveAdminPasswordToDb(this.adminCredentials.email, newPass);
    return { success: true };
  }

  // LEADS CRUD
  public getLeads(status?: string, query?: string): Lead[] {
    let result = this.leads;
    if (status && status !== 'ALL') {
      result = result.filter(l => l.status === status);
    }
    if (query && query.trim() !== '') {
      const q = query.toLowerCase();
      result = result.filter(l => 
        l.name.toLowerCase().includes(q) ||
        l.phone.includes(q) ||
        l.email.toLowerCase().includes(q) ||
        l.location.toLowerCase().includes(q)
      );
    }
    return result;
  }

  public getLeadById(id: string): Lead | null {
    return this.leads.find(l => l.id === id) || null;
  }

  public addLead(leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>): Lead {
    const newLead: Lead = {
      ...leadData,
      id: `lead-${Date.now()}`,
      status: 'NEW',
      createdAt: new Date().toISOString()
    };
    this.leads.unshift(newLead);
    saveLeadToDb(newLead);
    return newLead;
  }

  public updateLeadStatus(id: string, status: Lead['status'], notes?: string): Lead | null {
    const leadIndex = this.leads.findIndex(l => l.id === id);
    if (leadIndex === -1) return null;
    
    this.leads[leadIndex] = {
      ...this.leads[leadIndex],
      status,
      ...(notes !== undefined ? { notes } : {})
    };
    saveLeadToDb(this.leads[leadIndex]);
    return this.leads[leadIndex];
  }

  public deleteLead(id: string): boolean {
    const initialLen = this.leads.length;
    this.leads = this.leads.filter(l => l.id !== id);
    return this.leads.length < initialLen;
  }

  // PROJECTS CRUD
  public getProjects(category?: string, featuredOnly?: boolean): Project[] {
    let result = this.projects;
    if (category && category !== 'ALL') {
      result = result.filter(p => p.category === category);
    }
    if (featuredOnly) {
      result = result.filter(p => p.featured);
    }
    return result;
  }

  public getProjectById(id: string): Project | null {
    return this.projects.find(p => p.id === id) || null;
  }

  public addProject(projectData: Omit<Project, 'id'>): Project {
    const newProj: Project = {
      ...projectData,
      id: `proj-${Date.now()}`
    };
    this.projects.unshift(newProj);
    return newProj;
  }

  public updateProject(id: string, updates: Partial<Omit<Project, 'id'>>): Project | null {
    const idx = this.projects.findIndex(p => p.id === id);
    if (idx === -1) return null;
    this.projects[idx] = { ...this.projects[idx], ...updates };
    return this.projects[idx];
  }

  public deleteProject(id: string): boolean {
    const initialLen = this.projects.length;
    this.projects = this.projects.filter(p => p.id !== id);
    return this.projects.length < initialLen;
  }

  // PACKAGES CRUD
  public getPackages(): PackagePlan[] {
    return this.packages;
  }

  public getPackageById(id: string): PackagePlan | null {
    return this.packages.find(p => p.id === id) || null;
  }

  public updatePackagePrice(id: string, newPricePerSqFt: number): PackagePlan | null {
    const idx = this.packages.findIndex(p => p.id === id);
    if (idx === -1) return null;
    this.packages[idx].pricePerSqFt = newPricePerSqFt;
    savePackageToDb(this.packages[idx]);
    return this.packages[idx];
  }

  public updatePackage(id: string, updates: Partial<Omit<PackagePlan, 'id'>>): PackagePlan | null {
    const idx = this.packages.findIndex(p => p.id === id);
    if (idx === -1) return null;
    this.packages[idx] = { ...this.packages[idx], ...updates };
    savePackageToDb(this.packages[idx]);
    return this.packages[idx];
  }

  // SERVICES CRUD
  public getServices(): Service[] {
    return this.services;
  }

  public getServiceById(id: string): Service | null {
    return this.services.find(s => s.id === id) || null;
  }

  public addService(serviceData: Omit<Service, 'id'>): Service {
    const newSrv: Service = {
      ...serviceData,
      id: `srv-${Date.now()}`
    };
    this.services.push(newSrv);
    return newSrv;
  }

  public updateService(id: string, updates: Partial<Omit<Service, 'id'>>): Service | null {
    const idx = this.services.findIndex(s => s.id === id);
    if (idx === -1) return null;
    this.services[idx] = { ...this.services[idx], ...updates };
    return this.services[idx];
  }

  public deleteService(id: string): boolean {
    const initialLen = this.services.length;
    this.services = this.services.filter(s => s.id !== id);
    return this.services.length < initialLen;
  }

  // MATERIAL BRANDS CRUD
  public getBrands(): MaterialBrand[] {
    return this.brands;
  }

  public getBrandById(id: string): MaterialBrand | null {
    return this.brands.find(b => b.id === id) || null;
  }

  public addBrand(brandData: Omit<MaterialBrand, 'id'>): MaterialBrand {
    const newBrand: MaterialBrand = {
      ...brandData,
      id: `brand-${Date.now()}`
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  public updateBrand(id: string, updates: Partial<Omit<MaterialBrand, 'id'>>): MaterialBrand | null {
    const idx = this.brands.findIndex(b => b.id === id);
    if (idx === -1) return null;
    this.brands[idx] = { ...this.brands[idx], ...updates };
    return this.brands[idx];
  }

  public deleteBrand(id: string): boolean {
    const initialLen = this.brands.length;
    this.brands = this.brands.filter(b => b.id !== id);
    return this.brands.length < initialLen;
  }

  // TESTIMONIALS CRUD
  public getTestimonials(): Testimonial[] {
    return this.testimonials;
  }

  public addTestimonial(testimonialData: Omit<Testimonial, 'id'>): Testimonial {
    const newTest: Testimonial = {
      ...testimonialData,
      id: `test-${Date.now()}`
    };
    this.testimonials.unshift(newTest);
    return newTest;
  }

  public deleteTestimonial(id: string): boolean {
    const initialLen = this.testimonials.length;
    this.testimonials = this.testimonials.filter(t => t.id !== id);
    return this.testimonials.length < initialLen;
  }

  // BLOG CRUD
  public getBlogPosts(category?: string): BlogPost[] {
    if (category && category !== 'ALL') {
      return this.blogPosts.filter(b => b.category === category);
    }
    return this.blogPosts;
  }

  public getBlogPostById(id: string): BlogPost | null {
    return this.blogPosts.find(b => b.id === id) || null;
  }

  public addBlogPost(postData: Omit<BlogPost, 'id' | 'date'>): BlogPost {
    const newPost: BlogPost = {
      ...postData,
      id: `blog-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    this.blogPosts.unshift(newPost);
    return newPost;
  }

  public updateBlogPost(id: string, updates: Partial<Omit<BlogPost, 'id'>>): BlogPost | null {
    const idx = this.blogPosts.findIndex(b => b.id === id);
    if (idx === -1) return null;
    this.blogPosts[idx] = { ...this.blogPosts[idx], ...updates };
    return this.blogPosts[idx];
  }

  public deleteBlogPost(id: string): boolean {
    const initialLen = this.blogPosts.length;
    this.blogPosts = this.blogPosts.filter(b => b.id !== id);
    return this.blogPosts.length < initialLen;
  }

  // COMPANY INFO
  public getCompanyInfo() {
    return this.companyInfo;
  }

  public updateCompanyInfo(updates: Partial<typeof COMPANY_INFO>) {
    this.companyInfo = { ...this.companyInfo, ...updates };
    return this.companyInfo;
  }

  // STATS & MAGAZINE
  public incrementMagazineDownloads(): number {
    this.magazineDownloads += 1;
    return this.magazineDownloads;
  }

  public incrementWebsiteVisits(): number {
    this.websiteVisits += 1;
    return this.websiteVisits;
  }

  public getStats() {
    return {
      totalLeads: this.leads.length,
      newLeads: this.leads.filter(l => l.status === 'NEW').length,
      qualifiedLeads: this.leads.filter(l => l.status === 'QUALIFIED' || l.status === 'SITE_VISIT').length,
      wonLeads: this.leads.filter(l => l.status === 'WON').length,
      totalProjects: this.projects.length,
      featuredProjects: this.projects.filter(p => p.featured).length,
      totalPackages: this.packages.length,
      totalServices: this.services.length,
      totalBrands: this.brands.length,
      totalBlogPosts: this.blogPosts.length,
      magazineDownloads: this.magazineDownloads,
      websiteVisits: this.websiteVisits
    };
  }

  // COST ESTIMATION ENGINE
  public calculateEstimate(params: {
    builtUpAreaSqFt: number;
    packageId?: string;
    floors?: number;
    elevationWork?: boolean;
    modularKitchen?: boolean;
    compoundWallFt?: number;
  }) {
    const {
      builtUpAreaSqFt,
      packageId = 'pkg-prm',
      floors = 2,
      elevationWork = true,
      modularKitchen = true,
      compoundWallFt = 0
    } = params;

    const selectedPkg = this.packages.find(p => p.id === packageId) || this.packages[1]; // default Premium
    const ratePerSqFt = selectedPkg.pricePerSqFt;

    // Base structural + turn-key construction cost
    const baseCost = builtUpAreaSqFt * ratePerSqFt;

    // Additional architectural & structural add-ons
    const elevationAddon = elevationWork ? builtUpAreaSqFt * 85 : 0; // ₹85/sq.ft 3D elevation feature
    const kitchenAddon = modularKitchen ? 180000 : 0; // ₹1.8L lump-sum modular kitchen
    const compoundWallCost = compoundWallFt * 1600; // ₹1,600 per running ft

    const totalEstimate = baseCost + elevationAddon + kitchenAddon + compoundWallCost;

    // Structural Material Quantity Breakdown estimates (Civil Engineering formulas)
    const cementBags = Math.round(builtUpAreaSqFt * 0.42); // ~0.42 bags per sq.ft
    const steelTons = Number((builtUpAreaSqFt * 0.0022).toFixed(2)); // ~2.2 kg per sq.ft = 0.0022 Tons/sq.ft
    const sandCft = Math.round(builtUpAreaSqFt * 1.8); // ~1.8 CFT per sq.ft
    const aggregateCft = Math.round(builtUpAreaSqFt * 1.35); // ~1.35 CFT per sq.ft
    const bricksCount = Math.round(builtUpAreaSqFt * 14); // ~14 red bricks per sq.ft

    return {
      builtUpAreaSqFt,
      floors,
      packageName: selectedPkg.name,
      ratePerSqFt,
      costBreakdown: {
        civilStructureCost: Math.round(baseCost * 0.65), // 65% RCC frame & masonry
        finishingCost: Math.round(baseCost * 0.25), // 25% tiles, paint, doors, sanitary
        electricalPlumbingCost: Math.round(baseCost * 0.10), // 10% MEP wiring & piping
        elevationAddon,
        kitchenAddon,
        compoundWallCost,
        totalEstimate
      },
      materialEstimates: {
        cementBags,
        steelTons,
        sandCft,
        aggregateCft,
        bricksCount
      }
    };
  }
}

// Global Singleton for in-memory server state
export const globalStore = new DataStoreService();

