import { useEffect, useState } from 'react'

import { useLocalStorage } from '@/lib/hooks/useLocalStorage'

import type { Client } from '../types/client'

export function useGetAllClients() {
  const [clients, setClients] = useState<Client[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { getLocalStorage } = useLocalStorage<Client[]>()

  useEffect(() => {
    const clients = getLocalStorage('clients') ?? []

    setClients(clients)
    setIsLoading(false)
  }, [])

  return { isLoading, clients, setClients }
}
