'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PackagesSection from '@/components/PackagesSection';
import Process3DSection from '@/components/Process3DSection';
import MaterialsSection from '@/components/MaterialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MagazineViewerModal from '@/components/MagazineViewerModal';

export default function HomePage() {
  const [isMagazineOpen, setIsMagazineOpen] = useState<boolean>(false);
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string>('');
  const [selectedPackageForConsultation, setSelectedPackageForConsultation] = useState<string>('');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForConsultation(serviceName);
    scrollToContact();
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackageForConsultation(packageName);
    scrollToContact();
  };

  return (
    <main className="min-h-screen bg-white text-[#11161d] selection:bg-[#f5b120] selection:text-[#11161d] relative font-sans">
      
      {/* 1. TOP & MAIN NAVIGATION */}
      <Navbar
        onOpenConsultation={scrollToContact}
        onOpenMagazine={() => setIsMagazineOpen(true)}
      />

      {/* 2. HERO SLIDER */}
      <HeroSection
        onOpenConsultation={scrollToContact}
        onOpenMagazine={() => setIsMagazineOpen(true)}
      />

      {/* 3. ABOUT US & COMPANY HIGHLIGHTS */}
      <AboutSection />

      {/* HAZARD STRIPE DIVIDER */}
      <div className="cz-hazard-stripe" />

      {/* 4. OUR CONSTRUCTION SERVICES */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* HAZARD STRIPE DIVIDER */}
      <div className="cz-hazard-stripe" />

      {/* 6. BUDGET ESTIMATOR & TURNKEY PACKAGES */}
      <PackagesSection onSelectPackage={handleSelectPackage} />

      {/* 7. 10-STAGE CONSTRUCTION JOURNEY */}
      <Process3DSection />

      {/* 8. MATERIAL BRANDS & QUALITY ASSURANCE */}
      <MaterialsSection />

      {/* HAZARD STRIPE DIVIDER */}
      <div className="cz-hazard-stripe" />

      {/* 9. CLIENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* 10. REQUEST CALLBACK & GET A QUOTE FORM */}
      <ContactSection
        initialService={selectedServiceForConsultation}
        initialPackage={selectedPackageForConsultation}
      />

      {/* 11. FOOTER & NEWSLETTER */}
      <Footer />

      {/* DIGITAL MAGAZINE MODAL */}
      <MagazineViewerModal
        isOpen={isMagazineOpen}
        onClose={() => setIsMagazineOpen(false)}
      />

    </main>
  );
}
