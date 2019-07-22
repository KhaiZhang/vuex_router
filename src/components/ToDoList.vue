<template>
  <div class="page_container">
  <div class="container">
    <div>
    <h2>Jquery To Do List</h2>
    <p class="tips">Simple Todo List with adding and filter by diff status</p>
    <input type="text" id="inputNum" name="inputNum" v-model="inputValue">
    <button class="addbtn" @click="addItem()">Add</button>
    <ol class ="list" >
      <li v-for="(item,index) in show(itemList)" v-bind:key="index" :class="{rackA:index%2==0}" >
        <input type="checkbox" @click="changeStatus(index)" v-bind:checked="item.isFinish">
        <span v-bind:class="{itemIsFinish:item.isFinish}">{{item.content}}</span>
      </li>
    </ol>
    <div class="page_bottom">
        <span class="select_item" id="ALL" @click="changeList">ALL&nbsp;</span>
        <span class="select_item" id="Active"  @click="changeList">Active&nbsp;</span>
        <span class="select_item" id="Complete"  @click="changeList">Complete</span>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ToDoList',
  props: {
    msg: String
  },
  data() {
    return {
      itemList:[],
      inputValue:null,
      selectTpye:'ALL'
    }
  },
  methods :{
    changeStatus:function(index){
        this.itemList[index].isFinish = !this.itemList[index].isFinish;
    },
    addItem:function(){
      this.itemList.push({isFinish:false,content:this.inputValue});
      this.inputValue=null;
    },
    changeList:function(evnet){
      this.selectTpye=event.target.id;
    },
    show:function(list){
      if(this.selectTpye == 'ALL') return list;
      else if(this.selectTpye == 'Active') return list.filter(item => !item.isFinish);
      else return list.filter(item => item.isFinish);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
