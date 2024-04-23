import { useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'

import { useLocalStorage } from '@/lib/hooks/useLocalStorage'

import { clientSchema } from '../validators/client'

import type { FormInput } from '../validators/client'
import type { Client } from '../types/client'

interface Props {
  client_id: string
}

export function useUpdateClient({ client_id }: Props) {
  const { getLocalStorage, setLocalStorage } = useLocalStorage<Client[]>()
  const router = useRouter()

  let clients = useRef<Client[]>([])
  let updatingClient = useRef<Client | undefined>(undefined)

  const updateClientForm = useForm<FormInput>({
    resolver: zodResolver(clientSchema),
  })

  const onSubmit: SubmitHandler<FormInput> = useCallback(
    async data => {
      updatingClient.current = Object.assign({ ...updatingClient, id: client_id }, data)

      setLocalStorage(
        'clients',
        clients.current.map(client => (client.id === client_id ? (updatingClient.current as Client) : client))
      )

      toast.success('Client updated successfully!')
      router.push('/clients')
    },
    [client_id, router, setLocalStorage]
  )

  useEffect(() => {
    clients.current = getLocalStorage('clients') ?? []
    updatingClient.current = clients.current.find(client => client.id === client_id)

    if (!updatingClient.current) {
      router.push('/clients')

      return () => {
        toast.error('Client not found')
        console.log('running')
      }
    }

    const { name, surname, email, phone } = updatingClient.current as Client

    updateClientForm.reset({ name, surname, email, phone })
  }, [])

  return {
    updateClientForm,
    onSubmit,
  }
}
