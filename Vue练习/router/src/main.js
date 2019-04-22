import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import router from '@/router/router.js'
import './assets/css/App.css'
new Vue({
  render: h => h(App),  //
  components:{
    App
  },
  router
}).$mount('#app')
 