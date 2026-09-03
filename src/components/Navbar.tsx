'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Building2, Phone, Mail, Clock, Search, Shield, BookOpen, Share2, Globe, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data-store';

interface NavbarProps {
  onOpenConsultation?: () => void;
  onOpenMagazine?: () => void;
}

export default function Navbar({ onOpenConsultation, onOpenMagazine }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PACKAGES', href: '#packages' },
    { name: 'OUR PROCESS', href: '#process' },
    { name: 'REVIEWS', href: '#testimonials' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* 1. TOPBAR (DARK CHARCOAL) */}
      <div className="bg-[#11161d] text-slate-300 py-2 border-b border-slate-800 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <div className="flex items-center gap-1.5 text-[#f5b120]">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-slate-300">Mon - Sat: 8:00 - 18:00</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#f5b120]">
              <Phone className="w-3.5 h-3.5" />
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-300 hover:text-[#f5b120] transition-colors">{COMPANY_INFO.phone}</a>
            </div>
            <div className="flex items-center gap-1.5 text-[#f5b120]">
              <Mail className="w-3.5 h-3.5" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-[#f5b120] transition-colors">{COMPANY_INFO.email}</a>
            </div>
          </div>

            <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" aria-label="Visit Website" className="hover:text-[#f5b120] transition-colors"><Globe className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="Share Website" className="hover:text-[#f5b120] transition-colors"><Share2 className="w-3.5 h-3.5" /></a>
            </div>
            {onOpenMagazine && (
              <button
                onClick={onOpenMagazine}
                className="px-2.5 py-1 rounded bg-[#f5b120] text-[#11161d] font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 hover:bg-white transition-colors"
              >
                <BookOpen className="w-3 h-3" />
                Magazine
              </button>
            )}
            <Link
              href="/admin"
              className="text-[11px] font-mono text-slate-400 hover:text-[#f5b120] flex items-center gap-1"
            >
              <Shield className="w-3 h-3" />
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR WITH OVERLAPPING BRAND CONTAINER */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-xl py-3 border-b-2 border-[#f5b120]'
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* BRAND LOGO OVERLAPPING BADGE */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group relative z-10 shrink-0">
              <div className="bg-[#11161d] text-white px-2.5 sm:px-3 py-1.5 rounded-xl border border-[#f5b120]/40 shadow-xl flex items-center gap-2 sm:gap-2.5 group-hover:bg-[#1a1f26] transition-colors">
                <img
                  src="/logo.png"
                  alt="Manjula Construction Logo"
                  className="h-8 sm:h-10 w-auto object-contain shrink-0 drop-shadow-md"
                />
                <div className="block">
                  <div className="font-extrabold text-xs sm:text-base tracking-wider font-serif text-white flex items-center gap-1 leading-tight">
                    MANJULA <span className="text-[#f5b120]">CONSTRUCTION</span>
                  </div>
                  <p className="text-[7px] sm:text-[9px] text-[#f5b120] uppercase font-mono font-bold tracking-widest leading-none mt-0.5 whitespace-nowrap">
                    BUILDING DREAMS • CREATING FUTURES
                  </p>
                </div>
              </div>
            </Link>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-extrabold text-[#11161d] hover:text-[#f5b120] transition-colors tracking-wide relative py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#f5b120] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* RIGHT ACTION BUTTONS */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="cz-btn-skew cz-btn-yellow px-6 py-2.5 text-xs font-extrabold shadow-md hover:shadow-lg transition-all"
              >
                <span>GET A QUOTE</span>
              </button>

              <button
                onClick={onOpenConsultation}
                aria-label="Search site"
                className="w-10 h-10 bg-[#f5b120] text-[#11161d] font-bold flex items-center justify-center hover:bg-[#11161d] hover:text-[#f5b120] transition-colors"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="w-10 h-10 bg-[#11161d] text-[#f5b120] flex items-center justify-center rounded"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#11161d] text-white px-6 py-6 border-b-4 border-[#f5b120]">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-200 hover:text-[#f5b120] py-1 border-b border-slate-800"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation && onOpenConsultation();
                }}
                className="w-full cz-btn-skew cz-btn-yellow py-3 text-xs font-extrabold"
              >
                <span>GET A FREE QUOTE</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
