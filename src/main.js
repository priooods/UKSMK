import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store';
import Vuex from 'vuex';
import 'boxicons/css/boxicons.min.css'
import 'vuesax/dist/vuesax.css'
import Antd from 'ant-design-vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'ant-design-vue/dist/antd.css'
import Vue2Filters from 'vue2-filters'
Vue.use(BootstrapVue)
Vue.use(Vuex);
Vue.use(VueAxios,axios)
Vue.use(Vuesax);
Vue.use(Vue2Filters)
Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
  store: store,
  router: router,
  render: h => h(App)
}).$mount('#app')
