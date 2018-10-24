<template>
    <div class="main">
        <router-view></router-view>
        <div class="header">
            <div class="header-div1">
                <a href="#" @click="goLast()"></a>
                <h1>选择地址</h1>
            </div>
        </div>
        <div class="main-site">
            <div class="main-site-location">
                <!--详细收货地址-->
                <ul>
                    <li v-for="(item,index) in address"  >
                        <h3  @click="chooseSite(item)">
                            <strong>{{item.consignee}}</strong>
                            <b>{{item.phoneNum}}</b>
                            <span v-if="item.default" >默认</span>
                            <span v-if="item.isChoose" >已选中</span>
                        </h3>
                        <h4  @click="chooseSite(item)">{{item.site}}</h4>
                        <a href="javascript:void(0)" @click="upSetSite(item,index)" >编辑</a>
                        <a href="javascript:void(0)" @click="removeSite(index)" >删除</a>
                    </li>
                </ul>
            </div>
            <div class="main-site-footer">
                <a href="javascript:void(0)" @click="addSite"  >
                    <span >新增地址</span>
                </a>
            </div>
        </div>
        <!--对收货地址删除的弹出的遮罩层-->
        <div class="cart_del" v-show="chooseDel" >
            <div class="del_bac" ></div>
            <div class="del_con" >
                <p>确定删除</p>
                <div class="del_con_b" >
                    <span @click="cancelDel" >取消</span>
                    <span @click="sureDetail">确认</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        name: "siteGoods",
        data(){
          return {
              chooseDel:false,
              index:0
          }
        },
        methods:{
            ...mapMutations(["saveSite"]),
            goLast(){
                this.$router.go(-1)
            },
            chooseSite(item){
                this.$router.push({
                    name:'Settle',
                    params:{
                        site:item
                    }
                });
                if(this.address.isChoose){
                    this.$set(this.address,"isChoose",true)
                }else{
                    this.address.forEach((item1)=>{
                        item1.isChoose = false;
                    })
                    item.isChoose = true;
                }
            },
            upSetSite(item,index){
                this.$router.push({
                    name:'newsite',
                    params:{
                        site:item,
                        index:index
                    }
                });
            },
            addSite(){
                this.$router.push({
                    name:'newsite'
                });
            },
            removeSite(index){
                this.index = index;
                this.chooseDel = true;
            },
            cancelDel(){
                this.chooseDel = false;
            },
            sureDetail(){
                this.$http.post(`${this.$api}/removeSite`,{
                    userName:this.userName,
                    index:this.index
                }).then(({data})=>{
                    this.saveSite(data.result);
                    this.chooseDel = false;
                })
            }
        },
        computed:{
            ...mapState(["address","userName"])
        }
    }
</script>

<style lang="less" scoped>
    /*对收货地址删除的弹出的遮罩层*/
    .car-list{
        position: relative;
        z-index: 0;
    }
    .cart_del{
        position: fixed;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.4);
        top: 0;
        z-index: 10000;
    }
    .cart_del .del_con{
        position: absolute;
        width: 540px;
        left: 50%;
        margin-left: -270px;
        background: #ffffff;
        top: 20%;
        font-size: 24px;
        -webkit-border-radius: 20px;
        border-radius: 20px;
    }
    .cart_del .del_con p{
        text-align: center;
        padding: 48px 60px 56px;
        font-size: 26px;
    }
    .del_con_b{
        display: flex;
        border-top: 1px solid #dadade;
    }
    .cart_del .del_con .del_con_b span{
        color: #ff4001;
        font-size: 24px;
        height: 88px;
        line-height: 88px;
        width: 50%;
        text-align: center;
    }
    .cart_del .del_con .del_con_b span:nth-child(1){
        border-right:  1px solid #dadade;
    }
     .main{
         width:100%;
         height:100%;
         position:fixed;
         z-index:301;
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
     .main-site-location{
         background: #ffffff;
         margin-top:24px;
         padding: 0 32px;
    }
     .main-site-location>ul>li{
         position: relative;
         padding: 20px 120px 24px 0;
         border-bottom:0;
         border-bottom: 2px solid #9c9c9c;
     }
     .main-site-location>ul>li>h3{
         margin-bottom:12px;
         line-height:40px;
     }
     .main-site-location>ul>li>h4{

     }
     .main-site-location>ul>li>{
         a{
             position:absolute;
             width:48px;
             height:48px;
             overflow: hidden;
             text-indent: -9999px;
             top: 50%;
             margin-top: -24px;
         }
         a:nth-child(3){
             right:60px;
         }
         a:nth-child(4){
             right:0
         }
         a::before{
             content: '';
             position: absolute;
             width:40px;
             height:40px;
             background: url(../../assets/img/icons3.png) no-repeat center;
             background-size:400px 400px;
             top: 50%;
             margin-top: -20px;
             background-position: 0 0;
             left: 4px;
         }
         a:nth-child(3)::before{
             background-position: 0 -160px;
         }
         a:nth-child(4)::before{
             background-position: -40px -160px;
         }
     }
     .main-site-location>ul>li>h3>{
         strong{
             font-weight: bold;
             display: inline-block;
             width:160px;
             vertical-align: middle;
         }
         b{
             display: inline-block;
             vertical-align: middle;
         }
         span{
             font-size:20px;
             line-height:20px;
             padding: 2px 4px;
             border: 2px solid #ff4001;
             color: #ff4001;
             border-radius: 2px;
             display: inline-block;
             vertical-align: middle;
             margin-left:10px;
         }
     }
     .main-site-footer{
        position:fixed;
        height:88px;
        width:100%;
        background-color:#ffffff;
        bottom:0;
    }
     .main-site-footer>a{
         width:100%;
         height:100%;
         position:relative;
         text-align:center;
         display:block;
     }
     .main-site-footer>a>span::after{
         content: '';
         position: absolute;
         width:40px;
         height:40px;
         background: url(../../assets/img/icons3.png) no-repeat center;
         background-size:400px 400px;
         top: 50%;
         margin-top: -20px;
         background-position: -240px -40px;
         right: 0;
     }
     .main-site-footer>a>span{
         position: relative;
         padding-right:40px;
         display: inline-block;
         color: #ff4001;
         height:40px;
         line-height:40px;
         top:24px;
     }

    
</style>