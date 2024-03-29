import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs'; 
import { enableRipple } from '@syncfusion/ej2-base';
import { DateTimePickerPlugin } from '@syncfusion/ej2-vue-calendars';
import VueTreeList from 'vue-tree-list'
import rate from 'vue-rate';
 




Vue.use(rate)
Vue.use(VueTreeList)
Vue.use(DateTimePickerPlugin);
enableRipple(true);
Vue.use(ColorPickerPlugin);


//import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


Vue.use(VueAxios, axios);
Vue.use(VueGoodTablePlugin);




new Vue({
    
    //el: '#app',
    //render: h => h(App)
    
  }).$mount("#app");