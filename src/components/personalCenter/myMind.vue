<template>
    <div class="wrap">
     <div class="header">
         <div class="header-div1">
             <a href=""></a>
             <h1>心享值详情</h1>
         </div>
     </div>
     <div class="main"></div>
    </div>
</template>

<script>
    export default {
        name: "myMind"
    }
</script>

<style scoped>
    .wrap{
        width:100%;
        height:100vh;
        position:relative;
        background-color:white;
        z-index:201;
    }
    .header{
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
    }
    .header-div1>h1{
        height:88px;
        line-height:88px;
        text-align: center;
        color: #a38d6b;
    }
    .header-div1>a{
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
</style>