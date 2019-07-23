<template>
  <div class='page_container'>
      <div class = 'container'>
      <img style="margin-left:200px;border:1px solid gray" src="../assets/logo.png" id="img">
      <p style="text-align: center;">名字：{{username}}</p>
      <p style="text-align: center;">电话：10086</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'welcome',
  props: {
    msg: String,
  },
  components:{
    
  },
  data() {
    return {
         name : null
    }
  },
  computed:{
    username(){
        return this.$route.params.name;
    }
  },
  methods :{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
