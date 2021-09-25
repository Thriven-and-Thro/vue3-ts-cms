import { ILoginState } from "./login/types"

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}

// 使用交叉类型将模块中的类型和根类型合并
export type IStoreType = ILoginState & IRootWithModule
