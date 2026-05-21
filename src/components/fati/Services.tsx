'use client'

import { Rocket, Brain, GraduationCap, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
}

export function Services() {
  return (
    <section className="bg-[#0a0f10] py-16 md:py-20 px-4 sm:px-6 md:px-16" id="services">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span
            className="text-[#1A9E97] mb-4 block uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
          >
            Expertise
          </span>
          <h2
            className="text-[#dfe3e4]"
            style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(30px, 8vw, 32px)', fontWeight: 700, lineHeight: '1.2' }}
          >
            Nos Domaines d&apos;Expertise
          </h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                borderColor: 'rgba(103, 216, 208, 0.4)',
                boxShadow: '0 15px 30px -10px rgba(26, 158, 151, 0.25)' 
              }}
              className="bg-[#181c1d] border border-[#1A9E97]/10 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl hover:bg-[#262b2c] transition-all duration-300 group cursor-pointer"
            >
              <service.icon className="text-[#1A9E97] w-11 h-11 md:w-12 md:h-12 mb-5 md:mb-6 group-hover:scale-110 group-hover:text-[#67d8d0] transition-all duration-300" />
              <h3
                className="mb-4 md:mb-6 text-[#dfe3e4] group-hover:text-[#67d8d0] transition-colors"
                style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(21px, 6vw, 24px)', fontWeight: 700, lineHeight: '1.3' }}
              >
                {service.title}
              </h3>
              <p
                className="text-[#c3c7cc]"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
