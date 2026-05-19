import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ── Stats ──────────────────────────────────────────────────────────────
  const stats = [
    { id: 'stat-1', value: '5', label: 'Projets Majeurs', order: 1 },
    { id: 'stat-2', value: '4', label: 'Secteurs Clés', order: 2 },
    { id: 'stat-3', value: '2', label: 'Fondateurs Experts', order: 3 },
    { id: 'stat-4', value: '1', label: 'Vision Unique', order: 4 },
  ]
  for (const s of stats) {
    await prisma.stat.upsert({ where: { id: s.id }, update: s, create: s })
  }

  // ── Projects ───────────────────────────────────────────────────────────
  const projects = [
    {
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
      title: 'EcoWatt',
      slug: 'ecowatt',
      tag: 'Énergie · IoT · ML',
      description: "Monitoring énergétique industriel intelligent pour la réduction de l'empreinte carbone.",
      details: 'Analyse des pics de consommation et maintenance prédictive des équipements lourds.',
      techStack: 'IoT Edge,Keras',
      features: "Économie d'énergie de 15%,Détection d'anomalies réseau",
      order: 6,
    },
  ]
  for (const p of projects) {
    await prisma.project.upsert({ where: { slug: p.slug }, update: p, create: p })
  }

  // ── Team Members (enriched) ────────────────────────────────────────────
  await prisma.teamMember.upsert({
    where: { id: 'team-1' },
    update: {
      name: 'Mouhammadou DIA',
      initials: 'MD',
      role: 'Chief Executive Officer',
      bio: "Expert en stratégie data et transformation digitale, engagé dans le développement de solutions innovantes à fort impact pour les réalités africaines.",
      tagline: "« L'IA doit d'abord servir ceux qui en ont le plus besoin. »",
      skills: 'Stratégie Data,Transformation Digitale,Innovation,Impact Africain',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      photo: '',
      order: 1,
    },
    create: {
      id: 'team-1',
      name: 'Mouhammadou DIA',
      initials: 'MD',
      role: 'Chief Executive Officer',
      bio: "Expert en stratégie data et transformation digitale, engagé dans le développement de solutions innovantes à fort impact pour les réalités africaines.",
      tagline: "« L'IA doit d'abord servir ceux qui en ont le plus besoin. »",
      skills: 'Stratégie Data,Transformation Digitale,Innovation,Impact Africain',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      photo: '',
      order: 1,
    },
  })

  await prisma.teamMember.upsert({
    where: { id: 'team-2' },
    update: {
      name: 'Abdou BA',
      initials: 'AB',
      role: 'Chief Technology Officer',
      bio: "Chercheur en IA et ingénieur ML, spécialiste des architectures distribuées et du traitement automatique du langage. Contributeur open-source actif.",
      tagline: '« La puissance du NLP est encore sous-exploitée sur le continent. »',
      skills: 'Machine Learning,NLP / LLM,MLOps,Architecture Distribuée',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      photo: '',
      order: 2,
    },
    create: {
      id: 'team-2',
      name: 'Abdou BA',
      initials: 'AB',
      role: 'Chief Technology Officer',
      bio: "Chercheur en IA et ingénieur ML, spécialiste des architectures distribuées et du traitement automatique du langage. Contributeur open-source actif.",
      tagline: '« La puissance du NLP est encore sous-exploitée sur le continent. »',
      skills: 'Machine Learning,NLP / LLM,MLOps,Architecture Distribuée',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      photo: '',
      order: 2,
    },
  })

  // ── Partners ───────────────────────────────────────────────────────────
  const partners = [
    {
      id: 'partner-1',
      name: 'Ministère du Numérique - Sénégal',
      logo: '',
      website: 'https://numerique.gouv.sn',
      category: 'Institutionnel',
      description: "Partenaire stratégique pour les projets de transformation numérique des services publics sénégalais.",
      order: 1,
    },
    {
      id: 'partner-2',
      name: 'Université Cheikh Anta Diop',
      logo: '',
      website: 'https://ucad.sn',
      category: 'Académique',
      description: "Collaboration sur la recherche en IA appliquée aux problématiques africaines et formation des ingénieurs.",
      order: 2,
    },
    {
      id: 'partner-3',
      name: 'Orange Digital Center',
      logo: '',
      website: 'https://orangedigitalcenters.com',
      category: 'Technologie',
      description: "Accélérateur partenaire pour les startups tech africaines portées par l'intelligence artificielle.",
      order: 3,
    },
    {
      id: 'partner-4',
      name: 'Africa Tech Alliance',
      logo: '',
      website: 'https://africatechalliance.org',
      category: 'Écosystème',
      description: "Réseau panafricain de collaboration technologique pour accélérer l'innovation sur le continent.",
      order: 4,
    },
    {
      id: 'partner-5',
      name: 'AWS Activate Africa',
      logo: '',
      website: 'https://aws.amazon.com/activate',
      category: 'Cloud & Infra',
      description: "Partenaire cloud privilégié offrant des crédits et un accompagnement technique pour nos solutions IA.",
      order: 5,
    },
    {
      id: 'partner-6',
      name: 'GIZ Sénégal',
      logo: '',
      website: 'https://giz.de',
      category: 'Institutionnel',
      description: "Coopération technique et financement de projets à impact social dans les domaines de l'éducation et la santé.",
      order: 6,
    },
  ]

  for (const p of partners) {
    await prisma.partner.upsert({ where: { id: p.id }, update: p, create: p })
  }

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
