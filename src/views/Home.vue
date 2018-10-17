<template>
  <div class="home">
    <div>
      <router-view @changeData="aaa" class="a"></router-view>
    </div>
    <div class="aa" v-show="a">
      <header class="top">
        <div class="header">
          <Handlerbtn></Handlerbtn>
          <h1 class="tit"></h1>
          <router-link  @click.native="a=false" class="announcement" to="/home/notice"></router-link>
        </div>
      </header>
      <div class="main">
        <div>
          <section class="coupon_header">
            【 先领券 后下单 】
          </section>
          <div class="main_login_pop">
            <div class="main">
              <a href="javascript:void(0)" class="close_login_pop">关闭</a>
              <div class="form_wrap">
                <p class="input_wrap mobile_wrap">
                  <input type="tel" placeholder="请输入手机号" maxlength="11">
                </p>
                <p class="input_wrap yzm_wrap">
                  <input type="text" placeholder="验证码" maxlength="4">
                  <span>12we</span>
                </p>
                <div class="bottom">
                  <button class="btn">登录</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div class="inner">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><a href="">
                  <img src="../assets/img/a.jpg" alt="">
                </a></div>
                <div class="swiper-slide"><a href="">
                  <img src="../assets/img/s.jpg" alt="">
                </a></div>
                <div class="swiper-slide"><a href="">
                  <img src="../assets/img/d.jpg" alt="">
                </a></div>
                <div class="swiper-slide"><a href="">
                  <img src="../assets/img/f.jpg" alt="">
                </a></div>
              </div>
              <div id="sw" class="swiper-pagination"></div>
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
            <GoodsMain class="p_item"></GoodsMain>
            <GoodsMain class="p_item"></GoodsMain>
            <GoodsMain class="p_item"></GoodsMain>
            <GoodsMain class="p_item"></GoodsMain>
            <GoodsMain class="p_item"></GoodsMain>
            <GoodsMain class="p_item"></GoodsMain>
            <GoodsMain class="p_item"></GoodsMain>
            <GoodsMain class="p_item"></GoodsMain>
          </ul>
        </section>
        <div class="gift_wrap">
          <a href="">
            <img src="../assets/img/o.jpg" alt="">
          </a>
        </div>
        <section class="gift_section">
          <h2><a href="">礼品馆</a></h2>
          <ul class="p_list">
            <GoodsMain class="p_item"></GoodsMain>
            <GoodsMain class="p_item"></GoodsMain>
            <GoodsMain class="p_item"></GoodsMain>
            <GoodsMain class="p_item"></GoodsMain>
          </ul>
        </section>
        <section class="comm
        ent_section">
          <h2>用户评论</h2>
          <ul class="comment_list">
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
            <div class="comment_item">
              <figure>
                <div class="img_wrap">
                  <img src="../assets/img/A.png" alt="">
                </div>
                <figcaption>139****0336</figcaption>
              </figure>
              <div class="comment_content">
                <p class="text">好吃不腻。甜度刚刚好。</p>
                <p class="content_time">2018-10-11</p>
                <div class="cake_info">
                  <img src="../assets/img/aa.png" class="slideLazy" alt="">
                </div>
              </div>
            </div>
          </ul>
        </section>
        <section class="more_link">
          <a href="">合作专区</a>
        </section>
        <section class="c">
          <div class="clear_fix">
            <a href="" class="f_left">触屏版</a>
            <a href="" class="f_right">电脑版</a>
          </div>
          <div class="copyright">copyright © 2010-2018 诺心lecake.com版权所有</div>
        </section>
      </div>
    </div>
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
    data(){
      return {
          a : true
      }
    },
    methods:{
      aaa(){
          this.a=true
      }
    },
    mounted(){
        var close_login_pop = document.querySelector(".close_login_pop");
        var main_login_pop = document.querySelector(".main_login_pop");
        var coupon_header = document.querySelector(".coupon_header");
        coupon_header.onclick = function(){
            main_login_pop.style.display = "block";
        }
        close_login_pop.onclick = function () {
            main_login_pop.style.display = "none";
        }
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
  .main{
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
  .top{
    width: 100%;
    height: 64px;
  }
  .header{
    width: 100%;
    height: 64px;
    position: fixed;
    z-index: 100;
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
    position: fixed;
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
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
  #sw{
    position: absolute;
    bottom: 0;
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
.cake_section h2, .gift_section h2{
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding: 24px 0;
}
  .cake_section h2 a, .gift_section h2 a{
    position: relative;
    padding-right: 46px;
    text-decoration: none;
    color: #3e3e3e;
  }
  .cake_section h2 a:before, .gift_section h2 a:before{
    content: '';
    position: absolute;
    width: 46px;
    height: 46px;
    background: url(../assets/img/3.png) no-repeat center;
    background-size: 400px 400px;
    background-position: -38px -116px;
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
  .gift_wrap {
    margin: 30px;
  }
  .gift_wrap a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .gift_wrap a img{
    width: 100%;
  }
  .gift_section .p_list .p_item{
    margin-right: 20px;
    float: none;
    display: inline-block;
    width:300px;
  }
  .gift_section .p_list {
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    font-size: 0;
  }
  .comment_section {
    margin: 0 0 30px !important;
    color: #3e3e3e;
  }
 .comment_section h2 {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    padding: 22px 0;
    margin-bottom: 20px;
  }
  .comment_list{
    color: #3e3e3e;
  }
  .comment_section ul {
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    font-size: 0;
  }
  .comment_section .comment_item {
    width: 314px;
    height: 574px;
    display: inline-block;
    margin-right: 20px;
    position: relative;
    font-size: 24px;
    overflow: hidden;
    vertical-align: top;
  }
  .comment_item figure {
    height: 144px;
    text-align: center;
  }
  .comment_item figure .img_wrap {
    width: 96px;
    height: 96px;
    border-radius: 100%;
    overflow: hidden;
    margin: 0 auto 6PX;
  }
  .img_wrap img {
    max-width: none;
    max-height: 100%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
  }
  .comment_content {
    position: relative;
    height: 432px;
    padding-top: 48px;
    background: url(../assets/img/4.png) no-repeat center top;
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
  }
  .comment_content .text {
    font-size: 20px;
    width: 240px;
    height: 152px;
    overflow: hidden;
    line-height: 28px;
    margin: 0 auto;
    white-space: initial;
  }
  .comment_content .content_time {
    width: 240px;
    margin: 0 auto 36px;
    text-align: right;
    color: #9c9c9c;
    font-size: 18px;
  }
  .comment_content .cake_info img {
    position: relative;
    max-width: 100%;
    vertical-align: top;
  }
  .more_link {
    margin: 0.15rem 0 0;
  }
  .more_link a {
    color: #a38d6b;
    display: block;
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 26px;
    background: #f9f9f9;
  }
  .clear_fix{
    width: 400px;
    margin: auto;
    overflow: hidden;
  }
  .clear_fix a{
    width: 50%;
    height: 36px;
    line-height: 36px;
    color: #3e3e3e;
    position: relative;
    padding-top: 72px;
    font-size: 100%;
    outline: 0;
    color: inherit;
    text-decoration: none;
    text-align: center;
  }
  .clear_fix .f_left{
    float: left
  }
  .clear_fix .f_right{
    float: right;
  }
  .clear_fix a:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background: url(../assets/img/icons.png) no-repeat center;
    background-size: 400px 400px;
    top: 50%;
    margin-top: -20px;
    left: 50%;
    margin-left: -20px;
  }
  .clear_fix .f_left:before{
    background-position: 0 -240px;
  }
  .clear_fix .f_right:before{
    background-position: -40px -240px;
  }
  .copyright {
    padding: 38px 0;
    text-align: center;
    color: #3e3e3e;
  }
  .main_login_pop{
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 101;
    display: none;
  }
  .main_login_pop .main {
    background: #ffffff;
    position: absolute;
    width: 80%;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    padding: 40px 32px;
    -webkit-transform: translate(0);
    top: 20%;
    box-sizing: border-box;
  }
  .close_login_pop{
    position: absolute;
    width: 64px;
    height: 64px;
    right: 24px;
    top: 24px;
    text-indent: -2000px;
    overflow: hidden;
  }
  .close_login_pop:before{
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background: url(../assets/img/icons.png) no-repeat center;
    background-size: 400px 400px;
    top: 50%;
    margin-top: -20px;
    background-position: -320px -40px;
    left: 50%;
    margin-left: -20px;
  }
  .form_wrap{
    color: #3e3e3e;
  }
  .input_wrap {
    position: relative;
    border-bottom: 1PX solid #e1dbcc;
    margin-top: 48px;
  }
  .input_wrap input {
    width: 100%;
    border: 0;
    height: 80px;
    padding: 10px 40px;
    box-sizing: border-box;
    outline:none;
  }
  .input_wrap:before{
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background: url(../assets/img/icons.png) no-repeat center;
    background-size: 400px 400px;
    top: 50%;
    margin-top: -20px;
    left: 0;
  }
  .mobile_wrap:before{
    background-position: -80px -80px;
  }
  .yzm_wrap:before{
    background-position: -120px -120px;
  }
  .yzm_wrap span{
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    height: 80px;
    line-height: 80px;
    padding: 0 24px;
    font-size: 44px;
    color: #3e3e3e;
    font-weight: bold;
  }
  .bottom {
    margin-top: 72px;
  }
  .bottom button {
    display: block;
    width: 400px;
    height: 96px;
    background: #df6119;
    margin: auto;
    font-size: 26px;
    color: white;
    -webkit-appearance: none;
    padding: 0;
    border: 0;
    outline: 0;
    resize: none;
  }
</style>