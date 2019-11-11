import Vue from 'Vue'
import Vuex from 'Vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    storeList:[1,2]
  },
  mutations:{
    initStoreList(state,list){
      store.list=list
    }
  }
})