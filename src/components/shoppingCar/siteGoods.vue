<template>
    <div class="main">
        <router-view></router-view>
        <div class="header">
            <div class="header-div1">
                <a href="#" @click="goLast()"></a>
                <h1>选择地址</h1>
            </div>
        </div>
        <div class="main-site">
            <div class="main-site-location">
                <!--详细收货地址-->
                <ul>
                    <li v-for="(item,index) in address" @click="chooseSite(item)" >
                        <h3>
                            <strong>{{item.consignee}}</strong>
                            <b>{{item.phoneNum}}</b>
                            <span v-if="item.default" >默认</span>
                        </h3>
                        <h4>{{item.site}}</h4>
                        <a href="javascript:void(0)">编辑</a>
                        <a href="javascript:void(0)">删除</a>
                    </li>
                </ul>
            </div>
            <div class="main-site-footer">
                <router-link to="/cart/settle/site/newsite">
                    <span>新增地址</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "siteGoods",
        methods:{
            goLast(){
                this.$router.go(-1)
            },
            chooseSite(item){
                console.log(item);
                this.$router.push({
                    name:'Settle',
                    params:{
                        site:item
                    }
                });
            }
        },
        computed:{
            ...mapState(["address"])
        }
    }
</script>

<style lang="less" scoped>
     .main{
         width:100%;
         height:100%;
         position:fixed;
         z-index:301;
         background-color:#f5f5f5;
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
         color: #a38d6b;
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
     .main-site-location{
         background: #ffffff;
         margin-top:24px;
         padding: 0 32px;
    }
     .main-site-location>ul>li{
         position: relative;
         padding: 20px 120px 24px 0;
         border-bottom:0;
     }
     .main-site-location>ul>li>h3{
         margin-bottom:12px;
         line-height:40px;
     }
     .main-site-location>ul>li>h4{

     }
     .main-site-location>ul>li>{
         a{
             position:absolute;
             width:48px;
             height:48px;
             overflow: hidden;
             text-indent: -9999px;
             top: 50%;
             margin-top: -24px;
         }
         a:nth-child(3){
             right:60px;
         }
         a:nth-child(4){
             right:0
         }
         a::before{
             content: '';
             position: absolute;
             width:40px;
             height:40px;
             background: url(../../assets/img/icons3.png) no-repeat center;
             background-size:400px 400px;
             top: 50%;
             margin-top: -20px;
             background-position: 0 0;
             left: 4px;
         }
         a:nth-child(3)::before{
             background-position: 0 -160px;
         }
         a:nth-child(4)::before{
             background-position: -40px -160px;
         }
     }
     .main-site-location>ul>li>h3>{
         strong{
             font-weight: bold;
             display: inline-block;
             width:160px;
             vertical-align: middle;
         }
         b{
             display: inline-block;
             vertical-align: middle;
         }
         span{
             font-size:20px;
             line-height:20px;
             padding: 2px 4px;
             border: 2px solid #ff4001;
             color: #ff4001;
             border-radius: 2px;
             display: inline-block;
             vertical-align: middle;
             margin-left:5px;
         }
     }
     .main-site-footer{
        position:fixed;
        height:88px;
        width:100%;
        background-color:#ffffff;
        bottom:0;
    }
     .main-site-footer>a{
         width:100%;
         height:100%;
         position:relative;
         text-align:center;
         display:block;
     }
     .main-site-footer>a>span::after{
         content: '';
         position: absolute;
         width:40px;
         height:40px;
         background: url(../../assets/img/icons3.png) no-repeat center;
         background-size:400px 400px;
         top: 50%;
         margin-top: -20px;
         background-position: -240px -40px;
         right: 0;
     }
     .main-site-footer>a>span{
         position: relative;
         padding-right:40px;
         display: inline-block;
         color: #ff4001;
         height:40px;
         line-height:40px;
         top:24px;
     }

    
</style>