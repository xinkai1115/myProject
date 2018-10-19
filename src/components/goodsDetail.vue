<template>
    <article class="main_goods_detail">
        <header class="global_fix_top">
            <div class="header_wrap">
                <div class="box_shadow">
                    <a href="" class="header_left"></a>
                    <h1 class="no_wrap">商品详情</h1>
                    <a href="" class="header_right">首页</a>
                </div>
            </div>
        </header>
        <div class="main">
            <section class="goods_img">
                <img id="shareBtn_icon" src="../assets/img/btn.png" alt="">
                <div class="swiper-con">
                    <swiper :options="swiperOption" class="swiper_box" >
                        <swiper-slide><img src="https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201706/15474/display_15474_39428.jpg"></swiper-slide>
                    </swiper>
                    <div class="swiper-pagination swiper-pagination-bullets"></div>
                </div>
            </section>
            <section class="goods_detail" @click="show = !show">
                <div class="goods_list">
                    <div class="goods_item">
                        <div class="goods_title flex">
                            <h2>
                                美刀刀蛋糕
                            </h2>
                        </div>
                        <div class="spec">
                            <p class="taste">
                                口味：芝士口味
                            </p>
                            <p class="sweet flex">
                                甜度：
                                <i class="flex_item sweet_level level_2"></i>
                            </p>
                        </div>
                        <div class="price_wrap">
                            <p class="no_wrap">
                                <strong class="new_price">￥298</strong>
                            </p>
                            <p>
                                <span class="spec_selected">
                                    5-8人食
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="add">
                <transition name="fade">
                    <div @click="show = !show" v-show="show" class="pop_wrapper_mask"></div>
                </transition>
                <transition name="dade">
                    <div v-show="show" class="pop_wrapper_inner active">
                        <span class="close"></span>
                        <div class="content_spec">
                            <div class="header_goodsInfo">
                                <div class="goods_img">
                                    <img src="https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201706/15474/list_15474.jpg" alt="">
                                </div>
                                <div class="goods_name">
                                    <p class="name">美刀刀蛋糕</p>
                                    <p class="price">
                                        <span>￥</span>
                                        298
                                    </p>
                                </div>
                            </div>
                            <div class="scroll_wrap">
                                <div class="goods_switch clear_fix">
                                    <a href="javascript:void(0)" @click="bor" class="switch_item active">
                                        <span>建议</span>
                                        <strong class="haipi">5-8人食</strong>
                                    </a>
                                    <a href="javascript:void(0)"  @click="bor" class="switch_item">
                                        <span>建议</span>
                                        <strong class="haipi">12-16人食</strong>
                                    </a>
                                </div>
                                <div class="goods_list">
                                    <div class="goods_item">
                                        <div class="spec clear_fix">
                                            <p class="weight icon">
                                                约700g
                                            </p>
                                            <p class="size icon">
                                                约
                                                <span>20</span>
                                                <span>*16</span>
                                                <span>*4</span>
                                                cm
                                            </p>
                                            <p class="tableware icon">
                                                <span>含10套餐具</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <section class="group_buy">
                                    <div class="inner_group">
                                        <h3>组合购</h3>
                                        <div class="group_item">
                                            <p class="img_wrap">
                                                <img src="https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201809/18391/list_18391.jpg?v=1537340350" alt="">
                                            </p>
                                            <div class="group_info">
                                                <p class="name no_wrap">哇哦！吐司</p>
                                                <div class="g_price">
                                                    <i class="orange">+￥9.9</i>
                                                    <strong>限时抢</strong>
                                                    <i class="old_price">&nbsp;￥78</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="group_item">
                                            <p class="img_wrap">
                                                <img src="https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201809/18391/list_18391.jpg?v=1537340350" alt="">
                                            </p>
                                            <div class="group_info">
                                                <p class="name no_wrap">哇哦！吐司</p>
                                                <div class="g_price">
                                                    <i class="orange">+￥9.9</i>
                                                    <strong>限时抢</strong>
                                                    <i class="old_price">&nbsp;￥78</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="group_item">
                                            <p class="img_wrap">
                                                <img src="https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201809/18391/list_18391.jpg?v=1537340350" alt="">
                                            </p>
                                            <div class="group_info">
                                                <p class="name no_wrap">哇哦！吐司</p>
                                                <div class="g_price">
                                                    <i class="orange">+￥9.9</i>
                                                    <strong>限时抢</strong>
                                                    <i class="old_price">&nbsp;￥78</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="group_item">
                                            <p class="img_wrap">
                                                <img src="https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201809/18391/list_18391.jpg?v=1537340350" alt="">
                                            </p>
                                            <div class="group_info">
                                                <p class="name no_wrap">哇哦！吐司</p>
                                                <div class="g_price">
                                                    <i class="orange">+￥9.9</i>
                                                    <strong>限时抢</strong>
                                                    <i class="old_price">&nbsp;￥78</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="group_item">
                                            <p class="img_wrap">
                                                <img src="https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201809/18391/list_18391.jpg?v=1537340350" alt="">
                                            </p>
                                            <div class="group_info">
                                                <p class="name no_wrap">哇哦！吐司</p>
                                                <div class="g_price">
                                                    <i class="orange">+￥9.9</i>
                                                    <strong>限时抢</strong>
                                                    <i class="old_price">&nbsp;￥78</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="group_item">
                                            <p class="img_wrap">
                                                <img src="https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201809/18391/list_18391.jpg?v=1537340350" alt="">
                                            </p>
                                            <div class="group_info">
                                                <p class="name no_wrap">哇哦！吐司</p>
                                                <div class="g_price">
                                                    <i class="orange">+￥9.9</i>
                                                    <strong>限时抢</strong>
                                                    <i class="old_price">&nbsp;￥78</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="group_item">
                                            <p class="img_wrap">
                                                <img src="https://imagecdn.lapetit.cn/postsystem/docroot/images/goods/201809/18391/list_18391.jpg?v=1537340350" alt="">
                                            </p>
                                            <div class="group_info">
                                                <p class="name no_wrap">哇哦！吐司</p>
                                                <div class="g_price">
                                                    <i class="orange">+￥9.9</i>
                                                    <strong>限时抢</strong>
                                                    <i class="old_price">&nbsp;￥78</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div class="btn_wrap">
                                <button class="buyFlag">立即购买</button>
                                <button class="addCart">加入购物车</button>
                            </div>
                        </div>
                    </div>
                </transition>
            </section>
            <div class="promotions">

            </div>
        </div>
    </article>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "goodsDetail",
        components:{
            swiper,
            swiperSlide
        },
        data(){
            return{
                swiperOption: {
                    pagination:{
                        el:'.swiper-pagination'
                    },
                    slidesPerView:1,
                    autoplay:{
                        delay:3000,
                        disableOnInteraction:false
                    },
                    spaceBetween:30,
                    loop:true
                },
                show:false
            }
        },
        methods:{
          bor(){
              var switch_item = document.querySelectorAll(".goods_switch .switch_item");
              for (var i=0;i<switch_item.length;i++){
                  switch_item[i].onclick=function () {
                      for (var j=0;j<switch_item.length;j++) {
                          switch_item[j].className = "switch_item";
                      }
                      this.className="switch_item active";
                  }
              }

          }
        },
        created(){
            this.$http.get(`${this.$api}/detail?goodsId=5bc5d76650ffb124431cec7f`).then(({data})=>{
                console.log(data);
            })
        }

    }
