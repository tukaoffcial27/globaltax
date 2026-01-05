'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Globe, Mail, Scale, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 px-8 border-t border-gray-100 bg-white no-print text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        
        {/* Kolom 1: Brand & Identity - Updated Logo to 24px & Desc to 13px */}
        <div className="md:col-span-2 space-y-6 text-center md:text-left">
          <div className="text-2xl font-serif tracking-[0.3em] font-bold uppercase">
            Global<span className="text-[#D4AF37]">Tax</span>.
          </div>
          <p className="text-[13px] font-bold tracking-[0.2em] text-gray-400 uppercase leading-loose max-w-sm mx-auto md:mx-0">
            High-Precision Tax Intelligence Laboratory for the Global Elite. Specialized in cross-border fiscal optimization for the 2026 tax year.
          </p>
          <div className="flex justify-center md:justify-start gap-8 pt-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[11px] font-black uppercase tracking-widest">Verified Data</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <Globe className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[11px] font-black uppercase tracking-widest">150+ Regions</span>
            </div>
          </div>
        </div>

        {/* Kolom 2: Legal Framework - Updated Header to 13px & Links to 11px */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="text-[13px] font-black uppercase tracking-[0.4em] text-black border-b border-[#D4AF37] pb-2">Legal Framework</div>
          <Link href="/legal/privacy" className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors">
            <ShieldCheck className="w-4 h-4 group-hover:text-[#D4AF37]" /> Privacy Policy
          </Link>
          <Link href="/legal/terms" className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors">
            <Scale className="w-4 h-4 group-hover:text-[#D4AF37]" /> Terms of Service
          </Link>
        </div>

        {/* Kolom 3: Support & Contact - Updated Header to 13px & Links to 11px */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="text-[13px] font-black uppercase tracking-[0.4em] text-black border-b border-[#D4AF37] pb-2">Elite Support</div>
          <Link href="/support/contact" className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors">
            <Mail className="w-4 h-4 group-hover:text-[#D4AF37]" /> Contact Concierge
          </Link>
          <Link href="/support/methodology" className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors">
            <FileText className="w-4 h-4 group-hover:text-[#D4AF37]" /> Our Methodology
          </Link>
        </div>
      </div>
      
      {/* Copyright Line - Updated to 11px */}
      <div className="mt-24 pt-8 border-t border-gray-50 text-center">
        <p className="text-[11px] font-medium tracking-[0.5em] text-gray-300 uppercase">
          © 2026 GlobalTax Private Laboratory. Developed for Excellence.
        </p>
      </div>
    </footer>
  );
}