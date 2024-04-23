'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  {
    name: 'Home',
    pathname: '#',
  },
  {
    name: 'Clients',
    pathname: '/clients',
  },
  {
    name: 'Profits',
    pathname: '#',
  },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed z-10 flex items-center justify-between w-full h-[5rem] px-4 bg-white shadow-lg md:h-[6.875rem]">
      <div className="flex items-center justify-between w-full md:w-fit">
        <Image src="/logo.png" alt="CRM Systems" width={147} height={110} className="hidden md:block" />

        <h2 className="text-lg font-medium sm:text-xl md:ml-10 md:mr-[4.5rem] md:text-2xl md:flex md:items-center">
          Admin Panel
        </h2>

        <nav className="flex items-center gap-4">
          {links.map(link => (
            <Link
              href={link.pathname}
              className={`text-sm hover:text-gray-800 sm:text-base md:text-xl ${
                link.pathname === pathname && 'font-medium underline'
              }`}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <p className="pr-4 text-sm opacity-70 hidden md:block md:text-base">Logged as Admin</p>
    </header>
  )
}
