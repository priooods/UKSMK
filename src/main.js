import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store';
import Vuex from 'vuex';
import vuetify from './plugin/vuetify';
import Vue2Filters from 'vue2-filters';
import BootstrapVue from 'bootstrap-vue';
import Vuesax from 'vuesax';
import VueExcelXlsx from 'vue-excel-xlsx';
import VuetifyMoney from 'vuetify-money';
import VueHtml2pdf from 'vue-html2pdf';
import 'vuesax/dist/vuesax.css';
import "vue-toastification/dist/index.css";
import 'vuesax/dist/vuesax.css';
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(VueExcelXlsx);
import 'vuesax/dist/vuesax.css'
import 'boxicons/css/boxicons.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueHtml2pdf)
Vue.use(VuetifyMoney);
Vue.use(BootstrapVue)
Vue.use(Vuex);
Vue.use(Vuesax);
Vue.use(VueAxios,axios)
Vue.use(Vue2Filters)

new Vue({
  store: store,
  router: router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
