<template>
  <div>
    <ol class ="list" >
      <li v-for="(item,index) in show(itemList)" v-bind:key="index" :class="{rackA:index%2==0}" >
        <input type="checkbox" @click="changeStatus(item)" v-bind:checked="item.isFinish" >
        <span v-if="!item.isEdit" v-bind:class="{itemIsFinish:item.isFinish}"  v-on:dblclick="changeToEdit(item)" >{{item.content}}</span>
        <input v-else  type="text" v-model="currentContent" v-on:keyup.enter="changeContent(item)">
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'itemList',
  props: {
    msg: String
  },
  data(){
      return {
          currentContent:null,
          itemList:[
              {
                  isFinish:false,
                  content:'1111',
                  isEdit:false,
                  isEditable:true
              },
               {
                  isFinish:false,
                  content:'2222',
                  isEdit:false,
                  isEditable:true
              },
               {
                  isFinish:false,
                  content:'11333311',
                  isEdit:false,
                  isEditable:true
              }
          ]
      }
  },
  methods:{
      changeStatus:function(){
          
      },
      show:function(){
          return this.itemList;
      },
      changeToEdit:function(){
          
      },
      changeContent:function(){
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
