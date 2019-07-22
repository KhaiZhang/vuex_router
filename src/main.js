import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectTpye:'ALL',
    itemList:[
      {
          isFinish:false,
          content:'1111',
          isEdit:false,
          isEditable:true
      }
  ]

  },
  mutations: {
    addItem(state,inputItem){
      state.itemList.push(inputItem);
    }
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
