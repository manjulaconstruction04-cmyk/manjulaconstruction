'use client';

import React, { useState } from 'react';
import { INITIAL_SERVICES, Service } from '@/lib/data-store';
import { Home, Building2, Compass, ShieldCheck, Layers, Zap, KeyRound, Wrench, Palette, Paintbrush, ArrowRight, CheckCircle2, X } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Compass,
  ShieldCheck,
  Layers,
  Zap,
  KeyRound,
  Wrench,
  Palette,
  Paintbrush
};

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesProps) {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-[#f8f9fa] text-[#11161d] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CONSTRUCTZILLA SIGNATURE TITLE */}
        <div className="cz-title-container text-center">
          <span className="text-xs font-mono font-bold text-[#f5b120] uppercase tracking-widest block mb-1">
            WHAT WE PROVIDE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif uppercase tracking-tight text-[#11161d]">
            OUR SERVICES
          </h2>
          <div className="cz-heading-underline" />
        </div>

        {/* 3-COLUMN SERVICE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIAL_SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Home;
            return (
              <div
                key={service.id}
                onClick={() => setActiveService(service)}
                className="cz-card p-8 rounded-lg flex flex-col justify-between group relative overflow-hidden bg-white border border-gray-200 cursor-pointer"
              >
                {/* TOP ACCENT LINE */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#11161d] group-hover:bg-[#f5b120] transition-colors" />

                <div className="space-y-4">
                  
                  {/* ICON & CATEGORY */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 bg-[#f5b120] text-[#11161d] font-bold rounded flex items-center justify-center shadow-md group-hover:bg-[#11161d] group-hover:text-[#f5b120] transition-colors">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono font-extrabold uppercase px-2.5 py-1 bg-gray-100 text-gray-700 rounded border border-gray-300">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-extrabold font-serif uppercase tracking-wide text-[#11161d] group-hover:text-[#f5b120] transition-colors pt-2">
                    {service.title}
                  </h3>

                  {/* SHORT DESC */}
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* SPECIFICATION BULLETS */}
                  <ul className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-700">
                    {service.details.slice(0, 3).map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#f5b120] shrink-0" />
                        <span className="truncate">{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* BOTTOM ACTION BUTTON */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.title);
                    }}
                    className="text-xs font-black uppercase tracking-wider text-[#11161d] group-hover:text-[#f5b120] flex items-center gap-1.5 transition-colors"
                  >
                    <span>READ MORE</span>
                    <ArrowRight className="w-4 h-4 text-[#f5b120] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-xs font-mono font-bold text-gray-400">0{INITIAL_SERVICES.indexOf(service) + 1}</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* EXPANDED SERVICE MODAL */}
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 border-4 border-[#f5b120] relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto text-[#11161d]">
              
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded bg-[#11161d] text-[#f5b120] hover:bg-[#f5b120] hover:text-[#11161d] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-56 rounded overflow-hidden border border-gray-200">
                <img src={activeService.image} alt={activeService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] via-[#11161d]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono text-[#f5b120] uppercase tracking-widest font-extrabold block">
                    {activeService.subtitle}
                  </span>
                  <h3 className="text-2xl font-black font-serif uppercase">{activeService.title}</h3>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                {activeService.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-black text-[#11161d] uppercase tracking-wider font-mono">
                  KEY ENGINEERING INCLUSIONS:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeService.details.map((detail, i) => (
                    <div key={i} className="p-3 bg-gray-100 border border-gray-200 flex items-center gap-2.5 text-xs text-[#11161d]">
                      <CheckCircle2 className="w-4 h-4 text-[#f5b120] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-bold text-gray-500">
                  Fixed pricing &amp; 100% material quality guarantee.
                </span>
                <button
                  onClick={() => {
                    const title = activeService.title;
                    setActiveService(null);
                    onSelectService(title);
                  }}
                  className="cz-btn-skew cz-btn-yellow px-6 py-3 text-xs font-extrabold"
                >
                  <span>GET QUOTE FOR {activeService.title}</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

