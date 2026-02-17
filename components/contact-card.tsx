import { Phone, X } from 'lucide-react'

interface ContactCardProps {
  name: string
  phone: string
  relation: string
  onDelete?: () => void
}

export function ContactCard({
  name,
  phone,
  relation,
  onDelete,
}: ContactCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-card p-4">
      <div className="flex flex-1 items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-border">
          <Phone size={20} className="text-safe" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-xs text-text-secondary">{relation}</p>
          <p className="text-sm text-text-secondary">{phone}</p>
        </div>
      </div>
      {onDelete && (
        <button
          onClick={onDelete}
          className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-border hover:bg-emergency"
        >
          <X size={18} />
        </button>
      )}
    </div>
  )
}
