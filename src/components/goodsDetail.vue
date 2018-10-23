<template>
    <article class="main_goods_detail">
        <div class="details">
            <header class="global_fix_top">
                <div class="header_wrap">
                    <div class="box_shadow">
                        <a href="javascript:void(0)" @click="goBack" class="header_left"></a>
                        <h1 class="no_wrap">商品详情</h1>
                        <a href="#" @click="goHome" class="header_right">首页</a>
                    </div>
                </div>
            </header>
            <div class="main">
                <section class="goods_img">
                    <img @click="show4 = true" id="shareBtn_icon" src="../assets/img/btn.png" alt="">
                    <div class="swiper-con">
                        <swiper :options="swiperOption" class="swiper_box" >
                            <!--<template v-for="(item,index) in detailData.goodsLargeUrl" >-->
                                 <swiper-slide class="swiper-sd" v-for="(item,index) in detailData.goodsLargeUrl" :key="index">
                                     <img :src="item">
                                 </swiper-slide >
                            <!--</template>-->
                        </swiper>
                        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
                    </div>
                </section>
                <section class="goods_detail" @click="show = !show">
                    <div class="goods_list">
                        <div class="goods_item">
                            <div class="goods_title flex">
                                <h2>
                                    {{ detailData.goodsName }}
                                </h2>
                            </div>
                            <div class="spec" v-if="detailData.goodsTaste?true:false">
                                <p class="taste">
                                    口味：{{ detailData.goodsTaste }}
                                </p>
                                <p class="sweet flex">
                                    甜度：
                                    <i class="flex_item sweet_level level_2" :style="'width: '+ wt +'px !important;'"></i>
                                </p>
                            </div>
                            <div class="price_wrap">
                                <p class="no_wrap">
                                    <strong v-if="detailData.goodsChoose" class="new_price">￥{{ detailData.goodsChoose[0].goodsPrice }}</strong>
                                </p>
                                <p>
                                    <span v-if="detailData.goodsChoose" class="spec_selected">
                                        {{ detailData.goodsChoose[0].userNum }}
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
                            <span class="close" @click="show = !show"></span>
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
                <div class="promotions" @click="show1=!show1"  v-if="detailData.promation">
                    <div class="inner">
                        <strong>促销</strong>
                        <div class="content">
                            <span class="promotion_content">{{detailData.promation[0].title}}</span>
                        </div>
                    </div>
                </div>
                <section class="share_wrapper">
                    <transition name="tade">
                        <div class="pop_wrapper_mask" v-show="show1" @click="show1=!show1"></div>
                    </transition>
                    <transition name="sade">
                        <div class="pop_wrapper_inner list active" v-show="show1">
                            <span class="close" @click="show1=!show1"></span>
                            <div class="content_invoice">
                                <div class="invoice_item">
                                    <h3>9.9元加购吐司</h3>
                                    <p>
                                        【玩转舌尖 纵享魔力】2018.9.30-2018.10.30下单且不晚于10.31配送的蛋糕订单，每单可9.9元加价购「哇哦！吐司」1份，先到先得，不与其他优惠同享。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </transition>
                </section>
                <div class="desc_col goods_comments comments_example">
                    <div class="inner">
                        <h2>
                            <span>用户评论</span>
                            <router-link to="/list/detail/comments">看看大家怎么说</router-link>
                            <!--<a href="">看看大家怎么说</a>-->
                        </h2>
                        <!--<div class="comments_item">-->
                            <!--<div class="comment_title">-->
                                <!--<img src="../assets/img/avatar1.png" class="avatar" alt="">-->
                                <!--<span>188***5012</span>-->
                                <!--<span>5-8人食</span>-->
                                <!--<span class="f_right">2018-10-19 10:02:03</span>-->
                            <!--</div>-->
                            <!--<div class="comment_content">好呢</div>-->
                        <!--</div>-->
                        <div class="comments_item" v-for="(item,index) in apprInfo">
                            <div class="comment_title">
                                <img :src="item.userImg" class="avatar" alt="">
                                <span>{{item.userName}}</span>
                                <span>{{item.userNum}}人食</span>
                                <span class="f_right">{{item.appaTime}}</span>
                            </div>
                            <div class="comment_content">{{item.appaCon}}</div>
                            <div class="upload_wrap commented clear_fix" v-if="item.appaImg">
                                <div class="upload_item" v-for="(aaa,index) in item.appaImg">
                                    <div class="img_wrap">
                                        <img :src="aaa" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="goods_desc">
                    <p>&nbsp;</p>
                    <div class="desc_col">
                        <h2>找寻心中的美味</h2>
                        <div class="imgDesc_wrap">
                            <img src="http://www.lecake.com/postsystem/docroot/images/goods/CEEFCB6DE21DFE34C8918E20EDD6720B.jpg" alt="">
                        </div>
                        <p class="goods_intro">芝士与香草戚风被雪域奶油的浪漫笼罩，每一口都充满快乐的滋味，撩拨起无限的食欲，让味蕾懂得了心跳的感觉。</p>
                        <div class="auto_height">
                            <img class="auto_pos" @click="show2=!show2" v-show="show2" style="z-index: 2" src="../assets/img/meidaodao_poster.jpg" alt="">
                            <video class="auto_pos" controls preload="auto" src="../assets/img/meidaodao.mp4"></video>
                        </div>
                    </div>
                    <div class="desc_col">
                        <h2>严选食材</h2>
                        <div class="imgDesc_wrap">
                            <img src="http://www.lecake.com/postsystem/docroot/images/goods/9E6796745AFF19FD19F4324FF70EFEE3.jpg" alt="">
                        </div>
                    </div>
                    <div class="desc_col">
                        <div class="imgWrap">
                            <img src="http://wx01.lecake.com/postsystem/docroot/images/promotion/201805/濂舵补(4).jpg" alt="">
                        </div>
                        <div class="contentWrap">
                            <p>用心打发而成的美味奶油<br/>口感绵密，精致细腻<br/>这份雪白<br/>让你有如获至宝的幸福感</p>
                        </div>
                    </div>
                    <div class="desc_col">
                        <div class="contentWrap">
                            <p>用心打发而成的美味奶油<br/>口感绵密，精致细腻<br/>这份雪白<br/>让你有如获至宝的幸福感</p>
                        </div>
                        <div class="imgWrap">
                            <img src="http://wx01.lecake.com/postsystem/docroot/images/promotion/201805/濂舵补(4).jpg" alt="">
                        </div>
                    </div>
                    <div class="about_e">
                        <h2>关于食用</h2>
                        <div class="text_wrap">
                            <p>口味：芝士口味<br/>适合人群：大众<br/>保鲜条件：冷藏0-4摄氏度<br/>食用方法：请收到蛋糕后2-3小时内食用</p>
                            <p class="orange">
                                温馨提示：蛋糕中出现的细小黑色颗粒为香草籽，此为香草荚未碾磨均匀带入的颗粒，可放心食用，商品以实物为准。
                            </p>
                        </div>
                    </div>
                    <div class="desc_col">
                        <h2 id="audioDesc">如何定制个性语音</h2>
                        <p class="audio_icon">
                            &nbsp;
                        </p>
                        <div class="text_wrap">
                            <p>① 成功提交订单后，添加录音<br/>② 添加录音（时长限制21秒）<br/>③ 录制成功后，上传即可<br/>④ 收货人收到蛋糕后，微信扫描卡片上的二维码，即可倾听ta的心声</p>
                        </div>
                    </div>
                    <p class="split">&nbsp;</p>
                    <div class="desc_col part_two text_center">
                        <h2>美刀刀蛋糕</h2>
                        <div>
                            <p>芝士与香草戚风被雪域奶油的浪漫笼罩<br/>每一口都充满快乐的滋味<br/>撩拨起无限的食欲<br/>让味蕾懂得了心跳的感觉</p>
                        </div>
                    </div>
                    <div class="desc_col">
                        <img src="//newimgcdn.lapetit.cn/h5/images/goods/chief.jpg" alt="">
                    </div>
                </section>
                <div class="desc_col goods_comments">
                    <div class="inner">
                        <h2 class="noArrow">用户评论</h2>
                        <div class="comments_item">
                            <div class="comment_title">
                                <img class="avatar" src="//newimgcdn.lapetit.cn/h5/images/goods/avatar.png" alt="">
                                <span>188***5012</span>
                                <span>5-8人食</span>
                                <span class="f_right">2018-10-19 10:02:03</span>
                            </div>
                            <div class="comment_content">好呢</div>
                        </div>
                        <div class="comments_item">
                            <div class="comment_title">
                                <img class="avatar" src="//newimgcdn.lapetit.cn/h5/images/goods/avatar.png" alt="">
                                <span>188***5012</span>
                                <span>5-8人食</span>
                                <span class="f_right">2018-10-19 10:02:03</span>
                            </div>
                            <div class="comment_content">好呢</div>
                        </div>
                        <div class="comments_item">
                            <div class="comment_title">
                                <img class="avatar" src="//newimgcdn.lapetit.cn/h5/images/goods/avatar.png" alt="">
                                <span>188***5012</span>
                                <span>5-8人食</span>
                                <span class="f_right">2018-10-19 10:02:03</span>
                            </div>
                            <div class="comment_content">好呢</div>
                        </div>
                        <div class="comments_item">
                            <div class="comment_title">
                                <img class="avatar" src="//newimgcdn.lapetit.cn/h5/images/goods/avatar.png" alt="">
                                <span>188***5012</span>
                                <span>5-8人食</span>
                                <span class="f_right">2018-10-19 10:02:03</span>
                            </div>
                            <div class="comment_content">好呢</div>
                        </div>
                        <!--<a href="" class="more_comments">更多评论</a>-->
                        <router-link class="more_comments" to="/list/detail/comments">看看大家怎么说</router-link>
                    </div>
                </div>
            </div>
            <ScrollTop></ScrollTop>
            <div v-if="show4" @click="show4=false" id="share" class="share_wrapper">
                <div class="icon_wrap data_safari">
                    <img src="//newimgcdn.lapetit.cn/h5/images/goods/shareIcons/icon_safari.png" alt="">
                </div>
            </div>
            <footer class="global_fix_bottom">
                <div class="footer_wrap">
                    <nav class="global_footer clear_fix">
                        <a href="" class="card_btn">购物车</a>
                        <a href="" class="udesk_btn">客服</a>
                        <button class="addCard">加入购物车</button>
                    </nav>
                </div>
            </footer>
        </div>
        <router-view></router-view>
    </article>
