import { App, ConfigProvider, theme } from 'antd'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import { NextIntlClientProvider } from 'next-intl'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactNode, useState } from 'react'
import { AppSWRConfig } from './AppSWRConfig'
import { MenuItem } from './SiderMenu'
import { useLayout } from './hooks/useLayout'

interface WebAppProps {
  logoText: string
  copyright: () => ReactNode
  authnRoutes: Array<string>
  timeZone: string
  menuItems: Array<MenuItem>
  Component: React.ComponentType<any>
  pageProps: any
}

export function WebApp({
  logoText,
  copyright,
  authnRoutes,
  timeZone,
  menuItems,
  Component,
  pageProps,
}: WebAppProps) {
  const router = useRouter()
  const Layout = useLayout(() => authnRoutes.includes(router.pathname))
  const [currentTheme, setCurrentTheme] = useState('light')
  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone={timeZone}
      messages={pageProps.messages}
    >
      <ConfigProvider
        theme={{
          algorithm:
            currentTheme === 'dark'
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
        }}
        locale={router.locale === 'en' ? enUS : zhCN}
      >
        <App>
          <Layout
            logoText={logoText}
            currentTheme={currentTheme}
            toggleTheme={toggleTheme}
            menuItems={menuItems}
            copyright={copyright()}
          >
            <Head>
              <meta name="description" content={logoText} />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppSWRConfig>
              <Component {...pageProps} />
            </AppSWRConfig>
          </Layout>
        </App>
      </ConfigProvider>
    </NextIntlClientProvider>
  )
}
