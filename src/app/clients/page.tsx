import { useMemo } from 'react'
import Link from 'next/link'

import { Button } from '@/components/button'
import { Client } from '@/features/clients/types/client'
import { ClientCard } from '@/features/clients/components/client-card'

export default function Clients() {
  const clients = useMemo<Client[]>(
    () => [
      {
        id: '1',
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@example.com',
        phone: '12345678901',
      },
      {
        id: '2',
        name: 'Alice',
        surname: 'Smith',
        email: 'alice.smith@example.com',
        phone: '12345678901',
      },
      {
        id: '3',
        name: 'Bob',
        surname: 'Johnson',
        email: 'bob.johnson@example.com',
        phone: '12345678901',
      },
      {
        id: '4',
        name: 'Emma',
        surname: 'Brown',
        email: 'emma.brown@example.com',
        phone: '12345678901',
      },
    ],
    []
  )

  return (
    <div className="flex flex-col gap-9">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-medium">Clients (4)</h1>

        <Link href="/clients/create">
          <Button>+ New</Button>
        </Link>
      </header>

      <main className="grid sm:grid-cols-2 flex-col gap-8">
        {clients.map((client, index) => (
          <ClientCard client={client} index={index + 1} key={client.id} />
        ))}
      </main>
    </div>
  )
}
