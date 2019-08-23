import ajax from '../assets/js/ajaxw';
import router from '../routes/router';

export default {
    namespaced: true,
    state: {
        userName:''
    },
    mutations: {},
    actions: {
        //登陆
        normalLogin({state}, loginData) {
            ajax({
                url: 'infocent/auth/normal/login',
                method: 'post',
                data: loginData
            }).then(res => {
                // let reg = /:"^"$/;
                // console.log(res.config.data.match(reg))
                state.userName = JSON.parse(res.config.data).username;
                router.push({ path: '/back' });
            });
        },
        //注销
        loginOut(context) {
            ajax({
                url: 'infocent/auth/normal/loginout',
            }).then(res => {
                router.push({ path: '/login' });
            });
        }
    }
};