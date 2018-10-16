<template>
    <div class="wrap4">
        <router-view></router-view>
      <div class="mind">
          <a href="#" class="active">优惠券</a>
          <router-link to="/index/mytoken/couponCake">蛋糕卡</router-link>
      </div>
        <div class="notice">
            <a href="#" @click="show=true">优惠券须知</a>
        </div>
        <div class="no-card">您还没有优惠券哦</div>
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
                show:false
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