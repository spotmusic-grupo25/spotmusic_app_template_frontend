import { URL } from "../../main/router/Path/url";
import useToken from "../../infra/cache/useToken/useToken";

export function useAuth(key: string = '') {
  const token = useToken('get')

  if (key.length >= 200) {
    localStorage.setItem('token', key)
    window.location.href = URL.routerPrivate.home;
  }

  const isToken = token || false

  if (isToken) {
    return true
  }
  return false;
}