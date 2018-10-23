<template>
     <div class="big_box">
         <router-view></router-view>
         <div class="box">
          <div class="box_item1">
              <router-link tag="div" to="/cart/settle/site" v-if="!site" >
                  <strong>请填写收货地址</strong>
              </router-link>
              <router-link tag="div" to="/cart/settle/site" id="address" v-if="site" >
                  <h3><strong>{{site.consignee}}</strong><b>{{site.phoneNum}}</b></h3>
                  <h4>{{site.site}}
                  </h4>
                  <i>更换</i>
              </router-link>
          </div>
          <div class="box_item2">
           <h2><strong>配送时间</strong></h2>
           <div>
               <div>请选择</div>
               <div>请选择配送日期</div>
           </div>
          </div>
          <div class="box_item3">
              <ul>
                  <li v-for="(item,index) in submitGoods" :key="index">
                      <div><img :src="item.goodsImg" alt=""></div>
                      <div>
                          <h3>{{item.goodsName}}</h3>
                          <h4></h4>
                          <h5>
                              <span>￥<strong>{{item.goodsChoose.length?item.goodsChoose[0].goodsPrice:item.goodsPrice}}</strong></span>
                              <span>x<strong>{{item.goodsNum}}</strong></span>
                          </h5>
                          <div>
                              <p>{{item.goodsChoose.length?item.goodsChoose[0].tableNum:item.goodsName}}</p>
                              <p>{{item.goodsChoose.length?item.goodsChoose[0].goodsSize:item.goodsName}}</p>
                          </div>
                      </div>
                      <div></div>
                  </li>
              </ul>
          </div>
          <div class="box_item4">
              <h2 class="box_item4_h2_one"><strong>优惠券</strong><b>0张可用</b></h2>
              <hr>
              <h2 class="box_item4_h2_two">
                  <strong>蛋糕卡/月饼券</strong>
                  <span>(不可与优惠券同时使用)</span>
                  <b>未使用</b>
              </h2>
              <hr>
              <h2 class="box_item4_h2_three"><strong>储值卡</strong></h2>
          </div>
          <div class="box_item5">
          <div>
              <h3>开通心享卡下单可获心享值积分返利</h3>
              <br>
              <h3>专享千层系列立减优惠<button>什么是心享卡</button></h3>
              <a href="#">购买</a>
          </div>
          </div>
          <div class="box_item6">
              <h2 class="box_item4_h2_two">
                  <strong>电子发票</strong>
                  <b>不需要</b>
              </h2>
          </div>
          <div class="box_item7">
              <h3>
                  <b>商品金额</b>
                  <span>￥198.00</span>
              </h3>
              <h3>
                  <b>运费</b>
                  <span>￥0.00</span>
              </h3>
              <h3>
                  <b>优惠</b>
                  <span>-￥0.00</span>
              </h3>
              <h3>
                  <b>赠送积分:</b>
                  <span>198</span>
              </h3>
              <h3>
                  <b>赠送心享值:</b>
                  <span>0</span>
              </h3>
          </div>
          <footer class="box_footer">
               <div>
                   <strong>实付:￥198.00</strong>
                   <button>结算</button>
               </div>
           </footer>
         </div>
     </div>
</template>

<script>
    import {mapGetters,mapState} from 'vuex'
    export default {
        name: "settleGoods",
        data(){
          return {
              site:null
          }
        },
        computed:{
            ...mapState(["cartGoods"]),
            ...mapGetters(["submitGoods"])
        },
        created(){

        },
        watch:{
            $route(){
                console.log(this.$route.params);
                this.site = this.$route.params.site;
            }
        }
    }
</script>

