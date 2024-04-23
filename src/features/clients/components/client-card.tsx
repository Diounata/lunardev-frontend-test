import Image from 'next/image'
import Link from 'next/link'

import { TextButton } from '@/components/text-button'

import { useDeleteClientContext } from '../contexts/delete-modal'

import { formatPhoneMask } from '@/utils/formatPhoneMask'

import type { Client } from '../types/client'

interface Props {
  client: Client
  index: number
}

export function ClientCard({ client, index }: Props) {
  const { setDeletingClientId } = useDeleteClientContext()

  return (
    <article className="flex flex-col gap-6 min-h-[11.5625rem] p-4 bg-white rounded-xl drop-shadow-md">
      <div className="flex flex-wrap gap-6 w-full relative">
        <DataContainer label="Name" data={client.name} />
        <DataContainer label="Surname" data={client.surname} />

        <p className="absolute right-0 text-[0.625rem] opacity-40">#{index}</p>
      </div>

      <div className="flex flex-wrap gap-6">
        <DataContainer label="Email" data={client.email} />
        <DataContainer label="Phone" data={formatPhoneMask(client.phone)} />
      </div>

      <div className="flex flex-wrap gap-6">
        <Link href={`/clients/update/${client.id}`}>
          <TextButton>
            <Image src="/edit.svg" alt="Edit" width={18} height={16} /> Edit
          </TextButton>
        </Link>

        <TextButton onClick={() => setDeletingClientId(client.id)}>
          <Image src="/trash.svg" alt="Delete" width={14} height={16} /> Delete
        </TextButton>
      </div>
    </article>
  )
}

function DataContainer({ label, data }: { label: string; data: string }) {
  return (
    <div className="flex flex-col gap-[0.375rem] font-normal">
      <p className="text-[0.625rem] opacity-40">{label}</p>
      <p className={`text-sm ${label === 'Email' && 'underline'}`}>{data}</p>
    </div>
  )
}
