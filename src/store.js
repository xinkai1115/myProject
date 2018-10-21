import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      userName:'',
      cartGoods:[],
      isLogin:false,
      goodsId:[]
  },
  mutations: {
      addCart(state,data){
          state.goodsId = data._id;
          state.cartGoods.push(data)
          console.log(state.cartGoods);
      },
      login(state,user){
          state.userName = user;
          state.isLogin = true;
      },
      getCartList(state,data){
          this.cartGoods = data;
      }
  },
  getters:{
    changeCart(state){
      let bool = state.cartGoods[0]==undefined?false:true;
      return bool;
    }
  },
  actions: {
     getLogin(){
         console.log(this.state.userName);
         axios({
             method:'post',
             url:'/api/login',
             data:{
                 userName:this.state.userName,
                 goodsId:this.state.goodsId
             }
         }).then(({data})=>{
             this.state.cartGoods = data.result.cartGoods;
             console.log(data);
         })
     },
     sendGoods(context,item){
         if(this.state.userName){
             axios.post("/api/addCart",{
                 goodsId:item._id,
                 userName:this.state.userName
             }).then(({data})=>{
                 this.state.cartGoods = data.result.cartGoods;
                 console.log(data.result);
             })
         }else{
             this.state.goodsId.push(item._id)
             this.state.cartGoods.push(item);
         }
     }
  }
})
