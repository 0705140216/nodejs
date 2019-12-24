import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Router Modules */
// import template from './modules/template'

/**
 * 初始路由
 */
const errorPages = [
  {
    path: '/404',
    meta: {
      title: '找不到页面'
    },
    component: () => import(/* webpackChunkName:"error"*/ '_views/error-page/404.vue')
  }
]
export const constantRoutes = [
  {
    path: '/',
    meta: {
      title: '王小斌首页'
    },
    component: () => import(/* webpackChunkName:"index"*/ '_views/index/index.vue')
  },
  {
    path: '/login',
    meta: {
      title: '登录页'
    },
    component: () => import(/* webpackChunkName:"index"*/ '_views/login/Login.vue')
  },
  // template,
  ...errorPages,
  {
    path: '*',
    redirect: '/404'
  }
]

const createRouter = () =>
  new Router({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => (savedPosition || { x: 0, y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

// 解决路由跳转相同地址chrome报错：NavigationDuplicated
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
