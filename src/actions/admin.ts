'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

// --- PARTNERS ---
export async function deletePartner(id: string) {
  await db.partner.delete({ where: { id } })
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function createPartner(formData: FormData) {
  await db.partner.create({
    data: {
      name: formData.get('name') as string,
      category: formData.get('category') as string,
      website: formData.get('website') as string,
      logo: formData.get('logo') as string,
      description: formData.get('description') as string,
      order: parseInt(formData.get('order') as string) || 0,
    }
  })
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function updatePartner(id: string, formData: FormData) {
  await db.partner.update({
    where: { id },
    data: {
      name: formData.get('name') as string,
      category: formData.get('category') as string,
      website: formData.get('website') as string,
      logo: formData.get('logo') as string,
      description: formData.get('description') as string,
      order: parseInt(formData.get('order') as string) || 0,
    }
  })
  revalidatePath('/admin')
  revalidatePath('/')
}

// --- TEAM ---
export async function deleteTeamMember(id: string) {
  await db.teamMember.delete({ where: { id } })
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function createTeamMember(formData: FormData) {
  await db.teamMember.create({
    data: {
      name: formData.get('name') as string,
      initials: formData.get('initials') as string,
      role: formData.get('role') as string,
      bio: formData.get('bio') as string,
      tagline: formData.get('tagline') as string,
      skills: formData.get('skills') as string,
      linkedin: formData.get('linkedin') as string,
      twitter: formData.get('twitter') as string,
      photo: formData.get('photo') as string,
      order: parseInt(formData.get('order') as string) || 0,
    }
  })
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function updateTeamMember(id: string, formData: FormData) {
  await db.teamMember.update({
    where: { id },
    data: {
      name: formData.get('name') as string,
      initials: formData.get('initials') as string,
      role: formData.get('role') as string,
      bio: formData.get('bio') as string,
      tagline: formData.get('tagline') as string,
      skills: formData.get('skills') as string,
      linkedin: formData.get('linkedin') as string,
      twitter: formData.get('twitter') as string,
      photo: formData.get('photo') as string,
      order: parseInt(formData.get('order') as string) || 0,
    }
  })
  revalidatePath('/admin')
  revalidatePath('/')
}
