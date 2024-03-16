import { fetcher, http } from '@authink/commonjs'
import useSWRMutation from 'swr/mutation'
import { Key, useKey } from './useKey'

interface MutationProps {
  basePath?: string
  path: string
  method?: string
}

export function useMutation({
  basePath,
  path,
  method = http.POST,
}: MutationProps) {
  const key = useKey({ basePath, path, method })

  const submit = async (key: Key, { arg: body }: { arg: any }) =>
    await fetcher({ ...key, method, body })

  return useSWRMutation(key, submit)
}
