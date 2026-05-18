'use client'

import { Network } from 'lucide-react'

export function About() {
  return (
    <section className="bg-[#F0F4F5] text-[#0a0f10] py-20 px-4 md:px-16" id="about">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="relative flex justify-center">
          <div className="w-full max-w-md rounded-2xl overflow-hidden bg-[#1C3547] aspect-[4/3] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#1A9E97]/20 flex items-center justify-center">
                <Network className="text-[#1A9E97]" size={64} />
              </div>
              <p
                className="text-[#67d8d0] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
              >
                AI For Africa
              </p>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-8 bg-[#20a19a] p-12 rounded-xl hidden md:block">
            <Network className="text-white" size={64} />
          </div>
        </div>
        <div>
          <h2
            className="text-[32px] mb-6 text-[#0a0f10]"
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, lineHeight: '40px' }}
          >
            FATI — AI For Africa
          </h2>
          <p
            className="mb-12 opacity-80"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '18px', lineHeight: '1.7' }}
          >
            Nous sommes une entreprise de conseil et d&apos;ingénierie dédiée à l&apos;accélération de
            l&apos;intelligence artificielle en Afrique. Notre approche fusionne l&apos;excellence
            technique internationale et une compréhension profonde des enjeux locaux.
          </p>
          <div className="grid gap-6">
            <div className="bg-[#353a3b]/5 p-6 border-l-4 border-[#1A9E97] rounded-r-lg">
              <h4
                className="mb-1 text-[#0a0f10]"
                style={{ fontFamily: 'var(--font-syne)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}
              >
                Mission
              </h4>
              <p className="opacity-70" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}>
                Démocratiser l&apos;accès aux technologies de pointe pour les institutions africaines.
              </p>
            </div>
            <div className="bg-[#353a3b]/5 p-6 border-l-4 border-[#1A9E97] rounded-r-lg">
              <h4
                className="mb-1 text-[#0a0f10]"
                style={{ fontFamily: 'var(--font-syne)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}
              >
                Vision
              </h4>
              <p className="opacity-70" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}>
                Devenir le leader continental de la souveraineté numérique par les données.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
