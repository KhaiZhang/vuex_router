<template>
  <div>
    <input type="text" id="inputNum" name="inputNum" v-model="inputValue">
    <button class="addbtn" @click="addItem()">Add</button>
  </div>
</template>

<script>
export default {
  name: 'inputItem',
  props: {
    msg: String
  },
  data(){
      return {
          inputValue: null
      }
  },
  methods:{
      addItem:function(){
          this.$store.commit("addItem",{
              isFinish: false, 
              content: this.inputValue, 
              isEdit: false, 
              isEditable: true
              });
        this.inputValue = null;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
