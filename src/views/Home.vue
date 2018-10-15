<template>
  <div class="home">
<<<<<<< HEAD
    <div>
      <router-view class="a"></router-view>
    </div>
    <header>
      <div class="header">
        <Handlerbtn></Handlerbtn>
        <h1 class="tit"></h1>
        <router-link class="announcement" to="/home/notice"></router-link>
      </div>
    </header>
    <div class="main">
      <div>
        <section class="coupon_header">
          【 先领券 后下单 】
        </section>
      </div>
      <section>
        <div class="inner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><a href="">1</a></div>
              <div class="swiper-slide"><a href="">2</a></div>
              <div class="swiper-slide"><a href="">3</a></div>
              <div class="swiper-slide"><a href="">4</a></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <section class="topic_wrap">
        <a href="">
          <img src="../assets/img/h.jpg" alt="">
        </a>
        <a href="">
          <img src="../assets/img/g.jpg" alt="">
        </a>
      </section>
      <section class="cake_section">
        <h2>
          <a href="">蛋糕馆</a>
        </h2>
        <ul class="p_list">
          <li class="p_item"></li>
          <li class="p_item"></li>
          <li class="p_item"></li>
          <li class="p_item"></li>
          <li class="p_item"></li>
          <li class="p_item"></li>
          <li class="p_item"></li>
          <li class="p_item"></li>
        </ul>
      </section>
    </div>
    <GoodsMain></GoodsMain>
=======
    <h1>这是首页dsaasdasd</h1>
      <GoodsMain ></GoodsMain>
>>>>>>> 60a23d65eed57da39378df134cb00714ed1c44b2
  </div>
</template>

<script>

import GoodsMain from '../components/goodsMain'
import Handlerbtn from '../components/home/handler_btn'
import Swiper from 'swiper';

export default {
  name: 'home',

  components: {
      GoodsMain,
      Handlerbtn
  },
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            delay: 500,
            autoplay: {
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '" style="width: 10px;height: 10px;margin: 0 8px;"></span>';
                },
            }

        })
    }
}
</script>
<style scoped>
  .home{
    padding: 0 0 108px;
  }
  .tit{
    position: relative;
    line-height: 64px;
    width: 100%;
    height: 64px;
    background: url(../assets/img/2.png) no-repeat center;
    background-size: auto 26px;
  }
  header{
    width: 100%;
    height: 64px;
  }
  .header{
    width: 100%;
    height: 64px;
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    line-height: 64px;
    background: rgba(255, 255, 255, 0.95);
  }
  .header:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 1PX;
    background: #a38d6b;
    z-index: 1;
    left: 0;
    bottom: 0;
  }
  .announcement{
    color: #a38d6b;
    font-size: 22px;
    z-index: 30;
    position: absolute;
    width: 96px;
    height: 64px;
    right: 0;
    top: 0;
  }
  .announcement:before{
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background: url(../assets/img/3.png) no-repeat center;
    -webkit-background-size: 400px 400px;
    background-size: 400px 400px;
    top: 50%;
    margin-top: -20px;
    background-position: 0 -120px;
    left: 50%;
    margin-left: -20px;
  }
  .a{
    position: relative;
    z-index: 10000;
  }
  .main{
    position: relative;
  }
  .main section{
    margin: 30px;
  }
  .coupon_header {
    height: 80px;
    line-height: 80px;
    text-align: center;
    background: #ff4001;
    color: #ffffff;
    font-size: 30px;
  }
  .inner{
    width: 100%;
    height: 840px;
    position: relative;
  }
  .swiper-container{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .swiper-slide a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .swiper-slide:nth-child(2) a{
    background: url("../assets/img/a.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .swiper-slide:nth-child(3) a{
    background: url("../assets/img/s.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .swiper-slide:nth-child(4) a{
    background: url("../assets/img/d.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .swiper-slide:nth-child(5) a{
    background: url("../assets/img/f.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .swiper-slide:nth-child(6) a{
    background: url("../assets/img/a.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .topic_wrap{
    overflow: hidden;
  }
.topic_wrap a:nth-child(1){
  width: 48%;
  float: left;
}
  .topic_wrap a:nth-child(2){
    width: 48%;
    float: right;
  }
  .topic_wrap a img{
    max-width: 100%;
    vertical-align: top;
  }
.cake_section h2{
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding: 16px 0;
}
  .cake_section h2 a{
    position: relative;
    padding-right: 40px;
    text-decoration: none;
    color: #3e3e3e;
  }
  .cake_section h2 a:before{
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background: url(../assets/img/3.png) no-repeat center;
    background-size: 400px 400px;
    background-position: -40px -120px;
    right: 0;
    top: 50%;
    margin-top: -20px;
  }
  .p_item{
    background: #ffffff;
    width: 48%;
    display: inline-block;
    position: relative;
    font-size: 24px;
    overflow: hidden;
    vertical-align: top;
  }
  .p_item:nth-of-type(odd) {
    float: left;
  }
  .p_item:nth-of-type(even) {
    float: right;
  }
  .p_list{
    overflow: hidden;
  }
  .p_item{
    height: 100px;
    background: red;
  }
</style>