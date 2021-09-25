<template>
  <div class="not-found">
    <img src="@/assets/img/notfound.jpg" alt="" @click="handleNotfoundClick" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import router from "@/router"

export default defineComponent({
  name: "NotFound",
  setup() {
    const handleNotfoundClick = () => {
      router.go(-1)
    }
    return {
      handleNotfoundClick
    }
  }
})
</script>

<style scoped>
.not-found {
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 100%;
}
</style>
