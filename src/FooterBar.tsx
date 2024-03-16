import { Layout } from 'antd'
import React, { ReactNode } from 'react'

const { Footer } = Layout

interface FooterBarProps {
  children: ReactNode
}

export function FooterBar({ children }: FooterBarProps) {
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
