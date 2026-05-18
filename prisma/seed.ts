import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed Stats
  await prisma.stat.upsert({
    where: { id: 'stat-1' },
    update: {},
    create: { id: 'stat-1', value: '5', label: 'Projets Majeurs', order: 1 },
  })
  await prisma.stat.upsert({
    where: { id: 'stat-2' },
    update: {},
    create: { id: 'stat-2', value: '4', label: 'Secteurs Clés', order: 2 },
  })
  await prisma.stat.upsert({
    where: { id: 'stat-3' },
    update: {},
    create: { id: 'stat-3', value: '2', label: 'Fondateurs Experts', order: 3 },
  })
  await prisma.stat.upsert({
    where: { id: 'stat-4' },
    update: {},
    create: { id: 'stat-4', value: '1', label: 'Vision Unique', order: 4 },
  })

  // Seed Projects
  const projects = [
    {
      title: 'Sunu Souba',
      slug: 'sunu-souba',
      tag: 'Emploi · IA',
      description: 'Système intelligent de prédiction et de gestion des stocks pharmaceutiques en zone rurale.',
      details: 'Optimisation de la chaîne d\'approvisionnement via des algorithmes de machine learning pour réduire les ruptures de stock de 40%.',
      techStack: 'Python,React,FastAPI',
      features: 'Analyse prédictive de la demande,Dashboard temps réel pour les pharmaciens',
      order: 1,
    },
    {
      title: 'CDC Foncier',
      slug: 'cdc-foncier',
      tag: 'Gouvernement · Blockchain',
      description: 'Plateforme de gestion foncière sécurisée par IA et registres distribués.',
      details: 'Modernisation du cadastre national par la numérisation intelligente et l\'immuabilité des titres fonciers.',
      techStack: 'Ethereum,OCR IA',
      features: 'Sécurisation contre la falsification,Extraction automatique de données',
      order: 2,
    },
    {
      title: 'SenMobAI',
      slug: 'senmobai',
      tag: 'Mobilité · Big Data',
      description: 'Analyse de la mobilité urbaine à Dakar pour l\'optimisation des transports publics.',
      details: 'Exploitation des données GPS et mobiles pour cartographier les flux de population en temps réel.',
      techStack: 'Spark,GeoJSON',
      features: 'Réduction du temps de trajet moyen,Planification urbaine intelligente',
      order: 3,
    },
    {
      title: 'BOCS',
      slug: 'bocs',
      tag: 'Santé · Éducation · GIS',
      description: 'Système d\'information géographique pour le pilotage des politiques sociales.',
      details: 'Centralisation des données d\'accès aux services de base pour une meilleure répartition des ressources.',
      techStack: 'PostGIS,D3.js',
      features: 'Mapping interactif des besoins,Aide à la décision stratégique',
      order: 4,
    },
    {
      title: 'AgroTransform AI',
      slug: 'agrotransform-ai',
      tag: 'Agriculture · IA Mobile',
      description: 'Optimisation des rendements agricoles via l\'analyse satellite multispectrale au Sénégal.',
      details: 'Détection précoce des maladies des cultures et recommandation de fertilisation précise.',
      techStack: 'PyTorch,AWS,TensorFlow',
      features: 'Analyse satellite hebdomadaire,Alertes par SMS/App mobile',
      order: 5,
    },
    {
      title: 'EcoWatt',
      slug: 'ecowatt',
      tag: 'Énergie · IoT · ML',
      description: 'Monitoring énergétique industriel intelligent pour la réduction de l\'empreinte carbone.',
      details: 'Analyse des pics de consommation et maintenance prédictive des équipements lourds.',
      techStack: 'IoT Edge,Keras',
      features: 'Économie d\'énergie de 15%,Détection d\'anomalies réseau',
      order: 6,
    },
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    })
  }

  // Seed Team Members
  await prisma.teamMember.upsert({
    where: { id: 'team-1' },
    update: {},
    create: {
      id: 'team-1',
      name: 'Mouhammadou DIA',
      initials: 'MD',
      role: 'Chief Executive Officer',
      bio: 'Expert en stratégie data et transformation digitale avec plus de 10 ans d\'expérience dans le conseil international.',
      order: 1,
    },
  })
  await prisma.teamMember.upsert({
    where: { id: 'team-2' },
    update: {},
    create: {
      id: 'team-2',
      name: 'Abdou BA',
      initials: 'AB',
      role: 'Chief Technology Officer',
      bio: 'Chercheur en IA et ingénieur ML, spécialiste des architectures distribuées et du traitement automatique du langage.',
      order: 2,
    },
  })

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
