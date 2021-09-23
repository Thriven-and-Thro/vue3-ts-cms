<template>
  <div class="login-account">
    <el-form
      :model="ruleForm"
      :rules="ruleAccount"
      label-width="85px"
      ref="formRef"
    >
      <!-- prop用来匹配验证的是哪一个输入框 -->
      <el-form-item label="账号" prop="account">
        <el-input
          type="text"
          v-model="ruleForm.account"
          autocomplete="off"
          :clearable="true"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          :clearable="true"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { ElForm } from "element-plus"

import { ruleAccount } from "../config/account-config"
import localCache from "@/utils/cache"
import store from "@/store"

export default defineComponent({
  name: "LoginAcocount",
  setup() {
    let ruleForm = reactive({
      account: localCache.getCache("account") ?? "",
      pass: localCache.getCache("pass") ?? ""
    })

    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isCheckKeep: boolean) => {
      // ElForm 中有一个方法validate能对表单进行验证，并且函数的参数为验证结果boolean
      formRef.value?.validate((valid) => {
        if (valid) {
          // 验证是否要记住密码
          if (isCheckKeep) {
            localCache.setCache("account", ruleForm.account)
            localCache.setCache("pass", ruleForm.pass)
          } else {
            localCache.deleteCache("account")
            localCache.deleteCache("pass")
          }
        }
      })
      store.dispatch("login/accountLoginAction", {
        name: ruleForm.account,
        password: ruleForm.pass
      })
    }
    return {
      ruleForm,
      ruleAccount,
      formRef,
      loginAction
    }
  }
})
</script>

<style lang="less" scoped>
.login-account {
  padding: 15px 0;
  .el-input {
    width: 90%;
  }
}
</style>
