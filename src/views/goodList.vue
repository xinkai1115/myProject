<template>
        <article class="container main_goods_list">
            <header class="global_fix_top">
                <div class="header_wrap">
                    <div class="global_header">
                        <Handlerbtn></Handlerbtn>
                        <h1 class="clear_fix">
                            <a class="active" @click="changeSort('default')" href="javascript:void(0)">综合</a>
                            <a href="javascript:void(0)" @click="changeSort('hot')" >销量</a>
                            <a href="javascript:void(0)" @click="changeSort('new')" >上新</a>
                        </h1>
                        <a v-show="isChoose" @click="show = !show" href="javascript:void(0)" class="filter_btn">筛选</a>
                    </div>
                </div>
            </header>
                <section class="filter_wrap">
                    <transition name="fade"><div v-show="show" @click="show = !show" class="cover"></div></transition>
                    <transition name="dade">
                        <div v-show="show" class="content">
                            <h2>筛选</h2>
                            <dl class="clear_fix taste">
                                <dt>口味</dt>
                                <dd @click="chooseTaste" >鲜果口味</dd>
                                <dd @click="chooseTaste" >雪域口味</dd>
                                <dd @click="chooseTaste" >奶油口味</dd>
                                <dd @click="chooseTaste" >冰淇淋味</dd>
                                <dd @click="chooseTaste" >巧克力味</dd>
                                <dd @click="chooseTaste" >慕斯口味</dd>
                                <dd @click="chooseTaste" >芝士口味</dd>
                            </dl>
                            <div class="btn_wrap">
                                <a @click="getToast" href="javascript:void(0)" id="resetBtn">重置</a>
                                <a @click="getToast" href="javascript:void(0)" id="submitBtn">确定</a>
                            </div>
                        </div>
                    </transition>
                </section>
            <section class="goods_list">
                <ul class="p_list clear_fix lazy_load_wrap">
                    <router-link tag="li" :to="{path:'/list/detail',query:{goodsId:item._id}}" v-for="(item,index) in data" :key="index"  >
                        <GoodsMain :goodsData="item" ></GoodsMain>
                    </router-link>
                </ul>
                <div class="bottom_text">
                    <p>没有更多产品咯</p>
                </div>
                <scroll-top></scroll-top>
            </section>
            <router-view></router-view>
        </article>
</template>

<script>
    import Handlerbtn from '../components/home/handler_btn'
    import GoodsMain from '../components/goodsMain'
    import  GoodsDetail from "../components/goodsDetail"
    import ScrollTop from '../components/goodsList/scrollTop'
    import {mapActions} from 'vuex'
    export default {
        name: "goodList",
        components: {
            Handlerbtn,
            GoodsMain,
            GoodsDetail,
            "scroll-top":ScrollTop
        },
        data(){
            return {
                show:false,
                sort:"default",
                uid:"",
                data:null,
                toast:"",
                isChoose:false
            }
        },
        methods:{
            // 点击销量，上新，综合，请求到不同的数据
            ...mapActions(['sendGoodsId']),
            changeSort(e){
                this.$http.get(`${this.$api}/list?uid=${this.uid}&sort=${e}`).then(({data})=>{
                    this.data = data;
                })
                window.scrollTo(0,0);
            },
            //点击 口味 让其作为当前状态值
            chooseTaste(e){
                this.toast = e.target.innerText;
            },
            //点击确认口味按钮，或取消按钮，通过其存储的状态值 请求相应数据
            getToast(e){
                this.show = !this.show;
                var con = e.target.innerText;
                if(con == "确定"){
                    this.$http.get(`${this.$api}/list?taste=${this.toast}`).then(({data})=>{
                        this.data = data;
                    })
                }else{
                    this.toast = "";
                }
            }
        },
        mounted(){
            var global_back_top = document.querySelector(".global_back_top");
            var filter_wrap = document.querySelector(".filter_wrap");
            var clear_fix_a = document.querySelectorAll(".clear_fix a");
            var clear_fix_dd = document.querySelectorAll(".filter_wrap .clear_fix dd");
            for (var i = 0;i<clear_fix_a.length;i++){
                clear_fix_a[i].onclick = function () {
                    for (var j = 0;j<clear_fix_a.length;j++){
                        clear_fix_a[j].className = "";
                    }
                  this.className = "active";
                }
            }
            for (var i = 0;i<clear_fix_dd.length;i++){
                clear_fix_dd[i].onclick = function () {
                    for (var j=0;j<clear_fix_dd.length;j++){
                        clear_fix_dd[j].className = "";
                    }
                    this.className = "active";
                }
            }
        },
        created() {
            var uid = this.$route.query.uid;
            this.uid=uid;
            this.isChoose = this.uid!="1000"?true:false;
            this.isChoose = this.uid!="100"?true:false;
            this.$http.get(`${this.$api}/list?uid=${uid}`).then(({data})=>{
                this.data = data;
            })
        },
        watch:{
            $route(){
                var uid = this.$route.query.uid;
                this.uid=uid;
                this.isChoose = this.uid!="1000"?true:false;
                // this.isChoose = this.uid!="100"?true:false;
                this.$http.get(`${this.$api}/list?uid=${uid}`).then(({data})=>{
                    this.data = data;
                })
            }
        }
    }
