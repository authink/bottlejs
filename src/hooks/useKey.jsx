import { http } from '@authink/commonjs'
import { useLocale } from 'next-intl'
import { useToken } from './useToken'

export function useKey({
  basePath = process.env.NEXT_PUBLIC_API_BASE_PATH,
  path,
  method = http.GET,
}) {
  const token = useToken()
  const locale = useLocale()

  if (!http.valid(method)) {
    return null
  }

  if (!http.isGet(method) || token.ready) {
    return {
      basePath,
      path,
      method,
      locale,
      accessToken: token.value?.access_token,
    }
  }

  return null
}
