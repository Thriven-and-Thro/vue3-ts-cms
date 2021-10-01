// 动态路由
// 导入路由类型
import { RouteRecordRaw } from "vue-router"

import { IBreadcrumb } from "@/basic-ui/breadcrumbs"

let firstMenu: any = null

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
        // 如果firstMenu没有赋值过，则赋值，即获得第一个路由
        if (!firstMenu) {
          firstMenu = menu
        }
        // type===1：有子路由
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routes
}

// 获取当前路径以上层级作为面包屑
export function pathMapBreadcrumbs(userMenu: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenu, currentPath, breadcrumbs)
  return breadcrumbs
}

// 根据currentPath找该路由信息
// 可传入参数3：获取当前路径以上层级作为面包屑
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name, path: findMenu.path })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 获取操作权限
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  // 递归从用户信息获取权限信息
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}

// 获得权限树选中的叶子节点
export function getMenuLeafKeys(menuList: any[]) {
  const leftKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)

  return leftKeys
}

export { firstMenu }