</template>

<script>
    import ScrollTop from './goodsList/scrollTop'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "goodsDetail",
        components:{
            swiper,
            swiperSlide,
            ScrollTop
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
                show:false,
                show1:false,
                show2:true,
                detailData:{},
                show3:true,
                show4:false,
                wt:"",
                apprInfo:[]
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

          },
          goBack(){
              this.$router.go(-1)
          },
          goHome(){
              this.$router.push("/home")
          }
        },
        created(){
            let goodsId = this.$route.query.goodsId;
            this.$http.get(`${this.$api}/detail?goodsId=${goodsId}`).then(({data})=>{
                this.detailData = data;
                console.log(data);
                this.wt = 13*data.sweetNess;
                this.apprInfo = data.apprInfo.slice(0,2)
                console.log(this.apprInfo);
            })
        }

    }
</script>

<style lang="less" scoped>
    .main_goods_detail{
        font-size: 24px;
        background: #f6f6f6;
        min-height: 100%;
        width: 100vw;
        /*height: 100vh;*/
        top: 0;
        position: absolute;
        color: #3e3e3e;
        z-index: 1000;
    }
    .global_fix_top{
        height: 88px;
    }
    .header_wrap {
        position: fixed;
        z-index: 20;
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
    .swiper-sd{
        overflow: hidden;
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
        overflow: hidden;
    }
    .goods_detail .sweet_level:before {
        content: '';
        position: absolute;
        width: 130px;
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
        /*-webkit-box-flex: 1;*/
        /*flex: 1;*/
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
    .pop_wrapper_mask{
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
    .fade-leave, .fade-leave-to {
        /*opacity: 0;*/
        transition: all 0s 0.6s ease;
        transform:translateY(0);
    }
    .dade-enter-active, .dade-leave-active{
        transition: all 0.6s;
    }
    .dade-enter, .dade-leave-to {
        /*opacity: 0;*/
        transform:translateY(100%);
    }
    .pop_wrapper_inner .close {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 60px;
        height: 60px;
        z-index: 7;
    }
    .pop_wrapper_inner .close:before {
        position: absolute;
        content: '';
        width: 40px;
        height: 40px;
        background: url(../assets/img/upload.png) no-repeat center;
        right: 0;
        top: 0;
        background-size: 200px 200px;
        background-position: -120px -40px;
    }
    .promotions{
        background: #ffffff;
        margin-bottom: 20px;
    }
    .main .promotions .inner{
        position: relative;
        padding: 24px 0;
        margin: 0 32px;
        line-height: 46px;
    }
    .main .promotions .inner strong {
        font-weight: bolder;
        margin-right: 10px;
    }
    .main .promotions .inner .content {
        width: 83%;
        display: inline-block;
        vertical-align: top;
    }
    .main .promotion .inner .content p {
        margin-bottom: 10px;
        float: left;
    }
    .main .promotions .inner .content span {
        color: #ffffff;
        background: #ff4001;
        padding: 4px 8px;
        border-radius: 2PX;
        margin: 0 4px;
    }
    .main .promotions .inner:after {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url(../assets/img/icons.png) no-repeat center;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -80px -120px;
        right: 0;
        transform: rotate(180deg);
    }
    .share_wrapper .pop_wrapper_inner.list {
        height: 50%;
        position: fixed;
        bottom: -60px;
        left: 0;
        background: #fff;
        width: 100%;
        z-index: 15;
        /*transform: translateY(100%);*/
        /*transition: all 0.6s;*/
    }
    .content_invoice {
        height: 90%;
        overflow: auto;
        padding-top: 10%;
    }
    .invoice_item {
        width: 80%;
        margin: auto;
        padding: 30px 0;
        border-bottom: 1PX solid #f9f9f9;
    }
    .invoice_item h3 {
        display: inline-block;
        color: #ffffff;
        background: #ff4001;
        margin-bottom: 20px;
        padding: 4px 8px;
        border-radius: 2PX;
        line-height: 36px;
    }
    .invoice_item p{
        color: #ff4001;
        line-height: 36px;
    }
    .tade-leave, .tade-leave-to {
        /*opacity: 0;*/
        transition: all 0s 0.6s ease;
        transform:translateY(0);
    }
    .sade-enter-active, .sade-leave-active{
        transition: all 0.6s;
    }
    .sade-enter, .sade-leave-to {
        /*opacity: 0;*/
        transform:translateY(100%);
    }
    .comments_example{
        background: #ffffff;
        margin-bottom: 20px;
    }
    .main .goods_comments .inner {
        padding: 24px 0;
        margin: 0 32px;
        overflow: hidden;
    }
    .main .goods_comments .inner h2 {
        position: relative;
        line-height: 36px;
    }
    .main .goods_comments .inner h2 a {
        float: right;
        margin-right: 40px;
        line-height: 36px;
        color: #3e3e3e;
    }
    .main .goods_comments .inner h2:after {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url(../assets/img/icons.png) no-repeat center;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -80px -120px;
        right: 0;
        transform: rotate(180deg);
    }
    .comments_item {
        border-bottom: 1PX solid #d1c6af;
        padding-bottom: 4px;
    }
    .comment_title {
        position: relative;
        padding: 0 24px 0 80px;
        height: 96px;
        line-height: 96px;
    }
    .main .goods_comments .avatar {
        width: 72px;
        position: absolute;
        height: 72px;
        left: 0;
        top: 50%;
        margin-top: -36px;
    }
    .comment_title span {
        color: #9c9c9c;
        margin-left: 24px;
    }
    .f_right {
        float: right;
    }
    .comments_item .comment_content {
        margin-bottom: 24px;
    }
    .comments_item:last-of-type {
        border-bottom: 0;
    }
    .main .goods_desc {
        padding-bottom:40px;
        background: white;
    }
    .goods_desc p:nth-child(1){
        line-height: 36px;
    }
    .main .goods_desc .desc_col {
        width: 93%;
        margin: 0 auto 20PX;
    }
    .goods_desc .desc_col h2 {
        font-size: 30px;
        padding-top: 40px;
        margin: 0 32px 40px 32px;
        text-align: center;
        line-height: 44px;
        color: #a6906c;
    }
    .main .goods_desc .desc_col img {
        width: 100%;
        vertical-align: top;
    }
    .main .goods_desc .desc_col .goods_intro {
        width: 70%;
        margin: auto;
        text-align: justify;
        line-height: 36px;
    }
    .auto_height{
        margin: 32px 4% 0;
        padding-top: 51.75%;
        width: auto;
        position: relative;
    }
    .auto_pos {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
    }
    .main .goods_desc .desc_col .imgWrap {
        display: inline-block;
        vertical-align: middle;
        width: 50%;
        max-width: 50%;
    }
    .main .goods_desc .desc_col .contentWrap {
        display: inline-block;
        vertical-align: middle;
        width: 48%;
        text-align: center;
    }
    .about_e h2{
        font-size: 30px;
        padding-top: 40px;
        margin: 0 32px 40px 32px;
        text-align: center;
        line-height: 44px;
        color: #a6906c;
    }
    .about_e .text_wrap {
        width: 70%;
        margin: auto;
    }
    .about_e p:nth-child(1){
        line-height: 48px;
    }
    .about_e .orange {
        color: #ff4001;
        line-height: 48px;
    }
    .desc_col .audio_icon {
        width: 40px;
        height: 40px;
        margin: 10px auto;
        position: relative;
    }
    .desc_col .audio_icon:before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url("../assets/img/upload.png") no-repeat center;
        left: 0;
        top: 50%;
        margin-top: -24px;
        background-size: 200px 200px;
        background-position: -80px -40px;
    }
    .main .goods_desc .desc_col p:nth-child(1) {
        width: 70%;
        margin: auto;
        line-height: 48px;
    }
    .goods_desc .split {
        height: 20px;
        width: 100vw;
        background: #f6f6f6;
    }
    .part_two p {
        color: #5f5f5f;
        line-height: 2;
        text-align: center;
    }
    .main .goods_desc {
        margin-bottom: 20px;
    }
    .main_goods_detail .main > div {
        background: #ffffff;
        margin-bottom: 20px;
    }
    .comments_item {
        border-bottom: 1PX solid #d1c6af;
        padding-bottom: 4px;
    }
    .main .goods_comments .inner h2.noArrow:after {
        background: none;
    }
    .main .more_comments {
        display: block;
        height: 64px;
        width: 100%;
        position: relative;
        text-indent: -1000000px;
        overflow: hidden;
    }
    .main .more_comments:before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url(../assets/img/icons.png) no-repeat center;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -320px -160px;
        left: 50%;
        margin-left: -20px;
        transform: rotate(90deg);
    }
    .main_goods_detail .global_fix_bottom {
        height: 96px;
    }
    .main_goods_detail .global_fix_bottom .footer_wrap {
        height: 96px;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 10;
        background: #ffffff;
        border-top: 1PX solid #d1c6af;
    }
    .main_goods_detail .global_fix_bottom .global_footer {
        font-size: 22px;
        text-align: center;
        height: 100%;
    }
    .global_fix_bottom .global_footer a {
        float: left;
        position: relative;
        width: 30%;
        height: 100%;
        color: #a38d6b;
        padding-top: 56px;
        line-height: 38px;
    }
    .global_fix_bottom .global_footer .card_btn:before {
        content: '';
        position: absolute;
        width: 32px;
        height: 32px;
        background: url(../assets/img/main_nav.png) no-repeat center;
        background-size: 64px 160px;
        left: 50%;
        margin-left: -16px;
        top: 20px;
        background-position: -32px -96px;
    }
    .global_fix_bottom .global_footer .udesk_btn:before {
        content: '';
        position: absolute;
        width: 30px;
        height: 28px;
        background: url(../assets/img/udesk.png) no-repeat center;
        background-size: 100% 100%;
        left: 50%;
        margin-left: -16px;
        top: 20px;
    }
    .global_fix_bottom .global_footer button {
        position: absolute;
        width: 40%;
        height: 100%;
        top: 0;
        right: 0;
        background: #ff4001;
        font-size: 24px;
        color: #ffffff;
        outline: none;
        border: 0;
    }
    .comments_item .upload_wrap.commented {
        margin: 24px 0;
        color: #9b9b9b;
        overflow: hidden;
    }
    .comments_item .upload_wrap .upload_item {
        width: 120px;
        float: left;
        position: relative;
        margin-right: 20px;
    }
    .comments_item .upload_wrap .img_wrap {
        position: relative;
        width: 100%;
        height: 120px;
        border: 1PX solid #f5f5f5;
        overflow: hidden;
    }
    .img_wrap img {
        max-width: none;
        max-height: 100%;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    #share{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 25;
        background: rgba(0, 0, 0, 0.5);
    }
    .share_wrapper .icon_wrap.data_safari {
        width: 233.5PX;
        height: 75PX;
        bottom: 10PX;
    }
    .share_wrapper .icon_wrap {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }
    .share_wrapper .icon_wrap img {
        width: 100%;
        height: 100%;
    }
</style>