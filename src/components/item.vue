<template>
  <div>
    <input type="checkbox" @click="changeStatus(item)" v-bind:checked="item.completed" >
    <span v-if="!isEdit" v-bind:class="{itemIsFinish:item.completed}"  v-on:dblclick="changeToEdit(item)" >{{item.content}}</span>
    <input v-else  type="text" v-model="currentContent" v-on:keyup.enter="changeContent(item)" >
    <span id="delete" @click="deleteItem(item)">×</span>
  </div>
</template>

<script>
export default {
  name: 'inputItem',
  props: {
    msg: String,
    item: Object,
    index: Number
  },
  data(){
      return {
          inputValue: null,
          isEdit:false,
          currentContent:null
      }
  },

  methods:{
      changeStatus:function(item){
            this.$store.dispatch("changeStatus",item);
      },
      changeToEdit:function(item){
         if(!item.completed){
            this.isEdit = !this.isEdit;
            this.currentContent = item.content;
         }
      },
      changeContent:function(item){
        this.$store.dispatch("changeContent",{item : item , currentContent:this.currentContent});
        this.isEdit = !this.isEdit;
      },
      deleteItem:function(item){
        this.$store.dispatch("deleteItem",item);
      }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
