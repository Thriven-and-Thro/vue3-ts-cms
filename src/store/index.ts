import { createStore, Store, useStore as useVuexStore } from "vuex"

import login from "./login/login"
import system from "./main/system/system"
import dashboard from "./main/analysis/dashboard"
import { getPageListData } from "@/service/main/system/system"

import { IRootState, IStoreType } from "./types"

const store = createStore<IRootState>({
  state() {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  getters: {},
  actions: {
    // 获取部门、角色、菜单数据
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      commit("changeEntireDepartment", departmentList)

      const roleResult = await getPageListData("/role/list", {})
      const { list: roleList } = roleResult.data
      commit("changeEntireRole", roleList)

      const menuResult = await getPageListData("/menu/list", {
        offset: 0,
        size: 1000
      })
      const { list: menuList } = menuResult.data
      commit("changeEntireMenu", menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

// 加载localstorage到vuex
export function setupStore() {
  // 注意加上login模块
  store.dispatch("login/loadLocalLogin")
}

// 重写useStore方法，弥补vuex中useStore没有类型
// 推荐数据管理库：pinia
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
