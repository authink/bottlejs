import useSWR from 'swr'
import { useKey } from './useKey'

export function useQuery({ path, options }) {
  const key = useKey({ path })
  return useSWR(key, options)
}