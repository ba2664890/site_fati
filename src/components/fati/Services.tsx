'use client'

import { Rocket, Brain, GraduationCap, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Transformation Digitale',
    description:
      'Accompagnement stratégique pour la modernisation de vos infrastructures et processus métiers.',
  },
  {
    icon: Brain,
    title: 'Solutions IA & Data',
    description:
      'Développement de modèles prédictifs et de pipelines de données hautes performances.',
  },
  {
    icon: GraduationCap,
    title: 'Formation & Impact',
    description:
      'Programmes de montée en compétences pour vos équipes techniques et stratégiques.',
  },
  {
    icon: BarChart3,
    title: 'Études & Conseil',
    description:
      'Analyses de marché et audits technologiques basés sur une expertise africaine.',
  },
]

export function Services() {
  return (
    <section className="bg-[#0a0f10] py-20 px-4 md:px-16" id="services">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20">
          <span
            className="text-[#1A9E97] mb-4 block uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
          >
            Expertise
          </span>
          <h2
            className="text-[#dfe3e4]"
            style={{ fontFamily: 'var(--font-syne)', fontSize: '32px', fontWeight: 700, lineHeight: '40px' }}
          >
            Nos Domaines d&apos;Expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#181c1d] border border-[#1A9E97]/10 p-12 rounded-xl hover:bg-[#262b2c] transition-all group"
            >
              <service.icon className="text-[#1A9E97] w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h3
                className="mb-6 text-[#dfe3e4]"
                style={{ fontFamily: 'var(--font-syne)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}
              >
                {service.title}
              </h3>
              <p
                className="text-[#c3c7cc]"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
