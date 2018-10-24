<template>
    <div class="exit">
        <div class="header">
            <div class="header-div1">
                <a @click="goLast" href="#" ></a>
                <h1>账号管理</h1>
            </div>
        </div>
        <div class="inner">
            <img src="../../assets/img/avatar.png" alt="">
            <h3>{{userName}}</h3>
        </div>
        <div class="exit_footer">
            <h2>
                <a href="#">个人资料</a>
            </h2>
        </div>
        <div class="footer_button">
            <a @click="logOut" href="#">退出登录</a>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations} from "vuex"
    export default {
        name: "exitLogin",
        methods:{
            ...mapMutations(["logOut1"]),
            goLast(){
                this.$router.go(-1)
            },
            logOut(){
                this.logOut1();
                this.$router.go(-1)
            }
        },
        computed:{
            ...mapState(["userName"])
        }
    }
</script>

<style scoped>
     .exit{
         width:100%;
         height:100%;
         position:absolute;
         background-color:white;
         z-index:350;
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
         border-bottom:1px solid #d1c6af;
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
    .inner{
        position:relative;
        height:180px;
        width:100%;
        background-color:#ffffff;
        border-bottom:1px solid #d1c6af;
        padding-top:50px;
        padding-left:5%;
        box-sizing: border-box;
    }
    .inner>img{
        width:120px;
        height:120px;
        vertical-align:middle;
    }
    .inner>h3{
        display:inline-block;
        vertical-align:middle;
        margin-left:50px;
        box-sizing: border-box;
    }
    .exit_footer>h2{
        width:100%;
        height:100px;
    }
    .exit_footer>h2>a{
        padding-left:20px;
        width:100px;
        box-sizing: border-box;
        line-height:100px;
    }
     .exit_footer>h2>a::after{
         content: '';
         position: absolute;
         width: 16px;
         height: 26px;
         top: 23.5%;
         right: 16px;
         margin-top: -7px;
         background: url(../../assets/img/arrow.png) no-repeat;
         background-size: 16px 26px;
     }
     .footer_button{
         position:absolute;
         bottom:80px;
         width:100%;
         text-align:center;
     }
    .footer_button>a{
        display:inline-block;
        background-color:#d3d3d3;
        width:450px;
        height:80px;
        line-height:80px;
        text-align:center;
        color:white;
    }
</style>