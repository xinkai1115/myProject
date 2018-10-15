<template>
    <div class="login-main">
        <div class="main">
            <div class="main-header">
                <p>
                <input type="tel" placeholder="请输入手机号" maxlength="11">
                    <span class="error-hidden"></span>
            </p>
                <p>
                    <input type="tel" placeholder="短信验证码" maxlength="4">
                    <button class="btn">发送验证码</button>
                    <button class="btn" style="display:none">正在发送</button>
                    <button class="btn" style="display:none">0秒后重试</button>
                    <span class="error-hidden"></span>
                </p>
                <p>首次使用手机号登录将自动为您注册</p>
                <div>
                    <button>登录LOGIN</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
    .login-main{
        width:100%;
        height:100vh;
        background-color:#ffffff;
        position:absolute;
        z-index:100;
    }
    .main{
        padding:40px 32px;
    }
    .main-header>p{
        position: relative;
        border-bottom: 2px solid #e1dbcc;
        margin-bottom:40px;
    }
    .main-header>p:nth-child(3){
        padding-left:20px;
        border-bottom:0;
        font-size:24px;
    }
    .main-header>p>input{
        width:calc(100% - 80px);
        border:0;
        height:80px;
        padding:8px 40px;
        outline:none;
    }
    .main-header>p::before{
        content: '';
        position: absolute;
        width:28px;
        height:28px;
        background: url(../assets/img/icons2.png) no-repeat center;
        -webkit-background-size:28px 84px;
        background-size:28px 84px;
        left:6px;
        top:28px;
    }
    .main-header>p:nth-child(2)::before{
        background-position:0 3px;
    }
    .main-header>p:nth-child(3)::before{
        content: '';
        position: absolute;
        width: 28px;
        height: 28px;
        background: url(../assets/img/icons2.png) no-repeat center;
        -webkit-background-size: 28px 84px;
        background-size: 28px 84px;
        left: 0;
        top: 50%;
        margin-top: -14px;
        background-position: 0 -56px;
    }
    .main-header>p>.btn{
        position: absolute;
        width:184px;
        height:64px;
        background-color:#a38d6b;
        color: #ffffff;
        right: 0;
        bottom:8px;
        border:0;
        outline:none;
    }
    .main-header>div{
        margin-top:100px;
    }
    .main-header>div>button{
        background-color:#ff4001;
        display:block;
        margin:0 auto;
        border:0;
        outline:none;
        width:400px;
        height:100px;
        color:white;
        font-size:26px;
    }
    .error-hidden{
        position: absolute;
        width: 100%;
        height:40px;
        line-height:40px;
        color: #ff4001;
        bottom: -40px;
        left: 0;
        font-size:22px;
    }

</style>