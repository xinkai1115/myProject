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
import SettleGoods from "./components/shoppingCar/settleGoods"
import SiteGoods from "./components/shoppingCar/siteGoods"
import NewsiteGoods from "./components/shoppingCar/newsiteGoods"
import GoodsDetail from './components/goodsDetail'
import CheckMore from "./components/shoppingCar/CheckMore"
import Login from './components/login'
import GoodComments from './components/goodComments'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias:"/home",
        children:[
            {
                path:"/home/notice",
                component:Announcement
            }
        ]
    },
    {
      path: '/list',
      name: 'GoodsList',
      component: GoodsList,
      children:[{
          path:'/list/detail',
          component:GoodsDetail,
          children:[{
              path:'/list/detail/comments',
              component:GoodComments
          }]
      }]
    },
    {
        path: '/cart',
        name: 'ShoppingCart',
        component:ShoppingCart,
        children:[{
            path:'/cart/settle',
            component:SettleGoods,
            name:'Settle',
            children:[{
                path:'/cart/settle/site',
                component:SiteGoods,
                children:[{
                    path:'/cart/settle/site/newsite',
                    name:'newsite',
                    component:NewsiteGoods
                }]
            }
            ]
        },
        {
            path:'/cart/checkmore',
            component:CheckMore
        },
        {
            path:'/cart/login',
            component:Login
        }
        ]
    },
    {
        path: '/index',
        name: 'PersonalCenter',
        component:PersonalCenter,
        children:[{
            path:'/index/login',
            component:Login

        }]
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
    ],
    linkActiveClass: '',
    linkExactActiveClass:''
})
