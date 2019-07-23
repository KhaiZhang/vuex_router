import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectTpye:'ALL',
    itemList:[]

  },
  mutations: {
    addItem(state,inputItem){
      state.itemList.push(inputItem);
    },
    changeStatus(state,item){
      let result = state.itemList.find(element => element === item);
      result.completed = !result.completed;
    },
    changeList(state,selectTpye){
      state.selectTpye = selectTpye;
    },
    changeContent(state,payload){
      let result = state.itemList.find(element => element === payload.item);
      result.content = payload.currentContent;
    },
    getToDoList(state,itemList){
      state.itemList.push(...itemList);
    }
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
