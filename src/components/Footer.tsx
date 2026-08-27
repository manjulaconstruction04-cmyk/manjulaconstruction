'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/data-store';
import { HardHat, Phone, Mail, MapPin, Clock, ArrowRight, Video, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#11161d] text-white relative">
      
      {/* HAZARD STRIPE TOP BORDER */}
      <div className="cz-hazard-stripe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* COL 1: BRAND & ABOUT (4 COLS) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#1a1f26] border border-[#f5b120]/40 rounded-xl shrink-0 shadow-lg">
                <img
                  src="/logo.png"
                  alt="Manjula Construction Official Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="leading-tight">
                <span className="text-xl font-black font-serif uppercase tracking-tight block text-white">MANJULA</span>
                <span className="text-[10px] font-mono font-bold text-[#f5b120] tracking-widest uppercase">CONSTRUCTION CO.</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Premier civil engineering &amp; turnkey construction company in South India. Over 20 years of structural load excellence, 3D BIM architecture, and 100% material quality guarantee.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded bg-[#1a1f26] text-[#f5b120] hover:bg-[#f5b120] hover:text-[#11161d] flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded bg-[#1a1f26] text-[#f5b120] hover:bg-[#f5b120] hover:text-[#11161d] flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded bg-[#1a1f26] text-[#f5b120] hover:bg-[#f5b120] hover:text-[#11161d] flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded bg-[#1a1f26] text-[#f5b120] hover:bg-[#f5b120] hover:text-[#11161d] flex items-center justify-center transition-colors">
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>


          {/* COL 2: QUICK NAVIGATION (2 COLS) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold uppercase font-serif tracking-wider text-white border-l-4 border-[#f5b120] pl-3">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {['about', 'services', 'packages', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="hover:text-[#f5b120] flex items-center gap-1.5 transition-colors uppercase font-mono"
                  >
                    <ArrowRight className="w-3 h-3 text-[#f5b120]" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: OUR SERVICES (3 COLS) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase font-serif tracking-wider text-white border-l-4 border-[#f5b120] pl-3">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f5b120] shrink-0" />
                <span>Turnkey Luxury Villas</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f5b120] shrink-0" />
                <span>Commercial Complexes</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f5b120] shrink-0" />
                <span>3D BIM Architectural Plan</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f5b120] shrink-0" />
                <span>Structural SBC Soil Test</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f5b120] shrink-0" />
                <span>DTCP Municipal Approvals</span>
              </li>
            </ul>
          </div>

          {/* COL 4: CONTACT & NEWSLETTER (3 COLS) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase font-serif tracking-wider text-white border-l-4 border-[#f5b120] pl-3">
              NEWSLETTER
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe to get monthly construction cost updates, Vastu tips, and luxury villa floor plan releases.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to newsletter!'); }} className="space-y-2">
              <div className="flex items-center bg-[#1a1f26] border border-slate-700 rounded overflow-hidden p-1">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  className="bg-transparent px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-[#f5b120] text-[#11161d] font-bold text-xs px-4 py-2 hover:bg-white transition-colors uppercase"
                >
                  SignUp
                </button>
              </div>
            </form>
            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#f5b120] shrink-0" />
                <span className="truncate">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#f5b120] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#f5b120] font-mono font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT STRIP */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© {new Date().getFullYear()} Manjula Construction Co. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link
              href="/admin"
              className="text-slate-400 hover:text-[#f5b120] transition-colors"
            >
              ADMIN PORTAL
            </Link>
            <span className="text-slate-700">|</span>
            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-[#f5b120] flex items-center gap-1 transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#f5b120]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

