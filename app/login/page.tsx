'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { useAuth } from '@/app/providers'

export default function LoginPage() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { login } = useAuth()

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (phone.length >= 10) {
      setStep('otp')
    }
  }

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length === 4) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        login(phone)
        router.push('/dashboard')
      }, 500)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-background px-6 py-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">SafeRoad AI</h1>
        <p className="mt-2 text-text-secondary">
          {step === 'phone'
            ? 'Enter your phone number'
            : 'Enter the OTP sent to your phone'}
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={step === 'phone' ? handlePhoneSubmit : handleOtpSubmit}
        className="w-full max-w-md space-y-6"
      >
        {step === 'phone' ? (
          <>
            <div>
              <label className="block text-sm font-medium text-foreground">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                placeholder="+91 XXXXXXXXXX"
                maxLength={10}
                className="mt-2 w-full rounded-lg bg-card px-4 py-3 text-foreground placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-emergency"
              />
              <p className="mt-2 text-xs text-text-secondary">
                We'll send you a verification code
              </p>
            </div>

            <button
              type="submit"
              disabled={phone.length < 10}
              className="w-full rounded-lg bg-emergency px-6 py-3 font-semibold text-background transition-all hover:shadow-lg disabled:opacity-50"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-foreground">
                OTP
              </label>
              <div className="mt-2 flex gap-2">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    value={otp[index] || ''}
                    onChange={(e) => {
                      const newOtp = otp.split('')
                      newOtp[index] = e.target.value
                      setOtp(newOtp.join(''))
                    }}
                    maxLength={1}
                    className="h-14 w-full rounded-lg bg-card text-center text-2xl font-bold text-foreground placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-emergency"
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={otp.length !== 4 || isLoading}
              className="w-full rounded-lg bg-safe px-6 py-3 font-semibold text-background transition-all hover:shadow-lg disabled:opacity-50"
            >
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </button>

            <button
              type="button"
              onClick={() => {
                setStep('phone')
                setOtp('')
              }}
              className="w-full text-sm text-text-secondary hover:text-foreground"
            >
              Change phone number
            </button>
          </>
        )}
      </form>

      {/* Footer */}
      <p className="text-center text-xs text-text-secondary">
        By continuing, you agree to our Terms of Service
      </p>
    </div>
  )
}
