<template>
  <div id="app">
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import './assets/myCss.css'

export default {
  name: 'app',
  components: {
    ToDoList
  },
  mounted: function () {
    this.$nextTick(function () {
    this.$store.dispatch("getItemList");
    })
  }
}
</script>

