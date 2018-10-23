<template>
    <div class="boxx">
        <a href="#"><img :src="mountings.goodsImg" alt=""></a>
        <h3>{{mountings.goodsName}}</h3>
        <h4><b>￥{{mountings.goodsPrice}}</b><i @click="sendGoods(mountings)"></i></h4>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "siftGoods",
        props:{
            mountings:Object
        },
        methods:{
            ...mapActions(["sendGoods"])
        }
    }
</script>

<style scoped>
    .boxx{
        display: inline-block;
        position: relative;
        margin-left:12px;
        width:200px;
        text-align: center;
        float:left;
    }
    .boxx>a{
        display: block;
        margin-bottom:4px;
        width: 100%;
        height:200px;
    }
    .boxx>a>img{
        max-height: 100%;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
    }
    .boxx>h3{
        font-size:22px;
        line-height:28px;
        height:56px;
        white-space: initial;
        overflow:hidden;
    }
    .boxx>h4{
        font-size:22px;
        line-height:40px;
        height:40px;
    }
    .boxx>h4>i{
        display: inline-block;
        margin-left:6px;
        width:24px;
        height:24px;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
    }
    .boxx>h4>i:before{
        content: '';
        position: absolute;
        width:40px;
        height: 40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -240px -40px;
        left: 50%;
        margin-left: -20px;
    }
</style>