<template>
    <div class="car-list">
        <div class="car-item">
            <div class="car-info">
                <a href="#"></a>
                <div class="car-info-item">
                    <a href="#">
                        <div class="car-info-img"><img src="../../assets/img/u.jpg" alt=""></div>
                    </a>
                    <div>
                        <h2>雪域牛乳芝士蛋糕</h2>
                        <div>
                            <p>每份含餐具五套</p>
                        </div>
                        <div>￥198</div>
                        <div>
                            <a href="#" class="a_left"></a>
                            <input type="number" readonly="readonly" value="1">
                            <a href="#" class="a_right"></a>
                        </div>
                    </div>
                </div>
                <div class="info-more">
                    <h4><span>填写生日信息，免费赠送巧克力生日牌</span></h4>
                    <h4>切分 - 9份</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "choseGoods"
    }
</script>

<style scoped>
  .car-info{
      padding: 20px 40px 0 100px;
      position: relative;
  }
    .car-info>a{
        position: absolute;
        width:100px;
        height:180px;
        left: 0;
        top:20px;
    }
    .car-info>a::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../../assets/img/icons.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -160px -80px;
        left: 50%;
        margin-left: -20px;
        background-position: -200px -80px;
    }
    .car-info-img{
        width:180px;
        height:180px;
        float:left;
    }
    .car-info-img>img{
        max-width: none;
        max-height: 100%;
        position:relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
  .car-info-item{
      position:relative;
  }
    .car-info-item>div{
        position: relative;
        margin-left:200px;
        height:180px;
    }
  .car-info-item>div>h2{
      height:60px;
      line-height:60px;
      font-size:28px;
  }
    .car-info-item>div>div:nth-child(2)>p{
        position: relative;
        height:32px;
        line-height:32px;
        padding-left:24px;
        color:#9c9c9c;
    }
    .car-info-item>div>div:nth-child(2)>p::before{
        content: '';
        position: absolute;
        width:24px;
        height:40px;
        background: url(../../assets/img/icons.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        left: -4px;
        background-position: -88px 0;
    }
    .car-info-item>div>div:nth-child(3){
        position: absolute;
        left: 0;
        bottom: 10px;
        font-size:22px;
        color:red;
    }
    .car-info-item>div>div:nth-child(4){
        position: absolute;
        width:228px;
        height:50px;
        bottom: 0;
        right: 0;
        z-index: 1;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        overflow: hidden;
    }
  .car-info-item>div>div:nth-child(4)>a{
      position: absolute;
      width:76px;
      height: 100%;
      z-index: 2;
      top: 0;
      background: #efefef;
  }
  .car-info-item>div>div:nth-child(4)>input{
      position: absolute;
      width:64px;
      height:50px;
      background: #efefef;
      z-index: 1;
      top: 0;
      left: 50%;
      margin-left: -32px;
      text-align: center;
      line-height: normal;
      outline:none;
      border:0;
  }
    .a_left::before{
        content: '';
        position: absolute;
        width:40px;
        height: 40px;
        background: url(../../assets/img/icons_1.png) no-repeat center;
        -webkit-background-size:400px 400px;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -280px -80px;
        left: 50%;
        margin-left: -20px;
    }
    .a_right::before{
        content: '';
        position: absolute;
        width:40px;
        height: 40px;
        background: url(../../assets/img/icons.png) no-repeat center;
        -webkit-background-size: 400px 400px;
        background-size: 400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -40px 0;
        left: 50%;
        margin-left: -20px;
    }
    .a_left{
        left:0;
    }
    .a_right{
        right:0;
    }
    .info-more{
        margin-top:20px;
        min-height:100px;
    }
    .info-more>h4{
        position: relative;
        height:80px;
        line-height:80px;
    }
    .info-more>h4:nth-child(1){
        background-color:#f9f9f9;
    }
    .info-more>h4:nth-child(2){
        padding-left:48px;
    }
  .info-more>h4:nth-child(1)>span{
      display: inline-block;
      padding: 0 40px 0 40px;
      position:relative;
      color:gray;
      font-size:22px;
  }
  .info-more>h4:nth-child(1)>span::before{
      content: '';
      position: absolute;
      width:40px;
      height:40px;
      background: url(../../assets/img/icons_1.png) no-repeat center;
      -webkit-background-size:400px 400px;
      background-size:400px 400px;
      top: 50%;
      margin-top: -20px;
      background-position: -320px -80px;
      right: 0;
  }
  .info-more>h4:nth-child(2)::before{
      content: '';
      position: absolute;
      width:40px;
      height: 40px;
      background: url(../../assets/img/icons.png) no-repeat center;
      -webkit-background-size: 400px 400px;
      background-size:400px 400px;
      top: 50%;
      margin-top: -20px;
      background-position: -240px -80px;
      left: 0;
  }
    .info-more>h4:nth-child(2)::after{
        content: '';
        position: absolute;
        width:40px;
        height: 40px;
        background: url(../../assets/img/icons.png) no-repeat center;
        -webkit-background-size: 400px 400px;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -240px 0;
        right: 0;
    }


</style>