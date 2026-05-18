import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const projects = await db.project.findMany({
      where: { published: true },
      orderBy: { order: 'asc' },
    })
    return NextResponse.json({ data: projects })
  } catch (error) {
    console.error('Get projects error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des projets.' },
      { status: 500 }
    )
  }
}