</script>

<style scoped>
    .global_fix_top {
        height: 64px;
    }
    .header_wrap {
        height: 64px;
        line-height: 64px;
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.95);
    }
    .header_wrap:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 1PX;
        background: #a38d6b;
        z-index: 1;
        left: 0;
        bottom: 0;
    }
    .global_fix_top h1 {
        position: relative;
        overflow: hidden;
        height: 64px;
        line-height: 64px;
        text-align: center;
    }
    .global_fix_top h1 a {
        display: inline-block;
        margin-right: 68px;
        font-size: 24px;
        color: #3e3e3e;
    }
    .global_fix_top h1 .active {
        color: #ff4001;
    }
    .global_fix_top h1 a:last-of-type {
        margin-right: 0;
    }
    .global_header .filter_btn{
        position: absolute;
        width: 112px;
        height: 64px;
        line-height: 64px;
        padding-left: 40px;
        top: 50%;
        margin-top: -32px;
        z-index: 100;
        right: 12px;
        left: auto;
        color: #3e3e3e;
        font-size: 22px;
        box-sizing: border-box;
    }
    .filter_btn:before{
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url(../assets/img/icons_1.png) no-repeat center;
        background-size: 400px 400px;
        top: 48%;
        margin-top: -20px;
        background-position: -360px -80px;
        left: 0;
    }
    .filter_wrap .cover{
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        z-index: 101;
        background: rgba(0, 0, 0, 0.6);
    }
    .filter_wrap .content {
        position: fixed;
        width: 72vw;
        height: 100vh;
        z-index: 102;
        right: 0;
        top: 0;
        background: #ffffff;
    }
    .fade-enter-active, .fade-leave-active{
        transition: all 0.5s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform:translateX(0);
    }
    .dade-enter-active, .dade-leave-active{
        transition: all 0.5s ease;
    }
    .dade-enter, .dade-leave-to {
        /*opacity: 0;*/
        transform:translateX(100%);
    }
    .content h2 {
        font-size: 28px;
        color: #a38d6b;
        height: 88px;
        line-height: 88px;
        border-bottom: 1PX solid #d1c6af;
        padding-left: 32px;
    }
    .content dl dt {
        font-size: 28px;
        padding: 40px 32px;
        color: #939393;
    }
    .content dl dd {
        float: left;
        width: 29%;
        cursor: pointer;
        margin-left: 3.25%;
        text-align: center;
        padding: 18px 0;
        position: relative;
        margin-bottom: 24px;
        color: #9c9c9c;
    }
    .content dl dd:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1PX solid #eee;
        left: 0;
        top: 0;
        border-radius: 2PX;
    }
    .content dl .active:before {
        border-color: #a38d6b;
    }
    .btn_wrap{
        position: absolute;
        width: 100%;
        height: 80px;
        left: 0;
        bottom: 0;
    }
    .btn_wrap:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1PX;
        background: #a38d6b;
        z-index: 1;
        left: 0;
        top: 0;
    }
    .btn_wrap a {
        width: 50%;
        float: left;
        text-align: center;
        line-height: 80px;
        font-size: 24px;
        color: #a38d6b;
    }
    .btn_wrap a:last-of-type {
        color: #ffffff;
        background: #a38d6b;
    }
    .goods_list .p_list {
        padding: 30px;
        overflow: hidden;
    }
    .p_list li:nth-of-type(odd){
        width: 48%;
        float: left;
    }
    .p_list li:nth-of-type(even){
        width: 48%;
        float: right;
    }
    .main_goods_list{
        padding-bottom: 108px;
    }
    .bottom_text {
        padding: 24px 0 64px;
        text-align: center;
    }
    .bottom_text p {
        display: inline-block;
        width: 300px;
        position: relative;
        color: #3e3e3e;
    }
    .bottom_text p:after {
        content: '';
        position: absolute;
        width: 48px;
        height: 1PX;
        background: #9c9c9c;
        z-index: 1;
        top: 50%;
        left: auto;
        right: 0;
    }
    .bottom_text p:before {
        content: '';
        position: absolute;
        width: 48px;
        height: 1PX;
        background: #9c9c9c;
        z-index: 1;
        top: 50%;
        left: 0;
    }
    .global_back_top {
        position: fixed;
        width: 80px;
        height: 80px;
        right: 24px;
        bottom: 132px;
        background: url(../assets/img/backTop.png) no-repeat center;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        /*display: none;*/
    }
    .goos{
        width: 100vw;
        height: 100vh;
        /*position: fixed;*/
        top: 0;
        left: 0;
        z-index: 100000;
    }
</style>