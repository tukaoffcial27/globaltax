'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Database, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Globe, 
  Shield, 
  Zap, 
  Cpu,
  BookOpen,
  BarChart3,
  Scale,
  Info // Ikon untuk halaman About
} from 'lucide-react'

// Menggunakan export default agar tidak terjadi error undefined di RootLayout
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // REVISI: Mengganti Intelligence menjadi About sesuai instruksi
  const navLinks = [
    { name: 'Encyclopedia', href: '/encyclopedia', icon: BookOpen },
    { name: 'About', href: '/about', icon: Info },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between">
          {/* Logo - Tetap Sesuai File Asli */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                <Database className="text-[#D4AF37]" size={20} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AF37] rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif italic font-bold tracking-tight text-black group-hover:text-[#D4AF37] transition-colors">
                GlobalTax
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 -mt-1">
                Laboratory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  // REVISI: Font size diperbesar ke text-[16px] sesuai instruksi
                  className={`relative group flex items-center gap-2 py-2 text-[16px] font-medium transition-colors ${
                    isActive(link.href) ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  <link.icon 
                    size={18} 
                    className={`transition-colors ${
                      isActive(link.href) ? 'text-[#D4AF37]' : 'text-gray-300 group-hover:text-[#D4AF37]'
                    }`} 
                  />
                  {link.name}
                  {isActive(link.href) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            <div className="h-6 w-[1px] bg-gray-100" />

            {/* AI Tax Vault Button */}
            <Link 
              href="/ai-vault"
              className="group relative inline-flex items-center gap-3 bg-black text-white px-8 py-3.5 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <div className="flex flex-col items-end">
                  {/* REVISI: Teks diganti menjadi Free Access karena tidak berbayar */}
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37]/80">Free Access</span>
                  <span className="text-[13px] font-bold uppercase tracking-widest">AI Tax Vault</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                  <Cpu size={16} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile Toggle - Tetap Sesuai File Asli */}
          <button 
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Tetap Sesuai File Asli dengan perubahan Link */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="p-6 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <link.icon size={18} className="text-gray-400 group-hover:text-[#D4AF37]" />
                </div>
                <span className="font-medium text-gray-900">{link.name}</span>
              </div>
              <ChevronRight size={16} className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
          
          <Link 
            href="/ai-vault"
            className="flex items-center justify-between p-4 rounded-2xl bg-black text-white group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Cpu size={18} className="text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]/80">Launch Free</span>
                <span className="font-bold">AI Tax Vault</span>
              </div>
            </div>
            <ChevronRight size={16} className="text-white/30 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </nav>
  )
}