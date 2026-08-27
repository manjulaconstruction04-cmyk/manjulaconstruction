'use client';

import React, { useState } from 'react';
import { WORKFLOW_STAGES, ConstructionStage } from '@/lib/data-store';
import { Layers, CheckCircle2, Clock, ChevronRight, HardHat, ArrowRight } from 'lucide-react';

export default function Process3DSection() {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const currentStage: ConstructionStage = WORKFLOW_STAGES[selectedStep];

  const getValidImageUrl = (url: string) => {
    if (!url || url.includes('step1.jpg')) {
      return '/about_site.jpg';
    }
    return url;
  };

  return (
    <section id="process" className="py-24 bg-[#0d1117] text-white relative overflow-hidden scroll-mt-32">
      
      {/* BACKGROUND GLOW DECORATIONS */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#f5b120]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER MATCHING SCREENSHOT */}
        <div className="text-left mb-12 border-b border-slate-800 pb-8">
          <span className="text-xs font-mono font-bold text-[#f5b120] uppercase tracking-widest block mb-2">
            07 &nbsp; CONSTRUCTION WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white uppercase">
            Our 10-Step Process
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-3 leading-relaxed">
            Click on any process stage below to view its specific architectural blueprints, stage deliverables, and quality inspection audits.
          </p>
        </div>

        {/* 10-STEP PROCESS GRID (2 ROWS OF 5 CARDS WITH DEDICATED IMAGES) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {WORKFLOW_STAGES.map((stg, index) => {
            const isActive = selectedStep === index;
            return (
              <button
                key={stg.stepNumber}
                onClick={() => setSelectedStep(index)}
                className={`relative rounded-xl overflow-hidden border-2 text-left transition-all duration-300 group flex flex-col justify-between h-[210px] ${
                  isActive
                    ? 'border-[#f5b120] bg-[#1a1f26] shadow-2xl scale-[1.03] ring-2 ring-[#f5b120]/40'
                    : 'border-slate-800 bg-[#11161d] hover:border-slate-700 hover:bg-[#1a1f26]'
                }`}
              >
                {/* STEP THUMBNAIL BACKGROUND IMAGE */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={getValidImageUrl(stg.image)}
                    alt={stg.title}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.includes('/about_site.jpg')) {
                        target.src = '/about_site.jpg';
                      }
                    }}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isActive ? 'scale-110 opacity-75' : 'opacity-60 group-hover:scale-105 group-hover:opacity-85'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] via-[#11161d]/50 to-[#11161d]/20" />
                </div>

                {/* CARD TOP HEADER: STEP NUMBER */}
                <div className="relative z-10 p-4 flex items-center justify-between w-full">
                  <span className={`text-2xl font-black font-serif font-mono tracking-tight ${
                    isActive ? 'text-[#f5b120]' : 'text-slate-400 group-hover:text-[#f5b120]'
                  }`}>
                    {stg.stepNumber}
                  </span>
                  {isActive && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f5b120] animate-pulse" />
                  )}
                </div>

                {/* CARD BOTTOM CONTENT: STEP TITLE */}
                <div className="relative z-10 p-4 pt-0 mt-auto">
                  <h4 className={`text-sm font-extrabold font-serif uppercase leading-tight ${
                    isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                  }`}>
                    {stg.title}
                  </h4>
                  <p className="text-[10px] font-mono text-[#f5b120] font-bold mt-1">
                    {stg.durationEstimate}
                  </p>
                </div>

                {/* ACTIVE CARD ACCENT LINE */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f5b120]" />
                )}
              </button>
            );
          })}
        </div>

        {/* ACTIVE STAGE DETAILS SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#11161d] p-6 sm:p-8 rounded-2xl border-2 border-[#f5b120]/40 shadow-2xl">
          
          {/* LEFT LARGE STAGE FEATURE IMAGE */}
          <div className="lg:col-span-7 h-[360px] sm:h-[440px] rounded-xl overflow-hidden relative border border-slate-700 bg-slate-900 group">
            <img
              src={getValidImageUrl(currentStage.image)}
              alt={currentStage.title}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (!target.src.includes('/about_site.jpg')) {
                  target.src = '/about_site.jpg';
                }
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] via-transparent to-transparent opacity-80" />

            <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded bg-[#11161d] text-[#f5b120] border border-[#f5b120] text-xs font-mono flex items-center gap-2">
              <HardHat className="w-4 h-4" />
              <span>STAGE {currentStage.stepNumber} QUALITY AUDIT</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#11161d]/90 p-4 rounded-lg border border-slate-800 backdrop-blur-md flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#f5b120] font-mono font-bold uppercase block">ESTIMATED TIMELINE</span>
                <p className="text-xs font-bold text-white">{currentStage.durationEstimate}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 font-mono font-bold uppercase block">PROGRESS TRACK</span>
                <p className="text-xs font-bold text-[#f5b120] font-mono">Stage {currentStage.stepNumber} / 10</p>
              </div>
            </div>
          </div>

          {/* RIGHT DETAILED STAGE AUDIT CARD */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded bg-[#f5b120] text-[#11161d] text-xs font-mono font-black uppercase">
                  STEP {currentStage.stepNumber} OF 10
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {currentStage.durationEstimate}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-serif text-white mb-1 uppercase tracking-tight">
                {currentStage.title}
              </h3>
              <p className="text-xs font-mono font-bold text-[#f5b120] mb-4">
                {currentStage.subtitle}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {currentStage.description}
              </p>

              {/* KEY DELIVERABLES */}
              <div className="space-y-3">
                <h4 className="text-xs font-black text-white uppercase tracking-wider font-mono">
                  KEY DELIVERABLES &amp; AUDIT CHECKLIST:
                </h4>
                {currentStage.highlights.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#1a1f26] border border-slate-800 flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#f5b120] shrink-0" />
                    <span className="text-xs text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PREVIOUS / NEXT CONTROLS */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                disabled={selectedStep === 0}
                onClick={() => setSelectedStep((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-lg bg-[#1a1f26] text-slate-300 border border-slate-700 disabled:opacity-40 text-xs font-bold hover:border-[#f5b120] transition-colors"
              >
                Previous Step
              </button>

              <span className="text-xs text-slate-400 font-mono font-bold">
                {selectedStep + 1} / 10
              </span>

              <button
                disabled={selectedStep === WORKFLOW_STAGES.length - 1}
                onClick={() => setSelectedStep((prev) => Math.min(WORKFLOW_STAGES.length - 1, prev + 1))}
                className="px-4 py-2 rounded-lg bg-[#f5b120] text-[#11161d] disabled:opacity-40 text-xs font-black hover:bg-white transition-all flex items-center gap-1"
              >
                <span>Next Step</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
