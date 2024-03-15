import { setImmediate } from '@authink/commonjs'
import { App } from 'antd'

export function useError() {
  const { message } = App.useApp()
  return (error) =>
    setImmediate(() => {
      message.destroy()
      message.error(error.message)
    })
}
