'use client'

import { Mountain, ShieldCheck, Eye } from 'lucide-react'

const pillars = [
  {
    icon: Mountain,
    title: 'Ancrage Africain',
    description:
      'Des solutions conçues par et pour le continent, respectant nos réalités socio-culturelles.',
  },
  {
    icon: ShieldCheck,
    title: 'Excellence Technique',
    description:
      'Utilisation des derniers frameworks SOTA (State of the Art) pour une performance optimale.',
  },
  {
    icon: Eye,
    title: 'Impact Mesurable',
    description:
      'Chaque projet est évalué selon des indicateurs de performance et d\'impact social concrets.',
  },
]

export function Approach() {
  return (
    <section className="bg-[#181c1d] py-16 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="text-center p-5 md:p-6">
            <pillar.icon className="text-[#1A9E97] w-14 h-14 md:w-16 md:h-16 mb-5 md:mb-6 mx-auto" />
            <h3
              className="text-[#dfe3e4] mb-4 md:mb-6"
              style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(21px, 6vw, 24px)', fontWeight: 700, lineHeight: '1.3' }}
            >
              {pillar.title}
            </h3>
            <p
              className="text-[#c3c7cc]"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
            >
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
