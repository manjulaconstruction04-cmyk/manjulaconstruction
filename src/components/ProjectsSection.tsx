'use client';

import React, { useState } from 'react';
import { INITIAL_PROJECTS, Project } from '@/lib/data-store';
import { MapPin, Layers, CheckCircle2, ArrowRight, X, Maximize2 } from 'lucide-react';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Residential' | 'Commercial' | 'Renovation'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = INITIAL_PROJECTS.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 bg-white text-[#11161d] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CONSTRUCTZILLA SIGNATURE HEADER */}
        <div className="cz-title-container text-center">
          <span className="text-xs font-mono font-bold text-[#f5b120] uppercase tracking-widest block mb-1">
            SOME OF OUR POPULAR DREAM PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif uppercase tracking-tight text-[#11161d]">
            OUR PROJECTS
          </h2>
          <div className="cz-heading-underline" />
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {(['All', 'Residential', 'Commercial', 'Renovation'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cz-btn-skew px-6 py-2.5 text-xs font-black transition-all ${
                activeCategory === cat
                  ? 'cz-btn-yellow'
                  : 'bg-gray-100 text-[#11161d] hover:bg-[#11161d] hover:text-[#f5b120] border border-gray-200'
              }`}
            >
              <span>{cat === 'All' ? 'ALL' : cat.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cz-card rounded-lg overflow-hidden group cursor-pointer border border-gray-200 flex flex-col justify-between"
            >
              {/* IMAGE HEADER */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#11161d]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded bg-[#f5b120] text-[#11161d] flex items-center justify-center font-bold shadow-xl">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>

                <span className="absolute top-4 left-4 bg-[#11161d] text-[#f5b120] text-[10px] font-mono font-extrabold uppercase px-3 py-1 border border-[#f5b120]">
                  {project.subcategory}
                </span>

                <span className="absolute bottom-4 right-4 bg-[#f5b120] text-[#11161d] text-[10px] font-mono font-extrabold px-3 py-1">
                  {project.builtUpArea}
                </span>
              </div>

              {/* CARD BODY */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold font-serif uppercase text-[#11161d] group-hover:text-[#f5b120] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#f5b120]" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs font-extrabold text-[#11161d] group-hover:text-[#f5b120]">
                  <span>VIEW CASE STUDY</span>
                  <span className="text-gray-400 font-mono">{project.completionYear}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CASE STUDY MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="bg-white rounded-xl max-w-3xl w-full p-6 sm:p-8 border-4 border-[#f5b120] relative shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto text-[#11161d]">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded bg-[#11161d] text-[#f5b120] hover:bg-[#f5b120] hover:text-[#11161d] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-mono font-extrabold text-[#f5b120] uppercase bg-[#11161d] px-3 py-1 inline-block">
                  {selectedProject.category} • {selectedProject.subcategory}
                </span>
                <h3 className="text-3xl font-black font-serif uppercase">{selectedProject.title}</h3>
                <p className="text-xs text-gray-500 font-mono">{selectedProject.location} • Handover Year: {selectedProject.completionYear}</p>
              </div>

              <div className="h-72 rounded overflow-hidden border border-gray-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded bg-gray-100 border border-gray-200 text-xs font-mono">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">Location</span>
                  <span className="font-bold text-[#11161d]">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">Built-Up Area</span>
                  <span className="font-bold text-[#f5b120]">{selectedProject.builtUpArea}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">Handover Year</span>
                  <span className="font-bold text-[#11161d]">{selectedProject.completionYear}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">Execution</span>
                  <span className="font-bold text-[#11161d]">Turnkey Contract</span>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-black text-[#11161d] uppercase tracking-wider font-mono">
                  ENGINEERING SCOPE OF WORK:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.scope.map((item, idx) => (
                    <div key={idx} className="p-3 bg-gray-100 border border-gray-200 flex items-center gap-2.5 text-xs text-[#11161d]">
                      <CheckCircle2 className="w-4 h-4 text-[#f5b120] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
