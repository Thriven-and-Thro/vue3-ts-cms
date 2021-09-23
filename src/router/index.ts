import { createRouter, createWebHashHistory } from "vue-router"
// 路由类型声明
// type 可加可不加，表示是类型声明
import type { RouteRecordRaw } from "vue-router"

import localCache from "@/utils/cache"

// 使用路由类型注解的数组
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "main"
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    component: () => import("@/views/main/main.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }
})

export default router
