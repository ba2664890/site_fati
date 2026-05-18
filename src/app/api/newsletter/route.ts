import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'L\'adresse email est obligatoire.' },
        { status: 400 }
      )
    }

    const subscription = await db.newsletterSubscription.upsert({
      where: { email },
      update: {},
      create: { email },
    })

    return NextResponse.json(
      { success: true, message: 'Inscription réussie à la newsletter!', data: subscription },
      { status: 201 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
