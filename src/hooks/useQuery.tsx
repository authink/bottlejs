import useSWR from 'swr'
import { useKey } from './useKey'

interface QueryProps {
  basePath: string
  path: string
  options: any
}

export function useQuery({ basePath, path, options }: QueryProps) {
  const key = useKey({ basePath, path })
  return useSWR(key, options)
}
