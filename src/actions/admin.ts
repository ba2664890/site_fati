'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { put } from '@vercel/blob'

async function handleFileUpload(file: File | null, existingUrl: string) {
  if (file && file.size > 0) {
    const blob = await put(`fati-${Date.now()}-${file.name}`, file, { access: 'public' })
    return blob.url
  }
  return existingUrl
}

// --- PARTNERS ---
export async function deletePartner(id: string) {
  await db.partner.delete({ where: { id } })
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function createPartner(formData: FormData) {
  const logoFile = formData.get('logoFile') as File | null;
  const logoUrl = await handleFileUpload(logoFile, formData.get('logo') as string || '');

  await db.partner.create({
    data: {
      name: formData.get('name') as string,
      category: formData.get('category') as string,
      website: formData.get('website') as string,
      logo: logoUrl,
      description: formData.get('description') as string,
      order: parseInt(formData.get('order') as string) || 0,
    }
  })
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function updatePartner(id: string, formData: FormData) {
  const logoFile = formData.get('logoFile') as File | null;
  const logoUrl = await handleFileUpload(logoFile, formData.get('logo') as string || '');

  await db.partner.update({
    where: { id },
    data: {
      name: formData.get('name') as string,
      category: formData.get('category') as string,
      website: formData.get('website') as string,
      logo: logoUrl,
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
  const photoFile = formData.get('photoFile') as File | null;
  const photoUrl = await handleFileUpload(photoFile, formData.get('photo') as string || '');

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
      photo: photoUrl,
      order: parseInt(formData.get('order') as string) || 0,
    }
  })
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function updateTeamMember(id: string, formData: FormData) {
  const photoFile = formData.get('photoFile') as File | null;
  const photoUrl = await handleFileUpload(photoFile, formData.get('photo') as string || '');

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
      photo: photoUrl,
      order: parseInt(formData.get('order') as string) || 0,
    }
  })
  revalidatePath('/admin')
  revalidatePath('/')
}
