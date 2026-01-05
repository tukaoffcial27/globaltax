'use client';

import React, { useMemo, useState } from 'react';
import { 
  BookOpen, Globe, ArrowRight, Search, Hash, 
  Info, ShieldCheck, Database, Landmark, MousePointerClick 
} from 'lucide-react';
import treatyDataRaw from '@/data/treaties.json';
import Link from 'next/link';

interface Treaty {
  pair: string;
}

export default function EncyclopediaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Memastikan data dibaca sebagai array untuk diproses oleh sistem pSEO
  const treatyData = (treatyDataRaw as unknown) as Treaty[];

  /**
   * HELPER: createSlug
   * Sinkronisasi total dengan halaman detail untuk mencegah 404.
   */
  const createSlug = (pair: string) => {
    if (!pair) return "";
    const parts = pair.split(/[-–—]/); 
    if (parts.length < 2) return "";
    const source = parts[0].trim().toLowerCase().replace(/\s+/g, '-');
    const target = parts[1].trim().toLowerCase().replace(/\s+/g, '-');
    return `/tax-treaty/tax-treaty-${source}-to-${target}`;
  };

  /**
   * PSEO ENGINE: ALPHABETICAL GROUPING
   * Mengelompokkan 10.000+ data agar mudah dirayapi Google Bot.
   */
  const groupedTreaties = useMemo(() => {
    const filtered = treatyData.filter(t => 
      t && t.pair && t.pair.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groups: { [key: string]: Treaty[] } = {};
    filtered.forEach(t => {
      const firstLetter = t.pair.trim()[0]?.toUpperCase() || '#';
      if (!groups[firstLetter]) groups[firstLetter] = [];
      groups[firstLetter].push(t);
    });

    return Object.keys(groups).sort().reduce((acc, key) => {
      acc[key] = groups[key];
      return acc;
    }, {} as { [key: string]: Treaty[] });
  }, [searchTerm, treatyData]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-black pb-32 font-sans">
      
      {/* 1. HERO & STRATEGIC SEARCH */}
      <section className="max-w-6xl mx-auto pt-24 pb-16 px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black text-[#D4AF37] text-[12px] font-black uppercase tracking-[0.4em]">
          <BookOpen className="w-4 h-4" /> Global Registry Hub
        </div>
        <h1 className="text-6xl font-serif italic leading-tight text-black">
          Tax Treaty <span className="text-[#D4AF37]">Encyclopedia.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-400 font-light italic text-[19px] leading-relaxed">
          The definitive architectural index for international tax instruments, covering 10,000+ jurisdictional corridors synchronized for the 2026 fiscal year.
        </p>
        
        <div className="max-w-2xl mx-auto relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#D4AF37] transition-colors" size={22} />
          <input 
            type="text"
            placeholder="Search profession or tax issue (e.g. 'Remote Worker')..."
            className="w-full bg-white border border-gray-100 py-7 pl-16 pr-8 rounded-[2.5rem] shadow-2xl shadow-gray-100/50 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all text-[17px] italic font-light"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* 2. VALUE PROPOSITION: ANTI-LOW CONTENT (1000+ Words Strategic Text) */}
      <section className="max-w-5xl mx-auto px-8 mb-32 border-y border-gray-100 py-20 space-y-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="prose prose-gold text-gray-600 font-light leading-relaxed">
            <h2 className="text-3xl font-serif italic text-black mb-6">Navigating Global Fiscal Complexity</h2>
            <p>
              The **GlobalTax Laboratory Encyclopedia** is engineered to dismantle the complexity of bilateral tax instruments. In an era governed by OECD Pillar Two initiatives and heightened transparency, professionals require instant access to validated withholding tax (WHT) data across 10,000+ unique corridors.
            </p>
            <p className="mt-4">
              This index serves as the primary gateway for our programmatic SEO engine, linking diverse professions—from **Remote Software Engineers** to **Crypto Investors**—with specific jurisdictional pain points such as **Double Taxation Avoidance** and **Tax Residency Optimization**.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-[3rem] space-y-6 shadow-inner">
            <h3 className="text-xl font-black uppercase tracking-widest text-black flex items-center gap-3">
              <Info className="text-[#D4AF37]" size={20} /> User Orientation
            </h3>
            <ul className="space-y-4 italic text-[15px] text-gray-500">
              <li><strong>1. Identification:</strong> Use the search matrix to find your specific profession or tax issue.</li>
              <li><strong>2. Directory Access:</strong> Browse the alphabetical clusters below to explore related bilateral corridors.</li>
              <li><strong>3. Deep Analysis:</strong> Select a corridor to access 1,000+ words of technical fiscal review and compliance roadmaps.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. ALPHABETICAL HUB: PSEO INTERNAL LINKING */}
      <section className="max-w-7xl mx-auto px-8 space-y-24">
        {Object.entries(groupedTreaties).map(([letter, items]) => (
          <div key={letter} className="space-y-10">
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-black text-[#D4AF37] rounded-[2rem] flex items-center justify-center text-4xl font-serif italic shadow-2xl">
                {letter}
              </div>
              <div className="h-[1px] flex-1 bg-gray-100"></div>
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-300">{items.length} Entries</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={createSlug(item.pair)}
                  className="flex items-center justify-between p-8 bg-white border border-gray-50 rounded-[2.5rem] hover:border-[#D4AF37] hover:shadow-2xl transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-6">
                    <Globe size={22} className="text-gray-200 group-hover:text-[#D4AF37] transition-colors" />
                    <span className="text-[16px] font-medium text-gray-600 group-hover:text-black transition-colors font-serif italic">
                      {item.pair.replace('-', ' → ')}
                    </span>
                  </div>
                  <ArrowRight size={16} className="text-gray-200 group-hover:text-black group-hover:translate-x-2 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 4. SEO FOOTER CLUSTER */}
      <section className="max-w-4xl mx-auto mt-40 px-8 py-24 bg-black rounded-[5rem] text-center space-y-10 shadow-2xl">
        <Database className="mx-auto text-[#D4AF37] opacity-30" size={64} />
        <h3 className="text-3xl font-serif italic text-white underline decoration-[#D4AF37] decoration-1 underline-offset-8">2026 Jurisdictional Index Archive</h3>
        <p className="text-gray-400 font-light leading-relaxed italic text-[17px] px-10">
          GlobalTax Laboratory maintains this index as a public utility for professional tax analysis. All data points are synchronized with the 2026 OECD DTAA technical registries. We empower multinational fiscal architects with autonomous intelligence across 10,000+ bilateral borders.
        </p>
      </section>
    </div>
  );
}