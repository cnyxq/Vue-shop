import Vue from 'vue'
import App from './App.vue'
import './common/css/reset.css'
import VueRouter from 'vue-router'
import routerObj from './router/router.js'
import store from './store/index.js'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routerObj,
  store,
}).$mount('#app')
