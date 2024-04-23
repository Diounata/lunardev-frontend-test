import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<any> {}

export function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={`flex items-center gap-2 px-8 py-1 bg-[#1769FF] rounded-full text-white text-sm font-medium hover:brightness-[0.85] active:brightness-[0.85] ease-in duration-300 md:text-base md:py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
