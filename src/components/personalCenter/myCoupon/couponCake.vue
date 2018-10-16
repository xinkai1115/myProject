<template>
    <div class="wrap4">
        <router-view></router-view>
        <div class="mind">
            <router-link class="active" to="/index/mytoken">优惠券</router-link>
            <a href="#">蛋糕卡</a>
        </div>
        <div class="mind-input">
            <p><input type="text" placeholder="请输入蛋糕卡号后四位" maxlength="4"></p>
            <p><input type="text" placeholder="请输入密码"></p>
            <p><button>绑定</button></p>
        </div>
        <router-link class="button" to="/index/mytoken/couponCard"><a href="">查看历史卡券</a></router-link>
    </div>
</template>

<script>
    export default {
        name: "couponCake"
    }
</script>

<style scoped>
    .wrap4{
        width:100%;
        height:100vh;
        position:absolute;
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
    .mind-input{
        width:calc(100% - 64px);
        padding:32px 32px 36px;
        border-bottom: 1px solid #e8e8e8;
    }
    .mind-input>p:nth-child(1){
        height: 80px;
        border: 1px solid #dcdcdc;
        margin: 0;
    }
    .mind-input>p:nth-child(1)>input{
        width:100%;
        height:100%;
        border:0;
        outline:none;
        border:1px solid #dcdcdc;
        border-top:0;
        padding-left:10px;
    }
    .mind-input>p:nth-child(2)>input{
        width:100%;
        height:100%;
        padding-left:10px;
        border:0;
        outline:none;
        border:1px solid #dcdcdc;
        border-top:0;
    }
    .mind-input>p:nth-child(2){
        height: 80px;
        border: 1px solid #dcdcdc;
        margin: 0;
        border-top:0;
    }
    .mind-input>p:nth-child(3){
        text-align:center;
        margin-top:30px;
    }
    .mind-input>p:nth-child(3)>button{
        display: block;
        margin: 17px auto 0;
        width: 150px;
        height: 50px;
        border-radius: 18px;
        -webkit-border-radius: 5px;
        background: #dcdcdc;
        color: #fff;
        border: 0;
        outline:none;
    }

</style>