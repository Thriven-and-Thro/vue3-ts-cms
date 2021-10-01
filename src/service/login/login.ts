import cfRequest from "../index"

import { IAccount, ILoginResult } from "./type"
import { IDataType } from "../types"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenus = "/role/"
}

export function accountLoginRequest(account: IAccount) {
  // 健全的类型定义方式，定义到具体每个数据的类型
  return cfRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  // 层级过多，使用不健全的类型定义方式
  return cfRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return cfRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading: false
  })
}
