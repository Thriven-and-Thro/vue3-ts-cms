import { ILoginState } from "./login/types"
import { ISystemState } from "./main/system/types"
import { IDashboardState } from "./main/analysis/type"

export interface IRootState {
  // 保存全部部门
  entireDepartment: []
  // 保存全部角色
  entireRole: []
  // 保存全部菜单
  entireMenu: []
}

// 模块中定义的接口统一在此声明
export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

// 使用交叉类型将模块中的类型和根类型合并
export type IStoreType = IRootState & IRootWithModule
