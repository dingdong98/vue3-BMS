let firstMenu = null

// 根据菜单添加动态路由
export function mapMenusToRoutes(userMenus) {
  const routes = []

  // 1.先加载默认所有routes路由映射
  const allRoutes = []

  
  //调用webpack内置方法拿到路由文件路径
  const routeFiles = require.context('../router/main', true, /\.js/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (userMenus) => {
    for (const menu of userMenus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

// 根据菜单获取面包屑数据  ---url.name
export function pathMapBreadcrumbs(userMenus, currentPath) {
  const breadcrumbs = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// 根据菜单获取当前选中路由  递归函数
export function pathMapToMenu(userMenus, currentPath, breadcrumbs) {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 根据菜单检查用户是否有操作权限
export function mapMenusToPermissions(userMenus) {
  const permissions = []

  const _recurseGetPermission = (menus) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }

  _recurseGetPermission(userMenus)

  return permissions
}

// 遍历菜单的叶子节点
export function getMenuLeafKeys(menuList) {
  const leafKeys = []

  const _recurseGetLeaf = (menuList) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }

  _recurseGetLeaf(menuList)

  return leafKeys
}
export { firstMenu }
