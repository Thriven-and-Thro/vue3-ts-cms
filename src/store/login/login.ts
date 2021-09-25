import { Module } from "vuex"

import { ILoginState } from "./types"
import { IRootState } from "../types"

import localCache from "@/utils/cache"
import { mapMenusToRoutes } from "@/utils/map-menus"
import router from "@/router"

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login"

// 此处Module类型必须传递两个泛型，一个为当前state的类型，一个为根state的类型
const LoginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 使用动态路由
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        // Add a new Route Record as the child of an existing route
        // (method) Router.addRoute(parentName: RouteRecordName, route: RouteRecordRaw): () => void
        router.addRoute("main", route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      try {
        // 登录
        const loginResult = await accountLoginRequest(payload)
        const { id, token } = loginResult.data
        commit("changeToken", token)
        localCache.setCache("token", token)

        // 请求用户信息
        const userInfoResult = await requestUserInfoById(id)
        const userInfo = userInfoResult.data
        commit("changeUserInfo", userInfo)
        localCache.setCache("userInfo", userInfo)

        // 请求用户列表
        const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
        const userMenus = userMenusResult.data
        commit("changeUserMenus", userMenus)
        localCache.setCache("userMenus", userMenus)

        // 跳转至首页
        router.push("./main")
      } catch {
        console.log("账号或密码错误")
      }
    },
    // 加载localstorage到vuex
    loadLocalLogin({ commit }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
      }
      const userInfo = localCache.getCache("userInfo")
      if (token) {
        commit("changeUserInfo", userInfo)
      }
      const userMenus = localCache.getCache("userMenus")
      if (token) {
        commit("changeUserMenus", userMenus)
      }
    }
  }
}

export default LoginModule
