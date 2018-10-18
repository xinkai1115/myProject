import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import './assets/reset.css'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'

import $ from "jquery"
Vue.prototype.$http = axios
Vue.prototype.$api = "/api"

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$api = "/api"


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
