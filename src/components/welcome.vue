<template>
  <div>
      <input type="text" placeholder="please enter your name" v-model="name" >
      <button @click="navigateToHome" >start using</button>
  </div>
</template>

<script>

export default {
  name: 'welcome',
  props: {
    msg: String
  },
  components:{
    
  },
  data() {
    return {
         name : null
    }
  },
  methods :{
      navigateToHome:function(){
          let name = this.name;
          this.$router.push({name:'home',params:{name}});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
