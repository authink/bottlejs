import { setImmediate } from '@authink/commonjs'
import { App } from 'antd'

export function useError(): (e: Error) => void {
  const { message } = App.useApp()
  return (e) =>
    setImmediate(() => {
      message.destroy()
      message.error(e.message)
    })
}
