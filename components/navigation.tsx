'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Phone, AlertCircle, Settings } from 'lucide-react'

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/contacts', icon: Phone, label: 'Contacts' },
  { href: '/alert', icon: AlertCircle, label: 'Alerts' },
  { href: '/settings', icon: Settings, label: 'Settings' },
]

export function Navigation() {
  const pathname = usePathname()

  // Don't show navigation on login or splash screen
  if (pathname === '/' || pathname === '/login') {
    return null
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-card md:static md:border-t-0 md:border-r">
      <div className="flex gap-0 md:flex-col">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center justify-center gap-1 px-4 py-3 text-xs md:flex-row md:gap-3 md:text-sm ${
                isActive
                  ? 'bg-emergency text-background'
                  : 'text-text-secondary hover:bg-border'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
