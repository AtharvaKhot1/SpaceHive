'use client'

import { Globe, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import AuthModal from './AuthModal'
import { auth } from '../lib/firebase'
import { onAuthStateChanged, User } from 'firebase/auth'

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'login' | 'signup'>('login')
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
    })
    return () => unsubscribe()
  }, [])

  const openModal = (mode: 'login' | 'signup') => {
    setModalMode(mode)
    setModalOpen(true)
  }

  return (
    <header className="absolute top-0 left-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-mono font-extrabold text-4xl uppercase text-white tracking-normal" style={{letterSpacing: '-0.08em', lineHeight: '1.5'}}>
            Space<span className="ml-0.5">Hive</span>
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link href="/spaces" className="flex items-center text-white font-medium text-lg hover:opacity-80 transition">
            <Globe className="w-5 h-5 mr-1" />
            Browse Spaces
            <ChevronDown className="w-4 h-4 ml-1" />
          </Link>
          <Link href="/host" className="text-white font-medium text-lg hover:opacity-80 transition">
            List Your Space
          </Link>
          {user ? (
            <span className="text-white font-medium text-lg">
              {user.email}
            </span>
          ) : (
            <>
              <button
                className="text-white font-medium text-lg hover:opacity-80 transition"
                onClick={() => openModal('login')}
              >
                Log In
              </button>
              <button
                className="bg-white text-gray-900 font-semibold text-lg px-5 py-2 rounded hover:bg-gray-100 transition shadow"
                onClick={() => openModal('signup')}
              >
                Sign Up
              </button>
            </>
          )}
        </nav>
      </div>
      <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} initialMode={modalMode} />
    </header>
  )
} 