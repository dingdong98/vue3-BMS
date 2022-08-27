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
      field: 'id',
      type: 'input',
      label: '序号',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '权限介绍',
      placeholder: '请输入密码'
    }
  ]
}
