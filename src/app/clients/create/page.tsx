'use client'

import { ClientForm } from '@/features/clients/components/client-form'

import { useCreateClient } from '@/features/clients/hooks/create'

export default function CreateClient() {
  const { createClientForm, onSubmit } = useCreateClient()

  return <ClientForm type="create" form={createClientForm} onSubmit={onSubmit} />
}
