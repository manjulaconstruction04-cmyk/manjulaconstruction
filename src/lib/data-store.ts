export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  projectType: 'Residential' | 'Commercial' | 'Villa' | 'Turnkey';
  approxAreaSqFt: number;
  selectedPackage: 'Standard' | 'Premium' | 'Luxury';
  budgetRange: string;
  message: string;
  status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'SITE_VISIT' | 'QUOTATION' | 'NEGOTIATION' | 'WON' | 'LOST';
  createdAt: string;
  notes?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Renovation';
  subcategory: 'Villa' | 'Independent House' | 'Duplex' | 'Contemporary' | 'Office' | 'Commercial Complex' | 'Retail' | 'Mixed-Use' | 'Renovation';
  location: string;
  builtUpArea: string;
  completionYear: string;
  scope: string[];
  description: string;
  image: string;
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
  featured: boolean;
  modelStage: number; // 0 to 5 for 3D stage mapping
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
  image: string;
}

export interface ConstructionStage {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stage3DIndex: number;
  durationEstimate: string;
  image?: string;
}

export interface PackagePlan {
  id: string;
  name: 'Standard' | 'Premium' | 'Luxury';
  pricePerSqFt: number;
  tagline: string;
  popular?: boolean;
  keyFeatures: string[];
  cement: string;
  steel: string;
  plumbing: string;
  sanitary: string;
  doors: string;
  windows: string;
  flooring: string;
  painting: string;
  kitchen: string;
  electrical: string;
}

