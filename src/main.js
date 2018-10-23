import Vue from 'vue'  //我们可以在vue脚手架当中直接将我们通过npm下载下来的模块导入进来使用
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
