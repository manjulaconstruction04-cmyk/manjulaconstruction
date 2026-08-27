'use client';

import React, { useState } from 'react';
import { BookOpen, Calendar, User, Clock, ArrowRight, X } from 'lucide-react';
import { INITIAL_BLOG_POSTS, BlogPost } from '@/lib/data-store';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const posts: BlogPost[] = INITIAL_BLOG_POSTS;

  return (
    <section id="blog" className="py-20 bg-slate-50 text-[#11161d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="cz-title-container text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#11161d] text-[#f5b120] text-xs font-black uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE & INSIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#11161d] font-serif">
            LATEST ARTICLES FROM OUR BLOG POST
          </h2>
          <div className="cz-heading-underline" />
          <p className="text-sm text-slate-600 max-w-2xl mt-4 leading-relaxed">
            Stay updated with expert civil engineering recommendations, Vastu guidelines, and material selection strategies for your dream house.
          </p>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* IMAGE PREVIEW */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#f5b120] text-[#11161d] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded shadow">
                    {post.category}
                  </div>
                </div>

                {/* CONTENT BODY */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[11px] text-slate-500 font-mono mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#f5b120]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#f5b120]" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#11161d] group-hover:text-[#f5b120] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* CARD FOOTER BUTTON */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#11161d] group-hover:text-[#f5b120] transition-colors pt-4 border-t border-gray-100 w-full"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ARTICLE READER MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl border-4 border-[#f5b120]">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 bg-[#11161d] text-white hover:text-[#f5b120] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f5b120] text-[#11161d] text-xs font-black uppercase tracking-widest mb-4">
              {selectedPost.category}
            </div>

            <h2 className="text-2xl font-black text-[#11161d] font-serif mb-4 leading-tight">
              {selectedPost.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-mono pb-4 border-b border-gray-200 mb-6">
              <span>By {selectedPost.author}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <div className="rounded-xl overflow-hidden mb-6 h-64 bg-slate-100">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4 font-sans">
              <p className="font-semibold text-slate-900 text-base leading-snug">
                {selectedPost.excerpt}
              </p>
              <p>
                {selectedPost.content}
              </p>
              <p>
                At Manjula Construction, our civil engineering team ensures every project adheres strictly to safety, architectural aesthetics, and lifetime durability specs. Contact our site engineers today for a complimentary site visit and Vastu consultation.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="cz-btn-skew cz-btn-yellow px-6 py-2.5 text-xs font-extrabold"
              >
                <span>CLOSE ARTICLE</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
