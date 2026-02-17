'use client'

import { useState } from 'react'
import { useAuth } from '@/app/providers'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { LogOut } from 'lucide-react'

export default function SettingsPage() {
  const { isAuthenticated, logout, userPhone } = useAuth()
  const router = useRouter()
  const [settings, setSettings] = useState({
    language: 'English',
    sensitivity: 'Medium',
    notifications: true,
    videoCalls: true,
  })

  if (!isAuthenticated) {
    router.push('/login')
    return null
  }

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex-1 px-4 py-8 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="mt-2 text-text-secondary">
            Customize your SafeRoad AI experience
          </p>
        </div>

        {/* Account Section */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Account</h2>
          <div className="rounded-lg bg-card p-6">
            <p className="text-sm text-text-secondary">Phone Number</p>
            <p className="mt-1 font-semibold text-foreground">{userPhone}</p>
          </div>
        </section>

        {/* AI Settings Section */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            AI Detection Settings
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    Detection Sensitivity
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Adjust how sensitive the AI is to potential accidents
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                {['Low', 'Medium', 'High'].map((level) => (
                  <button
                    key={level}
                    onClick={() =>
                      setSettings({ ...settings, sensitivity: level })
                    }
                    className={`flex-1 rounded-lg px-4 py-2 font-medium transition-all ${
                      settings.sensitivity === level
                        ? 'bg-emergency text-background'
                        : 'bg-border text-text-secondary hover:bg-border/80'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* General Settings */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Preferences
          </h2>
          <div className="space-y-4">
            {/* Language Selection */}
            <div className="rounded-lg bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Language</p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Choose your preferred language
                  </p>
                </div>
                <select
                  value={settings.language}
                  onChange={(e) =>
                    setSettings({ ...settings, language: e.target.value })
                  }
                  className="rounded-lg bg-border px-3 py-1 text-foreground focus:outline-none focus:ring-2 focus:ring-emergency"
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Marathi</option>
                  <option>Gujarati</option>
                  <option>Kannada</option>
                  <option>Malayalam</option>
                  <option>Bengali</option>
                </select>
              </div>
            </div>

            {/* Notifications */}
            <div className="rounded-lg bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Notifications</p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Receive alerts and updates
                  </p>
                </div>
                <button
                  onClick={() =>
                    setSettings({
                      ...settings,
                      notifications: !settings.notifications,
                    })
                  }
                  className={`relative h-8 w-14 rounded-full transition-colors ${
                    settings.notifications ? 'bg-safe' : 'bg-border'
                  }`}
                >
                  <div
                    className={`absolute top-1 h-6 w-6 rounded-full bg-background transition-transform ${
                      settings.notifications ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Video Calls */}
            <div className="rounded-lg bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    Video Call Support
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Allow emergency responders to make video calls
                  </p>
                </div>
                <button
                  onClick={() =>
                    setSettings({
                      ...settings,
                      videoCalls: !settings.videoCalls,
                    })
                  }
                  className={`relative h-8 w-14 rounded-full transition-colors ${
                    settings.videoCalls ? 'bg-safe' : 'bg-border'
                  }`}
                >
                  <div
                    className={`absolute top-1 h-6 w-6 rounded-full bg-background transition-transform ${
                      settings.videoCalls ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-emergency px-6 py-3 font-semibold text-emergency transition-all hover:bg-emergency/10"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

      <Navigation />
    </div>
  )
}
