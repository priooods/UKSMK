import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseHome from '../views/BaseHome.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue';
import Karyawan from '../views/karyawan/Karyawan.vue';
import TambahKaryawan from '../views/karyawan/Tambah_karyawan.vue'
import KaryawanDetail from '../views/karyawan/Details.vue'
import store from '../store/index';
import error_page from '../views/Error_page.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(window.localStorage.getItem("res") != null){
        window.localStorage.removeItem("res");
      }
      next();
    }
  },
  {
    path: '/home',
    component: BaseHome,
    beforeEnter: (to,from,next) => {
      if(store.getters.getData == undefined){
        next({ name: "Login" })
      } else
      store.dispatch(`allUsers`);
      store.dispatch(`byukOne`);
      store.dispatch(`byukTwo`);
      store.dispatch(`byukThree`);
      next();
    },
    children: [
      { 
        path: '/karyawan', 
        component: Karyawan,
      }, 
      { path: '/', component: Home },
      { path: '/karyawan/add', component: TambahKaryawan },
      { path: '/karyawan/details', component: KaryawanDetail }
    ]
  },
  { path: '/dev', component: error_page },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active", 
  linkExactActiveClass: "active",
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
export default router
