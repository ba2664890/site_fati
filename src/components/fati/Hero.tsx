'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const phrases = [
  'Transformation Digitale',
  'Solutions IA & Data',
  'Formation & Impact',
  'Études & Conseil',
]

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const phraseIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const isDeletingRef = useRef(false)

  useEffect(() => {
    const speed = 100

    function tick() {
      const currentPhrase = phrases[phraseIndexRef.current]

      if (isDeletingRef.current) {
        charIndexRef.current = Math.max(0, charIndexRef.current - 1)
      } else {
        charIndexRef.current = Math.min(currentPhrase.length, charIndexRef.current + 1)
      }

      setDisplayText(currentPhrase.substring(0, charIndexRef.current))

      if (!isDeletingRef.current && charIndexRef.current === currentPhrase.length) {
        isDeletingRef.current = true
        return setTimeout(tick, 2000)
      }

      if (isDeletingRef.current && charIndexRef.current === 0) {
        isDeletingRef.current = false
        phraseIndexRef.current = (phraseIndexRef.current + 1) % phrases.length
        return setTimeout(tick, 500)
      }

      return setTimeout(tick, isDeletingRef.current ? speed / 2 : speed)
    }

    const timeoutId = tick()

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-4 md:px-16 bg-[#0f1415]">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Custom AI network background image */}
        <img
          src="/tech_hero_bg.png"
          alt="AI Network Backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
        />

        {/* Looping Abstract Tech Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen"
          poster="/tech_hero_bg.png"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-glowing-nodes-and-lines-41584-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Slow organic floating cyan blob */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#1A9E97]/20 rounded-full blur-[120px]"
        />

        {/* Slow organic floating teal blob */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 30, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#67d8d0]/15 rounded-full blur-[140px]"
        />

        {/* Tech Grid Overlay */}
        <div
          className="absolute inset-0 neural-bg opacity-30"
          style={{ mixBlendMode: 'overlay' }}
        />

        {/* Dark Vignette Overlay for perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1415] via-[#0f1415]/70 to-[#0f1415]/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Dynamic Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-1.5 px-6 py-2 bg-[#1A9E97]/10 border border-[#1A9E97]/20 rounded-full mb-6 backdrop-blur-md"
        >
          <span className="text-[20px] animate-pulse"></span>
          <span
            className="text-[#1A9E97] uppercase tracking-widest font-bold"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px' }}
          >
            AI For Africa
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-[42px] md:text-[68px] text-[#dfe3e4] mb-3 md:mb-6 leading-tight tracking-tight"
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: '1.08',
          }}
        >
          Accélérez votre performance avec l&apos;IA et la Data
        </motion.h1>

        {/* Animated Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-12 mb-6"
        >
          <p
            className="text-[#67d8d0] text-[18px] md:text-[25px] font-semibold tracking-wide"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            {displayText}
            <span className="typewriter-cursor text-[#1A9E97] ml-0.5">|</span>
          </p>
        </motion.div>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="text-[#c3c7cc] mb-12 max-w-2xl mx-auto font-normal"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', lineHeight: '1.75' }}
        >
          FATI propulse la souveraineté technologique du continent par l&apos;intelligence
          artificielle avancée et l&apos;analyse de données stratégique.
        </motion.p>

        {/* Call to Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#services"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#67d8d0',
              boxShadow: '0 0 25px rgba(103, 216, 208, 0.55)',
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-[#1A9E97] text-white px-20 py-6 rounded-xl teal-glow transition-all duration-300 text-center font-bold"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', letterSpacing: '0.05em' }}
          >
            DÉCOUVRIR NOS SERVICES
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              borderColor: '#67d8d0',
              backgroundColor: 'rgba(26, 158, 151, 0.08)',
              boxShadow: '0 0 20px rgba(26, 158, 151, 0.15)',
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto border border-[#1A9E97]/40 text-[#67d8d0] px-20 py-6 rounded-xl transition-all duration-300 text-center font-bold"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', letterSpacing: '0.05em' }}
          >
            NOUS CONTACTER
          </motion.a>
        </motion.div>
      </div>
    </header>
  )
}
