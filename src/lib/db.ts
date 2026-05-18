// Override DATABASE_URL if it points to SQLite (system env might override .env)
const NEON_DB_URL = 'postgresql://neondb_owner:npg_s0KMqu3EblZF@ep-lucky-mouse-aq8qucnl-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require'

if (!process.env.DATABASE_URL || process.env.DATABASE_URL.startsWith('file:')) {
  process.env.DATABASE_URL = NEON_DB_URL
}

import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
