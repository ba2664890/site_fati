import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, company, service } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont obligatoires.' },
        { status: 400 }
      )
    }

    const contact = await db.contactMessage.create({
      data: {
        name,
        email,
        message,
        company: company || null,
        service: service || null,
      },
    })

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès!', data: contact },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const messages = await db.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    })
    return NextResponse.json({ data: messages })
  } catch (error) {
    console.error('Get contacts error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des messages.' },
      { status: 500 }
    )
  }
}
