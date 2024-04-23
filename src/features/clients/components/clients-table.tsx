import Image from 'next/image'

import { TextButton } from '@/components/text-button'

import { formatPhoneMask } from '@/utils/formatPhoneMask'

import type { Client } from '../types/client'

interface Props {
  clients: Client[]
}

export function ClientsTable({ clients }: Props) {
  return (
    <table className="bg-white rounded-xl shadow-md w-full">
      <thead>
        <tr className="px-5 py-7 text-lg">
          <th className="text-center opacity-50">#</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {clients.map((client, index) => (
          <tr className="px-5 py-7" key={client.id}>
            <td className="flex items-center justify-center opacity-50">{index + 1}</td>
            <td className="flex items-center">{client.name}</td>
            <td className="flex items-center">{client.surname}</td>
            <td className="flex items-center underline">{client.email}</td>
            <td className="flex items-center">{formatPhoneMask(client.phone)}</td>
            <td className="flex items-center gap-4">
              <TextButton>
                <Image src="/edit.svg" alt="Edit" width={18} height={16} /> Edit
              </TextButton>

              <TextButton>
                <Image src="/trash.svg" alt="Delete" width={14} height={16} /> Delete
              </TextButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
