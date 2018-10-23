<template>
    <div class="order-list">
        <!--/*没有订单显示出来的图片*/-->
      <div class="empty">
          <div class="empty-img">
              <img src="../../assets/img/order_empty.png" alt="">
          </div>
          <div class="empty-info">
              <p>您还没有相关订单哦</p>
              <p><a href="">快去逛逛吧</a></p>
          </div>
      </div>
        <!--待付款的商品  order-items-->
        <div class="order-items">
            <div class="order-item">
                <div class="order-header">
                    <div><span>配送时间</span></div>
                    <div><span>待付款</span></div>
                </div>
                <div class="order-content">
                    <div class="order-content_son">
                        <div><img src="../../assets/img/list7.jpg" alt=""></div>
                        <div>
                            <span>雪域牛乳芝士蛋糕</span>
                            <h3><b>￥198</b><b><small>X</small>1</b></h3>
                        </div>
                    </div>
                </div>
                <div class="order-footer">实付:￥198</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "orderInfo"
    }
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
    }
    .order-list{
      width:100%;
  }
    /*没有订单显示出来的图片*/
    .empty{
        width:100%;
        margin-top:100px;
        text-align:center;
        display:none;
    }
    .empty-img>img{
        width:34%;
        height:34%;
        vertical-align: top;
        border: none;
        max-width: 100%;
    }
    .empty-info>p{
        margin:20px 0;
    }
    .order-items{
        margin-top:20px;
        margin-bottom:20px;
    }
    .order-item{
        position: relative;
        background: white;
        margin:0 auto;
    }
    .order-header{
        height: 90px;
        line-height: 90px;
        font-size: 12px;
        color: #3e3e3e;
        border-bottom: 1px solid #eee;
    }
    .order-header>div:nth-child(1){
        float:left;
        padding-left:20px;
    }
    .order-header>div:nth-child(2){
        float:right;
        margin-right:40px;
        color:#a38d6b;
    }
    .order-header::after{
        clear: both;
    }
    .order-content{
        margin-bottom:50px;
    }
    .order-content_son{
        margin-left:50px;
    }
    .order-content_son::after{
        content: '';
        display:block;
        visibility:hidden;
        height:0;
        clear:both;
    }
    .order-content_son>div:nth-child(1){
        width:200px;
        height:200px;
        display:inline-block;
        float:left;
    }
    .order-content_son>div:nth-child(1)>img{
         width:100%;
        height:100%;
    }
    .order-content_son>div:nth-child(2){
        float:right;
        padding:30px 20px;
        width:60%;
    }
    .order-content_son>div:nth-child(2)>h3{
        padding-top:80px;
    }
    .order-content_son>div:nth-child(2)>h3>b:nth-child(1){
        float:left;
        font-size:25px;
    }
    .order-content_son>div:nth-child(2)>h3>b:nth-child(2){
        float:right;
    }
    .order-content_son>div:nth-child(2)>h3::after{
        content: '';
        display:block;
        visibility:hidden;
        height:0;
        clear:both;
    }
    .order-footer{
        width:100%;
        height:100px;
        background-color:#f5f5f5;
        line-height:100px;
        box-sizing: border-box;
        padding-left:20px;


    }
</style>