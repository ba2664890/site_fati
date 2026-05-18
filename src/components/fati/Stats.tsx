'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'

interface Stat {
  id: string
  value: string
  label: string
  order: number
}

const fallbackStats: Stat[] = [
  { id: '1', value: '5', label: 'Projets Majeurs', order: 1 },
  { id: '2', value: '4', label: 'Secteurs Clés', order: 2 },
  { id: '3', value: '2', label: 'Fondateurs Experts', order: 3 },
  { id: '4', value: '1', label: 'Vision Unique', order: 4 },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

export function Stats() {
  const { data } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const res = await fetch('/api/stats')
      const json = await res.json()
      return json.data as Stat[]
    },
  })

  const stats = data && data.length > 0 ? data : fallbackStats

  return (
    <section className="bg-[#20a19a] text-white py-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-[1440px] mx-auto px-4 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            className="flex flex-col cursor-default"
          >
            <span
              className="text-[48px] leading-[56px]"
              style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
            >
              {stat.value}
            </span>
            <span
              className="opacity-80 uppercase"
              style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700, lineHeight: '16px' }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
