import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<any> {}

export function TextButton({ children, ...props }: Props) {
  return (
    <button
      className="flex items-center gap-2 text-sm hover:brightness-[0.85] active:brightness-[0.85] ease-in duration-300 md:text-base"
      {...props}
    >
      {children}
    </button>
  )
}
