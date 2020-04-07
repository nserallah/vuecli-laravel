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
import dataTable from './views/partials/dataTable/dataTable.vue'
import tableAction from './views/partials/dataTable/tableAction.vue'
import myPickers from './views/partials/date/myPickers.vue'
import calendar from './views/partials/date/calendar.vue'
import colorPicker from './views/partials/date/pickers/colorPicker.vue'
import datePicker from './views/partials/date/pickers/datePicker.vue'
import dateTimePicker from './views/partials/date/pickers/dateTimePicker.vue'
import treeCom from './views/partials/tree/treeCom.vue'
import itemCard from './views/partials/slider/itemCard.vue'
import itemInfo from './views/partials/itemInfo/itemInfo.vue'
import overviewItem from './views/partials/itemInfo/moreInfo/overviewItem.vue'
import featuresItem from './views/partials/itemInfo/moreInfo/featuresItem.vue'
import commentsItem from './views/partials/itemInfo/moreInfo/commentsItem.vue'
import formRegister from './views/partials/form-register/formRegister.vue'



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
Vue.component('my-pickers', myPickers);
Vue.component('my-calendar', calendar);
Vue.component('color-picker', colorPicker);
Vue.component('date-picker', datePicker);
Vue.component('date-time-picker', dateTimePicker);
Vue.component('tree-com', treeCom);
Vue.component('item-card', itemCard);
Vue.component('item-info', itemInfo);
Vue.component('overview-item', overviewItem);
Vue.component('features-item', featuresItem);
Vue.component('comments-item', commentsItem);
Vue.component('form-register', formRegister);

