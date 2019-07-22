<template>
  <div class="page_container">
  <div class="container">
    <div>
    <h2>Jquery To Do List</h2>
    <p class="tips">Simple Todo List with adding and filter by diff status</p>
    <input type="text" id="inputNum" name="inputNum" v-model="inputValue">
    <button class="addbtn" @click="addItem()">Add</button>
    <ol class ="list" >
      <li v-for="(item,index) in itemList" v-bind:key="index" :class="{rackA:index%2==0}" >
        <input type="checkbox" @click="changeStatus(index)">
        <span v-bind:class="{itemIsFinish:item.isFinish}">{{item.content}}</span>
      </li>
    </ol>
    <div class="page_bottom">
        <span class="select_item">ALL&nbsp;</span>
        <span class="select_item">Active&nbsp;</span>
        <span class="select_item">Complete</span>
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
      itemList:[
        {
          isFinish : false,
          content : "123"
        },
        {
          isFinish : false,
          content : "xxx"
        },
        {
          isFinish : false,
          content : "sdad"
        },
      ],
      inputValue:null
    }
  },
  methods :{
    changeStatus(index){
        this.itemList[index].isFinish = !this.itemList[index].isFinish;
    },
    addItem(){
      this.itemList.push({isFinish:false,content:this.inputValue});
      this.inputValue=null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
