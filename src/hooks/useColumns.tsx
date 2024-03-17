import { useFormatter, useTranslations } from 'next-intl'
import React from 'react'
import { Active } from '../Active'

interface Column {
  key: string
  dataIndex: string
  title: string
  render: (value: any) => any
}

export function useColumns(fields: Array<string>): Array<Column> {
  const t = useTranslations()
  const format = useFormatter()

  const fieldRender = (field: string) => {
    switch (field) {
      case 'active':
        return (value: boolean) => <Active value={value} />
      case 'createdAt':
      case 'updatedAt':
        return (value: string) =>
          format.dateTime(new Date(value), {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })
      default:
        return (value: any) => value
    }
  }

  return fields.map((field) => ({
    key: field,
    dataIndex: field,
    title: t(field),
    render: fieldRender(field),
  }))
}
