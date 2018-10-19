<template>
        <!--<div>-->
            <!--<a href="#" class="auto_height">-->
                <!--<img :src="goodsData.goodsImg" alt="">-->
            <!--</a>-->
                <!--<div class="p_info">-->
                    <!--<h3 class="p_name">雪域牛乳芝士蛋糕</h3>-->
                    <!--<h4 class="p_tag "><span class="tag">人气爆款</span></h4>-->
                    <!--<div class="price_wrap">-->
                        <!--<p class="new_price">-->
                            <!--<small>¥</small>-->
                            <!--198-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</div>-->
        <!--</div>-->
    <div>
        <a href="" class="auto_height">
            <img src="../assets/img/a.jpg" alt="">
        </a>
        <div class="p_info">
            <h3 class="p_name">雪域牛乳芝士蛋糕</h3>
            <h4 class="p_tag "><span class="tag">人气爆款</span></h4>
            <div class="price_wrap">
                <p class="new_price">
                    <small>¥</small>
                    198
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goodsMain",
        props:{
            goodsData:Object
        }
    }
</script>

<style scoped>
    .auto_height{
        display: block;
        width: 100%;
        height: 100%;
    }

    .auto_height img{
        width: 100%;
    }
    .p_info{
        padding: 10px 0 16px;
        height: 180px;
        box-sizing: border-box;
    }
    .p_name {
        padding: 6px 0 12px;
        margin: 10px 0 10px;
        font-size: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #3e3e3e;
    }
    .p_tag{
        height: 60px;
        font-weight: normal;
        font-size: inherit;
    }
    .p_tag span {
        padding: 2PX 4PX;
        color: #ffffff;
        background: #ff4001;
        border-radius: 2PX;
        margin-right: 4px;
    }
    .price_wrap p {
        display: inline-block;
        margin-right: 8px;
    }
    small {
        font-size: 85%;
    }
</style>