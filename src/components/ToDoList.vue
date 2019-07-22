<template>
  <div class="page_container">
  <div class="container">
    <div>
      <h2>Jquery To Do List</h2>
      <p class="tips">Simple Todo List with adding and filter by diff status</p>
      <inputItem></inputItem>
      <itemList></itemList>
      <selectItem></selectItem>
    </div>
  </div>
</div>
</template>

<script>
import inputItem from './inputItem.vue'
import itemList from './itemList.vue'
import selectItem from './selectItem.vue'
export default {
  name: 'ToDoList',
  props: {
    msg: String
  },
  components:{
    inputItem,
    itemList,
    selectItem
  },
  data() {
    return {
      itemList:[],
      inputValue:null,
      selectTpye:'ALL',
      currentContent:null
    }
  },
  methods :{
    changeStatus:function(item){
        let result = this.itemList.find(element => element === item);
        result.isFinish = !result.isFinish;
        item.isEditable = !item.isEditable;
    },
    addItem:function(){
      this.itemList.push({isFinish:false,content:this.inputValue,isEdit:false,isEditable:true});
      this.inputValue=null;
    },
    changeList:function(){
      this.selectTpye=event.target.id;
    },
    show:function(list){
      if(this.selectTpye == 'ALL') return list;
      else if(this.selectTpye == 'Active') return list.filter(item => !item.isFinish);
      else return list.filter(item => item.isFinish);
    },
    changeToEdit:function(item){
      let result = this.itemList.find(element => element === item);
        if(result.isEditable){
          result.isEdit =!result.item;
          this.currentContent = result.content;
        }    
    },
    changeContent:function(item){
        let result = this.itemList.find(element => element === item);
        result.content =this.currentContent;
        result.isEdit = !result.isEdit;   
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
