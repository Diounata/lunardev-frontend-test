import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 as uuid } from 'uuid'

import { useLocalStorage } from '@/lib/hooks/useLocalStorage'

import { clientSchema } from '../validators/client'

import type { FormInput } from '../validators/client'
import type { Client } from '../types/client'

export function useCreateClient() {
  const { getLocalStorage, setLocalStorage } = useLocalStorage<Client[]>()
  const router = useRouter()

  const createClientForm = useForm<FormInput>({
    resolver: zodResolver(clientSchema),
  })

  const onSubmit: SubmitHandler<FormInput> = useCallback(
    async data => {
      const oldClients = getLocalStorage('clients') ?? []
      const client: Client = { id: uuid(), ...data }

      setLocalStorage('clients', [client, ...oldClients])

      toast.success('Client added successfully!')
      router.push('/clients')
    },
    [router, getLocalStorage, setLocalStorage]
  )

  return {
    createClientForm,
    onSubmit,
  }
}
