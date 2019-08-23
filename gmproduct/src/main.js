import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './routes/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import eCharts from 'echarts'
import './assets/css/clearstyle.css'

Vue.use(ElementUI);
Vue.use(eCharts)
Vue.prototype.$echarts = eCharts
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
