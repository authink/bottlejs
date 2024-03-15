import { AppLayout } from '../AppLayout'
import { UnloginLayout } from '../UnloginLayout'

export function useLayout(authed) {
  if (authed()) {
    return AppLayout
  } else {
    return UnloginLayout
  }
}
