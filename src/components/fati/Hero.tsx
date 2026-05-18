'use client'

import { useState, useEffect, useRef } from 'react'

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
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-4 md:px-16">
      <div className="absolute inset-0 z-0 bg-[#1c3547]/40 pointer-events-none" />
      <div className="relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-1 px-6 py-1.5 bg-[#1A9E97]/10 border border-[#1A9E97]/20 rounded-full mb-6">
          <span className="text-[20px]">🌍</span>
          <span
            className="text-[#1A9E97] uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
          >
            AI For Africa
          </span>
        </div>

        <h1
          className="text-[40px] md:text-[64px] text-[#dfe3e4] mb-2 md:mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: '1.1' }}
        >
          Accélérez votre performance avec l&apos;IA et la Data
        </h1>

        <div className="h-12 mb-6">
          <p
            className="text-[#1A9E97] text-[18px] md:text-[24px]"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            {displayText}
            <span className="typewriter-cursor">|</span>
          </p>
        </div>

        <p
          className="text-[#c3c7cc] mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', lineHeight: '1.7' }}
        >
          FATI propulse la souveraineté technologique du continent par l&apos;intelligence
          artificielle avancée et l&apos;analyse de données stratégique.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="#services"
            className="w-full md:w-auto bg-[#1A9E97] text-white px-20 py-6 rounded-xl teal-glow hover:bg-[#67d8d0] transition-all active:scale-95 text-center"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 800 }}
          >
            DÉCOUVRIR NOS SERVICES
          </a>
          <a
            href="#contact"
            className="w-full md:w-auto border border-[#1A9E97]/40 text-[#67d8d0] px-20 py-6 rounded-xl hover:bg-[#1A9E97]/5 transition-all text-center"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 800 }}
          >
            NOUS CONTACTER
          </a>
        </div>
      </div>
    </header>
  )
}
