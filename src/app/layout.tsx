import './globals.css'
import React, { ReactNode } from 'react'

export const metadata = {
  title: 'A Date With Real Upper Pikin — Happiness Edition',
  description: 'Buy tickets on WhatsApp',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
