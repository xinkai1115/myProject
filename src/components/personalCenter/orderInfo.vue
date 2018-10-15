<template>
    <div class="order-list">
      <div class="empty">
          <div class="empty-img">
              <img src="../../assets/img/order_empty.png" alt="">
          </div>
          <div class="empty-info">
              <p>您还没有相关订单哦</p>
              <p><a href="">快去逛逛吧</a></p>
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
    .empty{
        width:100%;
        margin-top:100px;
        text-align:center;
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
</style>