<template>
    <div class="wrap2">
        <div class="header">
            <div class="header-order">
                <ul class="header-order-ul">
                    <li><a href="#" class="active">全部</a></li>
                    <li><a href="#">待付款</a></li>
                    <li><a href="#">待发货</a></li>
                    <li><a href="#">待收货</a></li>
                </ul>
            </div>
        </div>
        <OrderInfo></OrderInfo>
    </div>

</template>

<script>
    import OrderInfo from "./orderInfo"
    export default {
        name: "myOrder",
        components:{
            OrderInfo
        },
        mounted(){
            var btn = document.querySelectorAll(".header-order-ul li a");
            for(let i=0;i<btn.length;i++){
                btn[i].onclick = function(){
                    for(let j=0;j<btn.length;j++){
                        btn[j].className = ""
                    }
                    btn[i].className = "active";
                }
            }

        }
    }
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
    }
    .wrap2{
        width:100%;
        height:100%;
        position:absolute;
        z-index: 200;
        background-color:white;
    }
    .header{

        width: 100%;
        height: 86px;
        font-size: 15px;
        color: #1f1f1f;
        text-align: center;
        background: white;
        background: rgba(255, 255, 255, .95);
    }
    .header-order{
        width:100%;
        height:86px;
    }
    .header-order-ul{
        width:100%;
        display:flex;
    }
    .header-order-ul>li{
        position: relative;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        cursor: pointer;
        height: 86px;
        line-height: 86px;
        list-style: none;
        float: left;
        font-size: 12px;
        outline: none;
    }
    .header-order-ul>li>a{
        color: #3e3e3e;
        width: 100%;
        height: 100%;
        display: block;
        text-decoration: none;
        background-color:lightgray;
    }
    .header-order-ul>li>.active{
        background-color:white;
    }
</style>