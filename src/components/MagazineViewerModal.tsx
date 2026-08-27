'use client';

import React, { useState } from 'react';
import {
  BookOpen, X, ChevronLeft, ChevronRight, Download, Printer, QrCode, Sparkles, Building2, Phone, Mail, MapPin, Award, CheckCircle2, ShieldCheck, Globe, Sliders, Layers, PenTool, CheckSquare, Star, ArrowRight
} from 'lucide-react';

interface MagazineProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MagazineViewerModal({ isOpen, onClose }: MagazineProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 20;

  if (!isOpen) return null;

  const nextPage = () => setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(1, prev - 1));

  const handleDownload = async () => {
    try {
      await fetch('/api/magazine/download', { method: 'POST' });
    } catch {}
    alert('Preparing High-Resolution 300 DPI Corporate Profile PDF (20 Pages)... Download starting!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="glass-panel-gold rounded-3xl max-w-5xl w-full h-[94vh] flex flex-col justify-between border border-[#D9A441]/40 relative shadow-2xl overflow-hidden">
        
        {/* TOP BAR */}
        <div className="p-4 sm:p-6 bg-[#07090E]/90 border-b border-[#D9A441]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D9A441] to-[#06243A] p-0.5 shadow-lg">
              <div className="w-full h-full bg-[#07090E] rounded-[10px] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#D9A441]" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold font-serif text-slate-100 uppercase tracking-wider">
                MANJULA CONSTRUCTION MAGAZINE
              </h3>
              <p className="text-[11px] text-[#D9A441] font-mono">
                Official Company Profile • 20 Pages Edition
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-xl bg-[#06243A] text-amber-300 border border-[#D9A441]/30 hover:bg-[#D9A441] hover:text-black transition-all text-xs font-bold flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>

            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 hover:text-white"
              title="Print Magazine"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MAIN MAGAZINE SLIDE CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-gradient-to-b from-[#0A0F1A] via-[#07090E] to-[#06243A]/30">
          
          {/* SLIDE 1: COVER */}
          {currentPage === 1 && (
            <div className="max-w-2xl mx-auto text-center space-y-8 py-10 animate-fadeIn">
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-[#D9A441] via-[#B8862C] to-[#06243A] p-1 shadow-2xl shadow-[#D9A441]/30">
                <div className="w-full h-full bg-[#07090E] rounded-[22px] flex items-center justify-center">
                  <Building2 className="w-12 h-12 text-[#D9A441]" />
                </div>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#D9A441] tracking-widest uppercase block mb-2">
                  EST. 2005 • 20+ YEARS OF EXCELLENCE
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-100 tracking-tight leading-tight">
                  MANJULA CONSTRUCTION
                </h1>
                <p className="text-amber-300 font-serif italic text-lg mt-2">
                  From Foundation to Finish, We Build Excellence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="p-5 rounded-2xl glass-panel-gold border border-[#D9A441]/40 text-center">
                  <span className="text-3xl font-extrabold font-serif text-[#D9A441]">20+</span>
                  <p className="text-xs text-slate-300 font-mono mt-1 uppercase">Years of Experience</p>
                </div>
                <div className="p-5 rounded-2xl glass-panel-gold border border-[#D9A441]/40 text-center">
                  <span className="text-3xl font-extrabold font-serif text-[#D9A441]">50+</span>
                  <p className="text-xs text-slate-300 font-mono mt-1 uppercase">Completed Projects</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400">
                COMPANY PROFILE — 2026
              </div>
            </div>
          )}

          {/* SLIDE 2: TABLE OF CONTENTS */}
          {currentPage === 2 && (
            <div className="max-w-3xl mx-auto space-y-6 py-4 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4 text-center">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 02</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">Table of Contents</h2>
                <p className="text-xs text-slate-400 mt-1">A complete overview of our company, process, services, and portfolio.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {[
                  { pg: "01", num: 1, title: "Cover Page" },
                  { pg: "02", num: 2, title: "Table of Contents" },
                  { pg: "03", num: 3, title: "Founder's Message" },
                  { pg: "04", num: 4, title: "About the Company" },
                  { pg: "05", num: 5, title: "Company Highlights" },
                  { pg: "06", num: 6, title: "Why Choose Us?" },
                  { pg: "07", num: 7, title: "Construction Workflow" },
                  { pg: "08", num: 8, title: "Design and Engineering" },
                  { pg: "09", num: 9, title: "Construction Services" },
                  { pg: "10", num: 10, title: "Package Comparison" },
                  { pg: "11", num: 11, title: "Standard Plan" },
                  { pg: "12", num: 12, title: "Premium Plan" },
                  { pg: "13", num: 13, title: "Luxury Plan" },
                  { pg: "14", num: 14, title: "Residential Projects" },
                  { pg: "15", num: 15, title: "Commercial Projects" },
                  { pg: "16", num: 16, title: "Materials and Brands" },
                  { pg: "17", num: 17, title: "Quality and Safety" },
                  { pg: "18", num: 18, title: "Customer Testimonials" },
                  { pg: "19", num: 19, title: "Future Vision" },
                  { pg: "20", num: 20, title: "Contact Information" }
                ].map((item) => (
                  <div
                    key={item.pg}
                    onClick={() => setCurrentPage(item.num)}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-[#D9A441] transition-all cursor-pointer group"
                  >
                    <span className="font-serif font-semibold text-slate-200 group-hover:text-[#D9A441]">
                      {item.pg}. {item.title}
                    </span>
                    <span className="font-mono text-[#D9A441] text-[11px] font-bold">PG {item.pg} ↗</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 3: FOUNDER'S MESSAGE */}
          {currentPage === 3 && (
            <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 03</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">A Message From The Founder</h2>
              </div>

              <div className="p-6 rounded-3xl glass-panel-gold border border-[#D9A441]/40 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D9A441] to-[#06243A] p-0.5 shadow-lg">
                    <div className="w-full h-full bg-[#07090E] rounded-[14px] flex items-center justify-center font-serif font-bold text-2xl text-[#D9A441]">
                      KM
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-slate-100">Er. K. Manjunathan</h3>
                    <p className="text-xs text-[#D9A441] font-mono font-semibold">Founder &amp; Chief Engineer</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <p className="text-xs text-slate-200 leading-relaxed italic">
                    &ldquo;Welcome to Manjula Construction. For more than 20 years, our company has been committed to delivering high-quality construction solutions built on trust, integrity, and professional excellence. Every completed project represents our dedication to superior craftsmanship and customer satisfaction. Our mission is to create buildings that stand as symbols of quality, innovation, and long-term value. We thank our clients for placing their trust in us and allowing us to be part of their journey.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 4: ABOUT THE COMPANY */}
          {currentPage === 4 && (
            <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 04</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">About the Company</h2>
                <p className="text-xs text-amber-300 font-mono">Built on Two Decades of Trust</p>
              </div>

              <div className="p-6 rounded-3xl glass-panel border border-slate-800 space-y-5">
                <div>
                  <h4 className="text-sm font-bold text-[#D9A441] uppercase font-mono mb-2">Who We Are</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Manjula Construction is a professional construction company specializing in residential and commercial projects. With over two decades of industry experience and more than 50 completed projects, we provide complete construction solutions — from planning and design to execution and final handover.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-bold text-slate-200 uppercase font-mono mb-3">Our Core Services</h4>
                  <div className="grid grid-cols-2 gap-2.5 text-xs font-medium text-slate-300">
                    {[
                      "Residential Construction",
                      "Commercial Construction",
                      "Architectural Planning",
                      "Structural Engineering",
                      "Flooring & Finishing",
                      "Electrical Installation",
                      "Turnkey Construction"
                    ].map((s) => (
                      <div key={s} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A441]" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 5: COMPANY HIGHLIGHTS */}
          {currentPage === 5 && (
            <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4 text-center">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 05</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">Company Highlights</h2>
                <p className="text-xs text-slate-400 mt-1">Two Decades of Measurable Impact</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl glass-panel-gold border border-[#D9A441]/40 text-center space-y-2">
                  <span className="text-4xl font-extrabold font-serif text-[#D9A441]">20+</span>
                  <p className="text-xs font-mono text-slate-200 font-bold uppercase">Years of Experience</p>
                </div>

                <div className="p-6 rounded-3xl glass-panel-gold border border-[#D9A441]/40 text-center space-y-2">
                  <span className="text-4xl font-extrabold font-serif text-[#D9A441]">50+</span>
                  <p className="text-xs font-mono text-slate-200 font-bold uppercase">Completed Projects</p>
                </div>

                <div className="p-6 rounded-3xl glass-panel-gold border border-[#D9A441]/40 text-center space-y-2">
                  <span className="text-4xl font-extrabold font-serif text-[#D9A441]">100%</span>
                  <p className="text-xs font-mono text-slate-200 font-bold uppercase">Commitment to Quality</p>
                </div>

                <div className="p-6 rounded-3xl glass-panel-gold border border-[#D9A441]/40 text-center space-y-2">
                  <span className="text-4xl font-extrabold font-serif text-[#D9A441]">360°</span>
                  <p className="text-xs font-mono text-slate-200 font-bold uppercase">End-to-End Solutions</p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 6: WHY CHOOSE US? */}
          {currentPage === 6 && (
            <div className="max-w-3xl mx-auto space-y-6 py-4 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4 text-center">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 06</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">Why Choose Us?</h2>
                <p className="text-xs text-slate-400 mt-1">What Sets Us Apart</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                {[
                  { title: "Experience", desc: "20+ years of proven expertise across residential and commercial builds." },
                  { title: "Professional Team", desc: "Experienced architects, engineers, and skilled technicians." },
                  { title: "Quality Materials", desc: "Premium brands and carefully selected materials, always." },
                  { title: "Transparent Pricing", desc: "Clear, upfront package options with no hidden costs." },
                  { title: "Timely Delivery", desc: "Projects completed on schedule, every time." },
                  { title: "Customer Satisfaction", desc: "Long-term relationships built on trust and results." }
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                    <h4 className="font-bold font-serif text-[#D9A441] text-sm">{item.title}</h4>
                    <p className="text-slate-300 leading-relaxed text-[11px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 7: WORKFLOW */}
          {currentPage === 7 && (
            <div className="max-w-3xl mx-auto space-y-6 py-4 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4 text-center">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 07</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">Construction Workflow</h2>
                <p className="text-xs text-slate-400 mt-1">Our 10-Step Process</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center text-xs">
                {[
                  "01. Boundary Marking",
                  "02. Planning",
                  "03. Designing",
                  "04. Structural Drawing",
                  "05. Construction",
                  "06. Flooring & Tiling",
                  "07. Painting",
                  "08. Electrical Work",
                  "09. Other Inclusions",
                  "10. Project Handover"
                ].map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <span className="text-amber-300 font-mono font-bold block">{step.split('.')[0]}</span>
                    <span className="text-[#D9A441] font-semibold block">{step.split('.')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 8: DESIGN AND ENGINEERING */}
          {currentPage === 8 && (
            <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 08</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">Design and Engineering</h2>
                <p className="text-xs text-amber-300 font-mono">Precision from Concept to Blueprint</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-3">
                  <h4 className="font-serif font-bold text-[#D9A441] text-sm uppercase">Architectural Design</h4>
                  <ul className="space-y-1.5 text-slate-300">
                    {["Floor plans", "Architectural layouts", "Elevation drawings", "Working drawings", "3D visualization"].map(i => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]"></span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-3">
                  <h4 className="font-serif font-bold text-[#D9A441] text-sm uppercase">Structural Engineering</h4>
                  <ul className="space-y-1.5 text-slate-300">
                    {["Center line drawings", "Footing drawings", "Column drawings", "Beam drawings", "Roof slab drawings", "Plumbing & electrical drawings"].map(i => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]"></span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 9: CONSTRUCTION SERVICES */}
          {currentPage === 9 && (
            <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 09</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">Construction Services</h2>
                <p className="text-xs text-slate-400 mt-1">Built to Last, Start to Finish</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <h4 className="font-serif font-bold text-[#D9A441]">Foundation Work</h4>
                  <p className="text-slate-300 text-[11px]">Excavation • Footings • RCC work</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <h4 className="font-serif font-bold text-[#D9A441]">Structural Work</h4>
                  <p className="text-slate-300 text-[11px]">Columns • Beams • Roof slabs</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <h4 className="font-serif font-bold text-[#D9A441]">Masonry Work</h4>
                  <p className="text-slate-300 text-[11px]">Brickwork • Wall construction</p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 10: PACKAGE COMPARISON */}
          {currentPage === 10 && (
            <div className="max-w-3xl mx-auto space-y-6 py-4 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4 text-center">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 10</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">Package Comparison</h2>
                <p className="text-xs text-slate-400 mt-1">Choose the Plan That Fits Your Vision</p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-2">
                  <h4 className="font-serif font-bold text-slate-200">Standard Plan</h4>
                  <p className="text-[11px] text-slate-400">Essential quality construction</p>
                  <p className="text-2xl font-extrabold text-[#D9A441] font-serif">₹2,299 <span className="text-xs font-mono font-normal">/Sq.Ft</span></p>
                </div>

                <div className="p-5 rounded-2xl glass-panel-gold border border-[#D9A441]/60 space-y-2 relative">
                  <span className="px-2 py-0.5 rounded-full bg-[#D9A441] text-black text-[9px] font-bold font-mono uppercase absolute -top-2 left-1/2 -translate-x-1/2">
                    MOST POPULAR
                  </span>
                  <h4 className="font-serif font-bold text-amber-300">Premium Plan</h4>
                  <p className="text-[11px] text-slate-300">Upgraded finishes &amp; fittings</p>
                  <p className="text-2xl font-extrabold text-[#D9A441] font-serif">₹2,399 <span className="text-xs font-mono font-normal">/Sq.Ft</span></p>
                </div>

                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-2">
                  <h4 className="font-serif font-bold text-slate-200">Luxury Plan</h4>
                  <p className="text-[11px] text-slate-400">Top-tier materials throughout</p>
                  <p className="text-2xl font-extrabold text-[#D9A441] font-serif">₹2,499 <span className="text-xs font-mono font-normal">/Sq.Ft</span></p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 11: STANDARD PLAN */}
          {currentPage === 11 && (
            <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4 flex justify-between items-center">
                <div>
                  <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 11</span>
                  <h2 className="text-3xl font-bold font-serif text-slate-100">Standard Plan</h2>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-[#D9A441] font-serif block">₹2,299</span>
                  <span className="text-[10px] font-mono text-slate-400">/ Sq.Ft</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-3">
                  <h4 className="font-bold text-emerald-400 uppercase font-mono">Included Features</h4>
                  <ul className="space-y-1.5 text-slate-200">
                    {["Architectural drawings", "Structural drawings", "Flooring", "Painting", "Electrical work", "Water tank", "Roof weathering"].map(i => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <h4 className="font-bold text-amber-300 uppercase font-mono">Not Included</h4>
                  <ul className="space-y-1.5 text-slate-400">
                    <li>• Compound wall &amp; gate — ₹425/Sq.Ft</li>
                    <li>• Sump &amp; septic tank — ₹24/Liter</li>
                    <li>• Lift installation</li>
                    <li>• Electricity connection fees</li>
                    <li>• Building plan approval</li>
                    <li>• Elevation special materials</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 12: PREMIUM PLAN */}
          {currentPage === 12 && (
            <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4 flex justify-between items-center">
                <div>
                  <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 12</span>
                  <h2 className="text-3xl font-bold font-serif text-slate-100">Premium Plan</h2>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-[#D9A441] font-serif block">₹2,399</span>
                  <span className="text-[10px] font-mono text-slate-400">/ Sq.Ft</span>
                </div>
              </div>

              <div className="p-6 rounded-3xl glass-panel-gold border border-[#D9A441]/40 space-y-4 text-xs">
                <h4 className="font-bold text-[#D9A441] uppercase font-mono">Upgraded Premium Specifications</h4>
                <div className="grid grid-cols-2 gap-3 text-slate-200">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">Malaysian teak wood main door</div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">Mahogany internal doors</div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">Waterproof WPC bathroom doors</div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">UPVC premium windows</div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">Premium weather-shield paints</div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">Finolex wiring &amp; Havells switches</div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">Premium vitrified tile flooring</div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">Granite kitchen countertops</div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 13: LUXURY PLAN */}
          {currentPage === 13 && (
            <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4 flex justify-between items-center">
                <div>
                  <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 13</span>
                  <h2 className="text-3xl font-bold font-serif text-slate-100">Luxury Plan</h2>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-[#D9A441] font-serif block">₹2,499</span>
                  <span className="text-[10px] font-mono text-slate-400">/ Sq.Ft</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-3">
                  <h4 className="font-bold text-[#D9A441] uppercase font-mono">Premium Materials</h4>
                  <ul className="space-y-2 text-slate-200">
                    <li>• UltraTech Cement</li>
                    <li>• Tata Steel (Fe-550D Grade)</li>
                    <li>• Supreme Pipes &amp; Plumbing</li>
                    <li>• Jaquar Sanitaryware &amp; Fittings</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-3">
                  <h4 className="font-bold text-[#D9A441] uppercase font-mono">Flooring &amp; Finish</h4>
                  <ul className="space-y-2 text-slate-200">
                    <li>• Kitchen wall tiles up to ₹180/Sq.Ft.</li>
                    <li>• Premium vitrified flooring</li>
                    <li>• Premium granite countertops</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 14: RESIDENTIAL PROJECTS */}
          {currentPage === 14 && (
            <div className="max-w-3xl mx-auto space-y-6 py-4 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4 text-center">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 14</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">Residential Projects</h2>
                <p className="text-xs text-slate-400 mt-1">Project Gallery</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold font-serif text-[#D9A441]">Villa Construction</h4>
                  <p className="text-slate-300 text-[11px]">Modern luxury residences.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold font-serif text-[#D9A441]">Independent Houses</h4>
                  <p className="text-slate-300 text-[11px]">Customized residential projects.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold font-serif text-[#D9A441]">Duplex Homes</h4>
                  <p className="text-slate-300 text-[11px]">Functional and elegant designs.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold font-serif text-[#D9A441]">Contemporary Homes</h4>
                  <p className="text-slate-300 text-[11px]">Modern architectural solutions.</p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 15: COMMERCIAL PROJECTS */}
          {currentPage === 15 && (
            <div className="max-w-3xl mx-auto space-y-6 py-4 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4 text-center">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 15</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">Commercial Projects</h2>
                <p className="text-xs text-slate-400 mt-1">Project Gallery</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold font-serif text-[#D9A441]">Office Buildings</h4>
                  <p className="text-slate-300 text-[11px]">Professional workspaces.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold font-serif text-[#D9A441]">Commercial Complexes</h4>
                  <p className="text-slate-300 text-[11px]">Large-scale developments.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold font-serif text-[#D9A441]">Retail Buildings</h4>
                  <p className="text-slate-300 text-[11px]">Modern commercial environments.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold font-serif text-[#D9A441]">Mixed-Use Projects</h4>
                  <p className="text-slate-300 text-[11px]">Integrated construction solutions.</p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 16: MATERIALS AND BRANDS */}
          {currentPage === 16 && (
            <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4 text-center">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 16</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">Materials and Brands</h2>
                <p className="text-xs text-slate-400 mt-1">Trusted Brands We Build With</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center text-xs">
                {["UltraTech Cement", "Tata Steel", "Jaquar", "Supreme", "Finolex", "Havells"].map((b) => (
                  <div key={b} className="p-4 rounded-2xl glass-panel border border-slate-800 font-bold text-slate-200">
                    {b}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 17: QUALITY AND SAFETY */}
          {currentPage === 17 && (
            <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 17</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">Quality and Safety</h2>
                <p className="text-xs text-amber-300 font-mono">Our Quality Standards</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                Every project is built on a foundation of rigorous checks and premium materials, so what we hand over is durable, safe, and built to last.
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs text-center">
                {["Premium materials", "Structural durability", "Quality inspections", "Safety procedures"].map((q) => (
                  <div key={q} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[#D9A441] font-semibold">
                    {q}
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl glass-panel-gold border border-[#D9A441]/30 text-xs space-y-2">
                <h4 className="font-bold text-[#D9A441] uppercase font-mono">Safety Commitment</h4>
                <p className="text-slate-200 leading-relaxed">
                  We maintain high construction standards throughout every phase of the project — from groundbreaking to final handover — protecting our workers, clients, and the communities we build in.
                </p>
              </div>
            </div>
          )}

          {/* SLIDE 18: CUSTOMER TESTIMONIALS */}
          {currentPage === 18 && (
            <div className="max-w-2xl mx-auto space-y-6 py-6 animate-fadeIn">
              <div className="border-b border-[#D9A441]/30 pb-4 text-center">
                <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 18</span>
                <h2 className="text-3xl font-bold font-serif text-slate-100">Customer Testimonials</h2>
                <p className="text-xs text-slate-400 mt-1">What Our Clients Say</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <p className="text-slate-200 italic">&ldquo;Professional service and excellent project management.&rdquo;</p>
                  <span className="text-[10px] text-[#D9A441] font-mono font-bold block uppercase">— RESIDENTIAL CLIENT</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <p className="text-slate-200 italic">&ldquo;Outstanding quality and timely completion.&rdquo;</p>
                  <span className="text-[10px] text-[#D9A441] font-mono font-bold block uppercase">— COMMERCIAL CLIENT</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <p className="text-slate-200 italic">&ldquo;A trusted construction partner for our family.&rdquo;</p>
                  <span className="text-[10px] text-[#D9A441] font-mono font-bold block uppercase">— VILLA OWNER</span>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 19: FUTURE VISION */}
          {currentPage === 19 && (
            <div className="max-w-2xl mx-auto space-y-6 py-8 animate-fadeIn text-center">
              <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 19</span>
              <h2 className="text-3xl font-bold font-serif text-slate-100">Future Vision</h2>
              <p className="text-xs text-amber-300 font-mono">Our Vision Forward</p>

              <div className="p-8 rounded-3xl glass-panel-gold border border-[#D9A441]/40 space-y-4 text-xs text-slate-200 leading-relaxed text-left">
                <p>
                  Our vision is to continue building modern, sustainable, and innovative projects that create long-term value for our clients. We are committed to expanding our expertise while maintaining the quality and trust that have defined Manjula Construction for more than 20 years.
                </p>
              </div>
            </div>
          )}

          {/* SLIDE 20: CONTACT INFORMATION & BACK COVER */}
          {currentPage === 20 && (
            <div className="max-w-2xl mx-auto text-center space-y-6 py-6 animate-fadeIn">
              <span className="text-xs font-mono text-[#D9A441] uppercase tracking-widest block">SLIDE 20 • BACK COVER</span>
              <h2 className="text-3xl font-bold font-serif text-slate-100">MANJULA CONSTRUCTION</h2>
              <p className="text-xs font-mono text-amber-300 font-bold">20+ YEARS OF EXCELLENCE • 50+ COMPLETED PROJECTS</p>

              <div className="p-6 rounded-3xl glass-panel-gold border border-[#D9A441]/40 space-y-4 text-xs text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-200 font-mono">
                    <Phone className="w-4 h-4 text-[#D9A441]" />
                    <span>95669 93556 • 63740 44464</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-200 font-mono">
                    <Mail className="w-4 h-4 text-[#D9A441]" />
                    <span>manjulaconstruction04@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-200 font-mono">
                    <MapPin className="w-4 h-4 text-[#D9A441]" />
                    <span>109, ST-5 Annamalai Garden, Devampalayam, Kovilpalayam, Coimbatore 641107</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-200 font-mono">
                    <Globe className="w-4 h-4 text-[#D9A441]" />
                    <span>@manjula_construction</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D9A441]/30 text-center italic text-amber-300 font-serif text-sm">
                  &ldquo;We don’t just construct buildings. We build trust, relationships, and lasting value.&rdquo;
                </div>
              </div>
            </div>
          )}

        </div>

        {/* BOTTOM PAGINATION CONTROLLER */}
        <div className="p-4 bg-[#07090E]/90 border-t border-[#D9A441]/20 flex items-center justify-between">
          <button
            disabled={currentPage === 1}
            onClick={prevPage}
            className="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 disabled:opacity-30 text-xs font-semibold hover:border-slate-700 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Slide</span>
          </button>

          <div className="flex items-center gap-1 text-xs font-mono">
            <span className="text-[#D9A441] font-bold">SLIDE {currentPage}</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">{totalPages}</span>
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={nextPage}
            className="px-4 py-2 rounded-xl bg-[#06243A] text-amber-300 border border-[#D9A441]/30 disabled:opacity-30 text-xs font-bold hover:bg-[#D9A441] hover:text-black transition-all flex items-center gap-1"
          >
            <span>Next Slide</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
