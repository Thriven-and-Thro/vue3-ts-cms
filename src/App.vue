<template>
  <div class="app">
    <div class="bg"></div>
    <div class="contain">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

// defineComponent在js中使用是没有作用的
// 但是它定义了许多泛型，用在ts中能提供类型限制和类型推导的作用
export default defineComponent({
  name: "App"
})
</script>

<style lang="less">
.app {
  width: 100%;
  height: 100%;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("./assets/img/wallhaven-x8p813.jpg") no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.7;
    filter: blur(5px);
    z-index: -999;
  }
  .contain {
    margin: 0 auto;
    width: 1630px;
    height: 100%;
  }
}
</style>
