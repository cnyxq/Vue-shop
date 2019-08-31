import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
import Order from '../pages/Order/Order.vue'
import Center from '../pages/Center/Center.vue'
import Search from '../pages/Search/Search.vue'

let routerObj = new VueRouter({
  routes: [
    { path: '/',redirect: '/homepage' },
    { path: '/homepage',component: HomePage },
    { path: '/order',component: Order },
    { path: '/center',component: Center },
    { path: '/search',component: Search },
  ]
})

export default routerObj
