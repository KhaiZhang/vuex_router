<template>
  <div>
    <div class="page_bottom">
        <span class="select_item" id="ALL" @click="changeList">ALL&nbsp;</span>
        <span class="select_item" id="Active"  @click="changeList">Active&nbsp;</span>
        <span class="select_item" id="Complete"  @click="changeList">Complete</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectItem',
  props: {
    msg: String
  },
  data(){
      return {
          
      }
  },
  methods:{
      changeList:function(){
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
