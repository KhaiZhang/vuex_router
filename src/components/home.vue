<template>
  <div>
    <div>
        <button>back</button>
        <span>{{username}}</span>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
