import Vue from 'vue'
import App from "./views/App.vue";
import router from './router'
import './components'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {i18n} from './views/i18n'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'




Vue.use(VueGoodTablePlugin);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  i18n,
  el: '#app',
  router,
  render: h => h(App)
  
}).$mount("#app");