// 定义全局变量
// app有类型为App
import { App } from "vue"

import { formatUTCString } from "@/utils/date-format"

export default function registerProperties(app: App) {
  // 通过 app.config.globalProperties 定义全局变量
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUTCString(value)
    }
  }
}
