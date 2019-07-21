<template>
  <div class="page_container">
  <div class="container">
    <h2>Jquery To Do List</h2>
    <p>Simple Todo List with adding and filter by diff status</p>
    <input type="text" id="inputNum" name="inputNum">
    <button>add</button>
    <ol>
      <li>
        <input type="checkbox" >
        <span>123</span>
      </li>
    </ol>
    <p><span>all&nbsp;</span><span>active&nbsp;</span><span>complete</span></p>
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
