import { Layout, theme } from 'antd'
import React, { useState } from 'react'
import { FooterBar } from './FooterBar'
import { HeaderBar } from './HeaderBar'
import { SiderMenu } from './SiderMenu'

const { Content } = Layout

export const AppLayout = ({
  logoText,
  currentTheme,
  toggleTheme,
  menuItems,
  children,
  copyright,
}) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout>
      <SiderMenu logoText={logoText} collapsed={collapsed} items={menuItems} />

      <Layout
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <HeaderBar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          currentTheme={currentTheme}
          toggleTheme={toggleTheme}
        />

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            flex: '1 0 auto',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>

        <FooterBar>{copyright}</FooterBar>
      </Layout>
    </Layout>
  )
}
