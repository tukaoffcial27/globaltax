import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ShieldCheck, Database, Info, Cpu, Clock, Sparkles, FileText, Landmark, Scale 
} from 'lucide-react';
import treatyDataRaw from '@/data/treaties.json';

interface Treaty {
  pair: string;
  dividend: string;
  interest: string;
  royalty: string;
  residency: string;
  article: string;
  notes?: string;
}

const treatyData = (treatyDataRaw as unknown) as Treaty[];

const createSlug = (pair: string) => {
  if (!pair) return "";
  const parts = pair.split(/[-–—]/); 
  if (parts.length < 2) return "";
  const source = parts[0].trim().toLowerCase().replace(/\s+/g, '-');
  const target = parts[1].trim().toLowerCase().replace(/\s+/g, '-');
  return `tax-treaty-${source}-to-${target}`;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  return treatyData
    .filter(t => t && t.pair && t.pair.includes('-')) 
    .slice(0, 200)
    .map((t) => ({ slug: createSlug(t.pair) }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const data = treatyData.find((t) => t.pair && createSlug(t.pair) === slug);
  if (!data) return { title: 'Tax Analysis' };
  return { 
    title: `2026 Analysis: ${data.pair} | GlobalTax Lab`,
    description: `Professional tax guidance for ${data.pair.split('-')[0]} regarding ${data.pair.split('-')[1]} for the 2026 fiscal year.`
  };
}

export default async function TaxTreatyDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const currentData = treatyData.find((t) => t.pair && createSlug(t.pair) === slug);

  if (!currentData) notFound();

  const [professionName, painPointName] = currentData.pair.split(/[-–—]/).map(s => s.trim());
  
  // Rotasi konten setiap 3 hari
  const timeSeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 3));
  const vIdx = timeSeed % 4; // Ditambah menjadi 4 variasi

  const technicalIntros = [
    `The dynamic fiscal landscape of 2026 demands that every ${professionName} remains vigilant regarding ${painPointName}. Failure to align with local Article ${currentData.article} protocols can lead to unforeseen liabilities.`,
    `As global tax authorities increase transparency, the ${professionName} sector must adapt to new standards in ${painPointName} to ensure sustained financial mobility and regulatory compliance.`,
    `For any ${professionName} operating globally, addressing the risks associated with ${painPointName} is paramount for long-term capital preservation under the current tax treaty framework.`,
    `The intersection of professional service delivery for a ${professionName} and the technicalities of ${painPointName} forms a critical part of the modern 2026 global tax architecture.`
  ];

  const complianceNotes = [
    `Specifically, the ${currentData.royalty} royalty rate under Article ${currentData.article} provides a significant competitive advantage for ${professionName} entities. This necessitates a proactive approach to residency validation.`,
    `Financial data for 2026 suggests that a ${professionName} can optimize their effective tax rate to ${currentData.interest} on interest income by leveraging the specific bilateral instruments outlined in this registry.`,
    `Market outlook for ${professionName} professionals indicates that ${painPointName} will remain a primary focus for audit authorities, making the ${currentData.dividend} dividend ceiling a critical metric.`,
    `Strategic tax planning for ${professionName} involves mitigating ${painPointName} through the Article ${currentData.article} mechanism, ensuring the lowest possible withholding tax exposure.`
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-black pb-32 font-sans">
      <section className="max-w-6xl mx-auto pt-24 pb-12 px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black text-[#D4AF37] text-[13px] font-black uppercase tracking-[0.4em]">
          <Database className="w-4 h-4" /> Official 2026 Registry
        </div>
        <h1 className="text-6xl font-serif italic text-black leading-tight">
          {professionName} <span className="text-[#D4AF37]">vs</span> {painPointName}
        </h1>
      </section>

      {/* Grid Data Teknis */}
      <section className="max-w-5xl mx-auto px-8 mb-24">
        <div className="bg-white border border-gray-100 rounded-[4rem] overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-50 text-center">
            <div className="p-14 space-y-4 hover:bg-gray-50 transition-colors">
              <p className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-400">WHT Dividends</p>
              <p className="text-7xl font-serif italic">{currentData.dividend}</p>
            </div>
            <div className="p-14 space-y-4 hover:bg-gray-50 transition-colors">
              <p className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-400">WHT Interest</p>
              <p className="text-7xl font-serif italic">{currentData.interest}</p>
            </div>
            <div className="p-14 space-y-4 hover:bg-gray-50 transition-colors">
              <p className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-400">WHT Royalties</p>
              <p className="text-7xl font-serif italic">{currentData.royalty}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Narasi Panjang untuk SEO */}
      <section className="max-w-4xl mx-auto px-8 space-y-16 text-left">
        <div className="prose prose-gold max-w-none text-gray-600 font-light leading-relaxed text-[18px]">
          <h2 className="text-4xl font-serif italic text-black mb-10 underline decoration-[#D4AF37] decoration-2 underline-offset-8">
            Technical Jurisdictional Review
          </h2>
          <p className="mb-8 drop-cap first-letter:text-6xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-black">
            {technicalIntros[vIdx]} {complianceNotes[vIdx]}
          </p>

          <div className="bg-black rounded-[3.5rem] p-12 text-white shadow-2xl my-20 border border-gray-800">
            <div className="flex items-center gap-4 mb-8">
              <Sparkles className="text-[#D4AF37]" size={32} />
              <h3 className="text-2xl font-serif italic uppercase tracking-widest">2026 Compliance Roadmap</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="font-bold text-[#D4AF37] uppercase text-[12px] tracking-widest">Procedural Step 1</p>
                <p className="text-gray-300 italic">Verify your tax residency status as a {professionName} under Article {currentData.article}.</p>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#D4AF37] uppercase text-[12px] tracking-widest">Procedural Step 2</p>
                <p className="text-gray-300 italic">Submit necessary documentation for {painPointName} mitigation to the local tax authority.</p>
              </div>
            </div>
            <Link href="/ai-vault" className="mt-12 inline-flex items-center gap-4 bg-[#D4AF37] text-black px-12 py-5 rounded-2xl font-black uppercase text-[12px] hover:bg-white transition-all">
               <Cpu size={20} /> Execute AI Vault Simulation
            </Link>
          </div>

          <p className="text-gray-400 italic text-[15px] border-t border-gray-100 pt-12">
             *Reference Note: {currentData.notes || 'Standard 2026 global treaty protocols apply.'}
          </p>
        </div>
      </section>
    </div>
  );
}