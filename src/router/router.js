import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
import Order from '../pages/Order/Order.vue'
import Center from '../pages/Center/Center.vue'
import Search from '../pages/Search/Search.vue'
import Login from "../pages/Login/Login.vue";
import UserInfo from "../pages/UserInfo/UserInfo.vue"
import Shop from "../pages/Shop/Shop.vue";
import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods";
import ShopRatings from "../pages/Shop/ShopRatings/ShopRatings";
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo";

let routerObj = new VueRouter({
  routes: [
    { path: '/',redirect: '/homepage' },
    { path: '/homepage',component: HomePage,meta: { showFooter: true } },
    { path: '/order',component: Order,meta: { showFooter: true } },
    { path: '/center',component: Center,meta: { showFooter: true } },
    { path: '/search',component: Search,meta: { showFooter: true } },
    { path: '/login',component: Login,meta: { showFooter: false } },
    { path: '/userInfo',component: UserInfo,meta: { showFooter: false } },
    {
      path: '/shop',
      component: Shop,
      meta: {
        showFooter: false
      },
      children: [
        {
          path: '',
          redirect: '/shop/goods'
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/info',
          component: ShopInfo
        }
      ]
    }
  ]
})

export default routerObj
