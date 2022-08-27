export const contentTableConfig = {
  title: '部门管理',
  propList: [
    { prop: 'name', label: '部门名称', minWidth: '100' },
    { prop: 'leader', label: '部门领导', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '160',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '160',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],
  //table组件-配置文件可选项（序号）
  showIndex: true,
  //table组件-配置文件可选项（选择框）
  showSelect: true
}
