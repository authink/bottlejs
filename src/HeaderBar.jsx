import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons'
import { Button, Flex, Layout, Space, theme } from 'antd'
import React from 'react'
import { LocaleSwitcher } from './LocaleSwitcher'
const { Header } = Layout

export function HeaderBar({
  collapsed,
  setCollapsed,
  currentTheme,
  toggleTheme,
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <Flex justify="space-between">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />

        <Space style={{ paddingRight: 16 }}>
          <LocaleSwitcher />
          <Button
            type="text"
            icon={currentTheme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
            onClick={toggleTheme}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Space>
      </Flex>
    </Header>
  )
}
