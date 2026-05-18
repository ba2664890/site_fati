import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const team = await db.teamMember.findMany({
      orderBy: { order: 'asc' },
    })
    return NextResponse.json({ data: team })
  } catch (error) {
    console.error('Get team error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'équipe.' },
      { status: 500 }
    )
  }
}
