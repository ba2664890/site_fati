'use client'

import { useState } from 'react'
import { Partner, TeamMember } from '@prisma/client'
import {
  deletePartner,
  createPartner,
  updatePartner,
  deleteTeamMember,
  createTeamMember,
  updateTeamMember
} from '@/actions/admin'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Trash2, Edit, Plus } from 'lucide-react'

export function AdminDashboard({ initialPartners, initialTeam }: { initialPartners: Partner[], initialTeam: TeamMember[] }) {
  // States to control Modals
  const [partnerModalOpen, setPartnerModalOpen] = useState(false)
  const [teamModalOpen, setTeamModalOpen] = useState(false)
  
  // Selected items for editing
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null)
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null)

  // ─── PARTNER HANDLERS ───
  async function handlePartnerSubmit(formData: FormData) {
    if (selectedPartner) {
      await updatePartner(selectedPartner.id, formData)
    } else {
      await createPartner(formData)
    }
    setPartnerModalOpen(false)
  }

  async function handlePartnerDelete(id: string) {
    if (confirm('Voulez-vous vraiment supprimer ce partenaire ?')) {
      await deletePartner(id)
    }
  }

  const openPartnerEdit = (partner: Partner) => {
    setSelectedPartner(partner)
    setPartnerModalOpen(true)
  }

  const openPartnerCreate = () => {
    setSelectedPartner(null)
    setPartnerModalOpen(true)
  }

  // ─── TEAM HANDLERS ───
  async function handleTeamSubmit(formData: FormData) {
    if (selectedTeamMember) {
      await updateTeamMember(selectedTeamMember.id, formData)
    } else {
      await createTeamMember(formData)
    }
    setTeamModalOpen(false)
  }

  async function handleTeamDelete(id: string) {
    if (confirm('Voulez-vous vraiment supprimer ce membre ?')) {
      await deleteTeamMember(id)
    }
  }

  const openTeamEdit = (member: TeamMember) => {
    setSelectedTeamMember(member)
    setTeamModalOpen(true)
  }

  const openTeamCreate = () => {
    setSelectedTeamMember(null)
    setTeamModalOpen(true)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <Tabs defaultValue="partners" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="partners">🏢 Partenaires</TabsTrigger>
          <TabsTrigger value="team">👥 Équipe</TabsTrigger>
        </TabsList>

        {/* ─── TAB PARTNERS ─── */}
        <TabsContent value="partners">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Gestion des Partenaires</h2>
            <Button onClick={openPartnerCreate} className="bg-[#1A9E97] hover:bg-[#0D7A74] text-white">
              <Plus className="w-4 h-4 mr-2" /> Ajouter un partenaire
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Ordre</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {initialPartners.map((partner) => (
                  <TableRow key={partner.id}>
                    <TableCell className="font-medium">{partner.name}</TableCell>
                    <TableCell>{partner.category}</TableCell>
                    <TableCell>{partner.order}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="icon" onClick={() => openPartnerEdit(partner)}>
                        <Edit className="w-4 h-4 text-blue-600" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handlePartnerDelete(partner.id)}>
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {initialPartners.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-6 text-gray-500">Aucun partenaire trouvé.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* ─── TAB TEAM ─── */}
        <TabsContent value="team">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Gestion de l&apos;Équipe</h2>
            <Button onClick={openTeamCreate} className="bg-[#1A9E97] hover:bg-[#0D7A74] text-white">
              <Plus className="w-4 h-4 mr-2" /> Ajouter un membre
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Rôle</TableHead>
                  <TableHead>Ordre</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {initialTeam.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.name} ({member.initials})</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>{member.order}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="icon" onClick={() => openTeamEdit(member)}>
                        <Edit className="w-4 h-4 text-blue-600" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleTeamDelete(member.id)}>
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {initialTeam.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-6 text-gray-500">Aucun membre trouvé.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      {/* ─── MODAL PARTNER ─── */}
      <Dialog open={partnerModalOpen} onOpenChange={setPartnerModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedPartner ? 'Modifier le partenaire' : 'Ajouter un partenaire'}</DialogTitle>
          </DialogHeader>
          <form action={handlePartnerSubmit} className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom de l&apos;organisation</Label>
                <Input id="name" name="name" defaultValue={selectedPartner?.name || ''} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Catégorie</Label>
                <Input id="category" name="category" placeholder="Ex: Institutionnel, Académique..." defaultValue={selectedPartner?.category || ''} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Site Web (URL)</Label>
                <Input id="website" name="website" type="url" defaultValue={selectedPartner?.website || ''} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="logoFile">Logo (Fichier Image)</Label>
                <Input id="logoFile" name="logoFile" type="file" accept="image/*" />
                <input type="hidden" name="logo" value={selectedPartner?.logo || ''} />
                {selectedPartner?.logo && (
                  <p className="text-xs text-gray-500 mt-1">Image actuelle : {selectedPartner.logo.split('/').pop()}</p>
                )}
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="description">Description courte</Label>
                <Textarea id="description" name="description" rows={3} defaultValue={selectedPartner?.description || ''} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order">Ordre d&apos;affichage (Chiffre)</Label>
                <Input id="order" name="order" type="number" defaultValue={selectedPartner?.order || 0} />
              </div>
            </div>
            <DialogFooter className="mt-6">
              <Button type="button" variant="outline" onClick={() => setPartnerModalOpen(false)}>Annuler</Button>
              <Button type="submit" className="bg-[#1A9E97] hover:bg-[#0D7A74] text-white">Enregistrer</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ─── MODAL TEAM ─── */}
      <Dialog open={teamModalOpen} onOpenChange={setTeamModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedTeamMember ? 'Modifier le membre' : 'Ajouter un membre'}</DialogTitle>
          </DialogHeader>
          <form action={handleTeamSubmit} className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" name="name" defaultValue={selectedTeamMember?.name || ''} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="initials">Initiales (ex: MD)</Label>
                <Input id="initials" name="initials" defaultValue={selectedTeamMember?.initials || ''} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Rôle / Poste</Label>
                <Input id="role" name="role" defaultValue={selectedTeamMember?.role || ''} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photoFile">Photo (Fichier Image)</Label>
                <Input id="photoFile" name="photoFile" type="file" accept="image/*" />
                <input type="hidden" name="photo" value={selectedTeamMember?.photo || ''} />
                {selectedTeamMember?.photo && (
                  <p className="text-xs text-gray-500 mt-1">Image actuelle : {selectedTeamMember.photo.split('/').pop()}</p>
                )}
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="bio">Biographie</Label>
                <Textarea id="bio" name="bio" rows={3} defaultValue={selectedTeamMember?.bio || ''} />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="tagline">Citation (Tagline)</Label>
                <Input id="tagline" name="tagline" defaultValue={selectedTeamMember?.tagline || ''} />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="skills">Compétences (Séparées par des virgules)</Label>
                <Input id="skills" name="skills" placeholder="Machine Learning, Business Dev, Data" defaultValue={selectedTeamMember?.skills || ''} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">Lien LinkedIn</Label>
                <Input id="linkedin" name="linkedin" type="url" defaultValue={selectedTeamMember?.linkedin || ''} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Lien Twitter</Label>
                <Input id="twitter" name="twitter" type="url" defaultValue={selectedTeamMember?.twitter || ''} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order">Ordre d&apos;affichage (Chiffre)</Label>
                <Input id="order" name="order" type="number" defaultValue={selectedTeamMember?.order || 0} />
              </div>
            </div>
            <DialogFooter className="mt-6">
              <Button type="button" variant="outline" onClick={() => setTeamModalOpen(false)}>Annuler</Button>
              <Button type="submit" className="bg-[#1A9E97] hover:bg-[#0D7A74] text-white">Enregistrer</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
