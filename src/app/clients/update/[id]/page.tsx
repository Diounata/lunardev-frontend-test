'use client'

import { ClientForm } from '@/features/clients/components/client-form'

import { useUpdateClient } from '@/features/clients/hooks/update'

interface Props {
  params: { id: string }
}

export default function UpdateClient({ params }: Props) {
  const { updateClientForm, onSubmit } = useUpdateClient({ client_id: params.id })

  return <ClientForm type="update" form={updateClientForm} onSubmit={onSubmit} />
}
