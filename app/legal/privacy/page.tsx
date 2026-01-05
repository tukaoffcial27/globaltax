export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-32 px-8 text-black">
      <h1 className="text-5xl font-serif italic mb-12">Privacy <span className="text-[#D4AF37]">Policy</span></h1>
      <div className="prose prose-sm text-gray-500 font-light leading-loose space-y-6">
        <p>At GlobalTax Laboratory, we operate with a "Zero-Retention" policy. Since all simulations are processed locally or via Bring-Your-Own-Key (BYOK) AI models, your financial data never touches our permanent databases. This is the cornerstone of our elite privacy standard.</p>
        <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your simulation results are temporary and encrypted during your session.</p>
      </div>
    </div>
  );
}