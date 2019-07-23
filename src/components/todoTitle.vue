<template>
  <div>
    <h2>{{title}}</h2>
    <p class="tips">{{subTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'inputItem',
  props: {
    msg: String,
    title: String,
    subTitle: String
  },
  data(){
      return {
          inputValue: null
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
