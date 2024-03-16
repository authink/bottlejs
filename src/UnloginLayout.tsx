import { Layout } from 'antd'
import React, { ReactNode } from 'react'

const { Content } = Layout

interface UnloginLayoutProps {
  children: ReactNode
}

export function UnloginLayout({ children }: UnloginLayoutProps) {
  return (
    <Layout>
      <Content
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </Content>
    </Layout>
  )
}
