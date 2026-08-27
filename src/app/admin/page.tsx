'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Lead, Project, PackagePlan, INITIAL_PACKAGES } from '@/lib/data-store';
import { Shield, Users, Building2, BookOpen, Layers, Phone, Mail, CheckCircle2, Search, Filter, Edit3, ArrowLeft, Lock, LogOut, Sparkles, DollarSign, Calendar, RefreshCw } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('manjulaconstruction04@gmail.com');
  const [password, setPassword] = useState<string>('manjula2026');
  const [loginError, setLoginError] = useState<string>('');
  
  const [activeTab, setActiveTab] = useState<'leads' | 'projects' | 'packages' | 'analytics' | 'security'>('leads');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [packages, setPackages] = useState<PackagePlan[]>(INITIAL_PACKAGES);
  const [stats, setStats] = useState<any>(null);
  
  // Password change state
  const [currPassword, setCurrPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [pwdStatus, setPwdStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [pwdLoading, setPwdLoading] = useState<boolean>(false);
  
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [newStatus, setNewStatus] = useState<Lead['status']>('NEW');
  const [newNotes, setNewNotes] = useState<string>('');

  const [packagePriceEdit, setPackagePriceEdit] = useState<{ id: string; price: number } | null>(null);

  // Check initial login session
  useEffect(() => {
    const token = localStorage.getItem('manjula_admin_token');
    if (token) {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const [leadsRes, statsRes, pkgRes] = await Promise.all([
        fetch('/api/leads'),
        fetch('/api/stats'),
        fetch('/api/packages')
      ]);
      const leadsData = await leadsRes.json();
      const statsData = await statsRes.json();
      const pkgData = await pkgRes.json();

      if (leadsData.success) setLeads(leadsData.leads);
      if (statsData.success) setStats(statsData.stats);
      if (pkgData.success) setPackages(pkgData.packages);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('manjula_admin_token', data.token);
        setIsAuthenticated(true);
        fetchData();
      } else {
        setLoginError(data.error || 'Invalid credentials');
      }
    } catch {
      setLoginError('Server error during authentication');
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwdStatus(null);
    if (newPassword !== confirmPassword) {
      setPwdStatus({ type: 'error', text: 'New password and confirmation do not match' });
      return;
    }
    if (newPassword.length < 6) {
      setPwdStatus({ type: 'error', text: 'New password must be at least 6 characters' });
      return;
    }

    setPwdLoading(true);
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: currPassword,
          newPassword: newPassword
        })
      });
      const data = await res.json();
      if (data.success) {
        setPwdStatus({ type: 'success', text: 'Password changed successfully!' });
        setCurrPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setPwdStatus({ type: 'error', text: data.error || 'Failed to update password' });
      }
    } catch {
      setPwdStatus({ type: 'error', text: 'Server error while changing password' });
    } finally {
      setPwdLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('manjula_admin_token');
    setIsAuthenticated(false);
  };

  const handleUpdateLeadStatus = async (id: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus, notes: newNotes })
      });
      const data = await res.json();
      if (data.success) {
        setLeads(leads.map(l => l.id === id ? data.lead : l));
        setEditingLead(null);
      }
    } catch (err) {
      alert('Failed to update lead stage');
    }
  };

  const handleUpdatePackagePrice = async (id: string, price: number) => {
    try {
      const res = await fetch('/api/packages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, pricePerSqFt: price })
      });
      const data = await res.json();
      if (data.success) {
        setPackages(packages.map(p => p.id === id ? data.package : p));
        setPackagePriceEdit(null);
      }
    } catch {
      alert('Failed to update package price');
    }
  };

  const filteredLeads = leads.filter(l => {
    const matchesSearch = l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          l.phone.includes(searchTerm) ||
                          l.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || l.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#07090E] flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md glass-panel-gold rounded-3xl p-8 border border-[#D9A441]/40 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#06243A] text-[#D9A441] border border-[#D9A441]/40 flex items-center justify-center">
              <Shield className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-extrabold font-serif text-slate-100 uppercase tracking-wider">
              MANJULA ADMIN CMS
            </h2>
            <p className="text-xs text-slate-400">Authorized Executive Login Portal</p>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
              />
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-amber-300 font-mono">
              Default Admin Credentials: <br />
              <span className="text-slate-300">manjulaconstruction04@gmail.com / manjula2026</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D9A441] to-[#B8862C] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110"
            >
              Sign In to Admin Portal
            </button>
          </form>

          <div className="text-center pt-2">
            <Link href="/" className="text-xs text-slate-400 hover:text-[#D9A441] inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // MAIN ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans">
      
      {/* ADMIN HEADER */}
      <header className="bg-[#0A0F1A] border-b border-[#D9A441]/20 py-4 px-6 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D9A441] to-[#06243A] p-0.5">
              <div className="w-full h-full bg-[#07090E] rounded-[9px] flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#D9A441]" />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-base font-serif text-slate-100 uppercase">
                MANJULA CONTROL CENTER
              </h1>
              <p className="text-[10px] text-amber-300 font-mono">Lead CRM &amp; Content Management System</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#D9A441]"
            >
              View Main Site ↗
            </Link>

            <button
              onClick={handleLogout}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-950/80 text-red-300 border border-red-500/30 hover:bg-red-900 transition-all flex items-center gap-1"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl glass-panel border border-slate-800">
            <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">TOTAL CLIENT ENQUIRIES</span>
            <h3 className="text-3xl font-bold font-serif text-[#D9A441] mt-1">{stats?.totalLeads || leads.length}</h3>
            <p className="text-[10px] text-emerald-400 mt-1 font-mono">{stats?.newLeads || 1} New Unhandled</p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-slate-800">
            <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">COMPLETED PROJECTS</span>
            <h3 className="text-3xl font-bold font-serif text-amber-300 mt-1">50+</h3>
            <p className="text-[10px] text-slate-400 mt-1 font-mono">Residential &amp; Commercial</p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-slate-800">
            <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">MAGAZINE DOWNLOADS</span>
            <h3 className="text-3xl font-bold font-serif text-slate-100 mt-1">{stats?.magazineDownloads || 142}</h3>
            <p className="text-[10px] text-[#D9A441] mt-1 font-mono">20-Page Corporate Profile</p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-slate-800">
            <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">WEBSITE TRAFFIC</span>
            <h3 className="text-3xl font-bold font-serif text-emerald-400 mt-1">{stats?.websiteVisits || 2890}</h3>
            <p className="text-[10px] text-slate-400 mt-1 font-mono">Interactive 3D WebGL Views</p>
          </div>
        </div>

        {/* TAB CONTROLLERS */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
          {[
            { id: 'leads', name: 'Lead Management CRM', icon: Users },
            { id: 'packages', name: 'Package Price Editor', icon: DollarSign },
            { id: 'projects', name: 'Projects CMS', icon: Building2 },
            { id: 'analytics', name: 'System Analytics', icon: Sparkles },
            { id: 'security', name: 'Security & Password', icon: Lock },
          ].map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#D9A441] text-black shadow-lg'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: LEAD MANAGEMENT CRM */}
        {activeTab === 'leads' && (
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-slate-100">Customer Lead Pipeline CRM</h3>
                <p className="text-xs text-slate-400">Track and manage client enquiries from submission to project handover.</p>
              </div>

              {/* SEARCH & FILTER BAR */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search name, phone, location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-[#D9A441]"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-amber-300 focus:outline-none"
                >
                  <option value="ALL">All Pipeline Stages</option>
                  <option value="NEW">New</option>
                  <option value="QUALIFIED">Qualified</option>
                  <option value="SITE_VISIT">Site Visit</option>
                  <option value="QUOTATION">Quotation</option>
                  <option value="WON">Won Contract</option>
                </select>
              </div>
            </div>

            {/* LEADS TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                    <th className="py-3 px-4 uppercase">Client Info</th>
                    <th className="py-3 px-4 uppercase">Type &amp; Area</th>
                    <th className="py-3 px-4 uppercase">Plan &amp; Budget</th>
                    <th className="py-3 px-4 uppercase">Status Stage</th>
                    <th className="py-3 px-4 uppercase text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-900/40">
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-100 font-serif">{lead.name}</div>
                        <div className="text-[11px] text-amber-300 font-mono">{lead.phone}</div>
                        <div className="text-[10px] text-slate-400">{lead.location}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-slate-200">{lead.projectType}</span>
                        <div className="text-[10px] text-slate-400 font-mono">{lead.approxAreaSqFt} Sq.Ft</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded bg-slate-900 text-[#D9A441] border border-[#D9A441]/20 text-[10px] font-bold">
                          {lead.selectedPackage} Plan
                        </span>
                        <div className="text-[10px] text-slate-400 mt-1">{lead.budgetRange}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono ${
                          lead.status === 'NEW' ? 'bg-amber-950 text-amber-300 border border-amber-500/40' :
                          lead.status === 'WON' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' :
                          'bg-slate-900 text-slate-300 border border-slate-700'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => {
                            setEditingLead(lead);
                            setNewStatus(lead.status);
                            setNewNotes(lead.notes || '');
                          }}
                          className="px-3 py-1.5 rounded-lg bg-[#06243A] text-amber-300 border border-[#D9A441]/30 hover:bg-[#D9A441] hover:text-black transition-all text-xs font-bold"
                        >
                          Update Stage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* EDIT LEAD MODAL */}
            {editingLead && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                <div className="glass-panel-gold rounded-3xl max-w-md w-full p-6 border border-[#D9A441]/40 space-y-4">
                  <h3 className="text-xl font-bold font-serif text-slate-100">
                    Update Pipeline Stage: {editingLead.name}
                  </h3>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      Lead Pipeline Stage
                    </label>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="QUALIFIED">QUALIFIED</option>
                      <option value="SITE_VISIT">SITE VISIT SCHEDULED</option>
                      <option value="QUOTATION">QUOTATION SENT</option>
                      <option value="NEGOTIATION">NEGOTIATION</option>
                      <option value="WON">WON CONTRACT</option>
                      <option value="LOST">LOST</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      Executive Notes
                    </label>
                    <textarea
                      rows={3}
                      value={newNotes}
                      onChange={(e) => setNewNotes(e.target.value)}
                      placeholder="Add internal site visit or pricing notes..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      onClick={() => setEditingLead(null)}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleUpdateLeadStatus(editingLead.id)}
                      className="px-5 py-2 rounded-xl bg-[#D9A441] text-black font-bold text-xs uppercase"
                    >
                      Save Status
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: PACKAGE PRICING EDITOR */}
        {activeTab === 'packages' && (
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-6">
            <div>
              <h3 className="text-xl font-bold font-serif text-slate-100">Package Sq.Ft Pricing Editor</h3>
              <p className="text-xs text-slate-400">Update turnkey pricing rates per Sq.Ft in real-time across website and estimators.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-serif font-bold text-lg text-slate-100">{pkg.name} Plan</h4>
                    <span className="text-xs text-[#D9A441] font-mono">Current Price</span>
                  </div>

                  {packagePriceEdit?.id === pkg.id ? (
                    <div className="space-y-3">
                      <input
                        type="number"
                        value={packagePriceEdit.price}
                        onChange={(e) => setPackagePriceEdit({ id: pkg.id, price: Number(e.target.value) })}
                        className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-[#D9A441] text-amber-300 font-mono text-xl font-bold"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleUpdatePackagePrice(pkg.id, packagePriceEdit.price)}
                          className="flex-1 py-2 rounded-lg bg-[#D9A441] text-black font-bold text-xs"
                        >
                          Save Rate
                        </button>
                        <button
                          onClick={() => setPackagePriceEdit(null)}
                          className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-3xl font-extrabold font-serif text-[#D9A441]">
                        ₹{pkg.pricePerSqFt.toLocaleString('en-IN')}
                        <span className="text-xs text-slate-400 font-mono"> / Sq.Ft</span>
                      </div>
                      <button
                        onClick={() => setPackagePriceEdit({ id: pkg.id, price: pkg.pricePerSqFt })}
                        className="mt-4 w-full py-2 rounded-xl bg-[#06243A] text-amber-300 border border-[#D9A441]/30 hover:bg-[#D9A441] hover:text-black transition-all text-xs font-bold flex items-center justify-center gap-1.5"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit Sq.Ft Pricing</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SECURITY & PASSWORD CHANGE */}
        {activeTab === 'security' && (
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-6 max-w-2xl mx-auto">
            <div>
              <h3 className="text-xl font-bold font-serif text-slate-100 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#D9A441]" />
                Admin Credentials &amp; Password Security
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Manage administrative login details for <span className="text-amber-300 font-mono font-semibold">manjulaconstruction04@gmail.com</span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Admin Identifier:</span>
                <span className="font-mono text-amber-300 font-bold">manjulaconstruction04@gmail.com</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Role:</span>
                <span className="font-mono text-emerald-400 font-bold">SUPER_ADMIN</span>
              </div>
            </div>

            {pwdStatus && (
              <div className={`p-4 rounded-xl text-xs font-semibold ${
                pwdStatus.type === 'success'
                  ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
                  : 'bg-red-950/80 border border-red-500/40 text-red-300'
              }`}>
                {pwdStatus.text}
              </div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  required
                  value={currPassword}
                  onChange={(e) => setCurrPassword(e.target.value)}
                  placeholder="Enter current password..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password (min. 6 characters)..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                />
              </div>

              <button
                type="submit"
                disabled={pwdLoading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D9A441] to-[#B8862C] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 disabled:opacity-50"
              >
                {pwdLoading ? 'Updating Password...' : 'Update Admin Password'}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
