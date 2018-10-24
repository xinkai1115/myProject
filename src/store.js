import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      userName:'',  //用户名字
      cartGoods:[], // 已加入购物车商品的列表
      isLogin:false, //控制有没有登录
      goodsId:[],
      chooseDel:false , //控制 是否删除商品的页面显示的 boolean
      goodId:'', //点击确认删除 之前存储的商品id
      address:[] //存储用户的收货地址
  },
  mutations: {
      //登录页面处理方法，传过来用户电话
      login(state,user){
          state.userName = user;
          state.isLogin = true;
      },
      chooseGood(state,id){
          state.cartGoods.forEach((item,index)=>{
              if(item._id == id){
                 Vue.set(item,'isChoose',!item.isChoose);
              }
          })
      },
      getCartList(state,data){
          this.cartGoods = data;
      },
      //取消删除按钮
      cancelDel(state){
          state.chooseDel = false;
      },
      //用户未登录时，点击加入购物车的处理函数，在actions里分发此方法
      sendGoods(state,item){
          var length = state.cartGoods.length;
          if(!length){
              Vue.set(item,"goodsNum",1);
              Vue.set(item,"isChoose",true);
              state.cartGoods.push(item);
              state.goodsId.push(item._id)
          }else{
              let num = 0;
              for(var i =0;i<length;i++){
                  num++;
                  if(state.cartGoods[i]._id == item._id){
                      num = 0;
                      state.cartGoods[i].goodsNum++;
                      break;
                  }
              }
              if(num){
                  Vue.set(item,"goodsNum",1);
                  Vue.set(item,"isChoose",true);
                  state.cartGoods.push(item);
                  state.goodsId.push(item._id);
              }
          }
          var obj = {
              userName:"",
              cartGoods:state.cartGoods
          }
          sessionStorage.setItem("userInfo",JSON.stringify(obj));
      },
      //用户未登录时，点击对已加入购物车的加减，在actions里分发此方法
      changeNumber(state,{add,item}){
          console.log(add, item);
          state.goodId = item._id;
          state.cartGoods.forEach((data)=>{
              if(data._id==item._id){
                  if(add=="add"){
                      data.goodsNum++;
                  }else{
                      data.goodsNum--;
                      if(data.goodsNum<1){
                          data.goodsNum =1;
                          state.chooseDel = true;
                      }
                  }
              }
          })
          var obj = {
              userName:"",
              cartGoods:state.cartGoods
          }
          sessionStorage.setItem("userInfo",JSON.stringify(obj));
      },
      //确认删除商品
      sureDel(state){
          state.cartGoods.forEach((item,index)=>{
              if(item._id == state.goodId){
                  state.chooseDel = false;
                  state.cartGoods.splice(index,1);
              }
          })
          var obj = {
              userName:"",
              cartGoods:state.cartGoods
          }
          sessionStorage.setItem("userInfo",JSON.stringify(obj));
      },
      //点击全选按钮，选中所有商品
      chooseAll1(state,bool){
          state.cartGoods.forEach((item)=>{
              if(bool){
                  item.isChoose=false;
              }else{
                  item.isChoose=true;
              }
          })
      },
      //用户添加收货地址后更新总的收货地址
      saveSite(state,data){
          state.address = data;
          console.log(data);
          var obj = {
              userName:state.userName,
              cartGoods:state.cartGoods,
              address:state.address
          }
          sessionStorage.setItem("userInfo",JSON.stringify(obj));
      },
      //退出登录的改变
      logOut1(state){
          state.isLogin = false;
          state.cartGoods = [];
          state.userName = '';
          var obj = {
              userName:"",
              cartGoods:[],
              address:[]
          }
          sessionStorage.setItem("userInfo",JSON.stringify(obj));

      },
      //  刷新页面有本地有缓存时，把缓存赋值
      changeState(state,item){
          console.log(item);
          if(item){
              if(item.userName){
                  state.userName = item.userName;
                  state.isLogin = true;
                  state.cartGoods = item.cartGoods;
                  state.address = item.address;
              }else{
                  state.cartGoods = item.cartGoods;
                  state.address = item.address;
              }
          }
      }

  },
  getters:{
    //  实时返回购物车里是否有商品的boolean值
    changeCart(state){
      let bool = state.cartGoods[0]==undefined?false:true;
      return bool;
    },
    // 返回 计算后的总金额
    totalMoney(state){
        var money = 0;
        state.cartGoods.forEach((item)=>{
            if(item.isChoose){
                var price = item.goodsChoose.length?item.goodsChoose[0].goodsPrice:item.goodsPrice;
                money+=(price*item.goodsNum)
            }
        })
        return money;
    },
    //  返回 控制全选按钮的状态
    chooseAll(state){
        let num = 0;
        state.cartGoods.forEach((item)=>{
            if(item.isChoose){
                num++;
            }
        })
        if(num == state.cartGoods.length ){
            return true;
        }else{
            return false;
        }
    },
    //  返回选择商品的总数
    chooseGoodsNum(state){
        let num = 0;
        state.cartGoods.forEach((item)=>{
            if(item.isChoose){
                num += item.goodsNum;
            }
        })
        return num;
    },
    //返回 提交订单后的商品列表信息
    submitGoods(state){
        var arr = [];
        state.cartGoods.forEach((item)=>{
            if(item.isChoose){
                arr.push(item)
            }
        })
        return arr;
    }
  },
  actions: {
     // 用户登录时触发的异步请求
     getLogin(){
         axios({
             method:'post',
             url:'/api/login',
             data:{
                 userName:this.state.userName,
                 cartGoods:this.state.cartGoods
             }
         }).then(({data})=>{
             this.state.cartGoods = data.result.cartGoods;
             this.state.address = data.result.address;
             var obj = {
                 userName:this.state.userName,
                 cartGoods:this.state.cartGoods,
                 address:this.state.address
             }
             sessionStorage.setItem("userInfo",JSON.stringify(obj));
         })
     },
     // 用户已登录，点击加入购物车的异步请求
     sendGoods(context,item){
         if(this.state.userName){
             axios.post("/api/addCart",{
                 goodsId:item._id,
                 userName:this.state.userName
             }).then(({data})=>{
                 this.state.cartGoods = data.result.cartGoods;
                 var obj = {
                     userName:this.state.userName,
                     cartGoods:this.state.cartGoods,
                     address:this.state.address
                 }
                 sessionStorage.setItem("userInfo",JSON.stringify(obj));
             })
         }else{
             //用户未登录，分发同步的mutations->sendGoods
             context.commit('sendGoods',item)
         }
     },
     // 用户已登录，点击已加入购物车的商品的数量的加减
     changeNum(context,{add,item}){
         if(this.state.userName){
             this.state.goodId = item._id;
             axios.post("/api/changeNum",{
                 type:add,
                 goodsId:item._id,
                 userName:this.state.userName
             }).then(({data})=>{
                 this.state.cartGoods = data.result.cartGoods;
                 if(data.cancel){
                     this.state.chooseDel = true;
                 }
                 var obj = {
                     userName:this.state.userName,
                     cartGoods:this.state.cartGoods,
                     address:this.state.address
                 }
                 sessionStorage.setItem("userInfo",JSON.stringify(obj));
             })
         }else{
             //用户未登录，分发同步的mutations-> changeNumber
             context.commit('changeNumber',{add,item})
         }
     },
     // 确定删除购物车商品
     sureDetail(context){
         if(this.state.userName){
            axios.post("/api/delGoods",{
                userName:this.state.userName,
                goodId:this.state.goodId
            }).then(({data})=>{
                this.state.cartGoods = data.result.cartGoods;
                if(data.cancel){
                    this.state.chooseDel = false;
                }
                var obj = {
                    userName:this.state.userName,
                    cartGoods:this.state.cartGoods,
                    address:this.state.address
                }
                sessionStorage.setItem("userInfo",JSON.stringify(obj));
            })
         }else{
             context.commit('sureDel')
         }
     }
  }
})
