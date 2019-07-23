<template>
  <div>
    <div class="page_bottom">
        <span  style="margin-left:50px" id="ALL" v-bind:class="{select_item : active == 'ALL'}" @click="changeList">ALL&nbsp;</span>
        <span  style="margin-left:50px" id="Active" v-bind:class="{select_item : active == 'Active'}"  @click="changeList">Active&nbsp;</span>
        <span  style="margin-left:50px" id="Complete" v-bind:class="{select_item : active == 'Complete'}" @click="changeList">Complete</span>
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
          selectTpye:null,
          active:"ALL"
      }
  },
  methods:{
      changeList:function(event){
          this.selectTpye = event.target.id;
          this.active = event.target.id;
          this.$store.commit("changeList",this.selectTpye);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
