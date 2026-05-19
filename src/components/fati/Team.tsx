'use client'

import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { Linkedin, Twitter, Globe, Quote } from 'lucide-react'
import { useState } from 'react'

interface TeamMember {
  id: string
  name: string
  initials: string
  role: string
  bio: string
  tagline?: string
  skills?: string   // comma-separated from DB
  linkedin?: string
  twitter?: string
  photo?: string
  order: number
}

/* Visual accent per member index (immutable, not DB-driven) */
const ACCENTS = [
  { accentColor: '#1A9E97', avatarBg: '#1C3547' },
  { accentColor: '#0D7A74', avatarBg: '#20a19a' },
]

function getImageStyle(name: string) {
  const normalizedName = name.toLowerCase()

  if (normalizedName.includes('mouhammadou')) {
    return {
      objectFit: 'cover',
      objectPosition: 'center 6%',
    } as const
  }

  if (normalizedName.includes('abdou')) {
    return {
      objectFit: 'cover',
      objectPosition: 'center 34%',
    } as const
  }

  return {
    objectFit: 'cover',
    objectPosition: 'center 24%',
  } as const
}

function TeamPhoto({
  member,
  accent,
}: {
  member: TeamMember
  accent: { accentColor: string; avatarBg: string }
}) {
  const [hasError, setHasError] = useState(false)
  const photoUrl = member.photo ?? ''

  if (!photoUrl || hasError) {
    return (
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-4"
        style={{
          background: `linear-gradient(135deg, ${accent.avatarBg}18 0%, ${accent.accentColor}10 50%, #F0F4F5 100%)`,
        }}
      >
        <motion.div
          whileHover={{ scale: 1.07 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="w-28 h-28 rounded-full flex items-center justify-center text-white"
          style={{
            background: `linear-gradient(135deg, ${accent.avatarBg}, ${accent.accentColor})`,
            fontFamily: 'var(--font-syne)',
            fontSize: '38px',
            fontWeight: 800,
            boxShadow: `0 10px 28px ${accent.accentColor}40`,
          }}
        >
          {member.initials}
        </motion.div>
        <span
          className="text-[#0a0f10]/35 text-[10px] uppercase"
          style={{ fontFamily: 'var(--font-space-mono)' }}
        >
          Photo à venir
        </span>
      </div>
    )
  }

  return (
    <img
      src={photoUrl}
      alt={member.name}
      onError={() => setHasError(true)}
      className="w-full h-full"
      style={getImageStyle(member.name)}
    />
  )
}


export function Team() {
  const { data } = useQuery({
    queryKey: ['team'],
    queryFn: async () => {
      const res = await fetch('/api/team')
      const json = await res.json()
      return json.data as TeamMember[]
    },
  })

  const team = data || []

  return (
    <section className="bg-[#F0F4F5] py-28 px-4 md:px-16" id="equipe">
      <div className="max-w-[1440px] mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span
            className="inline-block text-[#1A9E97] mb-4 uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#1A9E97]/25 bg-[#1A9E97]/8"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '11px', fontWeight: 700 }}
          >
            Leadership
          </span>
          <h2
            className="text-[#0a0f10] mt-4"
            style={{ fontFamily: 'var(--font-syne)', fontSize: '40px', fontWeight: 800, lineHeight: '1.15' }}
          >
            L&apos;Équipe Fondatrice
          </h2>
          <p
            className="text-[#0a0f10]/55 mt-4 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
          >
            Deux experts passionnés, une vision commune : faire de l&apos;IA, de la data et du digital
            des leviers d&apos;impact pour l&apos;Afrique.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {team.map((member, i) => {
            const accent = ACCENTS[i % ACCENTS.length]
            const skillList = (member.skills ?? '').split(',').filter(Boolean)
            const tagline = member.tagline ?? ''
            const linkedin = member.linkedin ?? '#'
            const twitter = member.twitter ?? '#'
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -6,
                  boxShadow: `0 24px 48px -12px ${accent.accentColor}28`,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#1A9E97]/8"
              >
                {/* Top accent bar */}
                <div
                  className="h-1"
                  style={{ background: `linear-gradient(90deg, ${accent.accentColor}, transparent)` }}
                />

                {/* Avatar zone: soft gradient header */}
                <div
                  className="relative h-80 md:h-[420px] flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${accent.avatarBg}20 0%, #F0F4F5 100%)`,
                  }}
                >
                  <TeamPhoto member={member} accent={accent} />
                </div>

                {/* Body */}
                <div className="p-8">

                  {/* Name + role */}
                  <div className="mb-5">
                    <h3
                      className="text-[#0a0f10] leading-tight"
                      style={{ fontFamily: 'var(--font-syne)', fontSize: '26px', fontWeight: 800 }}
                    >
                      {member.name}
                    </h3>
                    <span
                      className="uppercase tracking-widest mt-1 inline-block"
                      style={{
                        fontFamily: 'var(--font-space-mono)',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: accent.accentColor,
                      }}
                    >
                      {member.role}
                    </span>
                  </div>

                  {/* Quoted tagline */}
                  <div
                    className="flex gap-3 mb-5 p-4 rounded-xl border-l-4"
                    style={{
                      borderLeftColor: accent.accentColor,
                      background: `${accent.accentColor}08`,
                    }}
                  >
                    <Quote size={16} className="flex-shrink-0 mt-0.5" style={{ color: accent.accentColor }} />
                    <p
                      className="text-[#0a0f10]/65 italic leading-relaxed"
                      style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px' }}
                    >
                      {tagline}
                    </p>
                  </div>

                  {/* Bio */}
                  <p
                    className="text-[#0a0f10]/60 mb-6"
                    style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '15px', lineHeight: '1.75' }}
                  >
                    {member.bio}
                  </p>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-[11px] font-semibold border"
                        style={{
                          fontFamily: 'var(--font-space-mono)',
                          color: accent.accentColor,
                          borderColor: `${accent.accentColor}35`,
                          background: `${accent.accentColor}0d`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social / CTA row */}
                  <div className="flex items-center gap-2 pt-5 border-t border-[#1A9E97]/10">
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#0a0f10]/10 text-[#0a0f10]/50 hover:text-[#0a0f10] hover:border-[#1A9E97]/30 hover:bg-[#1A9E97]/5 transition-all duration-200"
                      style={{ fontFamily: 'var(--font-space-mono)', fontSize: '11px' }}
                    >
                      <Linkedin size={13} />
                      LinkedIn
                    </a>
                    <a
                      href={twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#0a0f10]/10 text-[#0a0f10]/50 hover:text-[#0a0f10] hover:border-[#1A9E97]/30 hover:bg-[#1A9E97]/5 transition-all duration-200"
                      style={{ fontFamily: 'var(--font-space-mono)', fontSize: '11px' }}
                    >
                      <Twitter size={13} />
                      Twitter
                    </a>
                    <a
                      href="#contact"
                      className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-lg text-white font-bold hover:opacity-90 transition-opacity duration-200"
                      style={{
                        fontFamily: 'var(--font-space-mono)',
                        fontSize: '11px',
                        background: accent.accentColor,
                        boxShadow: `0 4px 14px ${accent.accentColor}40`,
                      }}
                    >
                      <Globe size={13} />
                      Contacter
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
