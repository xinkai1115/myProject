<template>
    <div class="main" >
        <div class="header">
            <div class="header-div1">
                <a href="#" @click="goBack"></a>
                <h1>商品列表</h1>
            </div>
        </div>
        <div class="main-box">
            <div class="main-box-list">
                <div class="main-box-list-wrap">
                    <div @click="showDel(item._id)" v-for="(item,index) in upPriceData" :key="index">
                        <span></span>
                        <p><img :src="item.goodsImg" alt=""></p>
                        <div>
                            <p>{{item.goodsName}}</p>
                            <div>
                                <p><small>￥</small>{{item.goodsPrice}}</p>
                                <p><small>￥</small>{{item.lowPrice}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-footer"><button>立即购买</button></div>
        <ZhezhaoGoods :boolen1="show4" :detail="del" @change1="goToDel" ></ZhezhaoGoods>
    </div>
</template>

<script>
    import ZhezhaoGoods from "./zhezhaoGoods"
    export default {
        name: "CheckMore",
        components:{
            ZhezhaoGoods
        },
        methods:{
            showDel(del1){
                this.show4 = true;
                this.$http.get(`${this.$api}/detail?goodsId=${del1}`).then(({data})=>{
                    this.del = data;
                    console.log(data);
                })
            },
            goToDel(){
                this.show4 = false;
            },
            goBack(){
                this.$router.go(-1)
            }
        },
        data(){
            return {
                show4:false,
                upPriceData:null,
                del:{}
            }
        },
        created(){
            this.$http.get(`${this.$api}/upPrice`).then(({data})=>{
                this.upPriceData = data;
                console.log(data);
            })
        }
    }
</script>

<style scoped>
   .main{
       width:100%;
       height:100%;
       position:fixed;
       overflow-y:auto;
       background-color:white;
       z-index:240;
   }
   .header{
       width:100%;
       height:88px;
   }
   .header-div1{
       position: fixed;
       z-index: 10;
       left: 0;
       top: 0;
       width: 100%;
       height:88px;
       line-height:88px;
       background: rgba(255, 255, 255, 0.95);
       box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
       -webkit-box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
   }
   .header-div1>h1{
       height:88px;
       line-height:88px;
       text-align: center;
       font-size:25px;
   }
   .header-div1>a{
       position: absolute;
       width:88px;
       height:88px;
       left: 0;
       top: 0;
   }
   .header-div1>a::after{
       content: '';
       position: absolute;
       width:40px;
       height:40px;
       background: url(../../assets/img/icons.png) no-repeat center;
       -webkit-background-size:400px 400px;
       background-size:400px 400px;
       top: 50%;
       margin-top: -20px;
       background-position: -80px -120px;
       left:20px;
   }
   .main-box-list-wrap{
       margin:40px 40px 0 40px;
       padding-bottom: 160px;
   }
   .main-box-list-wrap>div{
       width:100%;
       position: relative;
       margin-bottom:40px;
       height:180px;
       padding-left:60px;
       box-sizing: border-box;
   }
   .main-box-list-wrap>div>span{
       position: absolute;
       width:40px;
       height:40px;
       top: 50%;
       margin-top: -20px;
       left: 0;
   }
   .main-box-list-wrap>div>span::before{
       content: '';
       position: absolute;
       width:40px;
       height:40px;
       background: url(../../assets/img/icons3.png) no-repeat center;
       background-size:400px 400px;
       background-position: -80px -200px;
       left: 0;
       top: 0;
   }
   .main-box-list-wrap>div>p{
       width:180px;
       height: 100%;
       float:left;
   }
   .main-box-list-wrap>div>p>img{
       max-width: none;
       max-height: 100%;
       position: relative;
       left: 50%;
       top: 50%;
       transform: translate(-50%, -50%);
   }
   .main-box-list-wrap>div>div{
       margin-left:220px;
       height: 100%;
       position: relative;
       flex-direction: column;
       justify-content: center;
       display:flex;
   }
   .main-box-list-wrap>div>div>p{
       font-size:28px;
       margin-bottom:30px;
       color: #3e3e3e;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
   }
   .main-box-list-wrap>div>div>div>p:nth-child(1){
       margin-right:4px;
       color: #ff4001;
       display: inline-block;
   }
   .main-box-list-wrap>div>div>div>p:nth-child(2){
       position: relative;
       font-size:20px;
       color: #a6906c;
       padding-left:72px;
       display: inline-block;
   }
   .main-box-list-wrap>div>div>div>p:nth-child(2)::before{
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
   .main-box-list-wrap>div::after{
       content: " ";
       clear: both;
       display: block;
       height: 0;
       line-height: 0;
       visibility: hidden;
   }
    .main-footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    .main-footer>button{
        width: 100%;
        height:100px;
        text-align: center;
        line-height:100px;
        background: #ff4001;
        color: #ffffff;
        outline:none;
        border:0;
    }

</style>