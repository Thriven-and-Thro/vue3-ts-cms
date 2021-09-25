// 动态路由
// 导入路由类型
import { RouteRecordRaw } from "vue-router"

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  // 获取所有路由信息
  const allRoutes: RouteRecordRaw[] = []
  // webpack能对该方法进行识别
  // 获取所有文件信息组成的对象。参数1：某路径下。参数2：是否递归查找所有文件。参数3：目标匹配的文件。
  const routeFiles = require.context("../router/main", true, /\.ts/)
  // 使用keys方法得到对象值组成的数组
  routeFiles.keys().forEach((key) => {
    // 对路径进行处理
    const route = require("../router/main" + key.split(".")[1])
    // 添加至allRoutes
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      // type===2：无子路由
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        // 将路径添加至routes
        if (route) routes.push(route)
        // type===1：有子路由
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routes
}
