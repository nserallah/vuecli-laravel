import Vue from 'vue'
import VueRouter from 'vue-router'
//import routes from './routes'
import Layout from '../views/Layout.vue'
import logIn from '../views/logIn.vue'

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