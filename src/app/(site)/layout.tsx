import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import React from 'react'
import { Header } from '../../components/ui/common/Header'
import { Footer } from '../../components/ui/common/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-body bg-background text-foreground antialiased`}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
