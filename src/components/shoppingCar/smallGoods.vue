<template>
    <div class="box2">
        <a href="#"><img src="../../assets/img/list1.jpg" alt=""></a>
        <h3>熊抱原味匠心吐司(半条)</h3>
        <h4><b>￥38</b><i></i></h4>
    </div>
</template>

<script>
    export default {
        name: "smallGoods"
    }
</script>

<style scoped>
   .box2{
       display: inline-block;
       position: relative;
       margin-left:12px;
       width:200px;
       text-align: center;
   }
    .box2>a{
        display: block;
        margin-bottom:4px;
        width: 100%;
        height:200px;
    }
    .box2>a>img{
        max-height: 100%;
        position: relative;
        left: 50%;
        top: 50%;
         transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
    }
    .box2>h3{
        font-size:22px;
        line-height:28px;
        height:56px;
        white-space: initial;
        color: #ceae78;
    }
    .box2>h4{
        font-size:22px;
        line-height:40px;
        height:40px;
    }
    .box2>h4>i{
        display: inline-block;
        margin-left:6px;
        width:24px;
        height:24px;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
    }
    .box2>h4>i:before{
        content: '';
        position: absolute;
        width:40px;
        height: 40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -160px -280px;
        left: 50%;
        margin-left: -20px;
    }
</style>