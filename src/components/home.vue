<template>
  <div>
    <div id="top_section">
        <button @click="navigateBack">back</button>
        <span id="username">{{username}}</span>
    </div>
    <div id="content">
        <div class="sub">
            <div style="height:50px;background-color:aquamarine;border:1px solid gray;" @click="navigateToTodoList">TodoList列表</div>
            <div style="height:50px;background-color:aquamarine;border:1px solid gray;" @click="navigateToMine">我的</div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'welcome',
  props: {
    msg: String,
  },
  data(){
      return {
      }
  },
  components:{
    
  },
  computed:{
    username(){
        return this.$route.params.name;
    }
  },
  data() {
    return {
      
    }
  },
  methods :{
      navigateBack:function(){
          if(confirm("确认是否退出")){
            this.$router.go(-1);
          } 
      },
      navigateToTodoList:function(){
          this.$router.push({name:'ToDoList'})
      },
      navigateToMine:function(){
          let name = this.username;
          this.$router.push({name:'mine',params:{name}})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
