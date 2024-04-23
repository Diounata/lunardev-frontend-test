'use client'

import { useForm } from 'react-hook-form'

import { ClientForm } from '@/features/clients/components/client-form'

export default function CreateClient() {
  const form = useForm()

  return <ClientForm type="create" form={form} onSubmit={() => {}} />
}
