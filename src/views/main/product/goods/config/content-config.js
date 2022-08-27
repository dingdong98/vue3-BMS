export const contentTableConfig = {
  title: '商品信息',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80' },
    { prop: 'oldPrice', label: '原价', minWidth: '50' },
    { prop: 'newPrice', label: '现价', minWidth: '50', slotName: 'money' },
    { prop: 'imgUrl', label: '图片', minWidth: '100', slotName: 'img' },
    { prop: 'status', label: '状态', minWidth: '80', slotName: 'status' },
    { prop: 'address', label: '地址', minWidth: '50' },
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
  showSelect: true,

}
