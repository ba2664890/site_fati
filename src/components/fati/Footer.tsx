'use client'

import { Globe } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#projets', label: 'Projets' },
  { href: '#equipe', label: 'Équipe' },
]

export function Footer() {
  return (
    <footer className="border-t border-[#43474c]/20 py-20 px-4 md:px-16" style={{ backgroundColor: '#1C3547' }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo.jpeg"
                alt="FATI Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span
                className="text-[#dfe3e4] font-bold"
                style={{ fontFamily: 'var(--font-syne)', fontSize: '24px', fontWeight: 700 }}
              >
                FATI
              </span>
            </div>
            <p
              className="text-[#c3c7cc] max-w-sm"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
            >
              Empowering the continent through sovereign intelligence. Leading AI transformation for a brighter future.
            </p>
          </div>
          <div>
            <h4
              className="text-[#dfe3e4] uppercase mb-6"
              style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
            >
              Navigation
            </h4>
            <ul className="space-y-3 text-[#c3c7cc]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#67d8d0] hover:underline transition-all"
                    style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              className="text-[#dfe3e4] uppercase mb-6"
              style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
            >
              Légal
            </h4>
            <ul className="space-y-3 text-[#c3c7cc]">
              <li>
                <a
                  href="#"
                  className="hover:text-[#67d8d0] hover:underline transition-all"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#67d8d0] hover:underline transition-all"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
                >
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#43474c]/10 pt-12 text-center">
          <p
            className="text-[#c3c7cc] opacity-60"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
          >
            © {new Date().getFullYear()} FATI - AI For Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
