import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'SafeRoad AI - Emergency Response System',
  description: 'AI-powered road accident detection and emergency response system with real-time monitoring',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">
        <Providers>
          <main className="min-h-screen bg-background pb-24 md:pb-0">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
