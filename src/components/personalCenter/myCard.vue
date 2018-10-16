<template>
    <div class="box">
        <router-view></router-view>
        <div class="header">
            <div class="header-div1">
                <a href="#" @click="goLast()"></a>
                <h1>储值卡</h1>
            </div>
        </div>
        <div class="box-main">
            <div>
                <a href="#" class="active">可使用</a>
                <a href="#">已使用</a>
                <a href="#">已过期</a>
            </div>
            <div>暂无数据</div>
            <div><router-link to="/index/mycard/bindCard">+绑定新卡</router-link></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myCard",
        methods:{
            goLast(){
                this.$router.go(-1)
            }
        },
        mounted(){
            var btn = document.querySelectorAll(".box-main>div:nth-child(1) a");
            for(let i=0;i<btn.length;i++){
                btn[i].onclick = function(){
                    for(let j=0;j<btn.length;j++){
                        btn[j].className = "";
                    }
                    btn[i].className = "active";
                }
            }
        }
    }
</script>

<style scoped>
   .box{
       width:100%;
       height:100vh;
       position:relative;
       background-color:white;
       z-index:204;
   }
   .header{
       width:100%;
       height:88px;
   }
   .header-div1{
       position: fixed;
       z-index: 10;
       left: 0;
       top: 0;
       width: 100%;
       height:88px;
       line-height:88px;
       background: rgba(255, 255, 255, 0.95);
       box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
       -webkit-box-shadow: 0 0 10px rgba(222, 222, 222, 0.6);
   }
   .header-div1>h1{
       height:88px;
       line-height:88px;
       text-align: center;
       color: #a38d6b;
       font-size:25px;
   }
   .header-div1>a{
       position: absolute;
       width:88px;
       height:88px;
       left: 0;
       top: 0;
   }
   .header-div1>a::after{
       content: '';
       position: absolute;
       width:40px;
       height:40px;
       background: url(../../assets/img/icons.png) no-repeat center;
       -webkit-background-size:400px 400px;
       background-size:400px 400px;
       top: 50%;
       margin-top: -20px;
       background-position: -80px -120px;
       left:20px;
   }
   .box-main>div:nth-child(1){
       width:100%;
       height:100px;
       background-color:#f4f4f4;
       display:flex;
       line-height:100px;
       flex-direction:row;
       font-size:25px;
   }
   .box-main>div:nth-child(1)>a{
       flex: 1;
       text-align:center;
   }
   .box-main>div:nth-child(2){
       text-align:center;
       margin-top:200px;
       font-size:25px;
   }
     .box-main>div:nth-child(3){
         position:absolute;
         top:calc(100% - 100px);
         width:100%;
         height:100px;
         text-align:center;
         line-height:100px;
         border-top:1px solid #c2ac92;
     }
   .box-main>div:nth-child(3)>a{
       width:100%;
       height:100%;
       color:red;
       font-size:25px;
   }
    .active{
        background-color:white;
    }

</style>