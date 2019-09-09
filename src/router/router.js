import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
import Order from '../pages/Order/Order.vue'
import Center from '../pages/Center/Center.vue'
import Search from '../pages/Search/Search.vue'
import Login from "../pages/Login/Login.vue";
import UserInfo from "../pages/UserInfo/UserInfo.vue"

let routerObj = new VueRouter({
  routes: [
    { path: '/',redirect: '/homepage' },
    { path: '/homepage',component: HomePage,meta: { showFooter: true } },
    { path: '/order',component: Order,meta: { showFooter: true } },
    { path: '/center',component: Center,meta: { showFooter: true } },
    { path: '/search',component: Search,meta: { showFooter: true } },
    { path: '/login',component: Login,meta: { showFooter: false } },
    { path: '/userInfo',component: UserInfo,meta: { showFooter: false }}
  ]
})

export default routerObj
