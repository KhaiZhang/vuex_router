<template>
  <div>
    <ol class ="list" >
      <li v-for="(item,index) in show(this.$store.state.itemList)" v-bind:key="index" :class="{rackA:index%2==0}" >
        <item :item = item  :index = index></item>
      </li>
    </ol>
  </div>
</template>

<script>
import item from './item.vue'
export default {
  name: 'itemList',
  props: {
    msg: String
  },
  components:{
    item
  },
  data(){
      return {
          currentContent:null,
          selectTpye:null,
          itemList:null
      }
  },
  methods:{
      show:function(list){ 
          this.selectTpye = this.$store.state.selectTpye;
          if(this.selectTpye == 'ALL') return list;
          else if(this.selectTpye == 'Active') return list.filter(item => !item.completed);
          else return list.filter(item => item.completed);
      }
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
