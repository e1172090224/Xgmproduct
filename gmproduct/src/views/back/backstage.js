import Vue from 'vue'
import Login from './login/Login.vue'
import router from './router'

Vue.use(require('vue-wechat-title'))

new Vue({
    router,
    render: h => h(Login)
}).$mount('#login')