</script>

<style lang="less" scoped>
    .main_goods_detail{
        font-size: 24px;
        background: #f6f6f6;
        min-height: 100%;
        width: 100%;
        position: fixed;
    }
    .global_fix_top{
        height: 88px;
    }
    .header_wrap {
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        height: 88px;
        line-height: 88px;
        background: rgba(255, 255, 255, 0.95);
    }
    .box_shadow{
        box-shadow: 0 0 10PX rgba(222, 222, 222, 0.6);
        position: relative;
    }
    .header_left{
        position: absolute;
        width: 88px;
        height: 88px;
        left: 0;
        top: 0;
    }
    .header_left:before{
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url(../assets/img/icons3.png) no-repeat center;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -80px -120px;
        left: 20px;
    }
    .goods_img{
        position: relative;
        height: 480px;
        margin-bottom: 0;
    }
    .box_shadow .no_wrap{
        height: 88px;
        line-height: 88px;
        text-align: center;
        color: #a38d6b;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .header_right {
        position: absolute;
        width: 108px;
        height: 88px;
        padding-left: 32px;
        right: 0;
        top: 0;
        color: #a38d6b;
        font-size: 20px;
        box-sizing: border-box;
    }
    .header_right:before {
        content: '';
        position: absolute;
        width: 32px;
        height: 32px;
        background: url(../assets/img/main_nav.png) no-repeat center;
        background-size: 64px 160px;
        left: 0;
        top: 50%;
        margin-top: -18px;
        background-position: 0 0;
        -webkit-transform: scale(0.9);
    }
    #shareBtn_icon {
        position: absolute;
        z-index: 5;
        margin-left: 42%;
        top: 5%;
        width: 80px;
        height: 80px;
        max-width: none;
        left: 50%;
        transform: translateX(-50%);
    }
    .swiper-con, .swiper_box{
        width: 100%;
        height: 100%;
    }
    .swiper-con img{
        position: relative;
        height: 480px;
        max-width: none;
        left: 50%;
        transform: translateX(-50%);
    }
    .swiper-pagination-bullets{
        padding-right: 32px;
        bottom: 12px;
        height: 36px;
        text-align: right;
        left: 0;
        width: 100%;
        box-sizing: border-box;
    }
    .swiper-pagination-bullets span{
        width: 6PX;
        height: 6PX;
        opacity: 0.8;
        margin: 0 2PX;
    }
    .goods_detail{
        position: relative;
        background: #ffffff;
        margin-bottom: 20px;
    }
    .goods_detail .goods_list{
        margin: 0 32px;
        padding: 30px 0;
    }
    .goods_detail .goods_title h2{
        font-size: 28px;
        color: #3e3e3e;
    }
    .goods_detail .spec{
        position: relative;
        overflow: hidden;
    }
    .goods_detail .spec p {
        float: left;
        height: 62px;
        line-height: 62px;
        position: relative;
        overflow: hidden;
    }
    .goods_detail .spec p:nth-of-type(3n+1) {
        width: 40%;
    }
    .goods_detail .spec p:nth-of-type(3n+2) {
        width: 33%;
    }
    .goods_detail .sweet_level{
        position: relative;
    }
    .goods_detail .sweet_level:before {
        content: '';
        position: absolute;
        width: 52px;
        height: 40px;
        background: url(../assets/img/icons.png) no-repeat center;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -200px -240px;
        left: 0;
        box-sizing: border-box;
    }
    .goods_detail .flex{
        display: flex;
        position: relative;
    }
    .goods_detail .flex_item {
        display: block;
        -webkit-box-flex: 1;
        flex: 1;
    }
    .goods_detail .price_wrap {
        position: relative;
        overflow: hidden;
    }
    .goods_detail .price_wrap p {
        float: left;
    }
    .goods_detail .price_wrap p:nth-of-type(3n+1) {
        min-width: 40%;
    }
    .goods_detail .no_wrap {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 42px;
        height: 42px;
    }
    .goods_detail .price_wrap p:nth-of-type(3n+2) {
        min-width: 33%;
    }
    .goods_detail .price_wrap .new_price {
        color: #ff4001;
        font-size: 28px;
        font-weight: bolder;
        float: left;
        line-height: 42px;
        height: 42px;
    }
    .goods_detail .spec_selected {
        font-size: 28px;
        line-height: 42px;
        height: 42px;
    }
    .goods_detail:before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url(../assets/img/icons.png) no-repeat center;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -80px -120px;
        right: 32px;
        transform: rotate(180deg);
    }
    .add .pop_wrapper_mask{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        /*display: none;*/
        z-index: 12;
    }
    .add .pop_wrapper_inner{
        position: fixed;
        bottom: -60px;
        left: 0;
        background: #fff;
        width: 100vw;
        z-index: 15;
        /*transform: translateY(100%);*/
        /*transition: all 0.6s;*/
    }
    .add .content_spec {
        padding-bottom: 60px;
    }
    .add .header_goodsInfo{
        height: 260px;
        padding: 0 10%;
        position: relative;
    }
    .add .header_goodsInfo .goods_img{
        width: 260px;
        height: 100%;
        position: absolute;
        top: -20PX;
    }
    .add .header_goodsInfo .goods_img img{
        width: 100%;
    }
    .add .goods_name {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -60px;
        padding-right: 20px;
    }
    .add .goods_name p {
        font-size: 30px;
    }
    .add .goods_name .name {
        font-weight: bolder;
        margin-bottom: 24px;
        color: #3e3e3e;
    }
    .add .goods_name .price {
        color: #ff4001;
    }
    .add .scroll_wrap {
        max-height: 560px;
        overflow: hidden;
        overflow-y: auto;
        margin-bottom: 20px;
    }
    .add .goods_switch {
        margin: 0 32px 40px 32px;
        overflow: hidden;
    }
    .add .goods_switch .switch_item.active {
        border: 1PX solid #ff4001;
        color: #ff4001;
    }
    .add .goods_switch .switch_item {
        margin: 0 2% 20px 0;
        width: 23.5%;
        float: left;
        text-align: center;
        background: #f4f4f4;
        color: #a6906c;
        font-size: 20px;
        padding: 24px 0;
        border: 1PX solid transparent;
    }
    .add{
        color: #3e3e3e;
    }
    .add .switch_item span{
        line-height: 32px;
    }
    .add .scroll_wrap .switch_item .haipi{
        line-height: 36px;
        display: block;
        font-size: 24px;
    }
    .add .content_spec .goods_list {
        margin: 0 32px;
        border-bottom: 1PX solid #d1c6af;
    }
    .add .scroll_wrap .goods_list .goods_item {
        background: #ffffff;
    }
    .add .scroll_wrap .goods_list .spec p.icon {
        padding-left: 40px;
        box-sizing: border-box;
    }
    .add .scroll_wrap .goods_list .spec p:nth-of-type(3n+1) {
        width: 30%;
    }
    .add .goods_list .spec{
        overflow: hidden;
    }
    .add .goods_list .spec p {
        float: left;
        height: 56px;
        line-height: 56px;
        position: relative;
        overflow: hidden;
    }
    .add .goods_list .spec p:nth-of-type(3n+2) {
        width: 35%;
    }
    .add .goods_list .spec p:nth-of-type(3n) {
        width: 35%;
    }
    .add .group_buy {
        font-size: 22px;
    }
    .add .inner_group{
        margin: 0 32px;
        overflow: hidden;
    }
    .add .inner_group h3{
        margin: 30px 0 10px 0;
        font-weight: bolder;
        line-height: 36px;
    }
    .add .group_item {
        width: 48%;
        position: relative;
        margin-top: 20px;
        background: #f9f9f9;
        height: 100px;
        float: left;
        border: 1PX solid transparent;
    }
    .add .group_buy .inner_group .img_wrap {
        width: 100px;
        float: left;
        height: 100%;
    }
    .add .group_buy .inner_group .group_item:nth-child(odd){
        float: right;
    }
    .add .group_buy .inner_group .group_info {
        flex-direction: column;
        justify-content: center;
        margin-left: 108px;
        height: 100%;
    }
    .add .img_wrap img{
        width: 100%;
    }
    .add .no_wrap {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .add .orange {
        color: #ff4001 !important;
        /*white-space: nowrap;*/
        margin-right: 6px;
        display: inline-block;
        line-height: 32px;
    }
    .add .inner_group .group_info strong {
        font-size: 20px;
        /*white-space: nowrap;*/
        background: #ff4001;
        line-height: 32px;
        display: inline-block;
        color: #ffffff;
        padding: 1PX 2PX;
        margin-right: 6px;
    }
    .add .old_price {
        font-size: 18px;
        /*white-space: nowrap;*/
        text-decoration: line-through;
        display: inline-block;
        line-height: 32px;
        margin-right: 4px;
    }
    .add .goods_list .spec p.icon:before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url(../assets/img/icons.png) no-repeat center;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: 0 0;
        left: 0;
    }
    .add .goods_list .spec p.weight:before {
        background-position: -240px -120px;
    }
    .add .goods_list .spec p.size:before {
        background-position: -160px -120px;
    }
    .add .goods_list .spec p.tableware:before {
        background-position: -200px -120px;
    }
    .btn_wrap {
        width: 100%;
        height: 100px;
        border: 1PX solid #ff4001;
    }
    .btn_wrap button.buyFlag {
        background: #ffffff;
        color: #ff4001;
    }
    .btn_wrap button {
        width: 50%;
        height: 100%;
        font-size: 22px;
        float: left;
        padding: 0;
        border: 0;
        outline: 0;
    }
    .btn_wrap button.addCart {
        color: #ffffff;
        background: #ff4001;
    }
</style>