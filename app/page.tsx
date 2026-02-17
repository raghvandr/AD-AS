'use client'

import Link from 'next/link'
import { Shield, MapPin, AlertCircle } from 'lucide-react'

export default function SplashScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background px-6 py-12">
      {/* Header */}
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emergency to-safe">
            <Shield size={40} className="text-background" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-foreground">SafeRoad AI</h1>
        <p className="mt-2 text-text-secondary">
          AI-Powered Emergency Response System
        </p>
      </div>

      {/* Features */}
      <div className="w-full max-w-md space-y-4">
        <div className="flex items-start gap-4 rounded-lg bg-card p-4">
          <AlertCircle size={24} className="flex-shrink-0 text-emergency" />
          <div>
            <h3 className="font-semibold text-foreground">Instant Detection</h3>
            <p className="mt-1 text-sm text-text-secondary">
              AI-powered accident detection and immediate response
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-lg bg-card p-4">
          <MapPin size={24} className="flex-shrink-0 text-safe" />
          <div>
            <h3 className="font-semibold text-foreground">Real-Time Location</h3>
            <p className="mt-1 text-sm text-text-secondary">
              Precise GPS tracking for emergency responders
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-lg bg-card p-4">
          <Shield size={24} className="flex-shrink-0 text-safe" />
          <div>
            <h3 className="font-semibold text-foreground">Emergency Contacts</h3>
            <p className="mt-1 text-sm text-text-secondary">
              Quick access to family and emergency services
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full max-w-md space-y-3">
        <Link
          href="/login"
          className="flex w-full items-center justify-center rounded-lg bg-emergency px-6 py-4 font-semibold text-background transition-all hover:shadow-lg hover:shadow-emergency/50"
        >
          Get Started
        </Link>
        <p className="text-center text-xs text-text-secondary">
          Your safety is our priority
        </p>
      </div>
    </div>
  )
}
