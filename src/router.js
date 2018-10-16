import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GoodsList from './views/goodList'
import PersonalCenter from './views/personalCenter'
import ShoppingCart from './views/shoppingCart'

import Announcement from './components/home/announcement'

import MyOrder from "./components/personalCenter/myOrder"
import MyMind from "./components/personalCenter/myMind"
import MyToken from "./components/personalCenter/myToken"
import MyCard from "./components/personalCenter/myCard"
import MyOurself from "./components/personalCenter/myOurself"
import MyBill from "./components/personalCenter/myBill"
import MyLeclub from "./components/personalCenter/myLeclub"
import CouponCake from "./components/personalCenter/myCoupon/couponCake"
import  CouponCard from "./components/personalCenter/myCoupon/couponCard"
import BindCard from "./components/personalCenter/myCard/bindCard"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias:'/home'
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
    },
      {
          path:'/index/order',
          component:MyOrder
      },
      {
          path:'/index/mymind',
          component:MyMind
      },
      {
          path:'/index/mytoken',
          component:MyToken,
          children:
              [{
              path:'/index/mytoken/couponCake',
                  component:CouponCake

               },{
              //点击查看历史卡券的路由
              path:'/index/mytoken/couponCard',
                  component:CouponCard

              }]
      },
      {
          path:'/index/mycard',
          component:MyCard,
          children:[{
              path:'/index/mycard/bindCard',
              component:BindCard
          }]
      },
      {
          path:'/index/myourself',
          component:MyOurself
      },
      {
          path:'/index/mybill',
          component:MyBill
      },
      {
          path:'/index/myleclub',
          component:MyLeclub
      }
    // linkActiveClass:"active"

    ],
    linkActiveClass: '',
    linkExactActiveClass:''
})
