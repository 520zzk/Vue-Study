<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="de"/>
      <span>{{num}}</span>
      <input type="button" value="+"  @click="add"/>
      <input type="button" value="异步"  @click="addAct"/>
    </div>
  </div>
</template>

<script>

export default {
  computed:{
    num(){
     return this.$store.state.count
    }
  },
  methods:{
    add(){
      //提交给mutations用commit 
      this.$store.commit('addCount',{n:5})  
      //进行事件的提交,第二个传参，最好传对象，方便扩展
    },
    de(){
      // this.$store.commit('deCount')
      this.$store.commit({  //第二种写法
        type:'deCount',
        de:10
      })
    },
    addAct(){
      //提交给Action用dispatch 需要异步时
      this.$store.dispatch('addAction') 
    }
  }

}
</script>
<style>

</style>
