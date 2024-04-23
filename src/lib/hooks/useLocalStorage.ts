export function useLocalStorage<T = any>() {
  const getLocalStorage: (key: string) => T | null = (key: string) => {
    const item = localStorage.getItem(key)

    if (!item) return null

    return JSON.parse(item)
  }

  const setLocalStorage: (key: string, value: T) => void = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  return { getLocalStorage, setLocalStorage }
}
