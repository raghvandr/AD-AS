'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/providers'
import { Navigation } from '@/components/navigation'
import { AlertCircle, Phone, Ambulance, Hospital, MapPin } from 'lucide-react'

export default function AlertPage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const [countdown, setCountdown] = useState(60)
  const [isResponded, setIsResponded] = useState(false)

  if (!isAuthenticated) {
    router.push('/login')
    return null
  }

  useEffect(() => {
    if (countdown > 0 && !isResponded) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown, isResponded])

  const handleResponse = (type: string) => {
    setIsResponded(true)
  }

  const handleCancel = () => {
    router.push('/dashboard')
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex-1 px-4 py-8 md:px-8">
        {/* Emergency Alert Header */}
        <div className="mb-8 flex items-center gap-4 rounded-lg border-2 border-emergency bg-gradient-to-r from-emergency/10 to-transparent p-6">
          <AlertCircle size={40} className="flex-shrink-0 text-emergency" />
          <div>
            <h1 className="text-2xl font-bold text-emergency">EMERGENCY DETECTED</h1>
            <p className="text-text-secondary">
              Accident detected at your location
            </p>
          </div>
        </div>

        {/* Location Info */}
        <div className="mb-8 rounded-lg bg-card p-6">
          <div className="flex items-center gap-3 text-text-secondary">
            <MapPin size={20} />
            <div>
              <p className="text-sm text-text-secondary">Current Location</p>
              <p className="mt-1 font-semibold text-foreground">
                Delhi, India
              </p>
              <p className="text-xs text-text-secondary">
                12.9352° N, 77.6245° E
              </p>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-8 flex flex-col items-center justify-center rounded-lg bg-card p-8">
          <p className="text-sm text-text-secondary">
            Emergency response will be automatically sent in
          </p>
          <p className="mt-4 text-6xl font-bold text-emergency">{countdown}s</p>
          <p className="mt-4 text-center text-sm text-text-secondary">
            Take action below to contact emergency services immediately
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 space-y-3">
          <button
            onClick={() => handleResponse('ambulance')}
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-emergency px-6 py-4 font-semibold text-background transition-all hover:shadow-lg"
          >
            <Ambulance size={24} />
            Call Ambulance
          </button>

          <button
            onClick={() => handleResponse('police')}
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-safe px-6 py-4 font-semibold text-background transition-all hover:shadow-lg"
          >
            <Phone size={24} />
            Alert Police
          </button>

          <button
            onClick={() => handleResponse('hospital')}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-safe px-6 py-4 font-semibold text-safe transition-all hover:bg-safe/10"
          >
            <Hospital size={24} />
            Nearest Hospital
          </button>

          <button
            onClick={() => handleResponse('contacts')}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-text-secondary px-6 py-4 font-semibold text-text-secondary transition-all hover:bg-border"
          >
            <Phone size={24} />
            Emergency Contacts
          </button>
        </div>

        {/* Map Placeholder */}
        <div className="mb-8 rounded-lg bg-card p-6">
          <div className="aspect-video w-full rounded-lg bg-border flex items-center justify-center text-text-secondary">
            <div className="text-center">
              <MapPin size={32} className="mx-auto mb-2" />
              <p>Live Location Map</p>
              <p className="text-xs mt-1">
                Showing your current position and nearby responders
              </p>
            </div>
          </div>
        </div>

        {/* Cancel Button */}
        <button
          onClick={handleCancel}
          className="w-full rounded-lg bg-border px-6 py-3 font-semibold text-text-secondary transition-all hover:bg-border/80"
        >
          Cancel Emergency
        </button>
      </div>

      <Navigation />
    </div>
  )
}
