import Vue from 'vue'
import App from "./views/App.vue";
import router from './router'
import './components'
import {i18n} from './views/i18n'
import './plugins.js'




Vue.config.productionTip = false

new Vue({
  i18n,
  el: '#app',
  router,
  render: h => h(App)
  
}).$mount("#app");