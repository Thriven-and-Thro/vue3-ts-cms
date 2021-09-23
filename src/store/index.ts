import { createStore } from "vuex"

import login from "./login/login"

import { IRootState } from "./types"

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

export default store
