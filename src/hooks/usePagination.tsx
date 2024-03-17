import { useState } from 'react'

interface PagingResponse {
  items: Array<any>
  limit: number
  offset: number
  total: number
}

interface Pagination {
  current: number
  pageSize: number
  total: number
  updateTotal: (res: PagingResponse) => void
  showSizeChanger: boolean
  onChange: (page: number, pageSize: number) => void
  onShowSizeChange: (current: number, size: number) => void
}

interface PaginationHook {
  pagination: Pagination
  limit: number
  offset: number
}

export function usePagination(defaultPageSize: number = 5): PaginationHook {
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(defaultPageSize)
  const pagination: Pagination = {
    current,
    pageSize,
    total: 0,
    updateTotal: (res) => {
      if (res) {
        pagination.total = res.total
      }
    },
    showSizeChanger: true,
    onChange: (page) => setCurrent(page),
    onShowSizeChange: (_, size) => {
      setCurrent(1)
      setPageSize(size)
    },
  }

  return {
    pagination,
    limit: pageSize,
    offset: (current - 1) * pageSize,
  }
}
