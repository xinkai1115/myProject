<template>
    <div class="box">
        <div class="mind">
            <a href="#" class="active">优惠券</a>
            <a href="#">蛋糕卡</a>
        </div>
        <div class="box-card">暂无历史卡券</div>
    </div>
</template>

<script>
    export default {
        name: "couponCard"
    }
</script>

<style scoped>
    .box{
        width:100%;
        height:100vh;
        background-color:white;
        position:relative;
        z-index:203;
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
    .box-card{
        width:100%;
        text-align:center;
        margin-top:200px;
        font-size:25px;
        color:#646464;
    }
    .active{
        background-color:white;
    }
</style>