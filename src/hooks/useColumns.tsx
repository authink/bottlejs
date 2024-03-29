import { useFormatter, useTranslations } from 'next-intl'
import React from 'react'
import { Bool } from '../Bool'
import { JsonViewer } from '../JsonViewer'

interface Column {
  key: string
  dataIndex: string
  title: string
  render: (value: any) => any
}

interface Field {
  name: string
  type: string
}

export function useColumns(fields: Array<Field>): Array<Column> {
  const t = useTranslations()
  const format = useFormatter()

  const fieldRender = (name: string, type: string) => {
    switch (type) {
      case 'boolean':
        return (value: boolean) => <Bool value={value} />
      case 'datetime':
        return (value: string) =>
          format.dateTime(new Date(value), {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })
      case 'json':
        return (value: any) => <JsonViewer title={name} data={value} />
      default:
        return (value: any) => value
    }
  }

  return fields.map(({ name, type }) => ({
    key: name,
    dataIndex: name,
    title: t(name),
    render: fieldRender(name, type),
  }))
}
