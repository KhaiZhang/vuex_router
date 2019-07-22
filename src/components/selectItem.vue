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
          selectTpye:null
      }
  },
  methods:{
      changeList:function(event){
          this.selectTpye=event.target.id;
          this.$store.commit("changeList",this.selectTpye);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
