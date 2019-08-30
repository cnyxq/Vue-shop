import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

let routerObj = new VueRouter({
  routes: [
    { path: '/',redirect: '/msite' },
    { path: '/msite',component: Msite },
    { path: '/order',component: Order },
    { path: '/profile',component: Profile },
    { path: '/search',component: Search },
  ]
})

export default routerObj
