<template>
  <div class="page_container">
  <div class="container">
    <div>
    <h2>Jquery To Do List</h2>
    <p class="tips">Simple Todo List with adding and filter by diff status</p>
    <input type="text" id="inputNum" name="inputNum">
    <button class="addbtn">Add</button>
    <ol class ="list" >
      <li v-for="(item,index) in 4" v-bind:key="index" :class="{rackA:item%2==0}">
        <input type="checkbox" >
        <span>{{index}}</span>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
