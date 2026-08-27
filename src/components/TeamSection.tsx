'use client';

import React from 'react';
import { COMPANY_INFO } from '@/lib/data-store';
import { Mail, Phone, HardHat, Award } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Er. K. Manjunathan",
      role: "FOUNDER & MANAGING DIRECTOR",
      exp: "20+ Yrs Exp • B.E. Civil",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      desc: "Specializes in heavy structural RCC design, foundation SBC calculations, and turnkey project administration."
    },
    {
      name: "Adam Phillips",
      role: "CHIEF STRUCTURAL ENGINEER",
      exp: "14+ Yrs Exp • M.Tech Structural",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      desc: "Leads BIM 3D structural analysis, seismic beam reinforcement, and zero-defect site quality inspections."
    },
    {
      name: "Dylan Adams",
      role: "HEAD ARCHITECT & 3D BIM",
      exp: "12+ Yrs Exp • B.Arch",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      desc: "Expert in luxury villa elevation, 2D floor plans, spatial lighting layout, and DTCP sanction approvals."
    },
    {
      name: "Josh Dunn",
      role: "SENIOR SITE PROJECT MANAGER",
      exp: "10+ Yrs Exp • B.E. Construction",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      desc: "Oversees site safety protocols, daily material quality testing, workforce coordination, and timely milestone delivery."
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#f8f9fa] text-[#11161d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CONSTRUCTZILLA SIGNATURE TITLE */}
        <div className="cz-title-container text-center">
          <span className="text-xs font-mono font-bold text-[#f5b120] uppercase tracking-widest block mb-1">
            CIVIL &amp; ARCHITECTURAL LEADERS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif uppercase tracking-tight text-[#11161d]">
            WE ARE PROFESSIONAL &amp; EXPERT WORKERS
          </h2>
          <div className="cz-heading-underline" />
        </div>

        {/* TEAM CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="cz-card rounded-lg overflow-hidden group border border-gray-200 flex flex-col justify-between"
            >
              {/* IMAGE FRAME WITH YELLOW TOP ACCENT */}
              <div className="relative h-80 w-full bg-gray-900 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#f5b120] z-20" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] via-[#11161d]/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-[10px] font-mono font-extrabold uppercase px-2.5 py-1 bg-[#f5b120] text-[#11161d] rounded">
                    {member.exp}
                  </span>
                  <h3 className="text-xl font-extrabold font-serif uppercase mt-2 tracking-wide text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-[#f5b120] font-bold">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-6 space-y-4 bg-white flex-1 flex flex-col justify-between">
                <p className="text-xs text-gray-600 leading-relaxed">
                  {member.desc}
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-xs font-bold text-[#11161d] hover:text-[#f5b120] flex items-center gap-1.5 font-mono"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#f5b120]" />
                    <span>CONTACT</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="w-8 h-8 rounded bg-[#11161d] text-[#f5b120] hover:bg-[#f5b120] hover:text-[#11161d] flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
