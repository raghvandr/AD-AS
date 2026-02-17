import { Circle } from 'lucide-react'

interface StatusIndicatorProps {
  label: string
  isActive: boolean
  icon?: React.ReactNode
}

export function StatusIndicator({
  label,
  isActive,
  icon,
}: StatusIndicatorProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-card p-4">
      <div className="flex flex-1 items-center gap-3">
        {icon}
        <span className="text-sm text-text-secondary">{label}</span>
      </div>
      <Circle
        size={12}
        className={isActive ? 'fill-safe text-safe' : 'fill-border text-border'}
      />
    </div>
  )
}
