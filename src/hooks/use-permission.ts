// 判断指定权限该用户是否拥有
import { useStore } from "@/store"

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions: string[] = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  return !!permissions.find((item) => item === verifyPermission)
}
