import { fetcher, http } from '@authink/commonjs'
import useSWRMutation from 'swr/mutation'
import { Key, useKey } from './useKey'

interface MutationProps {
  basePath?: string
  path: string
  method?: string
  options?: any
}

export function useMutation({
  basePath,
  path,
  method = http.POST,
  options,
}: MutationProps) {
  const key = useKey({ basePath, path, method })

  const submit = async (key: Key, { arg: body }: { arg: any }) =>
    await fetcher({ ...key, body })

  return useSWRMutation(key, submit, options)
}
