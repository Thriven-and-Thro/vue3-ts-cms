// vue中app其实是有类型：App
import { App } from "vue"
// 导入base.css
import "element-plus/dist/index.css"
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElMain,
  ElFooter,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem
} from "element-plus/lib/components"

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElMain,
  ElFooter,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem
]

export default function (app: App): void {
  for (const cpn of components) {
    // 全局注册组件
    app.component(cpn.name, cpn)
  }
}
