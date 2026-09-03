'use client';

import React, { useState, useEffect } from 'react';
import { HardHat, ShieldCheck, CheckCircle2, PhoneCall, HelpCircle, ChevronLeft, ChevronRight, Award, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data-store';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenMagazine: () => void;
}

export default function HeroSection({ onOpenConsultation, onOpenMagazine }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      mainTitle: "BUILD YOUR DREAM HOUSE",
      highlightTitle: "WITH US",
      subtitle: "Turnkey Residential & Luxury Villa Construction in South India",
      image: "/hero1.jpg",
      badge: "20+ Years Construction Mastery"
    },
    {
      mainTitle: "WE ARE TRUSTED",
      highlightTitle: "FOR YOUR PROJECT",
      subtitle: "100% Fixed BOQ Price • Tata Steel & UltraTech Cement",
      image: "/hero2.jpg",
      badge: "50+ Delivered Projects"
    },
    {
      mainTitle: "LEADER IN THE",
      highlightTitle: "CONSTRUCTION INDUSTRY",
      subtitle: "Vastu Compliant Architectural Planning & Structural Audits",
      image: "/about_site.jpg",
      badge: "100% Quality Guaranteed"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section id="home" className="relative pt-36 sm:pt-40 lg:pt-44 pb-0 flex flex-col justify-between bg-[#11161d] text-white overflow-hidden">
      
      {/* HERO SLIDER CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT HERO TEXT COLUMN */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#f5b120] text-[#11161d] text-xs font-black uppercase tracking-widest">
              <HardHat className="w-4 h-4" />
              <span>CERTIFIED TURNKEY CONSTRUCTION ENGINEERS</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none font-serif text-white min-h-[120px]">
                {heroSlides[currentSlide].mainTitle} <br />
                <span className="text-[#f5b120]">
                  {heroSlides[currentSlide].highlightTitle}
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl leading-relaxed pt-2">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            {/* QUICK STAT HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-[#1a1f26] border-l-4 border-[#f5b120] flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#f5b120] shrink-0" />
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-white">100% Quality Steel</h4>
                  <p className="text-[11px] text-slate-400">Tata Tiscon Fe-550D Rebar</p>
                </div>
              </div>
              <div className="p-3 bg-[#1a1f26] border-l-4 border-[#f5b120] flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#f5b120] shrink-0" />
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-white">10-Stage Audit</h4>
                  <p className="text-[11px] text-slate-400">Zero Defect Inspection</p>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="cz-btn-skew cz-btn-yellow px-8 py-4 text-xs font-extrabold shadow-xl"
              >
                <span>GET A QUOTE</span>
              </button>

              <button
                onClick={onOpenConsultation}
                className="cz-btn-skew cz-btn-dark px-7 py-4 text-xs font-extrabold border-2 border-[#f5b120]"
              >
                <span>CONTACT US</span>
              </button>
            </div>

          </div>

          {/* RIGHT HERO IMAGE DISPLAY CAROUSEL */}
          <div className="lg:col-span-6 relative">
            <div className="w-full h-[420px] sm:h-[480px] rounded-xl overflow-hidden bg-[#1a1f26] border-4 border-[#f5b120] shadow-2xl relative group">
              
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].mainTitle}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] via-transparent to-black/30" />

              {/* OVERLAY FEATURE BADGE */}
              <div className="absolute top-4 left-4 bg-[#11161d]/90 border border-[#f5b120] px-4 py-2 text-xs font-mono text-[#f5b120] flex items-center gap-2 rounded shadow-lg">
                <Award className="w-4 h-4" />
                <span className="font-bold">{heroSlides[currentSlide].badge}</span>
              </div>

              {/* CAROUSEL ARROWS */}
              <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  aria-label="Previous Slide"
                  className="w-10 h-10 bg-[#11161d] text-[#f5b120] border border-slate-700 hover:border-[#f5b120] flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                  aria-label="Next Slide"
                  className="w-10 h-10 bg-[#11161d] text-[#f5b120] border border-slate-700 hover:border-[#f5b120] flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* SLIDE INDICATORS */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === idx ? 'w-8 bg-[#f5b120]' : 'w-2 bg-white/50'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* WEBUILD "MEET & ASK" YELLOW SLANTED BRIDGE BANNER */}
      <div className="w-full bg-[#f5b120] text-[#11161d] py-6 shadow-2xl relative z-20 border-t-4 border-b-4 border-[#11161d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="w-14 h-14 bg-[#11161d] text-[#f5b120] flex items-center justify-center font-bold shrink-0 rounded shadow-md">
                <HelpCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-wider uppercase font-serif">MEET &amp; ASK</h3>
                <p className="text-xs font-bold text-[#11161d]/90 tracking-wide">
                  FOR ANY INQUIRIES OR FREE SITE VISIT CONSULTATIONS, OUR CIVIL ENGINEERS ARE AVAILABLE 24/7
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="cz-btn-skew cz-btn-dark px-6 py-3 text-xs font-extrabold flex items-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-4 h-4 text-[#f5b120]" />
                <span>CALL: {COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="cz-btn-skew bg-white text-[#11161d] hover:bg-[#11161d] hover:text-[#f5b120] px-6 py-3 text-xs font-extrabold border-2 border-[#11161d] shadow-lg transition-colors"
              >
                <span>BOOK APPOINTMENT</span>
              </button>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
