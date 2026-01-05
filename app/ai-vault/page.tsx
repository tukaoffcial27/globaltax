'use client';

import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { 
  Cpu, ShieldCheck, Key, Save, Loader2, 
  Sparkles, FileText, Printer, Zap, AlertCircle,
  BookOpen, BarChart3, Binary, Scale, Landmark, Settings2, ShieldAlert
} from 'lucide-react';

export default function AIVaultPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [simulationResult, setSimulationResult] = useState<string | null>(null);
  
  // RETAIN ALL 5 PLATFORMS WITH 2026 DATABASE SYNC
  const [keys, setKeys] = useState({
    openai_key: '',
    anthropic_key: '',
    google_key: '',
    mistral_key: '',
    llama_key: ''
  });

  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .maybeSingle();
        
        if (data) {
          setKeys({
            openai_key: data.openai_key || '',
            anthropic_key: data.anthropic_key || '',
            google_key: data.google_key || '',
            mistral_key: data.mistral_key || '',
            llama_key: data.llama_key || ''
          });
        }
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  const handleSaveKeys = async () => {
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { error } = await supabase
        .from('profiles')
        .update({
          openai_key: keys.openai_key,
          anthropic_key: keys.anthropic_key,
          google_key: keys.google_key,
          mistral_key: keys.mistral_key,
          llama_key: keys.llama_key
        })
        .eq('id', user.id);
      
      if (!error) {
        alert('Intelligence Vault Updated Successfully');
      } else {
        alert('Update failed: ' + error.message);
      }
    }
    setSaving(false);
  };

  // REFINED 2026 CALCULATION FORMULA USING GEMINI 2.0 FLASH
  const handleRunSimulation = async () => {
    if (!prompt) return alert('Please enter a tax scenario');
    if (!keys.google_key) return alert('Please provide your Google Gemini API Key first');

    setIsCalculating(true);
    setSimulationResult(null);

    try {
      // UPGRADED TO GEMINI 2.0 FLASH (LATEST 2026 STANDARD)
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${keys.google_key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `
            Act as a Senior International Tax Strategist using 2026 Global Standards. 
            Analyze this scenario: "${prompt}"

            Apply this EXACT Formula for the report:
            1. JURISDICTIONAL IDENTIFICATION: Clearly define Source vs. Residence countries.
            2. DTAA VALIDATION: Verify 2026 bilateral treaty status.
            3. ARTICLE MAPPING: Reference specific articles (Dividends Art 10, Interest Art 11, etc.).
            4. TAX LIABILITY CALCULATION: Explicitly show the WHT rate math based on treaty rates.
            5. ADMINISTRATIVE COMPLIANCE: List required documentation (CoR, Form DGT, etc.).
          ` }] }]
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || 'Model version mismatch or key invalid');
      }

      const text = data.candidates[0].content.parts[0].text;
      setSimulationResult(text);
    } catch (error: any) {
      setSimulationResult(`Error: Connection failed. ${error.message}. Please verify your key supports Gemini 2.0 Flash.`);
    } finally {
      setIsCalculating(false);
    }
  };

  // ROBUST PRINT LOGIC FOR THE REPORT
  const handlePrint = () => {
    window.print();
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB]">
      <Loader2 className="animate-spin text-[#D4AF37]" size={40} />
    </div>
  );

  const hasKeys = Object.values(keys).some(k => k.trim() !== '');

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-black pb-32 font-sans">
      
      {/* 1. HERO SECTION - RETAINED */}
      <section className="max-w-6xl mx-auto pt-24 pb-12 px-8 text-center space-y-6 no-print">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black text-[#D4AF37] text-[12px] font-black uppercase tracking-[0.4em]">
          <ShieldCheck className="w-4 h-4" /> Secure Intelligence Hub
        </div>
        <h1 className="text-6xl font-serif italic leading-tight text-black">
          AI Tax <span className="text-[#D4AF37]">Vault.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-400 font-light italic text-[18px] leading-relaxed">
          The Vault is your private engine room. Synchronize your elite 2026 API assets to bypass limits and gain direct access to raw LLM reasoning.
        </p>
      </section>

      {/* 2. HOW IT WORKS GRID - RETAINED */}
      <section className="max-w-6xl mx-auto px-8 mb-20 grid md:grid-cols-3 gap-8 no-print">
        <div className="p-10 bg-white border border-gray-100 rounded-[3rem] space-y-4 shadow-sm border-t-4 border-t-[#D4AF37]">
          <Binary className="text-[#D4AF37]" size={32} />
          <h3 className="text-lg font-serif italic">Bring Your Own Key</h3>
          <p className="text-gray-400 text-[14px] font-light italic leading-relaxed">
            By using your own credentials, you maintain absolute control over your AI expenditure and model selection, bypassing third-party markup fees.
          </p>
        </div>
        <div className="p-10 bg-white border border-gray-100 rounded-[3rem] space-y-4 shadow-sm">
          <BookOpen className="text-[#D4AF37]" size={32} />
          <h3 className="text-lg font-serif italic">Autonomous Logic</h3>
          <p className="text-gray-400 text-[14px] font-light italic leading-relaxed">
            Unleash LLM reasoning on raw treaty texts. Our laboratory provides the data bridge while your keys provide the analytical horsepower.
          </p>
        </div>
        <div className="p-10 bg-white border border-gray-100 rounded-[3rem] space-y-4 shadow-sm">
          <ShieldCheck className="text-[#D4AF37]" size={32} />
          <h3 className="text-lg font-serif italic">Privacy Guaranteed</h3>
          <p className="text-gray-400 text-[14px] font-light italic leading-relaxed">
            Prompts and analysis results are never cached or stored on our servers. Your fiscal intelligence remains within your private authenticated session.
          </p>
        </div>
      </section>

      {/* 3. API KEY MANAGEMENT - LATEST 2026 MODELS - RETAINED */}
      <section className="max-w-6xl mx-auto px-8 mb-20 no-print">
        <div className="bg-white border border-gray-100 rounded-[4rem] p-12 shadow-2xl shadow-gray-100/50">
          <div className="flex items-center gap-4 mb-12 border-b border-gray-50 pb-8">
            <Key className="text-[#D4AF37]" size={28} />
            <h2 className="text-[14px] font-black uppercase tracking-[0.4em]">Initialize 2026 AI Engines</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="p-8 bg-[#FDFCFB] border border-gray-100 rounded-[2.5rem] space-y-4 shadow-inner">
              <div className="flex justify-between items-center">
                <p className="font-bold text-black uppercase tracking-widest text-[11px]">OpenAI (GPT-5.2)</p>
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${keys.openai_key ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{keys.openai_key ? 'ACTIVE' : 'OFFLINE'}</span>
              </div>
              <input type="password" value={keys.openai_key} onChange={(e) => setKeys({...keys, openai_key: e.target.value})} placeholder="sk-proj-..." className="w-full bg-white border border-gray-100 rounded-xl py-3 px-4 text-[13px] focus:outline-none focus:border-[#D4AF37]" />
            </div>
            
            <div className="p-8 bg-[#FDFCFB] border border-gray-100 rounded-[2.5rem] space-y-4 shadow-inner">
              <div className="flex justify-between items-center">
                <p className="font-bold text-black uppercase tracking-widest text-[11px]">Anthropic (Claude 4.5)</p>
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${keys.anthropic_key ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{keys.anthropic_key ? 'ACTIVE' : 'OFFLINE'}</span>
              </div>
              <input type="password" value={keys.anthropic_key} onChange={(e) => setKeys({...keys, anthropic_key: e.target.value})} placeholder="xkeys-..." className="w-full bg-white border border-gray-100 rounded-xl py-3 px-4 text-[13px] focus:outline-none focus:border-[#D4AF37]" />
            </div>

            <div className="p-8 bg-[#FDFCFB] border border-gray-100 rounded-[2.5rem] space-y-4 shadow-inner">
              <div className="flex justify-between items-center">
                <p className="font-bold text-black uppercase tracking-widest text-[11px]">Google Gemini (2.0 Flash)</p>
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${keys.google_key ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{keys.google_key ? 'ACTIVE' : 'OFFLINE'}</span>
              </div>
              <input type="password" value={keys.google_key} onChange={(e) => setKeys({...keys, google_key: e.target.value})} placeholder="AIzaSy..." className="w-full bg-white border border-gray-100 rounded-xl py-3 px-4 text-[13px] focus:outline-none focus:border-[#D4AF37]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#FDFCFB] border border-gray-100 rounded-[2.5rem] space-y-4 shadow-inner">
              <p className="font-bold text-black uppercase tracking-widest text-[11px]">Mistral AI</p>
              <input type="password" value={keys.mistral_key} onChange={(e) => setKeys({...keys, mistral_key: e.target.value})} placeholder="Mistral API Key..." className="w-full bg-white border border-gray-100 rounded-xl py-3 px-4 text-[13px] focus:outline-none focus:border-[#D4AF37]" />
            </div>
            <div className="p-8 bg-[#FDFCFB] border border-gray-100 rounded-[2.5rem] space-y-4 shadow-inner">
              <p className="font-bold text-black uppercase tracking-widest text-[11px]">Meta Llama</p>
              <input type="password" value={keys.llama_key} onChange={(e) => setKeys({...keys, llama_key: e.target.value})} placeholder="Llama API Key..." className="w-full bg-white border border-gray-100 rounded-xl py-3 px-4 text-[13px] focus:outline-none focus:border-[#D4AF37]" />
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center">
            <button onClick={handleSaveKeys} disabled={saving} className="px-14 py-6 bg-black text-[#D4AF37] rounded-3xl text-[14px] font-black uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-black transition-all shadow-2xl">
              {saving ? <Loader2 className="animate-spin" /> : <><Save size={18} className="inline mr-3" /> Synchronize Intelligence Vault</>}
            </button>
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC INTERFACE: COMPREHENSIVE INFO VS CALCULATOR */}
      <section className="max-w-6xl mx-auto px-8">
        <div className={`p-16 rounded-[4rem] border-2 border-dashed ${hasKeys ? 'bg-white border-gray-100 shadow-xl' : 'bg-gray-50 border-gray-200'}`}>
          {!hasKeys ? (
             <div className="space-y-20 animate-in fade-in duration-1000 no-print">
               <div className="text-center space-y-6">
                 <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto"><AlertCircle className="text-gray-300" size={32} /></div>
                 <h3 className="text-3xl font-serif italic text-black">Autonomous Engine Offline</h3>
                 <p className="text-gray-400 italic font-light max-w-2xl mx-auto leading-relaxed">
                   The GlobalTax Laboratory remains in standby. Synchronizing your API keys unlocks professional-grade operations including article dissection and legal benchmarking.
                 </p>
               </div>
               
               <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { icon: <FileText />, title: "Treaty Dissection", desc: "Automated article-by-article legal analysis of bilateral tax instruments." },
                    { icon: <Scale />, title: "Legal Benchmarking", desc: "Analyze WHT liability across 150+ jurisdictional corridors simultaneously." },
                    { icon: <Printer />, title: "Audit-Ready Reports", desc: "Generate professional documentation for board review and compliance filings." },
                    { icon: <Zap />, title: "Instant Modeling", desc: "Simulate corporate repatriation and dividend flow optimization in real-time." }
                  ].map((feat, i) => (
                    <div key={i} className="p-10 bg-white/60 border border-gray-100 rounded-[2.5rem] space-y-4 text-center group transition-all hover:bg-white hover:shadow-xl">
                       <div className="text-gray-300 group-hover:text-[#D4AF37] transition-colors flex justify-center">{feat.icon}</div>
                       <h4 className="text-[11px] font-black uppercase tracking-widest text-black">{feat.title}</h4>
                       <p className="text-[12px] text-gray-400 font-light leading-relaxed italic">{feat.desc}</p>
                    </div>
                  ))}
               </div>
             </div>
          ) : (
            <div className="space-y-12 animate-in fade-in zoom-in duration-500">
               <div className="flex items-center gap-4 text-[#D4AF37] no-print">
                  <Sparkles size={28} />
                  <h2 className="text-2xl font-serif italic text-black">Precision Fiscal Calculator</h2>
               </div>
               <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6 text-left no-print">
                    <p className="text-gray-500 font-light italic leading-relaxed underline decoration-[#D4AF37]/30 decoration-2 underline-offset-8">
                        The engine is now active. Provide your specific scenario for high-fidelity dissection.
                    </p>
                    <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="e.g., A USA entity pays software royalties to an Indonesian resident..." className="w-full h-48 bg-[#FDFCFB] border border-gray-100 rounded-[2rem] p-8 text-[15px] focus:outline-none focus:border-[#D4AF37] resize-none shadow-inner" />
                    <button onClick={handleRunSimulation} disabled={isCalculating} className="w-full py-6 bg-black text-[#D4AF37] rounded-2xl text-[14px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl">
                      {isCalculating ? <Loader2 className="animate-spin" /> : <><Cpu size={18} /> Execute Intelligence Analysis</>}
                    </button>
                  </div>

                  {/* PRINTABLE RESULT AREA */}
                  <div ref={printRef} className="printable-result bg-black print:bg-white rounded-[3rem] p-12 text-white print:text-black flex flex-col shadow-2xl overflow-y-auto max-h-[600px] print:max-h-none border border-gray-800 print:border-none print:shadow-none print:p-0">
                     {simulationResult ? (
                        <div className="w-full space-y-6 animate-in fade-in duration-700">
                           <div className="flex justify-between items-center border-b border-white/10 print:border-black/10 pb-4">
                              <h3 className="text-[#D4AF37] print:text-black font-serif italic text-lg">Fiscal Intelligence Output</h3>
                              <button onClick={handlePrint} className="no-print p-2 hover:bg-white/10 rounded-lg text-[#D4AF37] transition-colors"><Printer size={20} /></button>
                           </div>
                           <div className="text-gray-300 print:text-black text-[14px] leading-relaxed text-left whitespace-pre-wrap font-light italic">
                              {simulationResult}
                           </div>
                        </div>
                     ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-8 opacity-40 py-20 no-print">
                           <Printer className="text-[#D4AF37]" size={48} />
                           <h3 className="text-xl font-serif italic">Output Awaiting Input</h3>
                           <p className="text-gray-400 font-light text-[13px] leading-relaxed italic max-w-xs mx-auto">
                              Analysis will be generated here in high-fidelity format.
                           </p>
                        </div>
                     )}
                  </div>
               </div>
            </div>
          )}
        </div>
      </section>

      {/* FIXED PRINT STYLES - Ensures PDF is never blank */}
      <style jsx global>{`
        @media print {
          /* Hide everything first */
          body * { 
            visibility: hidden; 
            margin: 0; 
            padding: 0; 
          }
          /* Specifically show the container and its content */
          .printable-result, .printable-result * { 
            visibility: visible !important; 
          }
          .printable-result { 
            position: absolute; 
            left: 0; 
            top: 0; 
            width: 100% !important; 
            background: white !important; 
            color: black !important;
            padding: 2rem !important;
            max-height: none !important;
            overflow: visible !important;
          }
          /* Hide standard elements */
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}