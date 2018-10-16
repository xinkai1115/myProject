<template>
   <div class="wrap1 active">
       <!--登录成功wrap1添加一个class.active-->
       <!--centre是个人中心主页面组件-->
       <Login v-if="show"></Login>
       <!--我的订单组件-->
       <router-view></router-view>
   <div class="centre">
       <div class="header">
           <div class="header-img">
               <img src="../assets/img/avatar.png" alt="">
           </div>
           <div class="header-login">
               <a href="#" @click="show=true">登录</a>
               <h3>
                   <span class="name">150***3618</span>
                   <span class="leve">LEV1</span>
               </h3>
               <h4>
                   <span class="f-left">积分:0</span>
                   <router-link to="/index/mymind"><span class="f-right">心享值:0</span></router-link>
               </h4>
           </div>
       </div>
       <div class="header-hidden">
           <div class="info">
               <strong>心享卡</strong>
               <a href="" class="buy-link">立即开通</a>
           </div>
       </div>
       <hr>
       <div class="main-order">
           <router-link to="/index/order">待付款</router-link>
           <router-link to="/index/order">待发货</router-link>
           <router-link to="/index/order">待收货</router-link>
           <router-link to="/index/order">我的订单</router-link>
       </div>
       <hr>
       <div class="main-list">
           <router-link to="/index/mytoken">优惠卡券</router-link>
           <router-link to="/index/mycard">储值卡</router-link>
           <router-link to="/index/myleclub">leclub</router-link>
           <hr>
           <router-link class="no-icon" to="/index/myourself">关于我们</router-link>
           <router-link class="no-icon" to="/index/mybill">关于发票</router-link>
       </div>
       <div class="main-footer">
           <a href="">客服电话&nbsp;&nbsp;4001&nbsp;578&nbsp;578</a>
       </div>
   </div>
   </div>
    <div class="wrap1 active">
        <!--登录成功wrap1添加一个class.active-->
        <!--centre是个人中心主页面组件-->
        <Login v-if="show"></Login>
        <!--我的订单组件-->
        <router-view></router-view>
        <div class="centre">
            <div class="header1">
                <div class="header-img">
                    <img src="../assets/img/avatar.png" alt="">
                </div>
                <div class="header-login">
                    <a href="#" @click="show=true">登录</a>
                    <h3>
                        <span class="name">150***3618</span>
                        <span class="leve">LEV1</span>
                    </h3>
                    <h4>
                        <span class="f-left">积分:0</span>
                        <router-link to="/index/mymind"><span class="f-right">心享值:0</span></router-link>
                    </h4>
                </div>
            </div>
            <div class="header-hidden">
                <div class="info">
                    <strong>心享卡</strong>
                    <a href="" class="buy-link">立即开通</a>
                </div>
            </div>
            <hr>
            <div class="main-order">
                <router-link to="/index/order">待付款</router-link>
                <router-link to="/index/order">待发货</router-link>
                <router-link to="/index/order">待收货</router-link>
                <router-link to="/index/order">我的订单</router-link>
            </div>
            <hr>
            <div class="main-list">
                <a href="">优惠卡券</a>
                <a href="">储值卡</a>
                <a href="">leclub</a>
                <hr>
                <a href="" class="no-icon">关于我们</a>
                <a href="" class="no-icon">关于发票</a>
            </div>
            <div class="main-footer">
                <a href="">客服电话&nbsp;&nbsp;4001&nbsp;578&nbsp;578</a>
            </div>
        </div>
    </div>
</template>
<script>
    import Login from "../components/login"

    export default {
        data(){
            return {
                show:false
            }
        },
        name: "personalCenter",
        components:{
            Login

        },
        mounted(){

        }
    }

