import { ClientDeleteModalConfirmation } from '@/features/clients/components/client-delete-modal-confirmation'

export function Modal() {
  return (
    <div className="flex items-center justify-center w-screen h-screen fixed z-20 bg-[#00000050]">
      <div className="w-full h-[13.5rem] p-7 mx-4 bg-white rounded-lg sm:w-[26.875rem]">
        <ClientDeleteModalConfirmation />
      </div>
    </div>
  )
}
