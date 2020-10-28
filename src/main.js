import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery/dist/jquery.min.js';
import Popper from '@popperjs/core/dist/umd/popper.min.js';
import Bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.min.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
