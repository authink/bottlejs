export { Active } from './Active'
export { AppLayout } from './AppLayout'
export { AppSWRConfig } from './AppSWRConfig'
export { FooterBar } from './FooterBar'
export { HeaderBar } from './HeaderBar'
export { HtmlDocument } from './HtmlDocument'
export { Loading } from './Loading'
export { LocaleSwitcher } from './LocaleSwitcher'
export { SiderMenu } from './SiderMenu'
export { UnloginLayout } from './UnloginLayout'
export { WebApp } from './WebApp'

export { useLayout } from './hooks/useLayout'
export { useMutation } from './hooks/useMutation'
export { useQuery } from './hooks/useQuery'
export { useToken } from './hooks/useToken'

export async function locales(locale) {
  return (await import(`./locales/${locale}.json`)).default
}
