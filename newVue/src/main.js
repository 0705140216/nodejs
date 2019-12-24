import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

import './plugins/element'
// import './plugins/charts'

import '@/assets/icons/iconfont.css'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './assets/styles/index.scss'

// 全局常量及方法
import * as global from './libs/global'
Vue.prototype.$g = global

// 过滤器
import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 指令
// import myDirectives from './directive'
// Vue.use(myDirectives)

// 组件
import myComponents from './components'
Vue.use(myComponents)

// 鉴权
// import './permission'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