</script>
<style scoped>
    .wrap1{
        background-color:#ffffff;
        position:relative;
        width:100%;
        height:100vh;
    }

    .header1{
        position: relative;
        background-color:#f4f4f4;
        text-align:center;
        padding:30px 28px 20px;
    }
    .header-img>img{
        width:110px;
        height:110px;
    }
    .header-login{
        padding:20px 0px 24px;
    }
    .header-login>a{
        display:block;
        margin:auto;
        width:120px;
        height:48px;
        line-height:48px;
        border-radius:4px;
        background-color:#a38d6b;
        color:#ffffff;
        text-align:center;
        display:block;
    }
    .header-login>h3{
        padding:12px 0px 40px;
        display:none;
    }
    .header-login>h4{
        position:relative;
        height:48px;
        line-height:48px;
        display:none;

    }
    .active>.centre>.header>.header-login>a{
        display:none;
    }
    .active>.centre>.header>.header-login>h3{
        display:block;
    }
    .active>.centre>.header>.header-login>h4{
        display:block;
    }
    .active>.centre>.header-hidden{
        display:block;
    }
    .header-login>h4::after{
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        background: #a38d6b;
        z-index: 1;
        left: 50%;
        top: 0;
    }
    .f-left,.f-right{
        width:50%;
        display:inline-block;
    }
    .name{
        display:inline-block;
        vertical-align:middle;
    }
    .leve{
        vertical-align:middle;
        line-height:10px;
        padding:1px 2px;
        margin-left:8px;
        font-size:12px;
        color:#ffffff;
        background-color:#a38d6b;
        border-radius:4px;
        -webkit-transform: scale(0.75);
        -webkit-transform-origin:0 0;
    }
    .header-hidden{
        padding-bottom:28px;
        display:none;

    }
    .info{
        position: relative;
        width:670px;
        height:76px;
        line-height:76px;
        text-align: center;
        margin: auto;
        background: url(../assets/img/pass_card_bg.png) no-repeat center;
        background-size: 100% 100%;
    }
    .info>strong{
        font-size:24px;
        color: #a38d6b;
        font-weight: bold;
    }
    .buy-link{
        color:red;
        position: absolute;
        height:40px;
        line-height:40px;
        right:32px;
        top: 50%;
        margin-top:-20px;
        font-weight: bold;
        text-decoration: underline;
    }
    .wrap1>hr{
        background-color:#d1c6af;
    }
    hr{
        display:block;
        height:0.1px;
        margin:0;
        padding:0;
    }
    .main-order{
        height:144px;
    }
    .main-order>a{
        float: left;
        width: 20%;
        height:64px;
        position: relative;
        padding-top:80px;
        text-align: center;
        color: inherit;
        text-decoration: none;
    }
    .main-order>a:nth-child(4){
        background-color:#f9f9f9;
        width:40%;
    }
    .main-order>a::before{
        content: "";
        position: absolute;
        width:80px;
        height:80px;
        background: url(../assets/img/3.png) no-repeat center;
        background-size:400px 400px;
        margin-top: -40px;
        background-position: 0 0;
        left: 50%;
        margin-left: -40px;
        top:48px;
    }
    .main-order>a:nth-child(1)::before{
        background-position: 0 0;
    }
    .main-order>a:nth-child(2)::before{
        background-position: -80px 0;
    }
    .main-order>a:nth-child(3)::before{
        background-position: -160px 0;
    }
    .main-order>a:nth-child(4)::before{
        background-position: -240px 0;
    }
    .main-list>a{
        position: relative;
        display: block;
        line-height:40px;
        margin-left:40px;
        padding:28px 0 28px 40px;
    }
    .main-list>.no-icon{
        padding:28px 0 28px 0px;
        padding-left:0;
    }
    .main-list>a::after{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../assets/img/3.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -160px -80px;
        right:24px;
    }
    .main-list>a:nth-child(1)::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../assets/img/3.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        left: -4px;
        background-position:0 -80px;
    }
    .main-list>a:nth-child(2)::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../assets/img/icons.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -280px -200px;
        left:-4px;
    }
    .main-list>a:nth-child(3)::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../assets/img/3.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        left: -4px;
        background-position:-40px -80px;
    }
    .main-footer{
        position: absolute;
        width: 100%;
        text-align: center;
        bottom:160px;
        left: 0;
    }
    .main-footer>a{
        position: relative;
        padding-left:40px;
        line-height:40px;
        display: inline-block;
    }
    .main-footer>a::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../assets/img/3.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -120px -80px;
        left: -4px;
    }

</style>
