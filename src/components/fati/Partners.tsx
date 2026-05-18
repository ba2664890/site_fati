'use client'

import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { ExternalLink, Building2, GraduationCap, Cpu, Globe2, Cloud, Network } from 'lucide-react'

interface Partner {
  id: string
  name: string
  logo: string
  website: string
  category: string
  description: string
  order: number
}


const categoryConfig: Record<string, { icon: React.FC<{ size?: number; className?: string }>, color: string, bg: string }> = {
  'Institutionnel': { icon: Building2,      color: '#1A9E97', bg: '#1A9E9712' },
  'Académique':     { icon: GraduationCap,   color: '#0D7A74', bg: '#0D7A7412' },
  'Technologie':    { icon: Cpu,             color: '#1C3547', bg: '#1C354712' },
  'Écosystème':     { icon: Network,         color: '#20a19a', bg: '#20a19a12' },
  'Cloud & Infra':  { icon: Cloud,           color: '#496175', bg: '#49617512' },
}

const DEFAULT_CAT = { icon: Globe2, color: '#1A9E97', bg: '#1A9E9712' }

export function Partners() {
  const { data } = useQuery({
    queryKey: ['partners'],
    queryFn: async () => {
      const res = await fetch('/api/partners')
      const json = await res.json()
      return json.data as Partner[]
    },
  })

  const partners = data || []

  return (
    <section className="bg-white py-28 px-4 md:px-16 overflow-hidden" id="partenaires">
      <div className="max-w-[1440px] mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span
            className="inline-block text-[#1A9E97] mb-4 uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#1A9E97]/25 bg-[#1A9E97]/6"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '11px', fontWeight: 700 }}
          >
            Écosystème
          </span>
          <h2
            className="text-[#0a0f10] mt-4"
            style={{ fontFamily: 'var(--font-syne)', fontSize: '40px', fontWeight: 800, lineHeight: '1.15' }}
          >
            Nos Partenaires Stratégiques
          </h2>
          <p
            className="text-[#0a0f10]/55 mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
          >
            FATI s&apos;appuie sur un écosystème d&apos;excellence — institutions publiques, universités, 
            acteurs tech et partenaires internationaux — pour maximiser son impact en Afrique.
          </p>
        </motion.div>

        {/* ── Partner grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, i) => {
            const cat = categoryConfig[partner.category] ?? DEFAULT_CAT
            const Icon = cat.icon
            return (
              <motion.a
                key={partner.id}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -6,
                  boxShadow: `0 20px 40px -12px ${cat.color}28`,
                  borderColor: `${cat.color}40`,
                  transition: { duration: 0.25 },
                }}
                className="group block bg-[#F8FAFB] rounded-2xl border border-[#0a0f10]/6 p-7 cursor-pointer transition-colors duration-200"
              >
                {/* Top row: logo/icon + category badge */}
                <div className="flex items-start justify-between mb-5">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 object-contain"
                    />
                  ) : (
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: cat.bg }}
                    >
                      <Icon size={26} style={{ color: cat.color }} />
                    </div>
                  )}
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border"
                    style={{
                      fontFamily: 'var(--font-space-mono)',
                      color: cat.color,
                      borderColor: `${cat.color}35`,
                      background: cat.bg,
                    }}
                  >
                    {partner.category}
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="text-[#0a0f10] mb-3 leading-snug group-hover:text-[#1A9E97] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-syne)', fontSize: '18px', fontWeight: 700 }}
                >
                  {partner.name}
                </h3>

                {/* Description */}
                <p
                  className="text-[#0a0f10]/55 mb-5 leading-relaxed"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', lineHeight: '1.7' }}
                >
                  {partner.description}
                </p>

                {/* CTA link */}
                <div
                  className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-space-mono)', color: cat.color }}
                >
                  Voir le site
                  <ExternalLink size={12} />
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* ── CTA band ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 rounded-3xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14"
          style={{ background: 'linear-gradient(135deg, #1C3547 0%, #1A9E97 100%)' }}
        >
          {/* Background dots */}
          <div className="absolute inset-0 neural-bg opacity-10 pointer-events-none" />
          <div className="relative">
            <p
              className="text-white/70 mb-1 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-space-mono)', fontSize: '11px' }}
            >
              Partenariat
            </p>
            <h3
              className="text-white leading-tight"
              style={{ fontFamily: 'var(--font-syne)', fontSize: '28px', fontWeight: 800 }}
            >
              Vous souhaitez collaborer avec FATI ?
            </h3>
            <p
              className="text-white/65 mt-2 max-w-lg"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', lineHeight: '1.65' }}
            >
              Que vous soyez une institution, une startup ou un bailleur de fonds, 
              construisons ensemble l&apos;avenir numérique de l&apos;Afrique.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="relative flex-shrink-0 bg-white text-[#1A9E97] px-8 py-4 rounded-xl font-bold transition-all duration-200"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', letterSpacing: '0.05em' }}
          >
            DEVENIR PARTENAIRE
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
