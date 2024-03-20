import { fetcher, http } from '@authink/commonjs'
import useSWRMutation from 'swr/mutation'
import { v4 as uuidv4 } from 'uuid'
import { Key, useKey } from './useKey'

interface LazyQueryProps {
  basePath?: string
  path: string
}

export function useLazyQuery({ basePath, path }: LazyQueryProps) {
  const key = useKey({ basePath, path: `${path}/${uuidv4()}` })

  const submit = async (key: Key, { arg }: { arg: string }) =>
    await fetcher({ ...key, path: `${path}/${arg}`, method: http.GET })

  return useSWRMutation(key, submit)
}
