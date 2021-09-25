<template>
  <div class="login-phone">
    <el-form :model="ruleForm" :rules="rulePhone" label-width="95px">
      <!-- prop用来匹配验证的是哪一个输入框 -->
      <el-form-item label="手机号" prop="phone">
        <el-input
          type="text"
          v-model="ruleForm.phone"
          autocomplete="off"
          :clearable="true"
          placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verify" class="verify">
        <el-input
          type="text"
          v-model="ruleForm.verify"
          autocomplete="off"
          :clearable="true"
          placeholder="请输入验证码"
        ></el-input>
        <el-button type="primary">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

import { rulePhone } from "../config/account-config"

export default defineComponent({
  name: "LoginPhone",
  setup() {
    let ruleForm = reactive({
      phone: "",
      verify: ""
    })
    return {
      ruleForm,
      rulePhone
    }
  }
})
</script>

<style lang="less" scoped>
.login-phone {
  padding: 15px 0;
  .el-input {
    width: 90%;
  }
  .verify {
    width: 91%;
    .el-input {
      width: 60%;
    }
    &:deep(.el-form-item__content) {
      display: flex;
      justify-content: space-between;
    }
    .el-button {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
}
</style>
