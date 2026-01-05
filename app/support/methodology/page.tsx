import { Database, Cpu, BookOpen, Globe, ShieldCheck, Clock, Network, Scale, FileSearch, Terminal } from 'lucide-react';

export const metadata = {
  title: 'Methodology | GlobalTax Laboratory Fiscal Intelligence',
  description: 'Technical overview of our programmatic tax treaty mapping and the autonomous 2026 fiscal architecture.',
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-black pb-32 font-sans">
      
      {/* 1. HERO SECTION - Strategic Vision */}
      <section className="max-w-4xl mx-auto pt-32 pb-20 px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black text-[#D4AF37] text-[12px] font-black uppercase tracking-[0.4em]">
          <Terminal className="w-4 h-4" /> Technical Documentation
        </div>
        <h1 className="text-6xl font-serif italic leading-tight text-black">
          The Science of Autonomous <span className="text-[#D4AF37]">Fiscal Mapping.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-500 font-light italic text-[18px] leading-relaxed">
          An overview of the programmatic architecture used to synchronize 10,000+ jurisdictional corridors for the 2026 fiscal cycle.
        </p>
      </section>

      {/* 2. CORE METHODOLOGY - The 10,000 Page Engine */}
      <section className="max-w-5xl mx-auto px-8 mb-32">
        <div className="bg-white border border-gray-100 rounded-[4rem] p-16 shadow-2xl shadow-gray-100/50 space-y-12">
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 bg-black text-[#D4AF37] rounded-2xl flex items-center justify-center">
                <Network size={32} />
             </div>
             <h2 className="text-4xl font-serif italic text-black leading-tight">Programmatic pSEO Integration.</h2>
          </div>
          <div className="prose prose-gold max-w-none text-gray-500 font-light leading-relaxed text-[17px] space-y-6 italic">
             <p>
                Our methodology relies on a high-frequency **Programmatic SEO (pSEO) engine**. By deploying a matrix of 10,000+ unique pages, we map the intersection of specific professional archetypes and bilateral tax treaty instruments.
             </p>
             <p>
                This granular approach ensures that search queries related to unique fiscal corridors—such as "Remote Software Engineer in USA" versus "Double Taxation Avoidance"—are met with precise, real-time technical data rather than generalized advice.
             </p>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL PILLARS - Data Integrity */}
      <section className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-8 mb-32">
        {/* Pair-Matrix Logic */}
        <div className="p-12 bg-white border border-gray-50 rounded-[3rem] space-y-6 group hover:border-[#D4AF37] transition-all shadow-sm">
          <Scale className="text-[#D4AF37]" size={40} />
          <h3 className="text-2xl font-serif italic text-black">Pair-Matrix Indexing</h3>
          <p className="text-[16px] text-gray-500 font-light italic leading-relaxed">
            Every data point is generated through a jurisdictional pair-matrix, linking residency protocols to Article 10, 11, and 12 withholding tax mandates.
          </p>
        </div>

        {/* 2026 Compliance */}
        <div className="p-12 bg-white border border-gray-50 rounded-[3rem] space-y-6 group hover:border-[#D4AF37] transition-all shadow-sm">
          <ShieldCheck className="text-[#D4AF37]" size={40} />
          <h3 className="text-2xl font-serif italic text-black">OECD Pillar Two Compliance</h3>
          <p className="text-[16px] text-gray-500 font-light italic leading-relaxed">
            Our autonomous registry is synchronized with the latest OECD Pillar Two global minimum tax initiatives and 2026 technical registries.
          </p>
        </div>
      </section>

      {/* 4. DATA VERIFICATION PROCESS - For AdSense Trust */}
      <section className="max-w-5xl mx-auto px-8 mb-32">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">Phase 01</h4>
            <h3 className="text-xl font-serif italic">Treaty Extraction</h3>
            <p className="text-sm text-gray-400 font-light italic">Autonomous extraction of bilateral treaty articles from official jurisdictional repositories.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">Phase 02</h4>
            <h3 className="text-xl font-serif italic">Rate Verification</h3>
            <p className="text-sm text-gray-400 font-light italic">Cross-referencing dividend, interest, and royalty rates against 2026 fiscal updates.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">Phase 03</h4>
            <h3 className="text-xl font-serif italic">Vault Sync</h3>
            <p className="text-sm text-gray-400 font-light italic">Integration of verified data points into the AI Tax Vault for real-time scenario simulation.</p>
          </div>
        </div>
      </section>

      {/* 5. DISCLAIMER & LEGAL - Critical for AdSense */}
      <section className="max-w-4xl mx-auto px-8 py-20 bg-gray-50 rounded-[4rem] text-center space-y-6">
        <FileSearch className="mx-auto text-gray-300" size={40} />
        <h3 className="text-2xl font-serif italic text-black">Informational Integrity</h3>
        <p className="text-gray-500 font-light leading-relaxed italic text-[15px] px-10">
          The information provided on GlobalTax Laboratory is generated programmatically for informational and simulation purposes only. It does not constitute official legal or tax advice. Users are encouraged to verify all findings with qualified fiscal professionals before making international financial decisions.
        </p>
      </section>
    </div>
  );
}