import { setImmediate } from '@authink/commonjs'
import { App } from 'antd'

export function useSuccess(): (value: string) => void {
  const { message } = App.useApp()
  return (value) =>
    setImmediate(() => {
      message.destroy()
      message.success(value)
    })
}