<style scoped>
    #address{
        position: relative;
        padding:40px 80px 36px 40px;
    }
    #address h3{
        line-height: 48px;
        margin-bottom:16px;
    }
    #address h3 strong{
        font-size: 30px;
        font-weight: bold;
        max-width: 160px;
        margin-right: 8px;
    }
    #address h4{
        line-height: 32px;
        position: relative;
    }
    #address h4::before{
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url(../../assets/img/icons.png) no-repeat center;
        -webkit-background-size: 400px 400px;
        background-size: 400px 400px ;
        top: 50%;
        margin-top: -20px;
        background-position: -120px -160px;
        left: -44px;
    }
    #address i{
        position: absolute;
        width: 80px;
        height: 48px;
        text-align: right;
        line-height: 48px;
        top: 50%;
        margin-top: -20px;
        right: 0;
    }
    .big_box{
        width:100%;
        height:100vh;
        overflow-y:auto;
        background-color:white;
        position:fixed;
        z-index:300;
    }
    .box{
        position:relative;
        width:100%;
        height:100%;
        background-color:#F5F5F5;
    }
    .big_box>.box>div{
        background: #ffffff;
        margin-bottom:20px;
        padding: 0 32px;
    }
    .box_item1{
        position: relative;
        background: url(../../assets/img/address_bg_2.png) right center no-repeat #ffffff;
        background-size: auto 100%;
        font-size:24px;
        margin-bottom:20px;
        padding: 0 32px;
    }
    .box_item1::after{
        content: '';
        position: absolute;
        width: 100%;
        height:8px;
        left: 0;
        bottom: 0;
        background: url(../../assets/img/address_bg_1.png) repeat-x;
        background-size: auto 100%;
    }
    .box_item1>div{
        padding:40px 0 48px;
    }
    .box_item1>div>strong{
        font-weight: bold;
        position: relative;
        line-height:72px;
    }
    .box_item1>div>strong::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: 0 -160px;
        right: -80px;
    }
    .box_item2{
        position: relative;
        padding:0 32px;
        background-color:white;
    }
    .box_item2::before{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: #df6119;
        z-index: 1;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        left:12px;
        top: 50%;
        margin-top: -3px;
    }
    .box_item2>h2{
        position: relative;
        height:88px;
        line-height:88px;
        padding: 0 24px 0 40px;
        cursor: pointer;
        font-size:25px;
    }
    .box_item2>h2::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -160px -160px;
        left: -4px;
    }
    .box_item2>div{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        text-align: right;
        padding-right:24px;
        line-height:88px;
        box-sizing: border-box;
    }
    .box_item2>div>div{
        padding-right:24px;
        position: relative;
        min-width:200px;
        margin-left:4px;
        float:right;
    }
    .box_item2>div>div::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -360px -160px;
        right: -8px;
    }
    .box_item3{
        background:#ffffff;
        margin:20px 0;
        padding: 0 32px;
    }
    .box_item3>ul{
        padding-left:60px;
    }
    .box_item3>ul>li{
        margin-bottom:0;
        border-bottom:0;
        padding-top:24px;
        box-sizing: border-box;
    }
    .box_item3>ul>li>div:nth-child(1){
        width:200px;
        height:200px;
        float:left;
        overflow: hidden;

    }
    .box_item3>ul>li>div:nth-child(1)>img{
        max-width: none;
        max-height: 100%;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .box_item3>ul>li>div:nth-child(2){
        position: relative;
        height:200px;
        margin-left:220px;
    }
    .box_item3>ul>li>div:nth-child(2)>h3{
        font-size:24px;
        height:40px;
    }
    .box_item3>ul>li>div:nth-child(2)>h4{
        font-size:18px;
        height:28px;
        line-height:28px;
    }
    .box_item3>ul>li>div:nth-child(2)>div{
        font-size:20px;
        color:#9c9c9c;
        position:absolute;
        bottom:0;
    }
    .box_item3>ul>li>div:nth-child(2)>div>p:nth-child(1){
        display: inline-block;
        position: relative;
        height:32px;
        line-height:32px;
        padding-left:20px;
        margin-right:8px;
    }
    .box_item3>ul>li>div:nth-child(2)>div>p:nth-child(1)::before{
        content: '';
        position: absolute;
        width:24px;
        height:40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -160px -80px;
        background-position: -88px 0;
        left: -6px;
    }
    .box_item3>ul>li>div:nth-child(2)>div>p:nth-child(2){
        position: relative;
        height:32px;
        line-height:32px;
        padding-left:20px;
        margin-right:8px;
        display:none;
    }
    .box_item3>ul>li>div:nth-child(2)>h5{
        position: absolute;
        width: 100%;
        height:48px;
        bottom:30px;
        font-size:22px;
    }
    .box_item3>ul>li>div:nth-child(2)>h5>span:nth-child(1){
        float:left;
    }
    .box_item3>ul>li>div:nth-child(2)>h5>span:nth-child(2){
        float:right;
    }
    .box_item3>ul>li>div:nth-child(2)>h5::after{
        content: " ";
        clear: both;
        display: block;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }
    .box_item3>ul>li>div:nth-child(3){
        min-height:24px;
        clear: left;
    }
    .box_item4{
        background: #ffffff;
        margin-bottom:20px;
        padding: 0 32px;
    }
    .box_item4>h2{
        position: relative;
        height:88px;
        line-height:88px;
        padding: 0 24px 0 40px;
        cursor: pointer;
    }
    .box_item4_h2_one::before{
          content: '';
          position: absolute;
          width:40px;
          height:40px;
          background: url(../../assets/img/icons3.png) no-repeat center;
          background-size:400px 400px;
          top: 50%;
          margin-top: -20px;
          background-position: -200px -160px;
          left: -8px;
      }
    .box_item4_h2_two::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -200px -160px;
        left: -8px;
    }
    .box_item4_h2_three::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -280px -200px;
        left:-8px;
    }
    .box_item4>h2::after{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -320px -160px;
        right: -16px;
        transition: all 0.5s ease;
    }
    .box_item4>h2>strong{
        font-size:25px;
    }
    .box_item4_h2_one>b{
        float: right;
        max-width: 60%;
        color:#ff4001;
    }
    .box_item4_h2_two>b{
        float: right;
        max-width: 60%;
        color:#9c9c9c;
    }
    .box_item4_h2_two>span{
        color:#9c9c9c;
    }
    .box_item5>div{
        padding: 24px 0;
        position: relative;
    }
    .box_item5>div>h3{
        font-size:24px;
        line-height:32px;
        color: #ff4001;
        position: relative;
        display: inline-block;
        font-weight: normal;
    }
    .box_item5>div>a{
        position: absolute;
        width:112px;
        height: 48px;
        background: #ff4001;
        border-radius: 2px;
        text-align: center;
        line-height: 48px;
        color: #ffffff;
        right: 0;
        top: 50%;
        margin-top: -12px;
    }
    .box_item5>div>h3:nth-child(3)>button{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -200px -40px;
        content: normal;
        text-indent: -9999px;
        overflow: hidden;
        right: -40px;
        border:0;
        outline:none;
    }
    .box_item6>h2{
        position: relative;
        height:88px;
        line-height:88px;
        padding: 0 24px 0 40px;
        cursor: pointer;
        font-size:25px;
    }
    .box_item6>h2::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -240px -160px;
        left: -8px;
    }
    .box_item6>h2::after{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -320px -160px;
        right: -16px;
        transition: all 0.5s ease;
    }
    .box_item6>h2>b{
        float: right;
        max-width: 60%;
        color:#9c9c9c;
        font-size:20px;
    }
    .box_item7{
        padding:4px 32px;
    }
    .box_item7>h3{
        height:60px;
        line-height:60px;
    }
    .box_item7>h3>span{
        float: right;
        width: 50%;
        text-align: right;
    }
    .box_footer{
        height:100px;
        background: transparent;
    }
    .box_footer>div{
        position: fixed;
        height:100px;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 10;
        background: #ffffff;
        box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
        -webkit-box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
        padding-left:40px;
        font-size:30px;
        box-sizing: border-box;
    }
    .box_footer>div>strong{
        color: #ff4001;
        font-weight: bold;
        line-height:105px;
    }
    .box_footer>div>button{
        position: absolute;
        width:260px;
        height: 100%;
        font-weight: bold;
        top: 0;
        right: 0;
        background: #ff4001;
        color: #ffffff;
        font-size:30px;
        outline:none;
        border: 0;
    }

</style>