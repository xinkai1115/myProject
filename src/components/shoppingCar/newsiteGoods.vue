<template>
    <div class="box">
        <div class="box-main">
            <div class="header">
                <div class="header-div1">
                    <a href="#" @click="goLast()"></a>
                    <h1>添加地址</h1>
                </div>
            </div>
            <div class="box-main-site">
                <div>
                    <div><input type="text" placeholder="收货人姓名"></div>
                    <div><input type="text" placeholder="收货人手机号码"></div>
                    <div>
                        <select name="" >
                            <option disabled="disabled">请选择省</option>
                            <option value="">上海</option>
                            <option value="">浙江</option>
                            <option value="">江苏</option>
                            <option value="">北京</option>
                        </select>
                        <select name="" >
                            <option disabled="disabled">请选择省</option>
                            <option value="">上海</option>
                        </select>
                        <select name="" >
                            <option disabled="disabled">请选择区县</option>
                            <option value="">浦东区</option>
                            <option value="">黄浦区</option>
                            <option value="">松江区</option>
                            <option value="">徐汇区</option>
                        </select>
                    </div>
                    <div><input type="text" placeholder="详细地址"></div>
                    <div><input type="text" placeholder="门牌号"></div>
                    <div><a href="javascript:void(0)">设为默认地址</a></div>
                </div>
                <div><button>保存</button></div>
                <div>
                    <h2>配送区域说明</h2>
                    <p>1.郊环线内（A30）：免费配送；</p>
                    <p>2.郊环线外（A30）：青浦城区免费配送（漕盈公路以西不做配送）；嘉定城区免费配送（宝钱公 路以北不做配送）；浦东新区浦东机场区域免费配 送(S32以东不做配送)；</p>
                    <p>3.上海配送区域全部免费 (崇明岛不配送),详见官网上海配送区域图；</p>
                    <p>4.请以下单时实际运费为准，配送服务时间:10:00-22:00。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "newsiftGoods",
        methods:{
            goLast(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="less" scoped>
    .box{
        width:100%;
        height:100vh;
        position:relative;
        background-color:white;
        z-index:302;
        background-color:#f5f5f5;
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
    .box-main-site{
    }
    .box-main-site>div{
        margin-top:24px;
        padding: 0 32px;
        background-color:#ffffff;
    }
    .box-main-site>div:nth-child(1)>div{
        padding: 24px 0;
        position: relative;
        border-bottom: 1px solid #9c9c9c;
    }
    .box-main-site>div:nth-child(1)>div>input{
        width: 100%;
        line-height:40px;
        border:0;
        outline:none;
    }
    .box-main-site>div:nth-child(1)>div:nth-child(3)::after{
        content: " ";
        clear: both;
        display: block;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }
    .box-main-site>div:nth-child(1)>div:nth-child(3)>select{
        width: 20%;
        float: left;
        position: relative;
        height:40px;
        background: url(../../assets/img/select_arrow.png) no-repeat center;
        -webkit-background-size:16px 8px;
        background-size:16px 8px;
        background-position: right 53%;
        padding-right:16px;
        appearance: none;
        border:0;
        outline:none;
    }
    .box-main-site>div:nth-child(1)>div:nth-child(3)>{
        select:nth-child(2){
            margin-left:24%;
        }
        select:nth-child(3){
            float:right;
        }
    }
    .box-main-site>div:nth-child(1)>div:nth-child(6){
        border-bottom:0;
    }
    .box-main-site>div:nth-child(1)>div:nth-child(6)>a{
        display: inline-block;
        position: relative;
        line-height:40px;
        height:40px;
        padding-left: 36px;
    }
    .box-main-site>div:nth-child(1)>div:nth-child(6)>a::before{
        content: '';
        position: absolute;
        width:40px;
        height:40px;
        background: url(../../assets/img/icons3.png) no-repeat center;
        background-size:400px 400px;
        top: 50%;
        margin-top: -20px;
        background-position: -160px -200px;
        left: -6px;
    }
    .box-main-site>div:nth-child(2)>button{
        display: block;
        width: 100%;
        font-size:30px;
        height:88px;
        color: #ffffff;
        background: #ff4001;
        outline:none;
        border:0;
    }
    .box-main-site>div:nth-child(3){
        margin-top:48px;
        color: #9c9c9c;
        padding-bottom:32px;
        padding:0 32px;
        background-color:#f5f5f5;
    }
    .box-main-site>div:nth-child(3)>p{
        font-size:25px;
        line-height:40px;
    }
</style>