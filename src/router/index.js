import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseHome from '../views/BaseHome.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue';
import Karyawan from '../views/karyawan/Karyawan.vue';
import TambahKaryawan from '../views/karyawan/Tambah_karyawan.vue'
import KaryawanDetail from '../views/karyawan/Details.vue'
import notfound from '../views/Not_Found.vue';
import salary from '../views/salary/Salary.vue';
import invoice from '../views/Invoice.vue';
import store from '../store/index';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(window.localStorage.getItem("data") != null){
        window.localStorage.removeItem("data");
        next();
      }else
      next();
    },
  },
  {
    path: '/home',
    component: BaseHome,
    name: 'BaseHome',
    beforeEnter: (to,from,next) => {
      if(window.localStorage.getItem("data") == undefined 
      || window.localStorage.getItem("data") == null){
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
        name: 'karyawan',
      }, 
      { path: '/homepage', component: Home, name: 'Home' },
      { path: '/salary', component: salary, name: 'Salary', },
      { path: '/karyawan/add', component: TambahKaryawan, name: 'Add' },
      { path: '/invoice', component: invoice, name: 'Invoice' },
      { path: '/karyawan/details', component: KaryawanDetail, name: 'Details' }
    ]
  },
  { path: '*', component: notfound, name: 'NotFound' }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
  linkActiveClass: "active", 
  linkExactActiveClass: "active",
})
export default router
