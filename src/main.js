import Vue from 'vue'
import App from './App.vue'
import './common/css/reset.css'
import VueRouter from 'vue-router'
import routerObj from './router/router.js'
import store from './store/index.js'
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import 'mint-ui/lib/index'
import './mock/mockServer.js'
import './filters' //加载时期格式化
Vue.component(Button.name,Button)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routerObj,
  store,
}).$mount('#app')
