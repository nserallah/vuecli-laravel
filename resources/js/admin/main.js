import Vue from 'vue'
import router from './router'
import './components'
import {i18n} from './views/i18n'




Vue.config.productionTip = false

new Vue({
  i18n,
  el: '#app',
  router,
});