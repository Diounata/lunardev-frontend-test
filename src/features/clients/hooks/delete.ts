import { Dispatch, SetStateAction, useCallback } from 'react'
import toast from 'react-hot-toast'

import { useLocalStorage } from '@/lib/hooks/useLocalStorage'
import { useDeleteClientContext } from '../contexts/delete-modal'

import type { Client } from '../types/client'

interface Props {
  setClients: Dispatch<SetStateAction<Client[]>>
}

export function useDeleteClient({ setClients }: Props) {
  const { getLocalStorage, setLocalStorage } = useLocalStorage<Client[]>()
  const { deletingClientId, setDeletingClientId } = useDeleteClientContext()

  const onDelete = useCallback(() => {
    const oldClients = getLocalStorage('clients') ?? []

    const updatedClients = oldClients.filter(client => client.id !== deletingClientId)

    setLocalStorage('clients', updatedClients)
    setDeletingClientId(false)

    setClients(updatedClients)
    toast.success('Client deleted successfully!')
  }, [getLocalStorage, setLocalStorage, setDeletingClientId, setClients, deletingClientId])

  return {
    onDelete,
  }
}
