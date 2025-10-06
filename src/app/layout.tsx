import './globals.css'
import React, { ReactNode } from 'react'
import Head from 'next/head'

export const metadata = {
  title: 'A Date With Real Upper Pikin — Happiness Edition',
  description: 'Experience an unforgettable night with Real Upper Pikin at Eko Convention Centre. Get your tickets now for the ultimate entertainment event.',
  keywords: 'Real Upper Pikin, concert, Lagos, Nigeria, tickets, entertainment',
  authors: [{ name: 'Real Upper Pikin Team' }],
  openGraph: {
    title: 'A Date With Real Upper Pikin — Happiness Edition',
    description: 'Experience an unforgettable night with Real Upper Pikin at Eko Convention Centre.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Date With Real Upper Pikin — Happiness Edition',
    description: 'Experience an unforgettable night with Real Upper Pikin at Eko Convention Centre.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps){
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ff4d94" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
