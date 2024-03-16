import { fetcher, http, wait } from '@authink/commonjs'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { SWRConfig } from 'swr'
import { useError } from './hooks/useError'
import { useMutation } from './hooks/useMutation'
import { useToken } from './hooks/useToken'

interface AppSWRConfigProps {
  children: ReactNode
}

export function AppSWRConfig({ children }: AppSWRConfigProps) {
  const router = useRouter()
  const token = useToken()
  const showError = useError()
  const { trigger } = useMutation({ path: 'token/refresh' })

  const redirectLogin = async () => {
    await wait(500)
    router.push('/login')
  }

  return (
    <SWRConfig
      value={{
        fetcher,
        onError: async (e) => {
          if (http.isUnauthorized(e.statusCode)) {
            if (token.value && e.code === 'ExpiredAccessToken') {
              try {
                const data = await trigger(token.value)
                token.set(data)
              } catch (error) {
                await redirectLogin()
              }
            } else {
              await redirectLogin()
            }
          } else {
            showError(e)
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  )
}
