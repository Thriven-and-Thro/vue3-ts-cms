export const message = `
# 项目介绍：
主要技术栈：Vue3、Vuex、VueRouter、Typescript、ElementPlus、ECharts
主要功能：
  - 数据通过可视化界面、表格的形式展示，便于用户提取有效信息；
  - 根据用户权限，分配查询、编辑、删除等功能；
项目亮点：
  - 对公共组件、公共模块进行封装，达到仅通过配置信息即可快速生成页面的效果，相比直接编写的模式效率提高 1 倍以上；
  - 对动态路由进行封装，实现了通过文件目录信息即可自动生成对应权限的路由，极大地提高了 20% 的效率，并且显著地减少错误率；
  - 进行静态资源压缩、配置合适的缓存策略等性能优化，相比未优化前性能提高了 25%；
  - 为提高项目的可维护性，对使用的 axios 进行封装，便于网络请求及后续更改引用的第三方库；
  - 通过对应的插件及 webpack 配置项目代码的编写规范、提交规范，便于多人协同开发；

# code-star 的功能结构：
|-系统总览
| |-核心技术
| |-商品统计
|-系统管理
| |-用户管理
| |-部门管理
| |-菜单管理
| |-角色管理
|-商品中心
| |-商品类别
| |-商品信息
|-随便聊聊
| |-你的故事
| |-故事列表
# code-star 的目录结构：
vue3-ts-cms
|-.browserslistrc
|-.editorconfig
|-.eslintrc.js
|-.gitignore
|-.husky
| |-commit-msg
| |-pre-commit
| |-_
| | |-.gitignore
| | |-husky.sh
|-.prettierignore
|-.prettierrc
|-babel.config.js
|-commitlint.config.js
|-package-lock.json
|-package.json
|-public
| |-favicon.ico
| |-index.html
|-README.md
|-src
| |-App.vue
| |-assets
| | |-css
| | | |-base.less
| | | |-index.less
| | |-img
| | | |-avatar.png
| | | |-logo.png
| | | |-notfound.jpg
| | | |-wallhaven-1.png
| | | |-wallhaven-x8p813.jpg
| |-basic-ui
| | |-breadcrumbs
| | | |-index.ts
| | | |-src
| | | | |-breadcrumbs.vue
| | | |-types
| | | | |-index.ts
| | |-card
| | | |-index.ts
| | | |-src
| | | | |-card.vue
| | |-echart
| | | |-data
| | | | |-china.json
| | | |-index.ts
| | | |-src
| | | | |-base-echart.vue
| | |-form
| | | |-index.ts
| | | |-src
| | | | |-form.vue
| | | |-types
| | | | |-index.ts
| | |-table
| | | |-index.ts
| | | |-src
| | | | |-table.vue
| |-components
| | |-development-notice
| | | |-index.ts
| | | |-src
| | | | |-development-notice.vue
| | |-nav-header
| | | |-index.ts
| | | |-src
| | | | |-nav-header-info.vue
| | | | |-nav-header.vue
| | |-nav-menu
| | | |-index.ts
| | | |-src
| | | | |-nav-menu.vue
| | |-page-content
| | | |-index.ts
| | | |-src
| | | | |-page-content.vue
| | |-page-echart
| | | |-index.ts
| | | |-src
| | | | |-bar-echart.vue
| | | | |-line-echart.vue
| | | | |-map-echart.vue
| | | | |-pie-echart.vue
| | | | |-rose-echart.vue
| | | | |-type.ts
| | | |-utils
| | | | |-convert-data.ts
| | | | |-coordinate-data.ts
| | |-page-modal
| | | |-index.ts
| | | |-src
| | | | |-page-modal.vue
| | |-page-search
| | | |-index.ts
| | | |-src
| | | | |-page-search.vue
| |-global
| | |-index.ts
| | |-register-element.ts
| | |-register-properties.ts
| |-hooks
| | |-use-page-modal.ts
| | |-use-page-search.ts
| | |-use-permission.ts
| | |-useEchart.ts
| |-main.ts
| |-router
| | |-index.ts
| | |-main
| | | |-analysis
| | | | |-dashboard
| | | | | |-dashboard.ts
| | | | |-overview
| | | | | |-overview.ts
| | | |-product
| | | | |-category
| | | | | |-category.ts
| | | | |-goods
| | | | | |-goods.ts
| | | |-story
| | | | |-chat
| | | | | |-chat.ts
| | | | |-list
| | | | | |-list.ts
| | | |-system
| | | | |-department
| | | | | |-department.ts
| | | | |-menu
| | | | | |-menu.ts
| | | | |-role
| | | | | |-role.ts
| | | | |-user
| | | | | |-user.ts
| |-service
| | |-index.ts
| | |-login
| | | |-login.ts
| | | |-type.ts
| | |-main
| | | |-analysis
| | | | |-dashboard.ts
| | | |-system
| | | | |-system.ts
| | |-request
| | | |-config.ts
| | | |-index.ts
| | | |-type.ts
| | |-types.ts
| |-shims-vue.d.ts
| |-store
| | |-index.ts
| | |-login
| | | |-login.ts
| | | |-types.ts
| | |-main
| | | |-analysis
| | | | |-dashboard.ts
| | | | |-type.ts
| | | |-product
| | | |-system
| | | | |-system.ts
| | | | |-types.ts
| | |-types.ts
| |-utils
| | |-cache.ts
| | |-date-format.ts
| | |-map-menus.ts
| |-views
| | |-login
| | | |-config
| | | | |-account-config.ts
| | | |-cpns
| | | | |-login-account.vue
| | | | |-login-panel.vue
| | | | |-login-phone.vue
| | | |-login.vue
| | |-main
| | | |-analysis
| | | | |-dashboard
| | | | | |-dashboard.vue
| | | | |-overview
| | | | | |-config.js
| | | | | |-overview.vue
| | | |-main.vue
| | | |-product
| | | | |-category
| | | | | |-category.vue
| | | | |-goods
| | | | | |-config
| | | | | | |-content.config.ts
| | | | | | |-search.config.ts
| | | | | |-goods.vue
| | | |-story
| | | | |-chat
| | | | | |-chat.vue
| | | | |-list
| | | | | |-list.vue
| | | |-system
| | | | |-department
| | | | | |-department.vue
| | | | |-menu
| | | | | |-config
| | | | | | |-content.config.ts
| | | | | | |-search.config.ts
| | | | | |-menu.vue
| | | | |-role
| | | | | |-config
| | | | | | |-content.config.ts
| | | | | | |-modal.config.ts
| | | | | | |-search.config.ts
| | | | | |-role.vue
| | | | |-user
| | | | | |-config
| | | | | | |-content.config.ts
| | | | | | |-model.config.ts
| | | | | | |-search.config.ts
| | | | | |-user.vue
| | |-not-found
| | | |-not-found.vue
|-tsconfig.json
|-vue.config.js
|-yarn.lock
`
