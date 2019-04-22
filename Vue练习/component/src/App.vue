<!--模板-->
<template>
  <div id="app">
    <span :style="{background: red ?'blue' : ''} ">改变我把</span>
    <span :style="{fontSize: size ?(size+'px') : ''} ">改变我把</span>
    <modal title="温馨提示" ok-value="OK" @okClick="ClickOk01"></modal>
    <modal title='特别告示'  @okClick="ClickOk02"></modal>


  <!--组件通信-->
  <!--.sync方式 可多个-->
  <zzk :title.sync="syzzk" :size.sync="size"></zzk>

  <!--v-model 不可多个-->
  <vmodel title="我是model" v-model="red"> </vmodel>
  </div>
</template>

<!--js-->
<script>
//引入组件
//import HelloWorld from './components/HelloWorld.vue'
import Modal from "./components/modal"
import zzk from "./components/zzk"
import vmodel from "./components/vmodel"
export default {
  name: 'app',
  components: { //局部组件注册
   Modal,
   zzk,
   vmodel
  },
  data(){
    return {
     red:false,
     size:15,
     syzzk:'我是zzk组件'
    }
  },
  methods:{
    ClickOk01(){
      this.red = true;
    },
    ClickOk02(){
     this.size = 20;
    }
  }
}
</script>

<!--样式-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
