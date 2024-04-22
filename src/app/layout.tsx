import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'CRM System',
  description: 'CRM System for client management',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${roboto.className}`}>
        <Header />

        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
