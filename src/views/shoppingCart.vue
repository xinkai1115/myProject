<template>
    <div class="box">
        <ChoseGoods></ChoseGoods>
        <div class="box-header">
            <img src="../assets/img/empty.png" alt="">
            <p>您还没有选购您的商品</p>
        </div>
        <div class="box-main">
            <div class="box-main-header">
                <h2>推荐商品</h2>
                <h3>Sincerely Recommend</h3>
            </div>
            <ul class="box-main-ul">
                <li>
                    <GoodsMain  class="box-main-li"></GoodsMain>
                </li>
                <li>
                    <GoodsMain></GoodsMain>
                </li>
                <li>
                    <GoodsMain></GoodsMain>
                </li>
            </ul>
        </div>
        <div class="box-weekly">
         <div class="box-weekly-header"></div>
            <div class="box-weekly-main">
                <div class="box-weekly-main-item1">
                    <div>熊抱吐司加价购</div>
                    <div>
                        <a href="#"><span>甄选独立装</span></a>
                        <a href="#"><span>周周配套餐</span></a>
                    </div>
                    <!--切换甄选独立套餐或者周周配套餐-->
                    <div>
                        <div>
                            <a href="">￥99</a>
                            <a href="">￥148</a>
                            <a href="">￥228</a>
                        </div>
                        <h2>熊抱吐司超值套餐</h2>
                        <ul>
                            <li><MoreGoods></MoreGoods></li>
                            <li><MoreGoods></MoreGoods></li>
                            <li><MoreGoods></MoreGoods></li>
                            <li><MoreGoods></MoreGoods></li>
                        </ul>
                        <a href="#" class="join-car">加入购物车</a>
                    </div>
                    <div>
                        <h4>
                            <a href="#" @click="show=!show">
                                周周配说明
                            </a>
                        </h4>
                        <div v-if="show">
                            <p>1.一周七天 任选一天配送 连续四周</p>
                            <p>2.每周为您提供美味的熊抱吐司</p>
                            <p>3.温馨提示：请至少提前1天确认配送时间，一经确认无法更改，以官网下单信息为准</p>
                        </div>
                    </div>
                </div>
                <div class="box-weekly-main-item2">
                    <div></div>
                    <h2>精品配件</h2>
                    <ul>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                    </ul>
                </div>
                <div class="box-weekly-main-item3">
                    <div></div>
                    <h2>加价购</h2>
                    <ul>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                        <li><SiftGoods></SiftGoods></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GoodsMain from "../components/goodsMain"
    //ChoseGoods是加入购物车的商品组件
    import ChoseGoods from "../components/shoppingCar/choseGoods"
    import SmallGoods from "../components/shoppingCar/smallGoods"
    import MoreGoods from "../components/shoppingCar/moreGoods"
    import SiftGoods from "../components/shoppingCar/siftGoods"
    export default {
        name: "shoppingCart",
        components:{
            GoodsMain,
            ChoseGoods,
            SmallGoods,
            MoreGoods,
            SiftGoods
        },
        data(){
            return {
                show:false
            }
        }
    }
</script>

