# vue3-ts-cms

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 尚不能解决的一些问题：

- page-content 108 行：
- 因 goods 的接口不能添加商品，故将其总是置为 false:
  ```js
  const isCreate =
    props.pageName === "goods" ? false : usePermission(props.pageName, "create")
  ```
- 同时，goods 也不能进行商品的编辑、删除
- 因后端接口的原因，暂时不能使用时间选择器
- 因后端接口的原因，暂时不能提供菜单管理、商品信息的查询
- 可能是并发的问题，有时候会请求失败

### 解决方法：

- 自己写接口！！！
