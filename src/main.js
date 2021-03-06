import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.min.css";
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
