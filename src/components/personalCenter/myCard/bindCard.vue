<template>
    <div class="box">
        <div class="header">
            <div class="header-div1">
                <a href="#" @click="goLast()"></a>
                <h1>绑定储值卡</h1>
            </div>
        </div>
        <div class="box-main">
            <div></div>
            <div>
                <p><input type="text" placeholder="请输入储值卡卡号"></p>
                <p><input type="text" placeholder="请输入储值卡卡密"></p>
            </div>
            <div><button>绑定</button></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bindCard",
        methods:{
            goLast(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .box{
        width:100%;
        height:100vh;
        background-color:white;
        z-index:210;
        position:relative;
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
        background: url(../../../assets/img/icons.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -80px -120px;
        left:20px;
    }
    .box-main>div:nth-child(1){
        width:100%;
        height:20px;
        background-color:#f4f4f4;
    }
    .box-main>div:nth-child(2){
        padding:100px 100px 0;
        width:calc(100% - 200px);
        text-align:center;
    }
    .box-main>div:nth-child(2)>p{
        width:100%;
        height:70px;
    }
    .box-main>div:nth-child(2)>p>input{
        width:100%;
        height:100%;
        border:0;
        border-bottom:1px solid #e0dcd1;
        outline:none;
    }
   .box-main>div:nth-child(2)>p:nth-child(2)>input{
       margin-top:30px;
   }
   .box-main>div:nth-child(3){
       padding:100px 100px 0;
       width:calc(100% - 200px);
       text-align:center;
   }
    .box-main>div:nth-child(3)>button{
        width:100%;
        height:80px;
        background-color:#ff4001;
        text-align:center;
        line-height:80px;
        color:white;
        outline: none;
        border:0;
    }
</style>