import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  // Seulement protéger la route /admin
  if (url.pathname.startsWith('/admin')) {
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')

      // Identifiants par défaut s'ils ne sont pas dans le .env
      const validUser = process.env.ADMIN_USER || 'admin'
      const validPass = process.env.ADMIN_PASS || 'fati2026'

      if (user === validUser && pwd === validPass) {
        return NextResponse.next()
      }
    }

    return new NextResponse('Accès non autorisé.', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Zone Administrateur FATI"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
