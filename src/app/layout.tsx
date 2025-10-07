import './globals.css'
import React, { ReactNode } from 'react'

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Real Upper Pikin | A Date With Real Upper Pikin — Happiness Edition',
  description: 'Experience an unforgettable night with Real Upper Pikin at Eko Convention Centre. Get your tickets now for the ultimate entertainment event.',
  keywords: 'Real Upper Pikin, concert, Lagos, Nigeria, tickets, entertainment',
  authors: [{ name: 'Real Upper Pikin Team' }],
  openGraph: {
    title: 'A Date With Real Upper Pikin — Happiness Edition',
    description: 'Experience an unforgettable night with Real Upper Pikin at Eko Convention Centre.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/logo.png',
        alt: 'Real Upper Pikin Logo',
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Date With Real Upper Pikin — Happiness Edition',
    description: 'Experience an unforgettable night with Real Upper Pikin at Eko Convention Centre.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
