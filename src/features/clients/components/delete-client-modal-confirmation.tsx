import { Dispatch, SetStateAction } from 'react'

import { Button } from '@/components/button'
import { TextButton } from '@/components/text-button'
import { Modal } from '@/components/modal'

import { useDeleteClientContext } from '../contexts/delete-modal'
import { useDeleteClient } from '../hooks/delete'

import type { Client } from '../types/client'

interface Props {
  setClients: Dispatch<SetStateAction<Client[]>>
}

export function DeleteClientModalConfirmation({ setClients }: Props) {
  const { deletingClientId, setDeletingClientId } = useDeleteClientContext()
  const { onDelete } = useDeleteClient({ setClients })

  return (
    <Modal isOpen={!!deletingClientId} setIsOpen={() => setDeletingClientId('')}>
      <div className="flex flex-col justify-between h-full">
        <header>
          <h3 className="mb-4 font-medium text-2xl">Delete confirmation</h3>
          <p className="text-base sm:text-lg">Are you sure you want to delete this client?</p>
        </header>

        <div className="flex items-center justify-end gap-4">
          <TextButton onClick={() => setDeletingClientId(false)}>Cancel</TextButton>

          <Button onClick={onDelete} className="bg-red-500">
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  )
}
