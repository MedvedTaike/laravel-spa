import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/products/view/1'
      // name: 'main',
      // component: () => import('./views/Main.vue')
    },
    {
      path: '/cart-view',
      name: 'cart-view',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/products/view/:id',
      name: 'product-list',
      component: () => import('./views/ProductsList.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () => import('./views/Delivery.vue')
    },
  ]
})
