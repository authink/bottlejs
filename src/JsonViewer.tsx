import { Space, Tree, TreeDataNode } from 'antd'
import React from 'react'

interface JsonViewerProps {
  data: any
  title: string
}

export const JsonViewer: React.FC<JsonViewerProps> = ({ data, title }) => {
  const getTreeData = (data: any, title: string, key: string): TreeDataNode => {
    if (typeof data === 'object' && !Array.isArray(data)) {
      return {
        title,
        key,
        children: Object.entries(data).map(([field, value]) =>
          getTreeData(value, field, `${title}.${field}`),
        ),
      }
    }

    if (Array.isArray(data)) {
      return {
        title,
        key: title,
        children: data.map((value, i) =>
          getTreeData(value, `${i}`, `${title}-${i}`),
        ),
      }
    }

    if (typeof data === 'boolean') {
      return {
        title: (
          <Space>
            <span style={{ color: 'red' }}>{title}:</span>
            {data ? 'true' : 'false'}
          </Space>
        ),
        key: title,
      }
    }

    return {
      title: (
        <Space>
          <span style={{ color: 'red' }}>{title}:</span>
          {data}
        </Space>
      ),
      key: title,
    }
  }

  return <Tree showLine treeData={[getTreeData(data, title, title)]} />
}
