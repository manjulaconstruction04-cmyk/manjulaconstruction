'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/lib/data-store';
import { Phone, Mail, MapPin, Send, CheckCircle2, Building2, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialPackage?: string;
}

export default function ContactSection({ initialService, initialPackage }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Coimbatore',
    projectType: 'Residential',
    approxAreaSqFt: 2400,
    selectedPackage: (initialPackage as any) || 'Premium',
    budgetRange: '₹50 Lakhs - ₹75 Lakhs',
    message: initialService ? `Enquiry for ${initialService}` : ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          location: 'Coimbatore',
          projectType: 'Residential',
          approxAreaSqFt: 2400,
          selectedPackage: 'Premium',
          budgetRange: '₹50 Lakhs - ₹75 Lakhs',
          message: ''
        });
      }
    } catch (err) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#07090E] relative overflow-hidden">
      
      {/* GLOW DECORATIONS */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#06243A]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#06243A] text-[#D9A441] border border-[#D9A441]/30 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET&apos;S BUILD TOGETHER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-slate-100">
            Start Building <span className="gold-gradient-text">Your Dream</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Get a free 3D architectural consultation, soil analysis estimate, and transparent itemized quote from our structural engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CONTACT INFO CARD */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel-gold rounded-3xl p-8 border border-[#D9A441]/30 space-y-6 shadow-2xl">
              <div>
                <span className="text-xs font-mono font-bold text-[#D9A441] uppercase tracking-widest block">
                  MANJULA CONSTRUCTION HEADQUARTERS
                </span>
                <h3 className="text-2xl font-bold font-serif text-slate-100 mt-1">Get in Touch</h3>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <MapPin className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-200 block">Registered Office:</span>
                    <span className="text-slate-300 leading-relaxed">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <Phone className="w-5 h-5 text-[#D9A441] shrink-0" />
                  <div>
                    <span className="font-bold text-slate-200 block">Direct Lines:</span>
                    <span className="text-slate-300 font-mono">{COMPANY_INFO.phone} / {COMPANY_INFO.altPhone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <Mail className="w-5 h-5 text-[#D9A441] shrink-0" />
                  <div>
                    <span className="font-bold text-slate-200 block">Official Email:</span>
                    <span className="text-slate-300 font-mono">{COMPANY_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TRUST BADGE CARD */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-800 flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-[#D9A441] shrink-0" />
              <div className="text-xs">
                <h4 className="font-bold text-slate-200">Zero Price Escalation Guarantee</h4>
                <p className="text-slate-400 mt-0.5">Every contract includes fixed material BOQ specifications with zero hidden charges.</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONSULTATION FORM */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-slate-800 shadow-2xl">
            {success ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-slate-100">Consultation Request Received!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out to Manjula Construction. Er. Manjunathan&apos;s team will call you within 2 business hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#D9A441] text-black font-bold text-xs uppercase"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Senthil Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 95669 93556"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      Site Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Race Course, Coimbatore"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                    >
                      <option value="Residential">Residential Home</option>
                      <option value="Villa">Luxury Villa</option>
                      <option value="Commercial">Commercial Building</option>
                      <option value="Turnkey">Full Turnkey Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      Target Area (Sq.Ft)
                    </label>
                    <input
                      type="number"
                      step={100}
                      value={formData.approxAreaSqFt}
                      onChange={(e) => setFormData({ ...formData, approxAreaSqFt: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                      Preferred Plan
                    </label>
                    <select
                      value={formData.selectedPackage}
                      onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value as any })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                    >
                      <option value="Standard">Standard (₹2,299/sq.ft)</option>
                      <option value="Premium">Premium (₹2,399/sq.ft)</option>
                      <option value="Luxury">Luxury (₹2,499/sq.ft)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                    Project Details / Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your plot size, preferred architectural style, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-[#D9A441]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D9A441] via-[#B8862C] to-[#D9A441] text-black font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#D9A441]/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting Request...' : 'Submit Consultation Request'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
