import { createStore, Store, useStore as useVuexStore } from "vuex"

import login from "./login/login"

import { IRootState, IStoreType } from "./types"

const store = createStore<IRootState>({
  state() {
    return {
      name: "",
      age: 1
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
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
