'use client'

import { Share2 } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'

interface TeamMember {
  id: string
  name: string
  initials: string
  role: string
  bio: string
  order: number
}

const fallbackTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Mouhammadou DIA',
    initials: 'MD',
    role: 'Chief Executive Officer',
    bio: "Expert en stratégie data et transformation digitale avec plus de 10 ans d'expérience dans le conseil international.",
    order: 1,
  },
  {
    id: '2',
    name: 'Abdou BA',
    initials: 'AB',
    role: 'Chief Technology Officer',
    bio: "Chercheur en IA et ingénieur ML, spécialiste des architectures distribuées et du traitement automatique du langage.",
    order: 2,
  },
]

export function Team() {
  const { data } = useQuery({
    queryKey: ['team'],
    queryFn: async () => {
      const res = await fetch('/api/team')
      const json = await res.json()
      return json.data as TeamMember[]
    },
  })

  const team = data && data.length > 0 ? data : fallbackTeam

  return (
    <section className="bg-[#F0F4F5] text-[#0a0f10] py-20 px-4 md:px-16" id="equipe">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20">
          <span
            className="text-[#1A9E97] mb-4 block uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
          >
            Leadership
          </span>
          <h2
            style={{ fontFamily: 'var(--font-syne)', fontSize: '32px', fontWeight: 700, lineHeight: '40px' }}
          >
            L&apos;Équipe Fondatrice
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-20">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white p-8 rounded-2xl flex flex-col md:flex-row gap-12 shadow-xl"
            >
              <div
                className={`w-32 h-32 rounded-full flex-shrink-0 flex items-center justify-center text-white mx-auto md:mx-0`}
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '48px',
                  fontWeight: 800,
                  backgroundColor: member.order === 1 ? '#1C3547' : '#20a19a',
                }}
              >
                {member.initials}
              </div>
              <div>
                <h3
                  className="text-[#0a0f10] mb-1"
                  style={{ fontFamily: 'var(--font-syne)', fontSize: '32px', fontWeight: 700, lineHeight: '40px' }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-[#1A9E97] mb-6 uppercase"
                  style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
                >
                  {member.role}
                </p>
                <p
                  className="opacity-80 mb-6"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}
                >
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  <span className="bg-[#353a3b]/5 p-1 rounded-full cursor-pointer hover:bg-[#1A9E97]/20 transition-colors">
                    <Share2 className="w-5 h-5 text-[#0a0f10]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
