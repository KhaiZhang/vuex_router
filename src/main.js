import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectTpye:'ALL',
    itemList:[]

  },
  mutations: {
    addItem(state,inputItem){
      state.itemList.push(inputItem);
      let result = state.itemList.find(element => element === inputItem);
      console.log('content:'+result.content)
      console.log('currentContent:'+result.currentContent)
    },
    changeStatus(state,item){
      let result = state.itemList.find(element => element === item);
      result.isFinish = !result.isFinish;
      result.isEditable = !result.isEditable
    },
    changeList(state,selectTpye){
      state.selectTpye = selectTpye;
    },
    changeToEdit(state,item){
      let result = state.itemList.find(element => element === item);
      if(result.isEditable){
        result.isEdit =!result.isEdit;
        result.currentContent = result.content;
      } 
    },
    changeContent(state,item){
      // let result = state.itemList.find(element => element === payload.item);
      let result = state.itemList.find(element => element === item);
      console.log('content:'+result.content)
      console.log('currentContent:'+result.currentContent)
      result.content = result.currentContent;
      result.isEdit = !result.isEdit; 
    }
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
