import Image from 'next/image'
import logoURL from '/public/logo.png'

export function Footer() {
  return (
    <footer className="fixed bottom-0 z-10 md:hidden flex items-center justify-between w-full h-[5rem] bg-[#fff] shadow-[0px_-10px_15px_-3px_rgb(0_0_0_/_0.1),0px_-4px_6px_-4px_rgb(0_0_0_/_0.1)]">
      <Image src={logoURL} alt="CRM Systems" width={107} height={80} priority />

      <p className="pr-4 text-sm opacity-70">Logged as Admin</p>
    </footer>
  )
}