export interface MaterialBrand {
  id: string;
  name: string;
  category: string;
  description: string;
  grade: string;
  logoText: string;
  accentColor: string;
  tagline: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  projectType: string;
  location: string;
  rating: number;
  quote: string;
  avatarText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

// Initial Data
export const COMPANY_INFO = {
  name: "Manjula Construction",
  tagline: "Building Dreams • Creating Futures",
  experienceYears: "20+",
  completedProjects: "50+",
  qualityCommitment: "100%",
  serviceCoverage: "360° End-to-End Solutions",
  phone: "+91 95669 93556",
  altPhone: "+91 63740 44464",
  whatsapp: "+919566993556",
  email: "manjulaconstruction04@gmail.com",
  address: "109, ST-5 Annamalai Garden, Devampalayam, Kovilpalayam, Coimbatore - 641107, Tamil Nadu, India",
  instagram: "@manjula_construction",
  founder: {
    name: "Er. K. Manjunathan, B.E. (Civil)",
    title: "Founder & Managing Director",
    experience: "20+ Years in Structural & Turnkey Engineering",
    quote: "Every pillar we cast and every structural design we engineer carries our unyielding pledge to structural durability, aesthetic brilliance, and lifelong trust for your family.",
    story: "Founded over two decades ago, Manjula Construction has grown from a visionary structural engineering consultancy into one of Tamil Nadu's most trusted turnkey luxury construction firms. With 50+ landmark projects delivered across residential and commercial sectors, we merge traditional craftsmanship with modern 3D BIM planning and premium branded materials."
  }
};

export const INITIAL_PACKAGES: PackagePlan[] = [
  {
    id: "pkg-std",
    name: "Standard",
    pricePerSqFt: 2299,
    tagline: "Uncompromised Structural Strength & Core Quality",
    keyFeatures: [
      "53-Grade Standard Cement & Indrola Steel TMT",
      "Vitrified Floor Tiles up to ₹65/Sq.Ft",
      "Standard Flush Doors & Teak Frame Main Door",
      "Asian Paints Tractor Emulsion",
      "Finolex Wire & Anchor Switches",
      "Jaguar Basic / Parryware Sanitaryware"
    ],
    cement: "Standard 53 Grade (Dalmia / Chettinad)",
    steel: "Indrola Steel Fe-500 Grade TMT",
    plumbing: "Supreme / Finolex PVC Pipes",
    sanitary: "Parryware / Hindware Sanitaryware",
    doors: "Teakwood Main Door Frame + Flush Doors",
    windows: "Aluminum Sliding Windows with Clear Glass",
    flooring: "Vitrified Tiles (2ft x 2ft) up to ₹65/Sq.Ft",
    painting: "Asian Paints Tractor Emulsion (Interior)",
    kitchen: "Granite Platform with Stainless Steel Sink",
    electrical: "Finolex Copper Wires + Modular Switches"
  },
  {
    id: "pkg-prm",
    name: "Premium",
    pricePerSqFt: 2399,
    tagline: "Upgraded Luxury Aesthetics & Superior Branded Finishes",
    popular: true,
    keyFeatures: [
      "UltraTech Cement & Vizag TMT Steel Fe-550D",
      "Malaysian Teak Main Door & Mahogany Interior Doors",
      "WPC Waterproof Bathroom Doors & UPVC Windows",
      "Vitrified Tiles up to ₹110/Sq.Ft",
      "Asian Paints Royale Luxury Emulsion",
      "Finolex Wiring & Havells Modular Switches"
    ],
    cement: "UltraTech Super / Coromandel Cement",
    steel: "Vizag TMT Steel Fe-550D Grade",
    plumbing: "Supreme CPVC & Heavy Duty PVC Pipes",
    sanitary: "Jaquar / Kohler Premium Sanitaryware",
    doors: "Malaysian Teak Main Door + Mahogany Internal Doors",
    windows: "UPVC Soundproof Windows with Mosquito Mesh",
    flooring: "Premium Vitrified Tiles (4ft x 2ft) up to ₹110/Sq.Ft",
    painting: "Asian Paints Royale Emulsion (Interior & Exterior)",
    kitchen: "20mm Black Galaxy Granite + Dado Tiles up to ₹120/Sq.Ft",
    electrical: "Finolex Flame-Retardant Wires + Havells Switches"
  },
  {
    id: "pkg-lux",
    name: "Luxury",
    pricePerSqFt: 2499,
    tagline: "Ultra-Premium Architectural Mastery & Lifetime Guarantee Materials",
    keyFeatures: [
      "UltraTech Premium Cement & TATA Tiscon 550D Steel",
      "Teakwood Main & Teak Internal Doors",
      "Supreme Heavy Duty CPVC SDR 11 Plumbing",
      "Jaquar Premium Diverters & Sanitaryware",
      "Kitchen Wall Tiles up to ₹180/Sq.Ft & Italian Finish Flooring",
      "Havells Smart Automation Ready Switches"
    ],
    cement: "UltraTech Weather Plus / Premium Composite",
    steel: "TATA Tiscon 550D Super Ductile TMT Steel",
    plumbing: "Supreme SDR 11 CPVC & Underground Drainage System",
    sanitary: "Jaquar Artize / Kohler Luxury Concealed Diverters",
    doors: "Teakwood Carved Main Door & Solid Teak Interior Doors",
    windows: "Custom German UPVC / Anodized Architectural Windows",
    flooring: "Italian Marble Finish Vitrified Slab Tiles (6ft x 4ft) up to ₹180/Sq.Ft",
    painting: "Asian Paints Royale Aspira / Ultima Protek 10-Yr Guarantee",
    kitchen: "Imported Quartz / Premium Granite + Tiles up to ₹180/Sq.Ft",
    electrical: "Finolex FRLS Wires + Havells Fabio Smart Touch Switches"
  }
];

export const INITIAL_SERVICES: Service[] = [
  {
    id: "srv-res",
    title: "Building Construction",
    subtitle: "Custom Luxury Villas & Modern Homes",
    description: "From luxury single-family villas to multi-storey duplex homes, we build weather-resistant, seismically safe structural masterpieces customized to your family's lifestyle.",
    iconName: "Home",
    details: ["Custom Floor Plans & 3D Elevations", "RCC Structural Frame Construction", "Vastu Compliant Architectural Design", "Premium Material Quality Assurance"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "srv-rnv",
    title: "House Renovation",
    subtitle: "Complete Remodeling & Expansion",
    description: "Transform existing residential homes with modern architectural facades, additional floor vertical extensions, structural retrofitting, and updated interior layouts.",
    iconName: "Wrench",
    details: ["Floor Addition & Vertical Expansion", "Structural Demolition & Beam Insertion", "Modern Exterior Elevation Facelift", "Waterproof Terrace Retrofitting"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "srv-arc",
    title: "Architecture Design",
    subtitle: "2D/3D BIM Elevation & Vastu Plans",
    description: "Comprehensive 2D working drawings, photorealistic 3D external elevations, interior space optimization, and municipal plan approval documentation.",
    iconName: "Compass",
    details: ["3D Exterior Elevation Renderings", "2D Detailed Floor Plans & Sections", "Vastu Shastra Spatial Planning", "DTCP / Corporation Plan Approval"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "srv-int",
    title: "Interior & Exterior Design",
    subtitle: "Turnkey Modular Woodwork & Decor",
    description: "Bespoke interior design featuring Malaysian teak woodwork, false ceiling lighting, modular kitchen cabinets, and weather-defying exterior textured finishes.",
    iconName: "Palette",
    details: ["Custom Modular Kitchen & Wardrobes", "Gypsum Board False Ceiling with LED", "Teak & Mahogany Interior Doors", "Texture & Venetian Plaster Finishes"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "srv-fix",
    title: "Fixing & Support",
    subtitle: "Structural Repair & Waterproofing",
    description: "Expert structural foundation retrofitting, slab crack injection, chemical waterproofing, and plumbing/electrical system overhauls.",
    iconName: "ShieldCheck",
    details: ["Chemical Pressure Grouting & Crack Repair", "Terrace Waterproof Polyurethane Coating", "Foundation Settlement Stabilization", "Complete Plumbing & Re-Wiring"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "srv-pnt",
    title: "Painting & Finishing",
    subtitle: "Asian Paints Royale & Weatherproof",
    description: "Premium interior acrylic putty wall smoothing, Asian Paints Royale luxury emulsion, exterior Ultima Protek 10-year weatherproofing, and teak wood polishing.",
    iconName: "Paintbrush",
    details: ["2 Coats Acrylic Wall Putty Sanding", "Asian Paints Royale Luxury Emulsion", "Ultima Protek 10-Year Weather Coat", "Teak Main Door Melamine Polish"],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80"
  }
];

export const WORKFLOW_STAGES: ConstructionStage[] = [
  {
    stepNumber: "01",
    title: "Boundary Marking",
    subtitle: "Land Survey & Demarcation",
    description: "Precision land demarcation using total station survey equipment, boundary pillar marking, soil bearing capacity testing, and excavation site prep.",
    highlights: ["Total station boundary survey", "Soil SBC testing & depth analysis", "Excavation centerline marking"],
    stage3DIndex: 0,
    durationEstimate: "Week 1 - 2",
    image: "/about_site.jpg"
  },
  {
    stepNumber: "02",
    title: "Planning",
    subtitle: "Architectural & Spatial Layout",
    description: "Creating custom 2D floor plans, spatial circulation layouts, Vastu compliance orientation, and securing municipal corporation / DTCP plan permits.",
    highlights: ["Custom 2D floor planning", "Vastu Shastra spatial orientation", "DTCP & Corporation approvals"],
    stage3DIndex: 0,
    durationEstimate: "Week 2 - 4",
    image: "/process/step2.jpg"
  },
  {
    stepNumber: "03",
    title: "Designing",
    subtitle: "3D BIM & Elevation Design",
    description: "Developing high-definition 3D BIM exterior elevations, photorealistic facade modeling, interior space visualization, and material selection palettes.",
    highlights: ["High-definition 3D exterior renders", "Facade texture & color styling", "Interior 3D spatial layout"],
    stage3DIndex: 1,
    durationEstimate: "Week 4 - 5",
    image: "/process/step3.jpg"
  },
  {
    stepNumber: "04",
    title: "Structural Drawing",
    subtitle: "Rebar Matrix & Footing Details",
    description: "Finalizing RCC structural design calculations, column grid placements, footing rebar mats, beam matrix schedules, and roof slab steel reinforcement blueprints.",
    highlights: ["Column grid & footing details", "Beam & slab reinforcement matrix", "M20/M25 concrete mix schedule"],
    stage3DIndex: 1,
    durationEstimate: "Week 5 - 7",
    image: "/process/step4.jpg"
  },
  {
    stepNumber: "05",
    title: "Construction",
    subtitle: "Foundation, RCC Frame & Masonry",
    description: "Excavation, anti-termite treatment, RCC foundation casting, column shuttering, roof slab concrete pouring, and high-density red brick masonry walls.",
    highlights: ["RCC foundation & column framework", "Roof slab concrete casting", "Red brick / solid block masonry"],
    stage3DIndex: 2,
    durationEstimate: "Week 8 - 18",
    image: "/process/step5.jpg"
  },
  {
    stepNumber: "06",
    title: "Flooring & Wall Tiling",
    subtitle: "Vitrified Tiles & Dado Work",
    description: "Laser level floor leveling, chemical waterproofing in wet zones, laying premium vitrified floor tiles, granite kitchen counters, and toilet dado wall tiles.",
    highlights: ["Bathroom chemical waterproofing", "Vitrified floor tile installation", "Granite counter & sink fixing"],
    stage3DIndex: 3,
    durationEstimate: "Week 19 - 22",
    image: "/process/step6.jpg"
  },
  {
    stepNumber: "07",
    title: "Painting",
    subtitle: "Wall Putty & Royale Finish",
    description: "2 coats of acrylic wall putty sanding, primer application, Asian Paints Royale luxury interior emulsion, exterior Ultima weather-coat, and teak wood polishing.",
    highlights: ["2 Coats Acrylic wall putty sanding", "Asian Paints Royale interior finish", "Ultima Protek exterior weather coat"],
    stage3DIndex: 4,
    durationEstimate: "Week 23 - 26",
    image: "/process/step7.jpg"
  },
  {
    stepNumber: "08",
    title: "Electrical",
    subtitle: "Concealed Wiring & Switches",
    description: "Pulling Finolex flame-retardant copper wiring through concealed conduits, DB circuit distribution board setup, and fitting Havells modular switch plates.",
    highlights: ["Finolex FRLS copper wire pulling", "Distribution board MCB wiring", "Havells modular switch plate fixing"],
    stage3DIndex: 4,
    durationEstimate: "Week 27 - 29",
    image: "/process/step8.jpg"
  },
  {
    stepNumber: "09",
    title: "Other Inclusions",
    subtitle: "Plumbing, Sanitary & Teak Woodwork",
    description: "Installing Supreme CPVC/PVC plumbing lines, Jaquar diverters, sanitaryware fixtures, Malaysian teakwood main door, WPC doors, and modular kitchen cabinets.",
    highlights: ["Supreme CPVC & Jaquar plumbing", "Sanitaryware & shower fitting", "Teak main door & modular cabinets"],
    stage3DIndex: 5,
    durationEstimate: "Week 30 - 32",
    image: "/process/step9.jpg"
  },
  {
    stepNumber: "10",
    title: "Project Handover",
    subtitle: "Final Quality Audit & Key Ceremony",
    description: "100-point structural & finish quality audit, deep site cleaning, plumbing pressure check, electrical load testing, and formal key handover ceremony with warranty docs.",
    highlights: ["100-Point quality inspection audit", "Deep site cleaning & debris clearing", "Key handover with warranty pack"],
    stage3DIndex: 5,
    durationEstimate: "Week 33 - Handover",
    image: "/process/step10.jpg"
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj-01",
    title: "The Royal Crest Villa",
    category: "Residential",
    subcategory: "Villa",
    location: "Race Course, Coimbatore",
    builtUpArea: "4,800 Sq.Ft",
    completionYear: "2025",
    scope: ["Architectural Planning", "Structural Engineering", "Turnkey Construction", "Luxury Interior Finishes"],
    description: "A contemporary luxury villa featuring double-height ceiling living space, Malaysian teak woodwork, glass cantilevered balconies, and full solar integration.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    modelStage: 5
  },
  {
    id: "proj-02",
    title: "Apex Horizon Commercial Hub",
    category: "Commercial",
    subcategory: "Commercial Complex",
    location: "Avinashi Road, Coimbatore",
    builtUpArea: "18,500 Sq.Ft",
    completionYear: "2024",
    scope: ["Heavy Structural Design", "Commercial Turnkey Build", "Glass Structural Facade", "Fire Safety & Elevator Shafts"],
    description: "5-Storey modern commercial building with structural glass curtain wall, underground basement parking, and high-capacity elevator structural core.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    modelStage: 5
  },
  {
    id: "proj-03",
    title: "Serene Heights Duplex Residence",
    category: "Residential",
    subcategory: "Duplex",
    location: "RS Puram, Coimbatore",
    builtUpArea: "3,200 Sq.Ft",
    completionYear: "2024",
    scope: ["Turnkey Construction", "Structural Frame", "Jaquar Fitting Suite", "Custom Lighting"],
    description: "4-Bedroom modern duplex featuring open plan living, floating teakwood staircase, and Italian tile flooring throughout.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    modelStage: 5
  },
  {
    id: "proj-04",
    title: "Vanguard Tech Park Office Building",
    category: "Commercial",
    subcategory: "Office",
    location: "Saravanampatti, Coimbatore",
    builtUpArea: "24,000 Sq.Ft",
    completionYear: "2023",
    scope: ["Architectural Planning", "RCC Frame Construction", "Acoustic Insulation", "HVAC Integration"],
    description: "State-of-the-art IT park office building engineered with heavy floor load specifications and energy-efficient building envelope.",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80",
    gallery: [],
    featured: false,
    modelStage: 5
  },
  {
    id: "proj-05",
    title: "Grandview Contemporary Home",
    category: "Residential",
    subcategory: "Contemporary",
    location: "Peelamedu, Coimbatore",
    builtUpArea: "2,950 Sq.Ft",
    completionYear: "2024",
    scope: ["Turnkey Execution", "Structural Drawing", "Interior Finishes"],
    description: "Minimalist contemporary family home with floor-to-ceiling glass elements, rainwater harvesting, and terrace garden slab.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    gallery: [],
    featured: false,
    modelStage: 5
  },
  {
    id: "proj-06",
    title: "Heritage Villa Modernization & Expansion",
    category: "Renovation",
    subcategory: "Renovation",
    location: "Trichy Road, Coimbatore",
    builtUpArea: "3,800 Sq.Ft",
    completionYear: "2025",
    scope: ["Structural Retrofitting", "Second Floor Addition", "Teak Interior Refinement", "Exterior Modern Elevation"],
    description: "Complete structural transformation of a 25-year-old traditional residence into an ultra-modern 5BHK luxury villa with a steel reinforced second floor.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [],
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    modelStage: 5
  }
];

export const INITIAL_BRANDS: MaterialBrand[] = [
  {
    id: "brand-ultratech",
    name: "UltraTech Cement",
    category: "Cement & Structural Core",
    description: "India's No. 1 Cement. Engineered for maximum compressive strength, low heat of hydration, and anti-crack weather protection.",
    grade: "53 Grade OPC & Super Composite",
    logoText: "ULTRATECH",
    accentColor: "#D9A441",
    tagline: "The Engineer's Choice"
  },
  {
    id: "brand-tata",
    name: "Tata Steel Tiscon",
    category: "TMT Rebar Steel",
    description: "India's primary TMT steel bar. High ductility Fe-550D grade providing superior seismic resistance and high corrosion protection.",
    grade: "Fe-550D Super Ductile",
    logoText: "TATA TISCON",
    accentColor: "#06243A",
    tagline: "Joy of Building"
  },
  {
    id: "brand-jaquar",
    name: "Jaquar Sanitaryware",
    category: "Bath & Sanitary Fittings",
    description: "Premium bath fittings, concealed single-lever diverters, and anti-bacterial ceramic sanitaryware with 10-year warranty.",
    grade: "Chrome & Matt Diverter Series",
    logoText: "JAQUAR",
    accentColor: "#B8862C",
    tagline: "Experience Bathing"
  },
  {
    id: "brand-supreme",
    name: "Supreme Pipes",
    category: "Plumbing & Piping",
    description: "Heavy-duty CPVC & UPVC pressure plumbing pipes designed for zero leakage, high heat resistance, and 50+ years longevity.",
    grade: "CPVC SDR 11 & Heavy Duty PVC",
    logoText: "SUPREME",
    accentColor: "#BFC1C4",
    tagline: "People who know rely on Supreme"
  },
  {
    id: "brand-finolex",
    name: "Finolex Cables",
    category: "Electrical Cables",
    description: "100% pure electrolytic grade copper wires with Flame Retardant Low Smoke (FRLS) insulation for maximum home safety.",
    grade: "FRLS Industrial Copper Wires",
    logoText: "FINOLEX",
    accentColor: "#D9A441",
    tagline: "Be Unlimited"
  },
  {
    id: "brand-havells",
    name: "Havells Modular",
    category: "Electrical Switches",
    description: "Sleek glass-finish modular switch plates, smart home automation touch panels, and heavy-duty MCB distribution boards.",
    grade: "Fabio Modular & Smart Series",
    logoText: "HAVELLS",
    accentColor: "#06243A",
    tagline: "Making a Difference"
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-01",
    clientName: "Dr. R. Sundaram & Family",
    projectType: "Luxury Villa Client",
    location: "Race Course, Coimbatore",
    rating: 5,
    quote: "Manjula Construction delivered our 4,800 sq.ft villa ahead of schedule. Their 10-stage quality audits, transparent material pricing, and Tata Steel framing gave us complete peace of mind. Truly world-class!",
    avatarText: "RS"
  },
  {
    id: "test-02",
    clientName: "Mr. Anand Varma",
    projectType: "Commercial Complex Owner",
    location: "Avinashi Road, Coimbatore",
    rating: 5,
    quote: "Handling an 18,500 sq.ft commercial structure requires immense engineering expertise. Er. Manjunathan and his team managed structural blueprints, corporation approvals, and turnkey casting flawlessly.",
    avatarText: "AV"
  },
  {
    id: "test-03",
    clientName: "Mrs. Priya Chandrasekar",
    projectType: "Duplex Home Owner",
    location: "RS Puram, Coimbatore",
    rating: 5,
    quote: "The Luxury Package was worth every rupee! UltraTech cement, Jaquar bath fittings, and Malaysian teak doors were installed exactly as promised in the contract. No price escalation whatsoever.",
    avatarText: "PC"
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-101",
    name: "Senthil Kumar",
    phone: "+91 98765 43210",
    email: "senthil@example.com",
    location: "Vadavalli, Coimbatore",
    projectType: "Villa",
    approxAreaSqFt: 3500,
    selectedPackage: "Luxury",
    budgetRange: "₹80 Lakhs - ₹1 Crore",
    message: "Interested in constructing a 4BHK modern villa with home theater and solar roof. Need architectural consultation.",
    status: "NEW",
    createdAt: "2026-08-21T10:30:00Z",
    notes: "Requires site visit on Sunday morning."
  },
  {
    id: "lead-102",
    name: "Kavitha Rajan",
    phone: "+91 98941 11223",
    email: "kavitha.r@example.com",
    location: "Ganapathy, Coimbatore",
    projectType: "Residential",
    approxAreaSqFt: 2400,
    selectedPackage: "Premium",
    budgetRange: "₹50 Lakhs - ₹65 Lakhs",
    message: "Planning to construct an independent duplex home on a 30x40 site. Requesting quotation breakdown.",
    status: "QUALIFIED",
    createdAt: "2026-08-20T14:15:00Z",
    notes: "Budget verified. Prefers Premium package."
  },
  {
    id: "lead-103",
    name: "M. Balaji",
    phone: "+91 97890 55443",
    email: "balaji.m@example.com",
    location: "TIDEL Park Road, Coimbatore",
    projectType: "Commercial",
    approxAreaSqFt: 12000,
    selectedPackage: "Luxury",
    budgetRange: "₹2.5 Crores +",
    message: "Commercial office building project. Need structural engineering consultation and 3D elevation proposal.",
    status: "SITE_VISIT",
    createdAt: "2026-08-19T11:00:00Z",
    notes: "Soil testing report received."
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-01",
    title: "10 Crucial Vastu & Structural Tips Before Starting House Construction in 2026",
    excerpt: "Discover essential civil engineering guidelines and Vastu alignment rules to ensure long-term structural strength, natural sunlight, and financial prosperity for your new home.",
    content: "Building a home in South India requires combining traditional Vastu Shastra principles with modern RCC structural engineering. First, always test Soil SBC (Soil Bearing Capacity) before designing column footings. Ensure the kitchen is placed in the Agni (South-East) corner and master bedroom in the Niruthi (South-West) zone. Utilizing Fe-550D TMT steel rebar and 53-grade cement guarantees zero wall micro-cracks for decades.",
    date: "August 20, 2026",
    author: "Er. K. Manjunathan",
    category: "Vastu & Planning",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read"
  },
  {
    id: "blog-02",
    title: "How to Calculate Real Construction Cost Per Sq.Ft with Branded Materials",
    excerpt: "Understand complete cost breakdowns of steel, cement, sand, plumbing, and finishing tiles so you never face budget overruns or hidden contractor costs.",
    content: "When evaluating house construction quotes in Tamil Nadu, look beyond the raw sq.ft number. A standard rate of ₹2,299/sq.ft should include 53-grade cement, Fe-500 rebar steel, Finolex wiring, and branded tiles. Upgrading to ₹2,499/sq.ft brings Tata Tiscon Fe-550D steel, UltraTech WeatherPlus cement, Jaquar concealed diverters, and Malaysian teak main door frames.",
    date: "August 15, 2026",
    author: "Ar. S. Priya",
    category: "Cost & Budgeting",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
    readTime: "7 min read"
  },
  {
    id: "blog-03",
    title: "Structural Steel vs RCC Frames: Which is Best for Modern South Indian Homes?",
    excerpt: "A comprehensive comparative breakdown of concrete slab foundations vs steel composite frameworks for multi-story residential and commercial builds.",
    content: "RCC (Reinforced Cement Concrete) remains the gold standard for residential duplexes due to high thermal mass, termite immunity, and acoustic dampening. For commercial buildings above 4 floors, structural steel composite frames reduce construction duration by 40% while permitting column-free open hall space.",
    date: "August 10, 2026",
    author: "R. Karthik, M.Tech",
    category: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read"
  }
];
