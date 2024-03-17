export function useDataSource(items: Array<any>): Array<any> {
  return items.map((item) => ({
    key: item.id,
    ...item,
  }))
}
