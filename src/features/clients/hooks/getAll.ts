import { useLocalStorage } from '@/lib/hooks/useLocalStorage'

import type { Client } from '../types/client'

export function useGetAllClients() {
  const { getLocalStorage } = useLocalStorage<Client[]>()

  const initialData = {
    clients: getLocalStorage('clients') ?? [],
  }

  return { initialData }
}
