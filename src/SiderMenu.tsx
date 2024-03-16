import { Layout, Menu, Typography } from 'antd'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import React from 'react'

const { Sider } = Layout

export interface MenuItem {
  key: string
  Icon: React.ComponentType<any>
  route: string
}

interface SiderMenuProps {
  logoText: string
  collapsed: boolean
  items: Array<MenuItem>
}

export function SiderMenu({ logoText, collapsed, items }: SiderMenuProps) {
  const t = useTranslations('menu')
  const router = useRouter()
  const pathname = router.pathname
  const selectedKeys =
    pathname === '/' ? ['dashboard'] : pathname.split('/').slice(1)

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Typography.Title
        level={3}
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 32,
          margin: 16,
        }}
      >
        {logoText}
      </Typography.Title>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        onClick={(item) => {
          const clickedItem = items.find(({ key }) => key === item.key)
          if (clickedItem) {
            router.push(clickedItem.route)
          }
        }}
        items={items.map(({ key, Icon }) => ({
          key,
          icon: <Icon />,
          label: t(key),
        }))}
      />
    </Sider>
  )
}
