'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

interface Project {
  id: string
  title: string
  slug: string
  tag: string
  description: string
  details: string
  techStack: string
  features: string
  order: number
}

const fallbackProjects: Project[] = [
  {
    id: '1',
    title: 'Sunu Souba',
    slug: 'sunu-souba',
    tag: 'Emploi · IA',
    description: 'Système intelligent de prédiction et de gestion des stocks pharmaceutiques en zone rurale.',
    details: "Optimisation de la chaîne d'approvisionnement via des algorithmes de machine learning pour réduire les ruptures de stock de 40%.",
    techStack: 'Python,React,FastAPI',
    features: 'Analyse prédictive de la demande,Dashboard temps réel pour les pharmaciens',
    order: 1,
  },
  {
    id: '2',
    title: 'CDC Foncier',
    slug: 'cdc-foncier',
    tag: 'Gouvernement · Blockchain',
    description: 'Plateforme de gestion foncière sécurisée par IA et registres distribués.',
    details: "Modernisation du cadastre national par la numérisation intelligente et l'immuabilité des titres fonciers.",
    techStack: 'Ethereum,OCR IA',
    features: 'Sécurisation contre la falsification,Extraction automatique de données',
    order: 2,
  },
  {
    id: '3',
    title: 'SenMobAI',
    slug: 'senmobai',
    tag: 'Mobilité · Big Data',
    description: "Analyse de la mobilité urbaine à Dakar pour l'optimisation des transports publics.",
    details: 'Exploitation des données GPS et mobiles pour cartographier les flux de population en temps réel.',
    techStack: 'Spark,GeoJSON',
    features: 'Réduction du temps de trajet moyen,Planification urbaine intelligente',
    order: 3,
  },
  {
    id: '4',
    title: 'BOCS',
    slug: 'bocs',
    tag: 'Santé · Éducation · GIS',
    description: "Système d'information géographique pour le pilotage des politiques sociales.",
    details: "Centralisation des données d'accès aux services de base pour une meilleure répartition des ressources.",
    techStack: 'PostGIS,D3.js',
    features: 'Mapping interactif des besoins,Aide à la décision stratégique',
    order: 4,
  },
  {
    id: '5',
    title: 'AgroTransform AI',
    slug: 'agrotransform-ai',
    tag: 'Agriculture · IA Mobile',
    description: "Optimisation des rendements agricoles via l'analyse satellite multispectrale au Sénégal.",
    details: 'Détection précoce des maladies des cultures et recommandation de fertilisation précise.',
    techStack: 'PyTorch,AWS,TensorFlow',
    features: 'Analyse satellite hebdomadaire,Alertes par SMS/App mobile',
    order: 5,
  },
  {
    id: '6',
    title: 'EcoWatt',
    slug: 'ecowatt',
    tag: 'Énergie · IoT · ML',
    description: 'Monitoring énergétique industriel intelligent pour la réduction de l\'empreinte carbone.',
    details: 'Analyse des pics de consommation et maintenance prédictive des équipements lourds.',
    techStack: 'IoT Edge,Keras',
    features: "Économie d'énergie de 15%,Détection d'anomalies réseau",
    order: 6,
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
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 85,
      damping: 15,
    },
  },
}

function FlipCard({ project }: { project: Project }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const techs = project.techStack.split(',')
  const features = project.features.split(',')

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="perspective h-[400px]"
    >
      <div
        className={`card-inner w-full h-full ${isFlipped ? 'is-flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div className="card-front bg-white p-8 rounded-2xl shadow-lg border border-black/5 flex flex-col hover:shadow-xl transition-all duration-300">
          <div className="mb-6">
            <span className="bg-[#1A9E97]/10 text-[#1A9E97] px-3 py-1 rounded-full uppercase" style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}>
              {project.tag}
            </span>
          </div>
          <h3
            className="text-[#0a0f10]"
            style={{ fontFamily: 'var(--font-syne)', fontSize: '32px', fontWeight: 700, lineHeight: '40px' }}
          >
            {project.title}
          </h3>
          <p
            className="opacity-70 mb-8 flex-grow mt-4"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
          >
            {project.description}
          </p>
          <div className="mt-auto flex flex-wrap gap-3">
            {techs.map((tech) => (
              <span
                key={tech}
                className="bg-[#353a3b]/10 px-3 py-1 rounded text-[#353a3b]/80"
                style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 600 }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="card-back bg-[#1C3547] p-8 rounded-2xl shadow-lg text-[#dfe3e4] flex flex-col border border-white/5">
          <h3
            className="text-[#67d8d0] mb-6"
            style={{ fontFamily: 'var(--font-syne)', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}
          >
            Détails du Projet
          </h3>
          <p
            className="mb-8"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
          >
            {project.details}
          </p>
          <ul className="space-y-3 mb-8 flex-grow">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 opacity-80" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                <CheckCircle className="text-[#1A9E97] w-[18px] h-[18px] mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full bg-[#1A9E97] text-white py-3 rounded-lg font-bold hover:bg-[#67d8d0] transition-all" style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}>
            Voir le projet
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const { data } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch('/api/projects')
      const json = await res.json()
      return json.data as Project[]
    },
  })

  const projects = data && data.length > 0 ? data : fallbackProjects

  return (
    <section className="bg-[#F0F4F5] text-[#0a0f10] py-20 px-4 md:px-16" id="projets">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20">
          <span
            className="text-[#1A9E97] mb-4 block uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
          >
            Portfolio
          </span>
          <h2
            style={{ fontFamily: 'var(--font-syne)', fontSize: '32px', fontWeight: 700, lineHeight: '40px' }}
          >
            Nos Réalisations
          </h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <FlipCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
