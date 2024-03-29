export { AppLayout } from './AppLayout'
export { AppSWRConfig } from './AppSWRConfig'
export { Bool } from './Bool'
export { FooterBar } from './FooterBar'
export { HeaderBar } from './HeaderBar'
export { HtmlDocument } from './HtmlDocument'
export { JsonViewer } from './JsonViewer'
export { Loading } from './Loading'
export { LocaleSwitcher } from './LocaleSwitcher'
export { SiderMenu } from './SiderMenu'
export { UnloginLayout } from './UnloginLayout'
export { WebApp } from './WebApp'

export { useColumns } from './hooks/useColumns'
export { useDataSource } from './hooks/useDataSource'
export { useError } from './hooks/useError'
export { useLayout } from './hooks/useLayout'
export { useLazyQuery } from './hooks/useLazyQuery'
export { useMutation } from './hooks/useMutation'
export { usePagination } from './hooks/usePagination'
export { useQuery } from './hooks/useQuery'
export { useSuccess } from './hooks/useSuccess'
export { useToken } from './hooks/useToken'

export async function locales(locale: string) {
  return (await import(`./locales/${locale}.json`)).default
}
