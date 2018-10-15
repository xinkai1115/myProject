import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GoodsList from './views/goodList'
import PersonalCenter from './views/personalCenter'
import ShoppingCart from './views/shoppingCart'
import Announcement from './components/home/announcement'//公告组件

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias:'/home',
        children:[
            {
                path: "/home/notice",
                component: Announcement
            }
        ]
    },
    {
      path: '/list',
      name: 'GoodsList',
      component: GoodsList
    },
    {
        path: '/cart',
        name: 'ShoppingCart',
        component:ShoppingCart
    },
    {
        path: '/index',
        name: 'PersonalCenter',
        component:PersonalCenter
    }
  ],
    linkActiveClass: '',
    linkExactActiveClass:''
})
