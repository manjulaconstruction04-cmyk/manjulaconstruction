'use client';

import React from 'react';
import { COMPANY_INFO } from '@/lib/data-store';
import { Award, ShieldCheck, HardHat, Compass, Building2, Wrench, CheckCircle2, FileCheck, Layers, Sparkles, PhoneCall } from 'lucide-react';

export default function AboutSection() {
  const featureServices = [
    {
      icon: Building2,
      title: "CONSTRUCTION",
      desc: "Turnkey luxury residential homes & commercial building execution."
    },
    {
      icon: Compass,
      title: "ARCHITECTURE",
      desc: "2D Floor plans, 3D BIM elevation, and municipal DTCP approvals."
    },
    {
      icon: HardHat,
      title: "CONSULTING",
      desc: "Geotechnical soil SBC testing, foundation survey & site management."
    },
    {
      icon: Wrench,
      title: "MECHANICAL",
      desc: "Heavy RCC steel rebar calculations and seismic frame design."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white text-[#11161d] relative overflow-hidden scroll-mt-44">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CONSTRUCTZILLA SIGNATURE SECTION HEADER */}
        <div className="cz-title-container text-center mb-12">
          <span className="text-xs font-mono font-bold text-[#f5b120] uppercase tracking-widest block mb-1">
            20+ YEARS OF STRUCTURAL EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif uppercase tracking-tight text-[#11161d]">
            ABOUT COMPANY
          </h2>
          <div className="cz-heading-underline" />
        </div>

        {/* MAIN ABOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* LEFT COLUMN - EXPERIENCE & COMPLETED PROJECTS CARDS */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-[#11161d] shadow-2xl bg-[#11161d] group">
              <img
                src="/about_site.jpg"
                alt="Manjula Construction Landmark Site Project"
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] via-[#11161d]/40 to-transparent" />
              
              {/* TOP BADGE: 20+ YEARS OF EXPERIENCE */}
              <div className="absolute top-4 left-4 right-4 z-10 bg-[#f5b120] text-[#11161d] p-4 sm:p-5 rounded-xl border-2 border-[#11161d] shadow-2xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest block text-[#11161d]/80">PROVEN TRACK RECORD</span>
                  <h4 className="text-lg sm:text-xl font-black font-serif uppercase tracking-tight">20+ Years of Experience</h4>
                  <p className="text-xs font-bold text-[#11161d]/90 mt-0.5">Structural &amp; Civil Engineering Mastery</p>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#11161d] text-[#f5b120] rounded-lg flex items-center justify-center font-black text-xl sm:text-2xl font-serif shrink-0 border border-[#f5b120]">
                  20+
                </div>
              </div>

              {/* BOTTOM BADGE: 50+ PROJECT COMPLETION */}
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-[#11161d]/95 text-white p-4 sm:p-5 rounded-xl border-2 border-[#f5b120] shadow-2xl flex items-center justify-between backdrop-blur-md">
                <div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest block text-[#f5b120]">LANDMARK DELIVERIES</span>
                  <h4 className="text-lg sm:text-xl font-black font-serif uppercase tracking-tight text-white">50+ Project Completion</h4>
                  <p className="text-xs font-bold text-slate-300 mt-0.5">Luxury Villas &amp; Commercial Hubs</p>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#f5b120] text-[#11161d] rounded-lg flex items-center justify-center font-black text-xl sm:text-2xl font-serif shrink-0">
                  50+
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - STORY & 2x2 FEATURE CARDS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-gray-100">
              <div className="p-2.5 bg-[#11161d] border-2 border-[#f5b120] rounded-xl shadow-lg shrink-0">
                <img
                  src="/logo.png"
                  alt="Manjula Construction Crest Logo"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-serif uppercase text-[#11161d] leading-snug">
                  WE ARE THE LEADING <span className="text-[#f5b120] bg-[#11161d] px-2 py-0.5 inline-block">CONSTRUCTION FIRM</span> IN SOUTH INDIA
                </h3>
                <p className="text-xs font-mono font-bold text-[#f5b120] uppercase tracking-widest mt-1">
                  BUILDING DREAMS • CREATING FUTURES
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {COMPANY_INFO.founder.story}
            </p>

            {/* 2x2 FEATURE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {featureServices.map((feat, index) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={index}
                    className="p-5 bg-gray-50 border border-gray-200 rounded hover:border-[#f5b120] transition-all flex items-start gap-4 group hover:bg-[#11161d] hover:text-white"
                  >
                    <div className="w-12 h-12 bg-[#f5b120] text-[#11161d] shrink-0 flex items-center justify-center rounded font-bold group-hover:bg-white group-hover:text-[#11161d] transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold uppercase font-serif tracking-wider text-[#11161d] group-hover:text-[#f5b120] transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* KEY WEBUILD HIGHLIGHT BULLETS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs font-bold text-[#11161d]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f5b120] shrink-0" />
                <span>Perfect Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f5b120] shrink-0" />
                <span>Professional Workers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f5b120] shrink-0" />
                <span>First Working Process</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f5b120] shrink-0" />
                <span>Quality Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f5b120] shrink-0" />
                <span>Vastu Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f5b120] shrink-0" />
                <span>On-Time Handover</span>
              </div>
            </div>

            {/* FOUNDER QUOTE BANNER */}
            <div className="p-4 bg-[#11161d] text-white rounded border-l-4 border-[#f5b120] italic text-xs leading-relaxed">
              &ldquo;{COMPANY_INFO.founder.quote}&rdquo;
            </div>

          </div>

        </div>

        {/* CONSTRUCTZILLA COUNTER STATS BANNER */}
        <div className="bg-[#11161d] text-white p-8 rounded-xl border-4 border-[#f5b120] shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 border-r border-slate-800 last:border-r-0">
            <h4 className="text-4xl sm:text-5xl font-black font-serif text-[#f5b120]">20+</h4>
            <p className="text-xs font-mono font-bold uppercase text-slate-300 mt-2">ACTIVE EXPERTS</p>
          </div>
          <div className="text-center p-4 border-r border-slate-800 last:border-r-0">
            <h4 className="text-4xl sm:text-5xl font-black font-serif text-[#f5b120]">150+</h4>
            <p className="text-xs font-mono font-bold uppercase text-slate-300 mt-2">HAPPY CLIENTS</p>
          </div>
          <div className="text-center p-4 border-r border-slate-800 last:border-r-0">
            <h4 className="text-4xl sm:text-5xl font-black font-serif text-[#f5b120]">50+</h4>
            <p className="text-xs font-mono font-bold uppercase text-slate-300 mt-2">PROJECTS DONE</p>
          </div>
          <div className="text-center p-4">
            <h4 className="text-4xl sm:text-5xl font-black font-serif text-[#f5b120]">100%</h4>
            <p className="text-xs font-mono font-bold uppercase text-slate-300 mt-2">QUALITY AUDITED</p>
          </div>
        </div>

      </div>
    </section>
  );
}
