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
        <input type="checkbox" @click="changeStatus(item)" v-bind:checked="item.isFinish" >
        <span v-if="!item.isEdit" v-bind:class="{itemIsFinish:item.isFinish}"  v-on:dblclick="changeToEdit(item)" >{{item.content}}</span>
        <input v-else  type="text" v-model="currentContent" v-on:keyup.enter="changeContent(item)">
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
    changeList:function(evnet){
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
