<template>
  <div id="app">
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToDoList from './components/ToDoList.vue'
import './assets/myCss.css'

export default {
  name: 'app',
  components: {
    ToDoList
  }
}
</script>

