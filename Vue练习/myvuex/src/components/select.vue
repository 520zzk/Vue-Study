<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input  
        :is-show.sync="listShow"
        :title="title"
        ></select-input>
        
        <list 
        v-show="listShow" 
        :data = "listData"
        @changeVal="clickTitleHander"
        ></list>
      </div>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

let listData = [
  {
    title:'javascript'
  },
  {
    title:'html+css'
  },
  {
    title:'jQuery'
  },
  {
    title:'react'
  },
  {
    title:'node.js'
  },
]
export default {
  data(){
      return {
       listShow:false,
       listData,
       title:''
      }
  },
 
  components: {
    selectInput,
    list
  },
  methods:{ 
  clickTitleHander(val){
   this.title = val;
  }
  }
}
</script>
