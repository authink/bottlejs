import { AppLayout } from '../AppLayout'
import { UnloginLayout } from '../UnloginLayout'

export function useLayout(needLogin) {
  if (needLogin()) {
    return AppLayout
  } else {
    return UnloginLayout
  }
}
