import { Button } from '@/components/button'
import { TextButton } from '@/components/text-button'

export function ClientDeleteModalConfirmation() {
  return (
    <div className="flex flex-col justify-between">
      <header>
        <h3 className="mb-4 font-medium text-2xl">Delete confirmation</h3>
        <p className="text-base sm:text-lg">Are you sure you want to delete this client?</p>
      </header>

      <div className="flex items-center justify-end gap-4">
        <TextButton>Cancel</TextButton>
        <Button className="bg-red-500">Delete</Button>
      </div>
    </div>
  )
}
