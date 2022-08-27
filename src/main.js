import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
// 因URrouter对象
import router from './router'
// 引入vuex对象
import store from './store'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// setup初始化函数 -解决vuex数据问题
import { setupStore } from './store'
// 引入全局属性
import registerPropertise from '@/global/register-properties'
const app = createApp(App)

// 引入elementPlus图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// elementplus 国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'

app.use(ElementPlus, {
  locale: zhCn
})

app.use(ElementPlus)
app.use(store)
app.use(registerPropertise)
// 初始化-注册动态路由url
setupStore()
// 根据路径加载路由组件 path： /user => user
app.use(router)

app.mount('#app')
