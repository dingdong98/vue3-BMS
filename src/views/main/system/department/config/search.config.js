export const searchFormConfig = {
  labelWidth: '100px',
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field:'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field:'name',
      type: 'input',
      label: '名称',
      placeholder: '请输入用户名'
    },
    {
      field:'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field:'spord',
      type: 'select',
      label: '个人爱好',
      placeholder: '请选择喜欢的运动',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ]
    },
    {
      field:'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
