import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const partners = await db.partner.findMany({
      orderBy: { order: 'asc' },
    })
    return NextResponse.json({ data: partners })
  } catch (error) {
    console.error('Get partners error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des partenaires.' },
      { status: 500 }
    )
  }
}
