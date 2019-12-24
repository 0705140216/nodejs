import layout from '_views/layout/layout.vue'
export default {
  path: '/template',
  name: 'Template',
  redirect: '/template/validate',
  component: layout,
  meta: {
    title: '模板'
  },
  children: [
    {
      path: 'validate',
      name: 'Validate',
      meta: {
        cache: true,
        title: '校验模板'
      },
      component: () => import(/* webpackChunkName:"template"*/ '_views/template/validate/validate.vue')
    }
  ]
}
