import { AppLayout } from '../AppLayout'
import { UnloginLayout } from '../UnloginLayout'

export function useLayout(needLogin: () => boolean): React.ComponentType<any> {
  if (needLogin()) {
    return AppLayout
  } else {
    return UnloginLayout
  }
}
