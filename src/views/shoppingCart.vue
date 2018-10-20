<template>
    <div class="box">
        <!--<CheckMore v-if="show2"></CheckMore>-->
        <!--显示已加入购物车的商品-->
        <div class="car-list">
            <div class="car-item" v-for="(item,index) in cartGoods" :key="index" >
                <div class="car-info">
                    <a href="#"></a>
                    <div class="car-info-item">
                        <a href="#">
                            <div class="car-info-img"><img :src="item.goodsImg" alt=""></div>
                        </a>
                        <div>
                            <h2>{{item.goodsName}}</h2>
                            <div>
                                <p>每份含餐具五套</p>
                            </div>
                            <div>￥198</div>
                            <div>
                                <a href="#" class="a_left"></a>
                                <input type="number" readonly="readonly" value="1">
                                <a href="#" class="a_right"></a>
                            </div>
                        </div>
                    </div>
                    <div class="info-more">
                        <h4><span>填写生日信息，免费赠送巧克力生日牌</span></h4>
                        <h4>切分 - 9份</h4>
                    </div>
                </div>
            </div>
        </div>

        <!--购物车没有商品 显示的头部-->
        <div v-show="!hasGoods" class="box-header"  >
            <img src="../assets/img/empty.png" alt="">
            <p>您还没有选购您的商品</p>
        </div>

        <!--购物车没有商品 底部显示的推荐商品-->
        <div v-show="!hasGoods" class="box-main">
            <div class="box-main-header">
                <h2>推荐商品</h2>
                <h3>Sincerely Recommend</h3>
            </div>
            <ul class="box-main-ul">
                <li v-for="(item,index) in recomGoods" :key="index">
                    <span  @click="addCart(item)" class="add" ></span>
                    <div>
                        <a href="javascript:void(0)" class="auto_height">
                            <img :src="item.goodsImg" alt="">
                        </a>
                        <div class="p_info">
                            <h3 class="p_name">雪域牛乳芝士蛋糕</h3>
                            <h4 class="p_tag "><span class="tag">人气爆款</span></h4>
                            <div class="price_wrap">
                                <p class="new_price">
                                    <small>¥</small>
                                    198
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <!--购物车有商品时  显示的加价区，吐司套餐区，配件区-->
        <div v-show="hasGoods" class="box-weekly">
         <div class="box-weekly-header"></div>
            <div class="box-weekly-main">
                <div class="box-weekly-main-item1">
                    <div>熊抱吐司加价购</div>
                    <div>
                        <a @click="isSetMeal=false" :class="isSetMeal?'':'active'"   href="javascript:void(0)"><span>甄选独立装</span></a>
                        <a  @click="isSetMeal=true"  :class="isSetMeal?'active':''" href="javascript:void(0)"><span>周周配套餐</span></a>
                    </div>
                    <!--切换周周配套餐-->
                    <div v-show="isSetMeal" >
                        <div id="choseBtn" >
                            <!--a 选中后class是active，没有选中时是空的-->
                            <a href="javascript:void(0)"  ref="btn" @click="slectOther($event,'one')" >￥99</a>
                            <a  class="active"  ref="btn" href="javascript:void(0)" @click="slectOther($event,'two')" >￥148</a>
                            <a href="javascript:void(0)" ref="btn" @click="slectOther($event,'three')" >￥228</a>
                        </div>
                        <h2>熊抱吐司超值套餐</h2>
                        <ul>
                            <li v-for="(item,index) in setMealCon" >
                                <div class="box3">
                                    <a href="javascript:void(0)">
                                        <div>
                                            <img :src="item.goodsImg" alt="">
                                        </div>
                                    </a>
                                    <div>
                                        <h3>{{item.goodsName}}</h3>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <a href="#" class="join-car">加入购物车</a>
                    </div>
                    <div v-show="isSetMeal" >
                        <h4>
                            <a href="javascript:void(0)" @click="show=!show">
                                周周配说明
                            </a>
                        </h4>
                        <div v-if="show">
                            <p>1.一周七天 任选一天配送 连续四周</p>
                            <p>2.每周为您提供美味的熊抱吐司</p>
                            <p>3.温馨提示：请至少提前1天确认配送时间，一经确认无法更改，以官网下单信息为准</p>
                        </div>
                    </div>
                    <!--切换甄选独立套餐-->
                    <div v-show="!isSetMeal" >
                        <ul>
                            <li v-for="(item,index) in toastData" :key="index" @click="addCart(item)" >
                                <div class="box2">
                                    <a href="#"><img :src="item.goodsImg" alt=""></a>
                                    <h3>{{item.goodsName}}</h3>
                                    <h4><b>￥{{item.goodsChoose[0].goodsPrice}}</b><i></i></h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--精品配件-->
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
                <!--加价区-->
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
                    <p><a href="#" >查看更多</a></p>
                </div>
                <div class="box-weekly-middle"></div>
                <!--结算去-->
                <div class="box-weekly-main-item4">
                    <div></div>
                    <div class="inner">
                        <a href="javascript:void(0)"></a>
                        <div>结算</div>
                        <div>
                            <span>应付:￥<p>210</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GoodsMain from "../components/goodsMain"
    import CheckMore from "../components/shoppingCar/CheckMore"
    //ChoseGoods是加入购物车的商品组件
    import MoreGoods from "../components/shoppingCar/moreGoods"
    import SiftGoods from "../components/shoppingCar/siftGoods"

    import { mapState , mapMutations ,mapGetters} from "vuex"
    export default {
        name: "shoppingCart",
        components:{
            GoodsMain,
            MoreGoods,
            SiftGoods,
            CheckMore

        },
        data(){
            return {
                show:false,
                isSetMeal:false, //控制 显示吐司套餐
                toastData:null, //独立装吐司数据
                setMealCon:null, //套餐装吐司数据
                recomGoods:null //推荐商品
            }
        },
        computed:{
            ...mapState(["cartGoods"]),
            ...mapGetters({
                hasGoods:'changeCart' // //控制购物车里是否有选择的产品
            })
        },
        methods:{
            ...mapMutations(["addCart"]),
            slectOther($event,test){
                $("#choseBtn").children().each((index,item)=>{
                    $(item).attr("class","")
                })
                $($event.target).attr("class",'active')
                this.$http.get(`${this.$api}/toast?setMeal=${test}`).then(({data})=>{
                    this.setMealCon = data;
                    console.log(data);
                })
            }
        },
        created(){
            this.$http.get(`${this.$api}/list?uid=100`).then(({data})=>{
                this.toastData = data.splice(0,8);
            })
            this.$http.get(`${this.$api}/toast?setMeal=one`).then(({data})=>{
                this.setMealCon = data;
                console.log(this.setMealCon);
            })
            this.$http.get(`${this.$api}/list`).then(({data})=>{
                this.recomGoods = data.splice(0,4);
            })
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
    }
    .box-main{
        /*display:none;*/
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
        overflow: hidden;
    }

    .box-main-ul>li{
        width:48%;
        position: relative;
    }
    .box-main-ul>li:nth-of-type(odd){
        float:left;
    }
    .box-main-ul>li:nth-of-type(even){
        float:right;
    }
    .box-main-ul li .add{
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: 16px;
        right: 0px;
    }
    .box-main-ul .add:before{
        content: "";
        background: url("../assets/img/icons.png") no-repeat center ;
        background-position: -240px -40px;
        background-size: 400px 400px;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        margin-top: -20px;
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
        padding-bottom:250px;
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
        /*border-color: #ceae78;*/
        display:flex;
        /*color: #ceae78;*/
        color: #9c9c9c;
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
    .box-weekly-main-item1>div:nth-child(2)>a.active{
        border-color: #ceae78;
        color: #ceae78;
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
        background-position: -280px -280px;
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
    .box-weekly-main-item1>div:nth-child(2)>a.active>span:before{
        background-position: -240px -280px;
    }
    /*甄选独立套餐显示与隐藏*/
    .box-weekly-main-item1>div:nth-child(3){
        position: relative;
        margin:40px 20px 0;
        /*display:none;*/
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
    .box-weekly-main-item1>div:nth-child(3)>div:nth-child(1)>a.active::before{
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
    /*甄选独立套餐显示与隐藏*/
    .box-weekly-main-item1>div:nth-child(4){
        padding: 20px 20px;
        /*display:none;*/
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
    .box-weekly-main-item1>div:nth-child(5)>ul{
        overflow: hidden;
        overflow-x: auto;
        white-space: nowrap;
        font-size: 0;
    }
    .box-weekly-main-item1>div:nth-child(5)>ul>li{
        display:inline-block;
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
    .box-weekly-main-item3>p{
        text-align:center;
        padding-top:32px;
    }
    .box-weekly-main-item3>p>a{
        font-size:24px;
        text-decoration: underline;
        color: #000000;
    }
    .box-weekly-main-item4{
        width:100%;
        height:120px;
        margin-top:20px;
        position:fixed;
        bottom:108px;
    }
    .box-weekly-main-item4>div:nth-child(1){
        width:100%;
        height:20px;
        background-color:white;
    }
    .box-weekly-middle{
        width:100%;
        height:20px;
        background-color:#f9f9f9;
        margin-top:20px;
    }
    .inner{
        width:100%;
        height:calc(100% - 20px);
        background-color:white;
    }
    .inner>a{
        font-size:25px;
    }
    .inner>a::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 60%;
        margin-top: -20px;
        background-position: -160px -80px;
        left: 7%;
        margin-left: -20px;
    }
    .inner>a::after{
        position: absolute;
        width:80px;
        height:32px;
        line-height:32px;
        content: ' 全选 ';
        top: 58%;
        margin-top: -16px;
        left:72px;
    }
    .inner>div:nth-child(2){
         height:100%;
         width:200px;
         background-color:#ff4001;
         float:right;
        text-align:center;
        line-height:100px;
        color:white;
        font-size:25px;
        font-weight: normal;
     }
    .inner>div:nth-child(3){
        height:100%;
        width:200px;
        float:right;
        line-height:100px;
        text-align:center;
    }
    .inner>div:nth-child(3)>span>p{
        display:inline-block;
        font-size:25px;
        font-weight: bold;
    }

    .box2{
        display: inline-block;
        position: relative;
        margin-left:12px;
        width:200px;
        text-align: center;
    }
    .box2>a{
        display: block;
        margin-bottom:4px;
        width: 100%;
        height:200px;
    }
    .box2>a>img{
        max-height: 100%;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
    }
    .box2>h3{
        font-size:22px;
        line-height:28px;
        height:56px;
        white-space: initial;
        color: #ceae78;
    }
    .box2>h4{
        font-size:22px;
        line-height:40px;
        height:40px;
    }
    .box2>h4>i{
        display: inline-block;
        margin-left:6px;
        width:24px;
        height:24px;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
    }
    .box2>h4>i:before{
        content: '';
        position: absolute;
        width:40px;
        height: 40px;
        background: url(../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -160px -280px;
        left: 50%;
        margin-left: -20px;
    }

    .box3{
        float: left;
        width: 23%;
        background: #ffffff;
        margin-right: 1.9%;
        overflow: hidden;
    }
    .box3>a{
        font-size: 100%;
        outline: 0;
        color: inherit;
        text-decoration: none;
    }
    .box3>a>div{
        position: relative;
        width: 100%;
        padding-top: 100%;
    }
    .box3>a>div>img{
        max-width: none;
        max-height: 100%;
        position:absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
    }
    .box3>div>h3{
        font-size:22px;
        padding:4px 0;
        height:64px;
        line-height:32px;
        color: #ceae78;
        text-align: center;
    }

    /*加入购物车显示商品的列表样式*/
    .car-info{
        padding: 20px 40px 0 100px;
        position: relative;
    }
    .car-info>a{
        position: absolute;
        width:100px;
        height:180px;
        left: 0;
        top:20px;
    }
    .car-info>a::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../assets/img/icons.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -160px -80px;
        left: 50%;
        margin-left: -20px;
        background-position: -200px -80px;
    }
    .car-info-img{
        width:180px;
        height:180px;
        float:left;
    }
    .car-info-img>img{
        max-width: none;
        max-height: 100%;
        position:relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .car-info-item{
        position:relative;
    }
    .car-info-item>div{
        position: relative;
        margin-left:200px;
        height:180px;
    }
    .car-info-item>div>h2{
        height:60px;
        line-height:60px;
        font-size:28px;
    }
    .car-info-item>div>div:nth-child(2)>p{
        position: relative;
        height:32px;
        line-height:32px;
        padding-left:24px;
        color:#9c9c9c;
    }
    .car-info-item>div>div:nth-child(2)>p::before{
        content: '';
        position: absolute;
        width:24px;
        height:40px;
        background: url(../assets/img/icons.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        left: -4px;
        background-position: -88px 0;
    }
    .car-info-item>div>div:nth-child(3){
        position: absolute;
        left: 0;
        bottom: 10px;
        font-size:22px;
        color:red;
    }
    .car-info-item>div>div:nth-child(4){
        position: absolute;
        width:228px;
        height:50px;
        bottom: 0;
        right: 0;
        z-index: 1;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        overflow: hidden;
    }
    .car-info-item>div>div:nth-child(4)>a{
        position: absolute;
        width:76px;
        height: 100%;
        z-index: 2;
        top: 0;
        background: #efefef;
    }
    .car-info-item>div>div:nth-child(4)>input{
        position: absolute;
        width:64px;
        height:50px;
        background: #efefef;
        z-index: 1;
        top: 0;
        left: 50%;
        margin-left: -32px;
        text-align: center;
        line-height: normal;
        outline:none;
        border:0;
    }
    .a_left::before{
        content: '';
        position: absolute;
        width:40px;
        height: 40px;
        background: url(../assets/img/icons_1.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -280px -80px;
        left: 50%;
        margin-left: -20px;
    }
    .a_right::before{
        content: '';
        position: absolute;
        width:40px;
        height: 40px;
        background: url(../assets/img/icons.png) no-repeat center;
        -webkit-background-size: 400px 400px;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -40px 0;
        left: 50%;
        margin-left: -20px;
    }
    .a_left{
        left:0;
    }
    .a_right{
        right:0;
    }
    .info-more{
        margin-top:20px;
        min-height:100px;
    }
    .info-more>h4{
        position: relative;
        height:80px;
        line-height:80px;
    }
    .info-more>h4:nth-child(1){
        background-color:#f9f9f9;
    }
    .info-more>h4:nth-child(2){
        padding-left:48px;
    }
    .info-more>h4:nth-child(1)>span{
        display: inline-block;
        padding: 0 40px 0 40px;
        position:relative;
        color:gray;
        font-size:22px;
    }
    .info-more>h4:nth-child(1)>span::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../assets/img/icons_1.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -320px -80px;
        right: 0;
    }
    .info-more>h4:nth-child(2)::before{
        content: '';
        position: absolute;
        width:40px;
        height: 40px;
        background: url(../assets/img/icons.png) no-repeat center;
        -webkit-background-size: 400px 400px;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -240px -80px;
        left: 0;
    }
    .info-more>h4:nth-child(2)::after{
        content: '';
        position: absolute;
        width:40px;
        height: 40px;
        background: url(../assets/img/icons.png) no-repeat center;
        -webkit-background-size: 400px 400px;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -240px 0;
        right: 0;
    }

    .auto_height{
        display: block;
        width: 100%;
        height: 100%;
    }

    .auto_height img{
        width: 100%;
    }
    .p_info{
        padding: 10px 0 16px;
        height: 180px;
        box-sizing: border-box;
    }
    .p_name {
        padding: 6px 0 12px;
        margin: 10px 0 10px;
        font-size: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #3e3e3e;
    }
    .p_tag{
        height: 60px;
        font-weight: normal;
        font-size: inherit;
    }
    .p_tag span {
        padding: 2PX 4PX;
        color: #ffffff;
        background: #ff4001;
        border-radius: 2PX;
        margin-right: 4px;
    }
    .price_wrap p {
        display: inline-block;
        margin-right: 8px;
    }
    small {
        font-size: 85%;
    }
</style>