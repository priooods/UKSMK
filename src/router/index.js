import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseHome from '../views/BaseHome.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue';
import Karyawan from '../views/karyawan/Karyawan.vue';
import TambahKaryawan from '../views/karyawan/Tambah_karyawan.vue'
import store from '../store/index';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {title: 'Login - UKSMK'},
  },
  {
    path: '/home',
    component: BaseHome,
    beforeEnter: (to,from,next) => {
      if(store.getters.getData == undefined){
        next({ name: "Login" })
      } 
      if(store.getters.getData != null){
        store.dispatch("allUsers");
        next();
      }
    },
    children: [
      { 
        path: '/karyawan', 
        component: Karyawan, 
        meta: {title: 'Karyawan - UKSMK'},
        // beforeEnter: (to, from, next) => {
        //   store.dispatch("allUsers");
        //   next();
        // }
      },
      { path: '/', component: Home, meta: {title: 'Dashboard - UKSMK'} },
      { path: '/karyawan/add', component: TambahKaryawan, meta: {title: 'Karyawan - UKSMK'} }
    ]
  },
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
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})
export default router
