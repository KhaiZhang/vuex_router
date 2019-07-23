<template>
  <div class="page_container">
  <div class="container">
    <div>
      <todoTitle :title = title :subTitle =subTitle  ></todoTitle>
      <inputItem></inputItem>
      <itemList></itemList>
      <selectItem></selectItem>
    </div>
  </div>
</div>
</template>

<script>
import inputItem from './inputItem.vue'
import itemList from './itemList.vue'
import selectItem from './selectItem.vue'
import todoTitle from './todoTitle.vue'
export default {
  name: 'ToDoList',
  props: {
    msg: String
  },
  components:{
    inputItem,
    itemList,
    selectItem,
    todoTitle
  },
  data() {
    return {
      title: "Jquery To Do List",
      subTitle: "Simple Todo List with adding and filter by diff status"
    }
  },
  methods :{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
