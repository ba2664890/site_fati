'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { Navbar } from '@/components/fati/Navbar'
import { Hero } from '@/components/fati/Hero'
import { Stats } from '@/components/fati/Stats'
import { About } from '@/components/fati/About'
import { Services } from '@/components/fati/Services'
import { Projects } from '@/components/fati/Projects'
import { Approach } from '@/components/fati/Approach'
import { Team } from '@/components/fati/Team'
import { Partners } from '@/components/fati/Partners'
import { Contact } from '@/components/fati/Contact'
import { Footer } from '@/components/fati/Footer'
import { SectionReveal } from '@/components/fati/SectionReveal'

export default function Home() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Hero />

          <SectionReveal>
            <Stats />
          </SectionReveal>

          <SectionReveal>
            <About />
          </SectionReveal>

          <SectionReveal>
            <Services />
          </SectionReveal>

          <SectionReveal>
            <Projects />
          </SectionReveal>

          <SectionReveal>
            <Approach />
          </SectionReveal>

          <SectionReveal>
            <Team />
          </SectionReveal>

          <SectionReveal>
            <Partners />
          </SectionReveal>

          <SectionReveal>
            <Contact />
          </SectionReveal>
        </main>

        <Footer />
      </div>
    </QueryClientProvider>
  )
}
