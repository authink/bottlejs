import { Layout } from 'antd'
import React from 'react'

const { Footer } = Layout

export function FooterBar({ children }) {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      {children}
    </Footer>
  )
}
