//入口文件
//router 路由

import Vue from 'vue'
// import VueRouter from 'vue-router' //引入

// Vue.use(VueRouter)                //作为插件使用
import App from './App'
// import Home from './components/home.vue'
//配置路由
// var router = new VueRouter({ //
//   routes :[
//    {
//       path:'/',
//       component:'Home'
//    }
//   ]
// })
new Vue({   //
  el:'#app',
  // router,
  template:'<App/>',
  components:{
    App
  }
})