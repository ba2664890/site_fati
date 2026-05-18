'use client'

import { motion } from 'framer-motion'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function SectionReveal({
  children,
  className = '',
  delay = 0.05,
  direction = 'up',
}: SectionRevealProps) {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: directions[direction].x, 
        y: directions[direction].y 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ 
        duration: 0.9, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Premium smooth easeOutExpo cubic bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
