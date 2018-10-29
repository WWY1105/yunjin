import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import category from '@/pages/category/category'
import categoryItems from '@/pages/categoryItems/categoryItems'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/categoryItems',
      name: 'categoryItems',
      component: categoryItems
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
