import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'
import React from 'react'

interface ActiveProps {
  value: boolean
}
export function Active({ value }: ActiveProps) {
  return value ? <CheckCircleFilled /> : <CloseCircleFilled />
}