<style scoped>
    .box{
        width:100%;
        position:relative;
    }
    .box-header{
        position: relative;
        height: 440px;
        text-align: center;
        display:none;
    }
    .box-main{
        display:none;
    }
    .box-header>img{
        position: absolute;
        width:152px;
        height:152px;
        left: 50%;
        top:120px;
        margin-left: -84px;
    }
    .box-header>p{
        position: absolute;
        width: 100%;
        top:300px;
        font-size:20px;
        color: #9c9c9c;
    }
    .box-main-header{
        border-top: 1px solid #d1c6af;
        padding:40px 0 32px;
        margin:32px;
        text-align:center;
        color:#a38d6b;
    }
    .box-main-header>h2{
        text-align: center;
        height:72px;
        line-height:72px;
        font-weight: bold;
        font-size:30px;
    }
    .box-main-header>h3{
        font-size:25px;
    }
    .box-main-ul{
        margin:0 32px;
        list-style:none;
        padding-bottom:108px;
    }
    .box-main-ul>li{
        width:48%;
    }
    .box-main-ul>li:nth-child(1){
        float:left;
    }
    .box-main-ul>li:nth-child(2){
        float:right;
    }
    .box-main-li{
        position: relative;
    }
    .box-main-li:before{
        content: '';
        position: absolute;
        bottom:15px;
        right:0;
        width:40px;
        height:40px;
        background: url(../assets/img/icons.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size: 400px 400px;
        margin-top: -20px;
        background-position: -240px -40px;
        margin-left: -20px;
        z-index:300;
    }
    .box-main-li>a{
        background-color:red;
        position:absolute;
        z-index:400;
    }
    .box-weekly{
        padding-bottom:108px;
    }
    .box-weekly-header{
        width:100%;
        height:20px;
        background-color:#f9f9f9;
    }
    .box-weekly-main-item1>div:nth-child(1){
        text-align: center;
        padding: 36px 0 4px;
        color: #ceae78;
        font-size:30px;
        font-weight: bold;
    }
    .box-weekly-main-item1>div:nth-child(2){
        width:600px;
        margin:40px auto 52px;
    }
    .box-weekly-main-item1>div:nth-child(2)::after{
        content: " ";
        clear: both;
        display: block;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }
    .box-weekly-main-item1>div:nth-child(2)>a:nth-child(1){
        width: 240px;
        height:72px;
        border: 1px solid #9c9c9c;
        align-items: center;
        justify-content: center;
        border-color: #ceae78;
        display:flex;
        color: #ceae78;
        float:left;
    }
    .box-weekly-main-item1>div:nth-child(2)>a:nth-child(2){
        width:240px;
        height:72px;
        color: #9c9c9c;
        border: 1px solid #9c9c9c;
        align-items: center;
        display:flex;
        justify-content: center;
        float:right;
    }
    .box-weekly-main-item1>div:nth-child(2)>a>span{
        position:relative;
        padding-left:20px;
        font-size:25px;
    }
    .box-weekly-main-item1>div:nth-child(2)>a:nth-child(1)>span:before{
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url(../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -19px;
        background-position: -240px -280px;
        left: -15px;
    }
    .box-weekly-main-item1>div:nth-child(2)>a:nth-child(2)>span:before{
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url(../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -19px;
        background-position: -280px -280px;
        left: -15px;
    }
    .box-weekly-main-item1>div:nth-child(3){
        position: relative;
        margin:40px 20px 0;
    }
    .box-weekly-main-item1>div:nth-child(3)>div:nth-child(1){
        width:520px;
        margin: auto;
        justify-content: space-between;
        display:flex;
    }
    .box-weekly-main-item1>div:nth-child(3)>div:nth-child(1)>a{
        position: relative;
        padding-left:40px;
        font-size:25px;
    }
    .box-weekly-main-item1>div:nth-child(3)>div:nth-child(1)>a::before{
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url(../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -18px;
        background-position: -280px -280px;
        left: 0;
    }
    .box-weekly-main-item1>div:nth-child(3)>div:nth-child(1)>a:nth-child(1)::before{
        background-position: -240px -280px;
    }
    .box-weekly-main-item1>div:nth-child(3)>h2{
        text-align: center;
        color: #ceae78;
        margin: 40px 0;
        font-size:25px;
    }
    .box-weekly-main-item1>div:nth-child(3)>ul::after{
        content: " ";
        clear: both;
        display: block;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }
    .join-car{
        display: block;
        margin:20px auto 0;
        width:240px;
        height:64px;
        line-height:64px;
        text-align: center;
        color: #ffffff;
        background: #ceae78;
        font-size:24px;
    }
    .box-weekly-main-item1>div:nth-child(4){
        padding: 20px 20px;
    }
    .box-weekly-main-item1>div:nth-child(4)>h4{
        font-size:25px;
        text-align: center;
        color: #ceae78;
    }
    .box-weekly-main-item1>div:nth-child(4)>h4>a{
        display: inline-block;
        position: relative;
        padding-right:40px;
        height:40px;
        line-height:40px;
        color: #ceae78;
    }
    .box-weekly-main-item1>div:nth-child(4)>h4>a::after{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../assets/img/icons3.png) no-repeat center;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: 0 -280px;
        right: 0;
        transition: all 0.5s ease;
        -webkit-transition: all 0.5s ease;
    }
    .box-weekly-main-item1>div:nth-child(4)>div>p{
        font-size:25px;
        margin-bottom:8px;
        color: #868996;
    }
    .box-weekly-main-item2>div:nth-child(1){
        width:100%;
        height:20px;
        background-color:#f9f9f9;
    }
    .box-weekly-main-item2{
        margin-bottom:20px;
    }
    .box-weekly-main-item2>h2{
        text-align: center;
        height:72px;
        line-height:72px;
        font-weight: bold;
        font-size:30px;
    }
    .box-weekly-main-item2>ul{
        overflow-x: auto;
        white-space: nowrap;
        font-size: 0;
    }
    .box-weekly-main-item2>ul::after{
        content: " ";
        clear: both;
        display: block;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }
    .box-weekly-main-item2>ul>li{
        display: inline-block;
    }
    .box-weekly-main-item3>div:nth-child(1){
        width:100%;
        height:20px;
        background-color:#f9f9f9;
    }
    .box-weekly-main-item3>h2{
        text-align: center;
        height:72px;
        line-height:72px;
        font-weight: bold;
        font-size:30px;
    }
    .box-weekly-main-item3>ul{
        overflow-x: auto;
        white-space: nowrap;
        font-size: 0;
    }
    .box-weekly-main-item3>ul::after{
        content: " ";
        clear: both;
        display: block;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }
    .box-weekly-main-item3>ul>li{
        display: inline-block;
    }



</style>