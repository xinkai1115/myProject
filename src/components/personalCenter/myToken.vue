<template>
    <div class="wrap4">
        <router-view></router-view>
      <div class="mind">
          <a href="#" class="active">优惠券<i>(1)</i></a>
          <router-link to="/index/mytoken/couponCake">蛋糕卡</router-link>
      </div>
        <div class="notice">
            <a href="#" @click="show=true">优惠券须知</a>
        </div>
        <div class="no-card">您还没有优惠券哦</div>
        <div class="card">
            <ul>
                <li>
                    <div class="info">
                        <h3><small>￥</small>80</h3>
                        <div class="info-detail">
                            <p>新人专享80元蛋糕立减券</p>
                            <p>有效期:2018.3.10 - 2018.12.12</p>
                            <p><i class="info-detail-rule" @click="show2=!show2">使用规则<img src="../../assets/img/coupon_arr.png" alt=""></i><a href="#">立即使用</a></p>
                        </div>
                    </div>
                    <div class="rule" v-if="show2">
                        <p>活动时间：即日起至2018年12月30日</p>
                        <p>配送时间：即日起至2018年12月31日</p>
                        <p>适用商品：全场蛋糕（除雪域系列，流心千层系列，丝绒玫瑰蛋糕，莓果缤纷蛋糕，新品，礼品馆外）。</p>
                        <p>配送区域：诺心可配送范围区域，具体配送范围及收费标准以下单信息为准</p>
                        <p>参与规则：</p>
                        <p>1.活动期间，订购诺心蛋糕满298元立减80元（除雪域系列，流心千层系列，丝绒玫瑰蛋糕，莓果缤纷蛋糕，新品，礼品馆外）。</p>
                        <p>2.此次活动仅限线上支付，储值卡、蛋糕卡、银行优惠等不与本活动同享。</p>
                    </div>
                </li>
                <li></li>
            </ul>
        </div>
        <router-link class="button" to="/index/mytoken/couponCard"><a href="#">查看历史卡券</a></router-link>
        <div class="wrap5" v-if="show">
           <div>
               <p>优惠券须知</p>
               <p>1，每个订单限用一张优惠券，每张优惠券只可使用一次</p>
               <p>1，每个订单限用一张优惠券，每张优惠券只可使用一次</p>
               <p>1，每个订单限用一张优惠券，每张优惠券只可使用一次</p>
               <p>1，每个订单限用一张优惠券，每张优惠券只可使用一次</p>
               <p>1，每个订单限用一张优惠券，每张优惠券只可使用一次</p>
           </div>
            <a href="" @click="show=false"><img src="../../assets/img/ico_close.png" alt=""></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myToken",
        data(){
            return {
                show:false,
                show2:false
            }
        }

    }
</script>

<style scoped>
   .wrap4{
       width:100%;
       height:100vh;
       position:relative;
       background-color:white;
       z-index:202;
   }
    .mind{
        width:100%;
        height:80px;
        background-color:#f9f9f9;
        color:#3e3e3e;
        border-bottom:1px solid #e8e8e8;
    }
    .mind>a{
        display:inline-block;
        width:50%;
        height:80px;
        text-align:center;
        line-height:80px;
    }
    .notice{
        width:100%;
        padding: 30px 15px 0 10px;
        text-align: right;
        color: #ff4001;
        font-size: 12px;
        cursor: pointer;
        box-sizing: border-box;
    }
    .notice>a{
        color:#ff4001;
    }
    .no-card{
        margin-top:200px;
        text-align:center;
        color:#9b9b9b;
        font-size:25px;
        display:none;
    }
    .card>ul{
        list-style:none;
    }
    .card>ul>li{
        border: none;
        margin: 0;
        padding: 10px 15px 15px;
        border-bottom: 1px solid #d1c6af;
    }
    .card>ul>li:nth-child(1)>.info{

    }
    .card>ul>li:nth-child(1)>.info>h3{
        width:200px;
        height:110px;
        background-color:white;
        text-align:center;
        line-height:110px;
        color:red;
        font-size:48px;
        display:inline-block;
        vertical-align:middle;
        background-color:lightgray;
    }
   .info-detail{
       width:calc(100% - 200px);
       display:inline-block;
       vertical-align:middle;
   }
   .info-detail-rule>img{
       width:20px;
       height:10px;
   }
   .info-detail>p{
       width:calc(100% - 20px);
       line-height:35px;
       padding:0 10px;
   }
   .info-detail>p:nth-child(3)>a{
       text-align:right;
       float:right;
       border:1px solid red;
       border-radius:10px;
       color:red;
   }
   .rule{
       width:100%;
       color:#9b9b9b;
   }
    .button{
        width:100%;
        background-color:#9c9c9c;
        height:80px;
        position:fixed;
        top:calc(100% - 80px);
        buttom:0;
        line-height:80px;
        text-align:center;
    }
    .button>a{
        display:block;
        width:100%;
        height:100%;
        color:#ffffff;
    }
    .active{
        background-color:white;
    }
    .wrap5{
        width:100%;
        height:100vh;
        background-color:rgba(0, 0, 0, 0.5);
        position:absolute;
        top:0;
    }
    .wrap5>div{
        width:80%;
        background-color:white;
        margin:200px auto 0;
        font-size:25px;
    }
    .wrap5>div>p{
        padding:20px 20px;
        line-height:30px;
    }
    .wrap5>div>p:nth-child(1){
        text-align:center;
    }
    .wrap5>a>img{
        width:80px;
        height:80px;
    }
    .wrap5>a{
        display:block;
        text-align:center;
    }
</style>