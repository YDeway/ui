import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Element from 'element-ui';
import Axios from 'axios';

import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/global.css'



Vue.config.productionTip = false;

Axios.defaults.baseURL = 'http://localhost/';
Vue.prototype.$http = Axios;

Vue.use(Element);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
