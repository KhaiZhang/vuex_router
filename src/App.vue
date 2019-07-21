<template>
  <div id="app">
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'app',
  components: {
    ToDoList
  }
}
</script>

