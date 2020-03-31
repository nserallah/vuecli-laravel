import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import logIn from '../views/logIn.vue'
import dataTable from '../views/partials/dataTable/dataTable.vue'
import myPickers from '../views/partials/date/myPickers.vue'
import calendar from '../views/partials/date/calendar.vue'
import treeCom from '../views/partials/tree/treeCom.vue'

Vue.use(VueRouter)


const routes = [
//   {
//     path: '/',
//     redirect: {
//         name: "login"
//     }
// },
    {
      path: "/",
      name: "layout",
      component: Layout,
      children: [
        {path: "/", name: "datatable", component: dataTable},
        {path: "/pickers", name: "date pickers", component: myPickers},
        {path: "/calendar", name: "date calendar", component: calendar},
        {path: "/tree", name: "tree com", component: treeCom}
      ]
    },
    {
      path: "/login",
      name: "login",
      component: logIn,
      
    }

  ];


const router = new VueRouter({
    mode: 'history',
    routes // short for routes: routes
})

export default router;