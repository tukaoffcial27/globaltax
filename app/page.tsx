'use client'

import React from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Database, 
  Globe, 
  Shield, 
  Zap, 
  Cpu, 
  ChevronRight, 
  Sparkles, 
  BarChart3, 
  Scale, 
  Search,
  CheckCircle2,
  Lock,
  Globe2,
  Activity,
  BookOpen,
  Terminal,
  FileSearch,
  Network
} from 'lucide-react'

export default function LandingPage() {
  const features = [
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Access 10,000+ jurisdictional corridors updated for the 2026 fiscal cycle.",
      color: "text-blue-500"
    },
    {
      icon: Activity,
      title: "Real-time Pulse",
      description: "Live synchronization with OECD Pillar Two technical registries and protocols.",
      color: "text-[#D4AF37]"
    },
    {
      icon: Scale,
      title: "Compliance Audit",
      description: "Automated verification of withholding tax rates across all treaty instruments.",
      color: "text-emerald-500"
    }
  ]

  const stats = [
    { label: "Data Points", value: "10,000+" },
    { label: "Accuracy", value: "99.9%" },
    { label: "Update Cycle", value: "24h" }
  ]

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-black selection:bg-[#D4AF37]/20">
      
      {/* 1. HERO SECTION - Perbaikan Link & Penghapusan Redundansi */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col items-center text-center space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black text-[#D4AF37] text-[12px] font-black uppercase tracking-[0.4em]">
              <Sparkles className="w-4 h-4" /> 2026 Fiscal Intelligence
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif italic leading-[1.1] text-black max-w-5xl">
              Autonomous Tax <span className="text-[#D4AF37]">Architects.</span>
            </h1>
            
            <p className="max-w-2xl text-gray-500 font-light italic text-lg md:text-xl leading-relaxed">
              Navigating global tax treaties with programmatic precision. Access 10,000+ jurisdictional corridors instantly via our high-speed technical registry.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              {/* Tombol Utama tetap ke Encyclopedia */}
              <Link 
                href="/encyclopedia" 
                className="group relative inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-[2rem] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative font-bold uppercase tracking-widest text-xs">Enter Encyclopedia</span>
                <ChevronRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              {/* REVISI: Tombol "Explore Registry" dihapus sesuai instruksi karena redundan */}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC NARRATIVE (Penambahan Konten untuk SEO & AdSense) */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg italic">
            <h2 className="text-3xl font-serif italic text-black leading-tight">The Science of Autonomous Tax Architecture</h2>
            <p>
              In an era defined by rapid digital transformation, traditional fiscal advisory models are becoming obsolete. GlobalTax Laboratory introduces a programmatic approach to tax treaty analysis, utilizing advanced algorithms to synchronize 10,000+ bilateral corridors in real-time.
            </p>
            <p>
              Our platform is engineered specifically for the 2026 fiscal cycle, addressing the complexities of OECD Pillar Two initiatives and the evolving landscape of global withholding tax (WHT) mandates. By providing an autonomous simulation environment, we empower professionals to model scenarios across diverse professions—from remote engineers to crypto investors.
            </p>
          </div>
          <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg italic">
            <h2 className="text-3xl font-serif italic text-black leading-tight">Mitigating Cross-Border Risks</h2>
            <p>
              Double taxation avoidance and tax residency optimization are no longer just administrative tasks; they are strategic imperatives. Our Encyclopedia serves as a definitive hub for verified treaty articles, ensuring that your international operations remain compliant and efficient.
            </p>
            <p>
              The methodology behind our 10,000-page pSEO architecture is built on the principle of granularity. Every profession-to-jurisdiction corridor is analyzed through the lens of specific fiscal pain points, such as Capital Gains Tax on Exit and Permanent Establishment risks.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION - Dipertahankan Sesuai File Asli */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-gray-50">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-10 rounded-[3rem] bg-white border border-gray-50 hover:border-[#D4AF37]/30 transition-all duration-500">
              <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-black transition-all`}>
                <feature.icon className={`w-8 h-8 ${feature.color} group-hover:text-[#D4AF37] transition-colors`} />
              </div>
              <h3 className="text-2xl font-serif italic text-black mb-4">{feature.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AI TAX VAULT SECTION - Perbaikan Link (Gambar 3 ke AI Vault) */}
      <section className="max-w-5xl mx-auto px-8 mb-32">
        <div className="bg-black rounded-[4rem] p-16 relative overflow-hidden group border border-white/5 shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
          
          <div className="relative flex flex-col items-center text-center space-y-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center mb-4 border border-white/10">
                <Cpu className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <span className="text-[13px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">Open Access</span>
              <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">AI Tax Vault Simulation</h2>
            </div>
            
            <p className="max-w-2xl text-gray-400 font-light italic text-lg md:text-xl leading-relaxed">
              Execute cross-border fiscal scenarios through our proprietary autonomous simulation engine. Optimized for the high-frequency demands of 2026 technical registries.
            </p>

            {/* REVISI: Link sekarang Benar ke /ai-vault, bukan Encyclopedia */}
            <Link 
              href="/ai-vault" 
              className="group relative inline-flex items-center gap-6 bg-white text-black px-14 py-6 rounded-2xl font-black uppercase text-[13px] tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative flex items-center gap-3">
                <Cpu size={18} /> Start Free Simulation
              </span>
            </Link>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
                <CheckCircle2 size={12} className="text-[#D4AF37]" /> No Auth Required
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
                <CheckCircle2 size={12} className="text-[#D4AF37]" /> Real-time Data
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEEP ANALYSIS CONTENT (Tambahan Konten untuk Mencapai 1000 Kata) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-gray-50">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
             <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-black">
                <Terminal size={24} />
             </div>
             <h4 className="font-serif italic text-xl">Technical Indexing</h4>
             <p className="text-gray-500 font-light text-sm italic">Our registry utilizes a unique pair-matrix indexing system, allowing for the rapid retrieval of Article 10, 11, and 12 data across 10,000 corridors.</p>
          </div>
          <div className="space-y-4">
             <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-black">
                <FileSearch size={24} />
             </div>
             <h4 className="font-serif italic text-xl">Verification Logic</h4>
             <p className="text-gray-500 font-light text-sm italic">Every data point in the GlobalTax Encyclopedia undergoes a multi-layer validation process against official bilateral tax treaty instruments.</p>
          </div>
          <div className="space-y-4">
             <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-black">
                <Network size={24} />
             </div>
             <h4 className="font-serif italic text-xl">pSEO Methodology</h4>
             <p className="text-gray-500 font-light text-sm italic">By deploying 10,000 dynamic pages, we capture high-intent search queries related to specific professional tax challenges globally.</p>
          </div>
          <div className="space-y-4">
             <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-black">
                <Zap size={24} />
             </div>
             <h4 className="font-serif italic text-xl">Future-Proofing</h4>
             <p className="text-gray-500 font-light text-sm italic">As international tax laws shift towards digital service taxation, our engine is already prepared for the 2026-2030 regulatory horizon.</p>
          </div>
        </div>
      </section>

      {/* 6. STATS SECTION - Dipertahankan */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-center md:text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-2 border-l-2 border-gray-50 pl-8 hover:border-[#D4AF37] transition-colors">
              <span className="text-4xl md:text-6xl font-serif italic text-black">{stat.value}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}