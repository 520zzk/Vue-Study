import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use({
  install(Vue){
    Vue.prototype.$zzkBus = new Vue
  }
})
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
