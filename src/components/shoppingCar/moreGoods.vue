<template>
    <div class="box3">
        <a href="#">
            <div>
                <img src="../../assets/img/list3.jpg" alt="">
            </div>
        </a>
        <div>
            <h3>熊抱芝麻吐司(整条)</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "moreGoods"
    }
</script>

<style scoped>
    .box3{
        float: left;
        width: 23%;
        background: #ffffff;
        margin-right: 1.9%;
        overflow: hidden;
    }
    .box3>a{
        font-size: 100%;
        outline: 0;
        color: inherit;
        text-decoration: none;
    }
    .box3>a>div{
        position: relative;
        width: 100%;
        padding-top: 100%;
    }
    .box3>a>div>img{
        max-width: none;
        max-height: 100%;
        position:absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
    }
    .box3>div>h3{
        font-size:22px;
        padding:4px 0;
        height:64px;
        line-height:32px;
        color: #ceae78;
        text-align: center;
    }
</style>