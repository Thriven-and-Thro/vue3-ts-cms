<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import loginPanel from "./cpns/login-panel.vue"

export default defineComponent({
  name: "Login",
  components: {
    loginPanel
  }
})
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
}
</style>
