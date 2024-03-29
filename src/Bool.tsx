import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import React from 'react'

interface BoolProps {
  value: boolean
}

export function Bool({ value }: BoolProps) {
  return value ? <CheckOutlined /> : <CloseOutlined />
}
