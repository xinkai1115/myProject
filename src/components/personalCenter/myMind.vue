<template>
    <div class="wrap">
     <div class="header">
         <div class="header-div1">
             <a href="#" @click="goLast()"></a>
             <h1>心享值详情</h1>
         </div>
     </div>
     <div class="main">
         <div>
             <h2>
                 当前心享值:
                 <strong>0</strong>
             </h2>
             <h3>1心享值可抵扣1元，多购买蛋糕即可获得更多心享值哦！</h3>
         </div>
         <div></div>
         <div>
             暂无记录
         </div>
     </div>
    </div>
</template>

<script>
    export default {
        name: "myMind",
        methods:{
            goLast(){
                this.$router.go(-1)
            }
        }
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
        width:100%;
        position:absolute;
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
    .main{
        margin-top:100px;
        width:100%;
    }
    .main>div:nth-child(1){
        padding:40px;
    }
    .main>div:nth-child(1)>h2{
        font-size:30px;
        font-weight:normal;
    }
    .main>div:nth-child(1)>h2>strong{
        color:#ff4001;
        font-weight:normal;
    }
    .main>div:nth-child(1)>h3{
        color: #9c9c9c;
        padding:20px 0;
        font-size:25px;
    }
    .main>div:nth-child(2){
        height:24px;
        background: #f4f4f4;
    }
    .main>div:nth-child(3){
        text-align:center;
        padding-top:200px;
        font-size:25px;
    }
</style>