'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/providers'
import { Navigation } from '@/components/navigation'
import { EmergencyButton } from '@/components/emergency-button'
import { StatusIndicator } from '@/components/status-indicator'
import { Radar, Zap, Mic, Activity } from 'lucide-react'

export default function DashboardPage() {
  const { isAuthenticated, userPhone } = useAuth()
  const router = useRouter()

  if (!isAuthenticated) {
    router.push('/login')
    return null
  }

  const handleSOSClick = () => {
    router.push('/alert')
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex-1 px-4 py-8 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-2 text-text-secondary">
            Status: All systems active and monitoring
          </p>
        </div>

        {/* Status Section */}
        <div className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            System Status
          </h2>
          <div className="space-y-3">
            <StatusIndicator
              label="AI Detection Active"
              isActive={true}
              icon={<Radar size={20} className="text-emergency" />}
            />
            <StatusIndicator
              label="GPS Tracking"
              isActive={true}
              icon={<Activity size={20} className="text-safe" />}
            />
            <StatusIndicator
              label="Microphone Access"
              isActive={true}
              icon={<Mic size={20} className="text-safe" />}
            />
            <StatusIndicator
              label="Internet Connection"
              isActive={true}
              icon={<Zap size={20} className="text-safe" />}
            />
          </div>
        </div>

        {/* Emergency Button Section */}
        <div className="flex flex-col items-center justify-center gap-6 py-8">
          <p className="text-center text-sm text-text-secondary">
            Press SOS button for emergency assistance
          </p>
          <EmergencyButton onClick={handleSOSClick} />
          <p className="text-center text-xs text-text-secondary">
            Your location will be automatically shared with emergency contacts
          </p>
        </div>

        {/* Quick Info */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-card p-6">
            <h3 className="font-semibold text-foreground">Emergency Contacts</h3>
            <p className="mt-2 text-2xl font-bold text-safe">3 Added</p>
            <button className="mt-4 text-sm text-emergency hover:underline">
              Manage contacts →
            </button>
          </div>
          <div className="rounded-lg bg-card p-6">
            <h3 className="font-semibold text-foreground">AI Sensitivity</h3>
            <p className="mt-2 text-2xl font-bold text-safe">Medium</p>
            <button className="mt-4 text-sm text-emergency hover:underline">
              Adjust settings →
            </button>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
