// element-plus 的表单验证是使用库 async-validator
export const ruleAccount = {
  account: [
    {
      required: true,
      message: "必须输入账号",
      // 离开焦点时验证
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名为5~10个字母或数字",
      trigger: "blur"
    }
  ],
  pass: [
    {
      required: true,
      message: "必须输入密码",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "密码为3位以上字母或数字",
      trigger: "blur"
    }
  ]
}
// element-plus 的表单验证是使用库 async-validator
export const rulePhone = {
  phone: [
    {
      required: true,
      message: "必须输入手机号",
      // 离开焦点时验证
      trigger: "blur"
    },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: "手机号码格式不正确",
      trigger: "blur"
    }
  ],
  verify: [
    {
      required: true,
      message: "必须输入验证码",
      // 离开焦点时验证
      trigger: "blur"
    },
    {
      pattern: /^\d{6}$/,
      message: "验证码格式不正确",
      trigger: "blur"
    }
  ]
}
