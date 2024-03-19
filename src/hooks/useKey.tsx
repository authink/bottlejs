import { http } from '@authink/commonjs'
import { useLocale } from 'next-intl'
import { useToken } from './useToken'

interface KeyProps {
  basePath?: string
  path: string
  method?: string
}

export interface Key {
  basePath: string
  path: string
  locale: string
  accessToken?: string
}

export function useKey({
  basePath = process.env.NEXT_PUBLIC_API_BASE_PATH as string,
  path,
  method = http.GET,
}: KeyProps): Key | null {
  const token = useToken()
  const locale = useLocale()

  if (!http.valid(method) || (http.isGet(method) && !token.ready) || !path) {
    return null
  }

  return {
    basePath,
    path,
    locale,
    accessToken: token.value?.access_token,
  }
}
