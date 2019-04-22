<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav-box-ul">
        <!-- <li>
          <a href="#/about">about</a>
        </li>
        hash方式
        -->
  <router-link to="/home" tag="li">
  <!-- 中间还可添加别的 -->
  <i></i>home
  </router-link>
  <router-link to="/about#h1" tag="li" active-class="aboutActive">about</router-link>
  <router-link to="/document" tag="li">document</router-link>
  <router-link to="/user" tag="li">user</router-link>
        <!-- 
较好的,默认是一个a标签 to 表示需要链接的url tag 表士router-link以什么标签渲染
<router-link to="/home">home：需要显示的文字</router-link>
默认点击切换、event属性修改默认行为
        -->
      </ul>
    </div>
    <transition mode="out-in" :name="names">
      <!-- transition 过渡标签 mode过渡模式 name 用来替代前面的 V -->
         <router-view ></router-view>  <!--可以添加一个类名，实现总体样式-->
    </transition>
   
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  watch:{
    $route(to,form){
     let t = to.meta.index;
     let f = form.meta.index;
     console.log(t,f)
     t > f ? this.names = 'right':this.names = 'left' ;
    } 
  },
  data(){
    return {
      names:'left'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left-enter,.right-leave-to{
  transform:translateX(100%)
}
.left-enter-to,.left-leave,.right-leave,.right-enter-to{
  transform:translateX(0)
}
/* .v-enter-to{  原始写法
  opacity:1
} */
.left-leave-to,.right-enter{
   transform:translateX(-100%)
}
.left-leave-to,.left-enter,.right-leave-to,.right-enter{
 opacity:0
}
.left-leave,.left-enter-to,.right-leave,.right-enter-to{
opacity:1
}
.left-leave-active,.left-enter-active,.right-enter-active,.right-leave-active{
  transition:1s
}

</style>
