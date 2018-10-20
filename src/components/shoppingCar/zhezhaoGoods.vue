<template>
    <div class="box" v-show="boolen1"  >
        <transition name="fade" >
            <div class="main-zhezhao" v-show="boolen1">
            </div>
        </transition>
       <transition name="dade" >
           <div class="con" v-show="boolen1" >
               <span @click="change" class="box-delete"></span>
               <div class="main-detail">
                   <div class="zhezhao-main">
                       <div class="img_wrap">
                           <img src="../../assets/img/list5.jpg" alt="">
                       </div>
                       <div class="desc_wrap">
                           <p>诺心派对礼包(A款)</p>
                           <div>
                               <p><small>￥</small>58元</p>
                               <p><small>￥</small>38</p>
                               <p>1个</p>
                           </div>
                       </div>
                       <div class="goods_desc">
                           <div class="desc_col">
                               <h2>找寻心中的美好</h2>
                               <img class="img_con" src="../../assets/img/list6.jpg" alt="">
                               <img class="img_con" src="../../assets/img/list6.jpg" alt="">
                               <!--<div><img src="../../assets/img/list6.jpg" alt=""></div>-->
                               <!--<div>-->
                               <!--<h2>温馨提示</h2>-->
                               <!--<div>-->
                               <!--<p>-->
                               <!--本品不可食用，未成年人请在家长看护下使用-->
                               <!--</p>-->
                               <!--</div>-->
                               <!--</div>-->
                           </div>
                       </div>
                   </div>
                   <div class="desc_footer">
                       <button>立即购买</button>
                       <button>加入购物车</button>
                   </div>
               </div>
           </div>
       </transition>
    </div>
</template>

<script>
    export default {
        name: "zhezhaoGoods",
        props:{
            boolen1:{
                type:Boolean,
                default:false
            }
        },
        data(){
          return {
              name:"main-detail",
              show5:true
          }
        },
        methods:{
            change(){
                this.$emit("change1")
            }
        },
        created(){
        }
    }
</script>

<style scoped>
    .box{
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        z-index: 200;
    }
    .main-zhezhao{
        width:100%;
        height:100%;
        position:absolute;
        left:0;
        top:0;
        background: rgba(0, 0, 0, 0.5);
    }

    .zhezhao-main{
        height: 90%;
    }
    .main-detail{
        width:100%;
        height:90%;
        position:absolute;
        bottom:0;
        top: 10%;
        z-index:300;
        background: #ffffff;
        overflow-y: scroll;

    }
    .con{
        height: 100vh;
        position: relative;
    }

    .box-delete{
        display: inline-block;
        position: absolute;
        right:20px;
        width:40px;
        bottom: 90%;
        height:70px;
        background: url("../../assets/img/close.png") no-repeat center;
        background-size: 100%;

    }
    .img_wrap{
        height:400px;
    }
    .img_wrap>img{
        max-width: none;
        max-height: 100%;
        position: relative;
        left: 50%;
        top: 50%;
        width: 100vw;
        transform: translate(-50%, -50%);
    }
    .desc_wrap{
        padding:20px 36px;
    }
    .desc_wrap>p{
        margin-bottom:22px;
        font-size:30px;
    }
    .desc_wrap>div>p{
        float: left;
        vertical-align: middle;
        height:32px;
        line-height:32px;
        margin-right:24px;
    }
    .desc_wrap>div>p:nth-child(1){
        color: #ff4001;
        font-size:25px;
    }
    .desc_wrap>div>p:nth-child(2){
        position: relative;
        font-size:20px;
        color: #a6906c;
        padding-left:72px;
    }
    .desc_wrap>div>p:nth-child(2)::before{
        content: '';
        position: absolute;
        width:72px;
        height:26px;
        left: 0;
        top: 50%;
        margin-top: -12px;
        background: url(../../assets/img/markupPrice.png) no-repeat center;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .desc_wrap>div::after{
        content: " ";
        clear: both;
        display: block;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }
    .goods_desc{
        padding-bottom:40px;
    }
    .desc_col>h2{
        font-size:26px;
        padding-top:20px;
        margin: 0 32px 0;
        text-align:center;
        color:#a6906c;
    }
    .desc_col>div:nth-child(2)>img{
        width:100%;
    }
    .desc_col>div:nth-child(3)>h2{
        font-size:26px;
        padding-top:20px;
        margin: 0 32px 0;
        text-align:center;
        color:#a6906c;
    }
    .desc_col>div:nth-child(3)>div{
        width: 70%;
        margin: auto;
        line-height: 2;
    }
    .desc_col>div:nth-child(3)>div>p{
        width: 70%;
        margin: auto;
        text-align: justify;
        font-size:25px;
        line-height:30px;
    }
    .desc_footer{
        width: 100%;
        height:90px;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color:red;
        z-index: 500;
    }
    .desc_footer>button{
        width: 50%;
        text-align: center;
        line-height:90px;
        outline:none;
        border:0;
    }
    .desc_footer>button:nth-child(1){
        background: #ff4001;
        color: #ffffff;
    }
    .desc_footer>button:nth-child(2){
        background: #f9f9f9;
        color: #939393;
    }
    .img_con{
        width: 100vw;
    }
    .fade-leave, .fade-leave-to{
        transition: all 0s 0.6s ease;
        transform: translateY(0);
    }
    .dade-enter-active, .dade-leave-active{
        transition: all 0.6s;
    }
    .dade-enter, .dade-leave-to{
        transform: translateY(100%);
    }
</style>