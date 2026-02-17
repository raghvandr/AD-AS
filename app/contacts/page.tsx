'use client'

import { useState } from 'react'
import { useAuth } from '@/app/providers'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { ContactCard } from '@/components/contact-card'
import { Plus, X } from 'lucide-react'

interface Contact {
  id: string
  name: string
  phone: string
  relation: string
}

const DEFAULT_CONTACTS: Contact[] = [
  { id: '1', name: 'Mom', phone: '+91 9876543210', relation: 'Mother' },
  { id: '2', name: 'Dad', phone: '+91 9876543211', relation: 'Father' },
  { id: '3', name: 'Brother', phone: '+91 9876543212', relation: 'Sibling' },
]

export default function ContactsPage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const [contacts, setContacts] = useState<Contact[]>(DEFAULT_CONTACTS)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', relation: '' })

  if (!isAuthenticated) {
    router.push('/login')
    return null
  }

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.relation) {
      setContacts([
        ...contacts,
        {
          id: Date.now().toString(),
          ...formData,
        },
      ])
      setFormData({ name: '', phone: '', relation: '' })
      setShowForm(false)
    }
  }

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter((c) => c.id !== id))
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex-1 px-4 py-8 md:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Emergency Contacts
            </h1>
            <p className="mt-2 text-text-secondary">
              {contacts.length} contact{contacts.length !== 1 ? 's' : ''} saved
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-emergency text-background transition-all hover:shadow-lg"
          >
            {showForm ? <X size={24} /> : <Plus size={24} />}
          </button>
        </div>

        {/* Add Contact Form */}
        {showForm && (
          <form
            onSubmit={handleAddContact}
            className="mb-8 space-y-4 rounded-lg bg-card p-6"
          >
            <div>
              <label className="block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Contact name"
                className="mt-2 w-full rounded-lg bg-border px-4 py-2 text-foreground placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-emergency"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 XXXXXXXXXX"
                className="mt-2 w-full rounded-lg bg-border px-4 py-2 text-foreground placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-emergency"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground">
                Relation
              </label>
              <select
                value={formData.relation}
                onChange={(e) =>
                  setFormData({ ...formData, relation: e.target.value })
                }
                className="mt-2 w-full rounded-lg bg-border px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-emergency"
              >
                <option value="">Select relation</option>
                <option value="Mother">Mother</option>
                <option value="Father">Father</option>
                <option value="Sibling">Sibling</option>
                <option value="Spouse">Spouse</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-safe px-4 py-2 font-semibold text-background transition-all hover:shadow-lg"
            >
              Add Contact
            </button>
          </form>
        )}

        {/* Contacts List */}
        <div className="space-y-3">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              {...contact}
              onDelete={() => handleDeleteContact(contact.id)}
            />
          ))}
        </div>

        {contacts.length === 0 && !showForm && (
          <div className="flex flex-col items-center justify-center rounded-lg bg-card p-12 text-center">
            <p className="text-text-secondary">No emergency contacts added yet</p>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 text-emergency hover:underline"
            >
              Add your first contact
            </button>
          </div>
        )}
      </div>

      <Navigation />
    </div>
  )
}
