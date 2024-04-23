import type { ReactNode } from 'react'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'

interface Children {
  children: ReactNode
}

interface Props {
  deletingClientId: string | false
  setDeletingClientId: (id: string | false) => void
}

const DeleteClientContext = createContext({} as Props)

export function DeleteClientProvider({ children }: Children) {
  const [deletingClientId, updateDeletingClientId] = useState<string | false>(false)

  const setDeletingClientId = useMemo(() => (id: string | false) => updateDeletingClientId(id), [])

  const value = useMemo(
    () => ({
      deletingClientId,
      setDeletingClientId,
    }),
    [deletingClientId, setDeletingClientId]
  )

  return <DeleteClientContext.Provider value={value}>{children}</DeleteClientContext.Provider>
}

export function useDeleteClientContext() {
  return useContext(DeleteClientContext)
}
