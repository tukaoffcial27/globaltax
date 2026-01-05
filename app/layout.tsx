import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "GlobalTax Laboratory | 2026 Fiscal Intelligence",
  description: "High-fidelity tax treaty simulations and jurisdictional intelligence matrix for global professionals.",
  verification: {
    google: "PwyP3PwrVtnSEF8EtLTs_LjdrA6SpeduAPLt-mohups",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google AdSense Script Otomatis */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6834526241041119"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-[#FDFCFB] antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>

        {/* UNIT IKLAN DISPLAY ADSENSE */}
        <div className="max-w-7xl mx-auto px-6 py-8 w-full overflow-hidden">
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-6834526241041119"
               data-ad-slot="4969932592"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script
            dangerouslySetInnerHTML={{
              __html: '(adsbygoogle = window.adsbygoogle || []).push({});',
            }}
          />
        </div>

        <Footer />
      </body>
    </html>
  );
}