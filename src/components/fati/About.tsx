'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Globe2 } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function About() {
  return (
    <section className="bg-[#F0F4F5] text-[#0a0f10] py-24 px-4 md:px-16 overflow-hidden" id="about">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* ── IMAGE COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center"
        >
          {/* Decorative glow ring behind image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[380px] h-[380px] rounded-full bg-[#1A9E97]/15 blur-3xl"
            />
          </div>

          {/* Main photo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-[#1A9E97]/10"
          >
            <img
              src="/about_workspace.png"
              alt="Ingénieurs FATI collaborant sur une carte IA de l'Afrique"
              className="w-full h-full object-cover aspect-[4/3]"
            />
            {/* Dark gradient overlay at bottom for the badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f10]/70 via-transparent to-transparent" />

            {/* Live indicator badge inside image */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#0a0f10]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#1A9E97]/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A9E97] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1A9E97]" />
              </span>
              <span
                className="text-[#67d8d0] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-space-mono)', fontSize: '11px', fontWeight: 700 }}
              >
                Africa AI Network - Live
              </span>
            </div>
          </motion.div>

          {/* Floating teal accent card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7, type: 'spring', stiffness: 100 }}
            whileHover={{ y: -6, boxShadow: '0 20px 40px -10px rgba(26,158,151,0.4)' }}
            className="absolute -bottom-6 -right-4 md:-right-8 bg-[#1A9E97] text-white p-5 rounded-2xl shadow-xl flex items-center gap-3 border border-white/10"
          >
            <Globe2 size={32} className="flex-shrink-0" />
            <div>
              <p
                className="text-white text-[13px] font-extrabold uppercase tracking-widest leading-tight"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                AI For Africa
              </p>
              <p className="text-white/70 text-[11px] mt-0.5" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Data & IA
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── TEXT COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block text-[#1A9E97] mb-4 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
          >
            À Propos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[32px] md:text-[40px] mb-6 text-[#0a0f10] leading-tight"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 700 }}
          >
            FATI - AI For Africa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-[#0a0f10]/70"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', lineHeight: '1.75' }}
          >
            FATI est une startup panafricaine spécialisée en intelligence artificielle, data et
            transformation digitale. Notre mission est d&apos;utiliser la puissance des données et des
            technologies émergentes pour développer des solutions innovantes à fort impact adaptées
            aux réalités africaines.
          </motion.p>

          {/* Mission / Vision cards */}
          <div className="grid gap-4">
            {[
              {
                title: 'Mission',
                text: "Utiliser la puissance des données et des technologies émergentes pour créer des solutions à fort impact.",
              },
              {
                title: 'Vision',
                text: 'Développer une transformation digitale adaptée aux réalités africaines.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  x: 6,
                  borderLeftColor: '#67d8d0',
                  backgroundColor: 'rgba(26,158,151,0.07)',
                  boxShadow: '4px 0 0 0 #67d8d0',
                }}
                className="bg-[#353a3b]/5 p-6 border-l-4 border-[#1A9E97] rounded-r-xl transition-colors duration-300 cursor-default"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-[#1A9E97] flex-shrink-0" />
                  <h4
                    className="text-[#0a0f10]"
                    style={{ fontFamily: 'var(--font-syne)', fontSize: '20px', fontWeight: 700 }}
                  >
                    {card.title}
                  </h4>
                </div>
                <p
                  className="text-[#0a0f10]/65 pl-6"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
                >
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
