import { useLocalStorageValue, useSessionStorageValue } from '@react-hookz/web'

interface TokenVal {
  access_token: string
  refresh_token: string
  expires_in: number
  token_type: string
}

interface Token {
  ready: boolean
  rememberMe: boolean
  value?: TokenVal
  setRememberMe: (value: boolean) => void
  set: (value: TokenVal) => void
  remove: () => void
}

export function useToken(): Token {
  const rememberMe = useLocalStorageValue('remember_me', {
    defaultValue: false,
    initializeWithValue: false,
  })
  const localToken = useLocalStorageValue<TokenVal, TokenVal, boolean>(
    'token',
    {
      initializeWithValue: false,
    },
  )
  const sessionToken = useSessionStorageValue<TokenVal, TokenVal, boolean>(
    'token',
    {
      initializeWithValue: false,
    },
  )

  const token = rememberMe.value ? localToken : sessionToken

  return {
    // not undefined, but 'undefined'
    ready: typeof token.value !== 'undefined',
    rememberMe: rememberMe.value || false,
    value: token.value,
    setRememberMe(value: boolean) {
      rememberMe.set(value)
    },
    set(value: TokenVal) {
      this.remove()
      token.set(value)
    },
    remove() {
      localToken.remove()
      sessionToken.remove()
    },
  }
}
