export const contentTableConfig = {
  title: '系统菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '100' },
    { prop: 'icon', label: '菜单图标', minWidth: '120' },
    { prop: 'permission', label: '按钮权限', minWidth: '120' },

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
  showIndex: false,
  //table组件-配置文件可选项（选择框）
  showSelect: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
}
