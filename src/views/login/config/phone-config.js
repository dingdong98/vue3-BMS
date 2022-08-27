// 校验输入规则
export const rules = {
  number: [
    {
      required: true,
      message: '请填写手机号~',
      trigger: 'blur'
    },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '请填写11位的手机号码~',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请填写相应的验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,6}$/,
      message: '验证码的长度为6位~',
      trigger: 'blur'
    }
  ]
}
