import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SpaceHive - Find and book unique spaces',
  description: 'Discover and book unique spaces for meetings, events, and productions. From conference rooms to film locations, find the perfect space for your next project.',
  keywords: 'space rental, event venues, meeting rooms, film locations, production spaces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 