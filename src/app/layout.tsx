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
      <body className={`flex flex-col min-h-screen bg-gray-100 ${roboto.className}`}>
        <Header />

        <main className="grow my-20 px-4 py-10 md:py-[4.5rem] md:px-[3.5rem] xl:px-[9.75rem]">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
