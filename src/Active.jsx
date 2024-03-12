import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'
import React from 'react'

export function Active({ value }) {
  return value ? <CheckCircleFilled /> : <CloseCircleFilled />
}
