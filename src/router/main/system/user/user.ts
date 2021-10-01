// 设置路由映射，交给动态路由动态配置
const user = () => import("@/views/main/system/user/user.vue")
export default {
  path: "/main/system/user",
  name: "user",
  component: user,
  children: []
}
