
 <!--模板    html结构-->
 <!--template这个标签我们可以用它包裹对应的一些内容，但是它并不会真正的渲染到DOM里面去-->
 <!--template标签里面只能有一个根标签-->
<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="footer_wrap">
      <ul class="wrap">
        <li class="active"><router-link to="/">首页</router-link></li>
        <li><router-link :to="{path:'/list',query:{uid:1000}}">礼品馆</router-link></li>
        <li><router-link to="/list">蛋糕馆</router-link></li>
        <li><router-link to="/cart">购物车</router-link></li>
        <li><router-link to="/index">个人中心</router-link></li>
      </ul>

    </div>

  </div>
</template>


 <!--行为    处理逻辑-->
<script>
    export default {
        name: 'app',
        mounted(){
            var btn = document.querySelectorAll(".wrap li");
            for (let i=0; i<btn.length; i++){
                btn[i].onclick = function(){
                    for(let j = 0;j < btn.length;j++){
                        btn[j].className = "";
                    }
                    this.className = "active"
                }
            }
        }
    }

</script>


 <!--样式-->
<style scoped>

  .footer_wrap{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 108px;
    /*z-index: 10;*/
    background: #ffffff;
    border-top: 1PX solid #d1c6af;
  }
  .wrap{
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction:row;
    flex-wrap: nowrap;
    justify-content:center;
    height: 100px;
  }
  .wrap li{
    width: 150px;
    flex-grow:1;
    position: relative;
  }
  .wrap li a{
    width: 100%;
    display: block;
    text-align: center;
    height: 36px;
    line-height: 36px;
    padding-top: 64px;
    text-decoration: none;
    color: #a38d6b;
  }
  /*.wrap li:nth-child(1) a{*/
  /*color: #ff4001;*/
  /*}*/
  .wrap .active:nth-child(1) a{
    color: #ff4001;
  }
  .wrap .active:nth-child(1) a:before{
    background-position: 0 0;
  }
  .wrap .active:nth-child(2) a{
    color: #ff4001;
  }
  .wrap .active:nth-child(2) a:before{
    background-position: 0 -50px;
  }.wrap .active:nth-child(3) a{
     color: #ff4001;
   }
  .wrap .active:nth-child(3) a:before{
    background-position: 0 -100px;
  }.wrap .active:nth-child(4) a{
     color: #ff4001;
   }
  .wrap .active:nth-child(4) a:before{
    background-position: 0 -150px;
  }.wrap .active:nth-child(5) a{
     color: #ff4001;
   }
  .wrap .active:nth-child(5) a:before{
    background-position: 0 -200px;
  }
  .wrap li:nth-child(1) a:before{
    content: " ";
    position: absolute;
    width: 50px;
    height: 50px;
    background: url(./assets/img/1.png) no-repeat center;
    background-position: -50px 0;
    background-size: 100px 400px;
    left: 50%;
    margin-left:-25px;
    top: 10px;
  }
  .wrap li:nth-child(2) a:before{
    content: " ";
    position: absolute;
    width: 50px;
    height: 50px;
    background: url(./assets/img/1.png) no-repeat center;
    background-position: -50px -50px;
    background-size: 100px 400px;
    left: 50%;
    margin-left:-25px;
    top: 10px;
  }
  .wrap li:nth-child(3) a:before{
    content: " ";
    position: absolute;
    width: 50px;
    height: 50px;
    background: url(./assets/img/1.png) no-repeat center;
    background-position: -50px -100px;
    background-size: 100px 400px;
    left: 50%;
    margin-left:-25px;
    top: 10px;
  }
  .wrap li:nth-child(4) a:before{
    content: " ";
    position: absolute;
    width: 50px;
    height: 50px;
    background: url(./assets/img/1.png) no-repeat center;
    background-position: -50px -150px;
    background-size: 100px 400px;
    left: 50%;
    margin-left:-25px;
    top: 10px;
  }
  .wrap li:nth-child(5) a:before{
    content: " ";
    position: absolute;
    width: 50px;
    height: 50px;
    background: url(./assets/img/1.png) no-repeat center;
    background-position: -50px -200px;
    background-size: 100px 400px;
    left: 50%;
    margin-left:-25px;
    top: 10px;
  }
</style>







