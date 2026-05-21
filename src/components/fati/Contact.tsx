'use client'

import { useState } from 'react'
import { Mail, MapPin, Send, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Erreur',
        description: 'Veuillez remplir tous les champs obligatoires.',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        toast({
          title: 'Message envoyé !',
          description: 'Nous vous répondrons dans les plus brefs délais.',
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        toast({
          title: 'Erreur',
          description: data.error || 'Erreur lors de l\'envoi du message.',
          variant: 'destructive',
        })
      }
    } catch {
      toast({
        title: 'Erreur',
        description: 'Erreur de connexion. Veuillez réessayer.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      className="py-16 md:py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden"
      id="contact"
      style={{
        background: 'linear-gradient(135deg, #1c3547 0%, #0D7A74 100%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto relative z-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h2
            className="text-[#dfe3e4] mb-5 md:mb-6"
            style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(32px, 9vw, 48px)', fontWeight: 800, lineHeight: '1.16' }}
          >
            Construisons ensemble l&apos;Afrique numérique de demain.
          </h2>
          <p
            className="text-[#dfe3e4]/80 mb-8 md:mb-12"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'clamp(16px, 4vw, 18px)', lineHeight: '1.7' }}
          >
            Prêt à transformer vos données en levier de croissance stratégique ? Notre équipe est à votre écoute.
          </p>
          <div className="space-y-5 md:space-y-6">
            <div className="flex items-center gap-4 md:gap-6">
              <Mail className="text-[#67d8d0] shrink-0" size={24} />
              <span className="break-all" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}>
                fati.gp.stat@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <MapPin className="text-[#67d8d0] shrink-0" size={24} />
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px', lineHeight: '1.7' }}>
                Dakar, Senegal
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0f1415]/20 backdrop-blur-xl p-5 sm:p-8 rounded-2xl border border-white/10 shadow-2xl"
        >
          <div className="grid gap-6">
            <div>
              <label
                className="text-[#67d8d0] mb-1 block uppercase"
                style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
              >
                Nom complet
              </label>
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0f1415]/40 border-b border-[#1A9E97]/30 focus:border-[#1A9E97] transition-all outline-none py-3 text-[#dfe3e4] placeholder-[#c3c7cc]/50"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px' }}
                required
              />
            </div>
            <div>
              <label
                className="text-[#67d8d0] mb-1 block uppercase"
                style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
              >
                Email professionnel
              </label>
              <input
                type="email"
                placeholder="email@votreentreprise.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0f1415]/40 border-b border-[#1A9E97]/30 focus:border-[#1A9E97] transition-all outline-none py-3 text-[#dfe3e4] placeholder-[#c3c7cc]/50"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px' }}
                required
              />
            </div>
            <div>
              <label
                className="text-[#67d8d0] mb-1 block uppercase"
                style={{ fontFamily: 'var(--font-space-mono)', fontSize: '12px', fontWeight: 700 }}
              >
                Message
              </label>
              <textarea
                placeholder="Détaillez votre projet..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0f1415]/40 border-b border-[#1A9E97]/30 focus:border-[#1A9E97] transition-all outline-none py-3 text-[#dfe3e4] placeholder-[#c3c7cc]/50 resize-none"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '16px' }}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1A9E97] text-white px-4 py-4 md:py-6 rounded-xl hover:bg-[#67d8d0] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(18px, 5vw, 24px)', fontWeight: 700 }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envoyer la demande
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
