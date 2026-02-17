'use client'

import { useState } from 'react'
import { AlertCircle } from 'lucide-react'

interface EmergencyButtonProps {
  onClick?: () => void
  disabled?: boolean
}

export function EmergencyButton({
  onClick,
  disabled = false,
}: EmergencyButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const handleClick = () => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 300)
    onClick?.()
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`relative flex h-48 w-48 flex-col items-center justify-center gap-4 rounded-full font-bold text-background transition-all duration-300 ${
        isPressed
          ? 'scale-95 bg-emergency shadow-lg'
          : 'scale-100 bg-emergency shadow-2xl hover:shadow-emergency/50'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}`}
    >
      <AlertCircle size={64} />
      <span className="text-xl">SOS</span>
    </button>
  )
}
