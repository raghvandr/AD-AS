'use client'

import { createContext, useContext, useState } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  userPhone: string | null
  login: (phone: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function Providers({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userPhone, setUserPhone] = useState<string | null>(null)

  const login = (phone: string) => {
    setUserPhone(phone)
    setIsAuthenticated(true)
  }

  const logout = () => {
    setUserPhone(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userPhone, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within Providers')
  }
  return context
}
