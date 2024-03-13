import useSWR from 'swr'
import { useKey } from './useKey'

export function useQuery({ basePath, path, options }) {
  const key = useKey({ basePath, path })
  return useSWR(key, options)
}
