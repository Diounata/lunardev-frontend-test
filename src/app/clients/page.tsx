'use client'

import Link from 'next/link'

import { Button } from '@/components/button'
import { ClientCard } from '@/features/clients/components/client-card'
import { ClientsTable } from '@/features/clients/components/clients-table'

import { useGetAllClients } from '@/features/clients/hooks/getAll'
import { useWindowWidth } from '@/lib/hooks/useWindowWidth'

import type { Client } from '@/features/clients/types/client'

export default function Clients() {
  const {
    initialData: { clients },
  } = useGetAllClients()

  return (
    <div className="flex flex-col gap-9">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-medium md:text-3xl">Clients ({clients.length})</h1>

        <Link href="/clients/create">
          <Button>+ New</Button>
        </Link>
      </header>

      <main>
        <ClientsDisplay clients={clients} />
      </main>
    </div>
  )
}

function ClientsDisplay({ clients }: { clients: Client[] }) {
  const { width } = useWindowWidth()

  if (!clients.length) return <div className="text-lg">No clients added</div>
  if (width >= 1280) return <ClientsTable clients={clients} />

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 flex-col gap-8">
      {clients.map((client, index) => (
        <ClientCard client={client} index={index + 1} key={client.id} />
      ))}
    </div>
  )
}
