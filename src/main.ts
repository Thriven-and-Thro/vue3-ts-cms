import { createApp } from "vue"
import "normalize.css"

import App from "./App.vue"
import router from "./router"
import store, { setupStore } from "./store"
import { registerApp } from "./global"
import "./assets/css/index.less"

const app = createApp(App)
registerApp(app)
app.use(router).use(store).mount("#app")
// 加载localstorage到vuex
setupStore()
