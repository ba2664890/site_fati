'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#projets', label: 'Projets' },
  { href: '#equipe', label: 'Équipe' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f1415]/90 backdrop-blur-md border-b border-[#1A9E97]/10 shadow-sm'
          : 'bg-[#0f1415]/80 backdrop-blur-md border-b border-[#1A9E97]/10'
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-16 py-2 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpeg"
            alt="FATI Logo"
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span
            className="text-[28px] font-extrabold text-[#dfe3e4] tracking-tighter"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            FATI
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#c3c7cc] hover:text-[#67d8d0] transition-colors uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="bg-[#1A9E97] text-white px-12 py-3 rounded-lg font-bold hover:bg-[#67d8d0] transition-all active:scale-95 hidden md:block"
          style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Démarrer
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#dfe3e4] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0f1415]/95 backdrop-blur-md border-t border-[#1A9E97]/10 px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#c3c7cc] hover:text-[#67d8d0] transition-colors uppercase tracking-widest py-2"
                style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              className="bg-[#1A9E97] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#67d8d0] transition-all w-full mt-2"
              style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
              onClick={() => {
                setIsOpen(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Démarrer
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
