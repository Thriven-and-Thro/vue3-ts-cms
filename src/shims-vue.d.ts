/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  // 表示.vue文件导出的模块是一个对象
  export default component
}

declare let $store: any
declare let $filters: any
declare module "*.json"
