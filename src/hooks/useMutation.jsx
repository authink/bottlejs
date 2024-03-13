import { fetcher, http } from '@authink/commonjs'
import useSWRMutation from 'swr/mutation'
import { useKey } from './useKey'

export function useMutation({ path, method = http.POST, options }) {
  const key = useKey({ path, method })

  const submit = async (key, { arg: body }) => await fetcher({ ...key, body })

  return useSWRMutation(key, submit, options)
}
