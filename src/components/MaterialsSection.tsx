'use client';

import React, { useState } from 'react';
import { INITIAL_BRANDS, MaterialBrand } from '@/lib/data-store';
import { Sparkles, ShieldCheck, CheckCircle2, ArrowRight, X, Layers, Award } from 'lucide-react';

export default function MaterialsSection() {
  const [selectedBrand, setSelectedBrand] = useState<MaterialBrand | null>(null);

  return (
    <section id="materials" className="py-24 bg-[#07090E] relative overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#06243A]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#06243A] text-[#D9A441] border border-[#D9A441]/30 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNCOMPROMISED RAW MATERIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-slate-100">
            Materials &amp; <span className="gold-gradient-text">Partner Brands</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We partner exclusively with India&apos;s leading manufacturers. No duplicate brands, no sub-standard grades—100% certified quality.
          </p>
        </div>

        {/* BRAND CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {INITIAL_BRANDS.map((brand) => (
            <div
              key={brand.id}
              onClick={() => setSelectedBrand(brand)}
              className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-[#D9A441]/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-[#D9A441]/10 hover:-translate-y-1.5"
            >
              <div>
                {/* BRAND LOGO TEXT BADGE */}
                <div className="flex items-center justify-between mb-6">
                  <div className="px-4 py-2 rounded-2xl bg-[#06243A] border border-[#D9A441]/30 font-serif font-black tracking-widest text-[#D9A441] text-base group-hover:bg-[#D9A441] group-hover:text-black transition-colors">
                    {brand.logoText}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                    Verified Partner
                  </span>
                </div>

                <h3 className="text-xl font-bold font-serif text-slate-100 group-hover:text-[#D9A441] transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-[#D9A441] font-mono font-semibold mt-1">
                  {brand.category}
                </p>

                <p className="text-xs text-slate-300 line-clamp-3 mt-3 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-mono text-amber-200 text-[11px] font-semibold">{brand.grade}</span>
                <span className="text-[#D9A441] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Specs <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* QUALITY & SAFETY STATS CARD */}
        <div className="glass-panel-gold rounded-3xl p-8 border border-[#D9A441]/30 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-[#D9A441] uppercase tracking-widest block mb-1">
              STRUCTURAL INTEGRITY &amp; SAFETY COMMITMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-100">
              Quality &amp; Safety Standards
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <h4 className="text-4xl font-extrabold font-serif text-[#D9A441]">100%</h4>
              <p className="text-xs font-bold text-slate-200 mt-2">STRUCTURAL DURABILITY</p>
              <p className="text-[11px] text-slate-400 mt-1">Seismic Fe-550D rebar &amp; M25 mix</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <h4 className="text-4xl font-extrabold font-serif text-amber-300">10-STAGE</h4>
              <p className="text-xs font-bold text-slate-200 mt-2">QUALITY AUDITS</p>
              <p className="text-[11px] text-slate-400 mt-1">Inspection at every milestone</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <h4 className="text-4xl font-extrabold font-serif text-[#D9A441]">ZERO</h4>
              <p className="text-xs font-bold text-slate-200 mt-2">ACCIDENT PROTOCOL</p>
              <p className="text-[11px] text-slate-400 mt-1">Strict site safety harness standards</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <h4 className="text-4xl font-extrabold font-serif text-amber-300">50-YEAR</h4>
              <p className="text-xs font-bold text-slate-200 mt-2">LIFESPAN GUARANTEE</p>
              <p className="text-[11px] text-slate-400 mt-1">Anti-termite &amp; dampness protection</p>
            </div>
          </div>
        </div>

        {/* BRAND DETAIL MODAL */}
        {selectedBrand && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="glass-panel-gold rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#D9A441]/40 relative shadow-2xl space-y-6">
              <button
                onClick={() => setSelectedBrand(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-900/80 text-slate-400 hover:text-white flex items-center justify-center border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <div className="px-4 py-2 rounded-xl bg-[#06243A] text-[#D9A441] font-serif font-extrabold text-xl border border-[#D9A441]/30">
                  {selectedBrand.logoText}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif text-slate-100">{selectedBrand.name}</h3>
                  <p className="text-xs text-[#D9A441] font-mono font-semibold">{selectedBrand.category}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-mono">GRADE SPECIFICATION:</span>
                  <span className="font-bold text-amber-300">{selectedBrand.grade}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-mono">BRAND TAGLINE:</span>
                  <span className="font-bold text-slate-200">&ldquo;{selectedBrand.tagline}&rdquo;</span>
                </div>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed">
                {selectedBrand.description}
              </p>

              <div className="pt-4 border-t border-[#D9A441]/20 flex justify-end">
                <button
                  onClick={() => setSelectedBrand(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#D9A441] text-black font-bold text-xs uppercase"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
