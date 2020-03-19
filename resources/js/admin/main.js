import Vue from 'vue'
import App from "./views/App.vue";
import router from './router'
import './components'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {i18n} from './views/i18n'


Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  i18n,
  el: '#app',
  router,
  render: h => h(App)
  
}).$mount("#app");