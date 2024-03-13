import { useMutation, useToken } from '@authink/bottlejs'
import { fetcher, http, wait } from '@authink/commonjs'
import { useRouter } from 'next/router'
import React from 'react'
import { SWRConfig } from 'swr'

export function AppSWRConfig({ children }) {
  const router = useRouter()
  const token = useToken()
  const { trigger } = useMutation({ path: 'token/refresh' })

  const redirectLogin = async () => {
    await wait(500)
    router.push('/login')
  }

  return (
    <SWRConfig
      value={{
        fetcher,
        onError: async ({ statusCode, code }) => {
          if (http.isUnauthorized(statusCode)) {
            if (token.value && code === 'ExpiredAccessToken') {
              try {
                const data = await trigger(token.value)
                token.set(data)
              } catch (error) {
                await redirectLogin()
              }
            } else {
              await redirectLogin()
            }
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  )
}
