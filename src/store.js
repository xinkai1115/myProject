import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      userName:'',
      cartGoods:[]
  },
  mutations: {
      addCart(state,data){
          // console.log(data);
          state.cartGoods.push(data)
          console.log(state.cartGoods);
      }
  },
  getters:{
    changeCart(state){
      let bool = state.cartGoods[0]==undefined?false:true;
      return bool;
    }
  },
  actions: {

  }
})
