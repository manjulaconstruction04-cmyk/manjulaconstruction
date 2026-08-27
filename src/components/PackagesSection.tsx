'use client';

import React, { useState } from 'react';
import { INITIAL_PACKAGES, PackagePlan } from '@/lib/data-store';
import { Calculator, CheckCircle2, Star, ArrowRight } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export default function PackagesSection({ onSelectPackage }: PackagesProps) {
  const [selectedPkg, setSelectedPkg] = useState<PackagePlan>(INITIAL_PACKAGES[1]);
  const [areaSqFt, setAreaSqFt] = useState<number>(2400);

  return (
    <section id="packages" className="py-24 bg-white text-[#11161d] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CONSTRUCTZILLA SIGNATURE HEADER */}
        <div className="cz-title-container text-center">
          <span className="text-xs font-mono font-bold text-[#f5b120] uppercase tracking-widest block mb-1">
            TRANSPARENT BOQ CONTRACTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif uppercase tracking-tight text-[#11161d]">
            PACKAGE PRICING &amp; ESTIMATOR
          </h2>
          <div className="cz-heading-underline" />
        </div>

        {/* 3 PRICING CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {INITIAL_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPkg(pkg)}
                className={`cz-card rounded-xl p-8 flex flex-col justify-between relative cursor-pointer ${
                  isPopular
                    ? 'border-4 border-[#f5b120] shadow-2xl bg-white transform lg:-translate-y-3'
                    : 'border border-gray-200 bg-gray-50'
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f5b120] text-[#11161d] font-black text-[10px] uppercase font-mono px-4 py-1.5 rounded shadow flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#11161d]" />
                    <span>MOST POPULAR CHOICE</span>
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-4">
                    <h3 className="text-2xl font-black font-serif uppercase text-[#11161d]">{pkg.name} PLAN</h3>
                    <span className="text-xs font-mono font-extrabold px-2.5 py-1 bg-[#11161d] text-[#f5b120] rounded">
                      FIXED BOQ
                    </span>
                  </div>

                  <div className="mb-4 text-center bg-[#11161d] text-white p-4 rounded border-b-4 border-[#f5b120]">
                    <span className="text-4xl font-black font-serif text-[#f5b120]">
                      ₹{pkg.pricePerSqFt.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-mono text-white block mt-1">/ SQ.FT BUILT-UP AREA</span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6 font-mono">
                    {pkg.tagline}
                  </p>

                  {/* KEY INCLUSION HIGHLIGHTS */}
                  <div className="space-y-3 pt-4 border-t border-gray-200 text-xs text-gray-700">
                    <h4 className="text-[11px] font-black text-[#11161d] uppercase tracking-wider font-mono">
                      SPECIFICATION HIGHLIGHTS:
                    </h4>
                    {pkg.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#f5b120] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPackage(pkg.name);
                    }}
                    className={`w-full cz-btn-skew py-3.5 text-xs font-extrabold ${
                      isPopular ? 'cz-btn-yellow' : 'cz-btn-dark'
                    }`}
                  >
                    <span>CHOOSE {pkg.name.toUpperCase()} PLAN</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* DETAILED MATERIAL SPECIFICATION COMPARISON MATRIX */}
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200 mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black font-serif uppercase text-[#11161d]">MATERIAL SPECIFICATIONS MATRIX</h3>
              <p className="text-xs text-gray-500 mt-1 font-mono">Side-by-side brand &amp; grade breakdown across all three packages.</p>
            </div>
            <div className="hidden sm:block px-3 py-1 bg-[#11161d] text-[#f5b120] text-xs font-mono font-bold rounded">
              100% BRAND GUARANTEED
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-[#11161d] text-[#11161d] font-mono text-[11px] font-extrabold uppercase bg-gray-200">
                  <th className="py-3.5 px-4">Material Category</th>
                  <th className="py-3.5 px-4">Standard (₹2,299/sq.ft)</th>
                  <th className="py-3.5 px-4 text-[#11161d] bg-[#f5b120]">Premium (₹2,399/sq.ft)</th>
                  <th className="py-3.5 px-4">Luxury (₹2,499/sq.ft)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700 bg-white">
                <tr>
                  <td className="py-3 px-4 font-bold text-[#11161d]">Cement Grade</td>
                  <td className="py-3 px-4">{INITIAL_PACKAGES[0].cement}</td>
                  <td className="py-3 px-4 bg-amber-50 font-bold">{INITIAL_PACKAGES[1].cement}</td>
                  <td className="py-3 px-4 font-bold text-[#11161d]">{INITIAL_PACKAGES[2].cement}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#11161d]">Steel Rebar TMT</td>
                  <td className="py-3 px-4">{INITIAL_PACKAGES[0].steel}</td>
                  <td className="py-3 px-4 bg-amber-50 font-bold">{INITIAL_PACKAGES[1].steel}</td>
                  <td className="py-3 px-4 font-bold text-[#11161d]">{INITIAL_PACKAGES[2].steel}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#11161d]">Plumbing &amp; Piping</td>
                  <td className="py-3 px-4">{INITIAL_PACKAGES[0].plumbing}</td>
                  <td className="py-3 px-4 bg-amber-50 font-bold">{INITIAL_PACKAGES[1].plumbing}</td>
                  <td className="py-3 px-4 font-bold text-[#11161d]">{INITIAL_PACKAGES[2].plumbing}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#11161d]">Sanitaryware &amp; Fittings</td>
                  <td className="py-3 px-4">{INITIAL_PACKAGES[0].sanitary}</td>
                  <td className="py-3 px-4 bg-amber-50 font-bold">{INITIAL_PACKAGES[1].sanitary}</td>
                  <td className="py-3 px-4 font-bold text-[#11161d]">{INITIAL_PACKAGES[2].sanitary}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#11161d]">Main &amp; Interior Doors</td>
                  <td className="py-3 px-4">{INITIAL_PACKAGES[0].doors}</td>
                  <td className="py-3 px-4 bg-amber-50 font-bold">{INITIAL_PACKAGES[1].doors}</td>
                  <td className="py-3 px-4 font-bold text-[#11161d]">{INITIAL_PACKAGES[2].doors}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#11161d]">Flooring Tiles / Slabs</td>
                  <td className="py-3 px-4">{INITIAL_PACKAGES[0].flooring}</td>
                  <td className="py-3 px-4 bg-amber-50 font-bold">{INITIAL_PACKAGES[1].flooring}</td>
                  <td className="py-3 px-4 font-bold text-[#11161d]">{INITIAL_PACKAGES[2].flooring}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#11161d]">Kitchen Platform &amp; Tiles</td>
                  <td className="py-3 px-4">{INITIAL_PACKAGES[0].kitchen}</td>
                  <td className="py-3 px-4 bg-amber-50 font-bold">{INITIAL_PACKAGES[1].kitchen}</td>
                  <td className="py-3 px-4 font-bold text-[#11161d]">{INITIAL_PACKAGES[2].kitchen}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* INTERACTIVE BUILT-UP AREA COST ESTIMATOR CALCULATOR */}
        <div className="bg-[#11161d] text-white p-8 sm:p-12 rounded-xl border-4 border-[#f5b120] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#f5b120] text-[#11161d] text-xs font-mono font-extrabold uppercase">
                <Calculator className="w-4 h-4 text-[#11161d]" />
                <span>INSTANT BUDGET ESTIMATOR</span>
              </div>

              <h3 className="text-3xl font-black font-serif uppercase tracking-wide text-white">
                CALCULATE YOUR <span className="text-[#f5b120]">CONSTRUCTION BUDGET</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Adjust target built-up area to calculate instant turn-key investment estimates.
              </p>

              {/* AREA SLIDER & INPUT */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-bold">TARGET BUILT-UP AREA:</span>
                  <span className="text-[#f5b120] font-bold text-xl">{areaSqFt.toLocaleString('en-IN')} SQ.FT</span>
                </div>

                <input
                  type="range"
                  min={800}
                  max={10000}
                  step={100}
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded appearance-none cursor-pointer accent-[#f5b120]"
                />

                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>800 SQ.FT</span>
                  <span>5,000 SQ.FT</span>
                  <span>10,000 SQ.FT</span>
                </div>
              </div>
            </div>

            {/* ESTIMATED OUTPUT DISPLAY CARDS */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {INITIAL_PACKAGES.map((pkg) => {
                const totalCost = areaSqFt * pkg.pricePerSqFt;
                return (
                  <div
                    key={pkg.id}
                    className="p-5 rounded-lg bg-[#1a1f26] border border-slate-800 text-center space-y-2 flex flex-col justify-between"
                  >
                    <span className="text-xs font-mono font-extrabold text-[#f5b120] uppercase">{pkg.name}</span>
                    <div>
                      <h4 className="text-2xl font-black font-serif text-white">
                        ₹{(totalCost / 100000).toFixed(2)} <span className="text-xs font-mono text-[#f5b120]">Lacs</span>
                      </h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">₹{totalCost.toLocaleString('en-IN')}</p>
                    </div>
                    <button
                      onClick={() => onSelectPackage(pkg.name)}
                      className="w-full cz-btn-skew cz-btn-yellow py-2 text-[11px] font-extrabold mt-2"
                    >
                      <span>GET BOQ</span>
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

