<template>
  <div class="overview">
    <marquee scrolldelay="50" direction="left" v-pre
      >Welcome to code-star!</marquee
    >
    <div class="content">
      <div v-for="item in show" :key="item">
        <div v-html="item"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { marked } from "marked"

import { message } from "./config.js"

const show = computed(() => {
  return message.split("\n").map((v: string) => {
    return marked(v)
  })
})
</script>

<style scoped lang="less">
.overview {
  padding: 25px;
  color: #ccc;
  background-color: rgba(0, 0, 0, 0.7);
  marquee {
    padding: 20px 0;
    font-size: 40px;
  }
  .content {
    padding: 5px 20px;
    background-color: rgba(51, 46, 46, 0.7);
  }
}
</style>
