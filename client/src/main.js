import Vue from 'vue'
import App from './App.vue'

import store from './store'
import ElementUI from 'element-ui';
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import axios from './http';
// import VBlockly, { Blockly } from 'v-blockly';
// Vue.component('v-blockly', VBlockly)
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios; //这句话设置之后所有的组件都能使用axios了
Vue.config.silent = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
