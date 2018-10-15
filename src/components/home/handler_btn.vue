<template>
    <div>
        <a  class="selectCity" href="javascript:void(0)">
            <span>上海</span>
        </a>
        <div class="city">
            <div class="global_cover"></div>
            <div class="city_selector">
                <header>
                    <h2>配送至</h2>
                    <h3>当前定位城市：<strong>松江区</strong></h3>
                </header>
                <div class="main">
                    <h4>更多城市：</h4>
                    <ul class="clearFloat">
                        <li>上海</li>
                        <li>北京</li>
                        <li>广州</li>
                        <li>南京</li>
                        <li>成都</li>
                        <li>重庆</li>
                        <li>深圳</li>
                        <li>杭州</li>
                        <li>苏州</li>
                        <li>天津</li>
                        <li>宁波</li>
                        <li>无锡</li>
                        <li>绍兴</li>
                        <li>嘉兴</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "handler_btn",
        mounted(){
            var city1 = document.querySelector(".city");
            var globalCover = document.querySelector(".global_cover");
            var citySpan = document.querySelector(".selectCity span");
            var selectCity = document.querySelector(".selectCity");
            var city = document.querySelectorAll(".main ul li");
            selectCity.onclick = function () {
                city1.style.display = "block";
            }
            globalCover.onclick = function () {
                city1.style.display = "none";
            }
            for (var i = 0;i<city.length;i++){
                city[i].onclick = function () {
                    for (var j=0;j<city.length;j++){
                        city[j].className="";
                    }
                    this.className = "active";
                    citySpan.innerHTML = this.innerHTML;
                    city1.style.display = "none";
                }
            }
        }
    }
</script>

<style scoped>
.selectCity{
    display: inline-block;
    text-decoration: none;
    color: #3e3e3e;
    position: absolute;
    width: 102px;
    height: 64px;
    padding-left: 40px;
    line-height: 66px;
    left: 12px;
    font-size: 24px;
    z-index: 3;
}

  .selectCity:before{
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      background: url(../../assets/img/3.png) no-repeat center;
      -webkit-background-size: 2rem 2rem;
      background-size: 400px 400px;
      top: 50%;
      margin-top: -20px;
      background-position: -200px -80px;
      left: 0;
  }
.global_cover{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 300;
    background: rgba(0, 0, 0, 0.6);
}
    .city_selector{
        position: fixed;
        z-index: 1001;
        background: #fff;
        width: 540px;
        left: 50%;
        margin-left: -270px;
        top: 200px;
        border-radius: 8px;
        font-size: 28px;
        overflow: hidden;
    }
    .city{
        position: fixed;
        z-index: 200;
        width: 100%;
        height: 100%;
        display: none;
    }
    .city_selector header{
        padding: 20px 36px;
        color: #3e3e3e;
        margin-bottom: 8px;
    }
    .city_selector header h2{
        text-align: center;
        font-size: 30px;
        height: 60px;
        margin-bottom: 20px;
        line-height: 60px;
    }
.city_selector header h3 {
    font-size: 30px;
    color: #9c9c9c;
}
.city_selector header h3 strong {
    font-size: 32px;
    color: #3e3e3e;
}
.city_selector .main {
    padding: .1rem 0;
    background: url(../../assets/img/6.png) no-repeat center;
    background-size: cover;
    padding: 26px 0;
}
    .main h4{
        padding-left: 36px;
        margin-bottom: 8px;
        color: #9c9c9c;
        font-size: 28px;
        margin-bottom: 8px;
}
.clearFloat:after{
    content: "";
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}
.main ul li{
    float: left;
    width: 25%;
    text-align: center;
    padding: 8px 0;
    height: 42px;
    font-size: 30px;
    line-height: 42px;
    color: #3e3e3e;
}
    .main ul .active{
        color: #ff4001;
    }
</style>