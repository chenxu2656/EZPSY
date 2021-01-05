import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './http'
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios; //这句话设置之后所有的组件都能使用axios了


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
