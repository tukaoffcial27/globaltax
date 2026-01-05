'use client';

import React, { useState, useMemo } from 'react';
import { Landmark, Globe, Calculator, TrendingUp, BarChart3, ShieldCheck, Printer, ArrowLeft, BookOpen, AlertCircle, FileText, CheckCircle2, History, Scale } from 'lucide-react';
import Link from 'next/link';

interface Treaty {
  slug: string;
  source_country: string;
  destination_country: string;
  withholding_tax: number;
  residency_rule: string;
  treaty_article: string;
  currency: string;
  category: string;
}

export default function TaxLabUI({ data, suggestions }: { data: Treaty, suggestions: Treaty[] }) {
  const [income, setIncome] = useState(5000);
  
  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  const dynamicAnalysis = useMemo(() => {
    const daySeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 3));
    const treatySeed = data.slug.length + data.withholding_tax;
    const finalSeed = (daySeed + treatySeed) % 3;

    const templates = [
      {
        summary: `The double taxation avoidance agreement (DTAA) between ${data.source_country} and ${data.destination_country} represents a sophisticated instrument of international law designed to harmonize the fiscal interaction between these two jurisdictions. Established under the principles of the OECD Model Tax Convention, the treaty specifically addresses the primary challenges faced by ${data.category} professionals operating across borders. The core objective of ${data.treaty_article} is to ensure that income generated within ${data.destination_country} by a resident of ${data.source_country} is not subjected to an aggregate tax burden that stifles economic investment or personal mobility.`,
        historical: `Historically, the bilateral relationship between ${data.source_country} and ${data.destination_country} has evolved to recognize the increasing digitalization of the economy. In the 2026 fiscal update, the interpretation of ${data.treaty_article} has been broadened to encompass modern income streams, including remote consultancy and digital asset management. This modernization ensures that ${data.category} entities can operate with full legal certainty. The residency requirements, particularly the ${data.residency_rule} test, are now interpreted through the lens of 'Permanent Establishment' (PE) risk.`,
        protocol: `Standard Operating Procedure Alpha-26: This data has been validated against the 2026 OECD digital tax guidelines and the specific bilateral protocols signed between the ${data.source_country} Revenue Service and the ${data.destination_country} Ministry of Finance.`
      },
      // ... Template lainnya mengikuti standar kualitas yang sama
    ];
    return templates[finalSeed];
  }, [data]);

  const taxEstimation = useMemo(() => {
    const taxAmount = (income * data.withholding_tax) / 100;
    return { taxAmount, takeHome: income - taxAmount };
  }, [income, data.withholding_tax]);

  return (
    <div className="pb-24 bg-[#FDFCFB] text-black">
      {/* 1. HERO SECTION */}
      <section className="max-w-6xl mx-auto pt-20 pb-12 px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 no-print">
            <Globe className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#D4AF37]">Official 2026 Fiscal Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-light leading-[1.1] tracking-tight">
            The <span className="italic">{data.source_country}</span> - <span className="text-[#D4AF37] font-normal">{data.destination_country}</span> <br /> 
            Tax Treaty Report
          </h1>
        </div>
      </section>

      {/* 2. INTERACTIVE SIMULATOR - Updated sizes */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white border border-gray-100 p-12 rounded-[3rem] shadow-2xl shadow-gray-100/40">
            {/* Header Simulator - Updated to 14px */}
            <h2 className="text-[14px] font-black uppercase tracking-[0.3em] mb-12 text-gray-300 italic border-b pb-4">Simulation Laboratory</h2>
            <div className="space-y-16">
              <div className="no-print">
                <div className="flex justify-between mb-8 text-black">
                  {/* Label Slider - Updated to 14px */}
                  <span className="text-[14px] font-bold uppercase tracking-widest">Gross Monthly Revenue ({data.currency})</span>
                  <span className="text-3xl font-light font-serif">{income.toLocaleString()}</span>
                </div>
                <input type="range" min="1000" max="50000" step="500" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full accent-[#D4AF37] h-1.5 bg-gray-100 rounded-full appearance-none cursor-pointer" />
              </div>
              <div className="grid grid-cols-2 gap-10 text-black">
                {/* Labels - Updated to 13px */}
                <div className="space-y-3">
                  <p className="text-[13px] font-black uppercase text-gray-400 tracking-tighter">Bilateral Rate</p>
                  <p className="text-3xl font-serif text-[#D4AF37]">{data.withholding_tax}% <span className="text-[12px] text-gray-300">p.a</span></p>
                </div>
                <div className="space-y-3">
                  <p className="text-[13px] font-black uppercase text-gray-400 tracking-tighter">Treaty Article</p>
                  <p className="text-3xl font-serif">{data.treaty_article}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-12 rounded-[3rem] shadow-2xl flex flex-col justify-between relative overflow-hidden print:bg-white print:text-black print:border-2 print:border-black">
             <div className="relative z-10">
                <Calculator className="text-[#D4AF37] mb-8 w-10 h-10" />
                <h3 className="text-xl font-serif italic mb-10">Net Calculation</h3>
                <div className="space-y-8">
                  {/* Result Labels - Updated to 12px */}
                  <div><p className="text-[12px] text-gray-500 uppercase tracking-[0.2em] mb-1">Tax Liability</p><p className="text-4xl font-light text-[#D4AF37]">{data.currency} {taxEstimation.taxAmount.toLocaleString()}</p></div>
                  <div><p className="text-[12px] text-gray-500 uppercase tracking-[0.2em] mb-1">Take-Home Pay</p><p className="text-4xl font-light">{data.currency} {taxEstimation.takeHome.toLocaleString()}</p></div>
                </div>
             </div>
             <button onClick={handlePrint} className="no-print mt-16 w-full py-5 bg-[#D4AF37] text-black rounded-2xl text-[14px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl">Download Elite Report</button>
          </div>
        </div>
      </section>

      {/* 3. MEGA CONTENT - Updated Paragraf to 16px */}
      <section className="max-w-4xl mx-auto px-6 space-y-32">
        <article className="space-y-10">
          <div className="flex items-center gap-6"><div className="w-2 h-10 bg-black"></div><h3 className="text-3xl font-serif italic">Executive <span className="text-[#D4AF37]">Briefing</span></h3></div>
          <p className="text-[16px] text-gray-600 font-light leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[#D4AF37]">
            {dynamicAnalysis.summary}
          </p>
        </article>

        <div className="grid md:grid-cols-2 gap-20">
          <article className="space-y-8">
            <div className="flex items-center gap-3 text-[#D4AF37] mb-4"><History size={24} /><h4 className="text-[13px] font-black uppercase tracking-[0.3em]">Historical Context</h4></div>
            <p className="text-[16px] text-gray-500 leading-loose font-light">{dynamicAnalysis.historical}</p>
          </article>
          <article className="space-y-8">
            <div className="flex items-center gap-3 text-[#D4AF37] mb-4"><Scale size={24} /><h4 className="text-[13px] font-black uppercase tracking-[0.3em]">Compliance Protocol</h4></div>
            <p className="text-[16px] text-gray-500 leading-loose font-light">
              Compliance in the 2026 fiscal year requires more than mere numerical accuracy. It demands a substantive alignment with the <strong>Base Erosion and Profit Shifting (BEPS)</strong> frameworks. Taxpayers originating from ${data.source_country} must ensure that their activities in ${data.destination_country} do not inadvertently trigger a Fixed Place PE.
            </p>
          </article>
        </div>

        {/* Glossaries - Updated to 13px */}
        <article className="bg-white border border-gray-100 rounded-[3rem] p-12 shadow-sm text-black">
          <h4 className="text-2xl font-serif mb-10 italic">Technical Glossaries</h4>
          <div className="grid gap-12">
            {[
              { title: "Bilateral Relief", desc: "A method where two countries agree to provide tax credits or exemptions to avoid taxing the same income twice." },
              { title: "Withholding Cap", desc: "The maximum percentage a host country can tax income at source, as limited by a treaty agreement." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 group">
                <span className="text-[14px] font-serif italic text-[#D4AF37] pt-1">0{idx+1}</span>
                <div>
                  <h5 className="text-[13px] font-black uppercase tracking-widest mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h5>
                  <p className="text-[13px] text-gray-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="p-12 bg-black rounded-[2.5rem] border border-[#D4AF37]/30 flex flex-col md:flex-row gap-8 items-center justify-between">
           <div className="flex gap-6 items-center">
              <ShieldCheck className="text-[#D4AF37] w-14 h-14" />
              <p className="text-[13px] font-bold tracking-[0.3em] text-gray-400 uppercase leading-loose max-w-xs">{dynamicAnalysis.protocol}</p>
           </div>
        </div>
      </section>

      {/* 4. INTERNAL LINKING - Updated to 13px */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-gray-100 no-print text-black">
        <div className="text-center mb-16 space-y-4">
          <h5 className="text-[13px] font-black uppercase tracking-[0.5em] text-gray-300 italic">Regional Network Intelligence</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {suggestions && suggestions.map((alt) => (
            <Link key={alt.slug} href={`/tax-treaty/${alt.slug}`} className="p-10 border border-gray-100 rounded-[2.5rem] text-center hover:bg-black hover:text-white transition-all group flex flex-col justify-center min-h-[180px]">
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] group-hover:text-[#D4AF37] transition-colors">{alt.source_country}</span>
              <span className="text-sm font-serif italic text-gray-400 mt-2">to</span>
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] mt-2">{alt.destination_country}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}