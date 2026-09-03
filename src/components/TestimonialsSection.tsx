'use client';

import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, Play } from 'lucide-react';
import { INITIAL_TESTIMONIALS, Testimonial } from '@/lib/data-store';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials: Testimonial[] = INITIAL_TESTIMONIALS;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5b120]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION TITLE HEADER */}
        <div className="cz-title-container text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f5b120] text-[#11161d] text-xs font-black uppercase tracking-widest mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-serif">
            WHAT OUR HAPPY CLIENTS SAY!!!
          </h2>
          <div className="cz-heading-underline" />
          <p className="text-sm text-slate-300 max-w-2xl mt-4 leading-relaxed">
            Over 50+ happy families and business owners trust Manjula Construction for zero-escalation turnkey building delivery across South India.
          </p>
        </div>

        {/* FEATURED ACTIVE TESTIMONIAL CAROUSEL */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[#1a1f26] border-2 border-[#f5b120] rounded-2xl p-8 sm:p-12 shadow-2xl relative">
            <Quote className="w-16 h-16 text-[#f5b120]/20 absolute top-6 right-6 pointer-events-none" />

            {/* STAR RATING */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#f5b120] text-[#f5b120]" />
              ))}
            </div>

            {/* QUOTE TEXT */}
            <blockquote className="text-lg sm:text-xl font-serif text-slate-200 leading-relaxed italic mb-8">
              &quot;{testimonials[activeIndex].quote}&quot;
            </blockquote>

            {/* CLIENT META */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#f5b120] text-[#11161d] font-black text-xl flex items-center justify-center border-2 border-white shadow-lg font-mono">
                  {testimonials[activeIndex].avatarText}
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-base tracking-wide flex items-center gap-2">
                    {testimonials[activeIndex].clientName}
                    <CheckCircle className="w-4 h-4 text-[#f5b120]" />
                  </h4>
                  <p className="text-xs text-[#f5b120] font-mono font-bold">
                    {testimonials[activeIndex].projectType} • {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>

              {/* NAV CONTROLS */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-[#11161d] text-white border border-slate-700 hover:border-[#f5b120] hover:text-[#f5b120] flex items-center justify-center transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-[#11161d] text-white border border-slate-700 hover:border-[#f5b120] hover:text-[#f5b120] flex items-center justify-center transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3-CARD GRID OF ALL REVIEWS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 rounded-xl border transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'bg-[#1a1f26] border-[#f5b120] shadow-xl scale-[1.02]'
                  : 'bg-[#11161d]/80 border-slate-800 hover:border-slate-700 hover:bg-[#1a1f26]'
              }`}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f5b120] text-[#f5b120]" />
                ))}
              </div>
              <p className="text-xs text-slate-300 line-clamp-3 italic mb-4 font-sans">
                &quot;{item.quote}&quot;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <div className="w-9 h-9 rounded-full bg-[#f5b120] text-[#11161d] font-bold text-xs flex items-center justify-center">
                  {item.avatarText}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">{item.clientName}</h5>
                  <p className="text-[10px] text-slate-400 font-mono">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
