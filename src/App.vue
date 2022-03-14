<template>
  <div class="app">
    <div class="bg"></div>
    <div class="contain">
      <el-config-provider :locale="zhCn">
        <router-view />
      </el-config-provider>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { ElConfigProvider } from "element-plus/lib/components"
import zhCn from "element-plus/lib/locale/lang/zh-cn"

// defineComponent在js中使用是没有作用的
// 但是它定义了许多泛型，用在ts中能提供类型限制和类型推导的作用
export default defineComponent({
  name: "App",
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      zhCn
    }
  }
})
</script>

<style lang="less">
.app {
  width: 100%;
  height: 100%;
  .bg {
    position: absolute;
    width: 100vw;
    height: 100%;
    min-width: 1170px;
    background: url("./assets/img/wallhaven-1.png") no-repeat;
    background-size: cover;
    opacity: 0.7;
    filter: blur(2px);
    z-index: -999;
  }
  .contain {
    margin: 0 auto;
    width: 100vw;
    min-width: 1170px;
    height: 100%;
  }
}
</style>
