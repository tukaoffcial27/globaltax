import { Database, Cpu, BookOpen, Globe, ShieldCheck, Clock } from 'lucide-react';

export const metadata = {
  title: 'About GlobalTax Laboratory | Our Mission & Technology',
  description: 'Learn how GlobalTax Laboratory uses programmatic SEO and AI to provide free, autonomous fiscal intelligence for professionals worldwide.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-black pb-32 font-sans">
      
      {/* 1. HERO & MISSION */}
      <section className="max-w-4xl mx-auto pt-32 pb-20 px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black text-[#D4AF37] text-[12px] font-black uppercase tracking-[0.4em]">
          <Globe className="w-4 h-4" /> Our Manifesto
        </div>
        <h1 className="text-6xl font-serif italic leading-tight text-black">
          Democratizing Global <span className="text-[#D4AF37]">Fiscal Intelligence.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-500 font-light italic text-[18px] leading-relaxed">
          We believe that access to international tax treaty data should be instantaneous, autonomous, and free. GlobalTax Laboratory is built to empower professionals navigating the 2026 fiscal landscape.
        </p>
      </section>

      {/* 2. CORE VALUE PROPOSITION (For User & AdSense) */}
      <section className="max-w-5xl mx-auto px-8 mb-32">
        <div className="bg-white border border-gray-100 rounded-[4rem] p-16 shadow-2xl shadow-gray-100/50 space-y-12">
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 bg-black text-[#D4AF37] rounded-2xl flex items-center justify-center">
                <Database size={32} />
             </div>
             <h2 className="text-4xl font-serif italic text-black leading-tight">The Programmatic Engine.</h2>
          </div>
          <div className="prose prose-gold max-w-none text-gray-500 font-light leading-relaxed text-[17px] space-y-6">
             <p>
                Unlike traditional static websites, GlobalTax utilizes a state-of-the-art <strong>Programmatic SEO (pSEO) architecture</strong>. Our system dynamically generates over 10,000 unique pages, each tailored to specific professions and cross-border tax challenges (e.g., "Remote Software Engineer vs Double Taxation").
             </p>
             <p>
                This allows us to provide highly relevant, granular information that matches the exact search intent of users globally, ensuring that critical fiscal data is found, not searched for.
             </p>
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY STACK (Credibility Signal) */}
      <section className="max-w-5xl mx-auto px-8 grid md:grid-cols-3 gap-8 mb-32">
        <div className="p-10 bg-white border border-gray-50 rounded-[3rem] space-y-6 group hover:border-[#D4AF37] transition-all">
          <BookOpen className="text-gray-300 group-hover:text-[#D4AF37] transition-colors" size={32} />
          <h3 className="text-xl font-serif italic text-black">The Encyclopedia</h3>
          <p className="text-[15px] text-gray-500 font-light">Our central hub indexing thousands of bilateral tax corridors and their key withholding metrics.</p>
        </div>
        <div className="p-10 bg-white border border-gray-50 rounded-[3rem] space-y-6 group hover:border-[#D4AF37] transition-all">
          <Cpu className="text-gray-300 group-hover:text-[#D4AF37] transition-colors" size={32} />
          <h3 className="text-xl font-serif italic text-black">AI Tax Vault</h3>
          <p className="text-[15px] text-gray-500 font-light">A simulation environment for executing autonomous fiscal scenarios and risk modeling.</p>
        </div>
        <div className="p-10 bg-white border border-gray-50 rounded-[3rem] space-y-6 group hover:border-[#D4AF37] transition-all">
          <ShieldCheck className="text-gray-300 group-hover:text-[#D4AF37] transition-colors" size={32} />
          <h3 className="text-xl font-serif italic text-black">2026 Compliance</h3>
          <p className="text-[15px] text-gray-500 font-light">All data points are continuously synchronized with the latest OECD Pillar Two protocols.</p>
        </div>
      </section>

      {/* 4. SEO FOOTER */}
      <section className="max-w-4xl mx-auto px-8 py-24 bg-black rounded-[5rem] text-center space-y-8 shadow-2xl">
        <Clock className="mx-auto text-[#D4AF37] opacity-30" size={48} />
        <h3 className="text-2xl font-serif italic text-white">Built for Speed & Autonomy</h3>
        <p className="text-gray-400 font-light leading-relaxed italic text-[16px] px-10">
          We are committed to maintaining this platform as a fast, reliable, and free public utility for the global professional community.
        </p>
      </section>
    </div>
  );
}