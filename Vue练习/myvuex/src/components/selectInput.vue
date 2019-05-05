<template>
    <div class="clearFix">
      <input
        readonly='readonly'
        class="keyWord"
       @click="clickShow"
       :value="title"
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>

export default {
  props:{
    isShow:{
      type:Boolean
    },
    title:{
      type:String,
      default:''
    }
  },
  computed:{
    comShow(){
      return this.isShow
    }
  },
  methods:{
    clickShow(){  //向父级告知
      this.$emit('update:isShow',!this.comShow)
    }
  }
}
</script>
