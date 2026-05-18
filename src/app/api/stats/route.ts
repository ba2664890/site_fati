import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const stats = await db.stat.findMany({
      orderBy: { order: 'asc' },
    })
    return NextResponse.json({ data: stats })
  } catch (error) {
    console.error('Get stats error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des statistiques.' },
      { status: 500 }
    )
  }
}
