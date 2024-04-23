import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Modal({ isOpen, setIsOpen, children }: Props) {
  document.getElementsByTagName('body')[0].style.overflow = isOpen ? 'hidden' : 'auto'

  return (
    <div
      className={`${
        isOpen ? 'flex items-center justify-center top-0 left-0' : 'hidden'
      } w-screen h-screen absolute z-20`}
    >
      <div className="w-full h-full bg-[#00000050] cursor-pointer fixed" onClick={() => setIsOpen(false)} />
      <div className="w-full h-[13.5rem] p-7 mx-4 bg-white rounded-lg sm:w-[26.875rem] z-30">{children}</div>
    </div>
  )
}
