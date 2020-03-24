import Vue from 'vue';
import Layout from './views/Layout'
import Loader from './views/partials/Loader.vue'
import AppHeader from './views/partials/AppHeader.vue'
import Subheader from './views/partials/Subheader.vue'
import Appfooter from './views/partials/Appfooter.vue'
import SideBar from './views/partials/SideBar.vue'
import ScrollTop from './views/partials/ScrollTop.vue'
import QuickNav from './views/partials/QuickNav.vue'
import Brand from './views/partials/header/header-top/Brand.vue'
import TopBar from './views/partials/header/header-top/TopBar.vue'
import HMenu from './views/partials/header/header-bottom/HMenu.vue'
import logIn from './views/logIn.vue'
import LogOutBtn from './views/partials/LogOutBtn.vue'
import signUp from './views/partials/signup-signin/signUp.vue'
import signIn from './views/partials/signup-signin/signIn.vue'
import dataTable from './views/partials/dataTable.vue'
import tableAction from './views/partials/dataTable/tableAction.vue'

Vue.component('layout', Layout);
Vue.component('loader', Loader);
Vue.component('appHeader', AppHeader);
Vue.component('subheader', Subheader);
Vue.component('appfooter', Appfooter);
Vue.component('sideBar', SideBar);
Vue.component('scrollTop', ScrollTop);
Vue.component('quickNav', QuickNav);
Vue.component('brand', Brand);
Vue.component('topBar', TopBar);
Vue.component('HMenu', HMenu);
Vue.component('login', logIn);
Vue.component('log-out-btn', LogOutBtn);
Vue.component('sign-up', signUp);
Vue.component('sign-in', signIn);
Vue.component('data-table', dataTable);
Vue.component('table-action', tableAction);