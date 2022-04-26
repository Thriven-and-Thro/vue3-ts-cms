import { Module } from "vuex"
import { ElMessage } from "element-plus/lib/components"

import { ILoginState } from "./types"
import { IRootState } from "../types"

import localCache from "@/utils/cache"
import { mapMenusToPermissions, mapMenusToRoutes } from "@/utils/map-menus"
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
      userMenus: [],
      permissions: []
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
      // {path: '/main/analysis/overview', name: 'overview', children: Array(0), component: ƒ}

      routes.forEach((route) => {
        // (method) Router.addRoute(parentName: RouteRecordName, route: RouteRecordRaw): () => void
        router.addRoute("main", route)
      })

      // 获取该用户的操作权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: any) {
      try {
        // 登录
        const loginResult = await accountLoginRequest(payload)
        const { id, token } = loginResult.data
        commit("changeToken", token)
        localCache.setCache("token", token)

        // 获取部门、角色信息
        dispatch("getInitialDataAction", null, { root: true })

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
        ElMessage.error("账号或密码错误")
      }
    },
    // 加载localstorage到vuex
    loadLocalLogin({ commit }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const userMenus = localCache.getCache("userMenus")
      if (userMenus) {
        commit("changeUserMenus", userMenus)
      }
    }
  }
}

export default LoginModule
