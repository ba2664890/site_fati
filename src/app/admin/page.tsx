import { db } from '@/lib/db'
import { AdminDashboard } from '@/components/fati/AdminDashboard'

export const dynamic = 'force-dynamic' // Évite la mise en cache agressive de Vercel pour l'admin

export default async function AdminPage() {
  const [partners, team] = await Promise.all([
    db.partner.findMany({ orderBy: { order: 'asc' } }),
    db.teamMember.findMany({ orderBy: { order: 'asc' } }),
  ])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-syne)' }}>
              FATI Administration
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Gérez le contenu de votre site internet en temps réel.
            </p>
          </div>
          <a
            href="/"
            className="text-sm font-semibold text-[#1A9E97] hover:text-[#0D7A74]"
          >
            &larr; Retour au site
          </a>
        </div>

        {/* Le Dashboard Client Component */}
        <AdminDashboard initialPartners={partners} initialTeam={team} />
      </div>
    </div>
  )
}
