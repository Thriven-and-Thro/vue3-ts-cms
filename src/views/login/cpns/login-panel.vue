<template>
  <div class="login_tabs">
    <el-tabs v-model="activeName" :stretch="true">
      <el-tab-pane name="first">
        <!-- 标签内容可以使用插槽 -->
        <template #label>
          <span><i class="el-icon-user-solid"></i>账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="second"
        ><template #label>
          <span><i class="el-icon-mobile-phone"></i>手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="tab-select">
      <el-checkbox v-model="isCheckKeep" label="记住密码"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="tab-commit">
      <el-button type="primary" @click="handleLoginClick">立即登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import LoginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"

import localCache from "@/utils/cache"

export default defineComponent({
  name: "LoginPanel",
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const activeName = ref("first")
    const isCheckKeep = ref(localCache.getCache("isCheckKeep") ?? false)

    // InstanceType：通过一个普通对象构造一种特有的类型
    // defineComponent包裹的普通对象：组件的描述 =》 类：拥有构造函数的实例
    // typeof LoginAccount：获取普通对象的类型
    // InstanceType<typeof LoginAccount>：获得拥有构造函数的实例 = 类
    // <InstanceType<typeof Person>> === Person
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const handleLoginClick = () => {
      // 是否账号登录
      if (activeName.value === "first") {
        // 是否记住密码
        accountRef.value?.loginAction(isCheckKeep.value)
        // 是否记住密码选项
        if (isCheckKeep.value) {
          localCache.setCache("isCheckKeep", true)
        } else {
          localCache.deleteCache("isCheckKeep")
        }
      }
    }

    return {
      activeName,
      isCheckKeep,
      handleLoginClick,
      accountRef,
      phoneRef
    }
  }
})
</script>

<style lang="less" scoped>
.login_tabs {
  display: flex;
  height: 100%;
  min-height: 350px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  .el-tabs {
    margin: 0 auto;
    width: 500px;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 1px 1px 10px #555;
    border-radius: 20px;
    &:deep(.el-tabs__item) {
      height: 50px;
      line-height: 50px;
    }
  }
  .tab-select {
    display: flex;
    margin: 10px 0;
    padding: 0 20px;
    width: 500px;
    justify-content: space-between;
    .el-link,
    .el-link--primary {
      &:hover {
        color: #ffd04b;
      }
    }
  }
  .tab-commit {
    .el-button {
      width: 450px;
    }
  }
}
</style>
