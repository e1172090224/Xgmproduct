import ajax from '@/assets/js/ajax';
import ajaxw from '@/assets/js/ajaxw'
export default {
    namespaced: true,
    state: {
        productData: [],
        releaseHistory:[],
        gridDataSoft: [],
        gridDataHard: [],
    },
    mutations: {
    },
    actions: {
        getData({state},product) {
            ajax({
                url: '/infocent/projectsearch/projectlist/getbaseinfo'
            }).then(res => {
                state.productData=res.data.data.filter(item => item.product === product);
                console.log(state.productData)
            });
        },
        getHistoryData({state},product){
            ajaxw({
                url: 'infocent/admin/BinHistoryView/' + product,
            }).then(res => {
                state.releaseHistory = res.data.data
            });
        },
        handleSoftData({state},product){
            state.gridDataSoft.splice(0);
            ajax({
                url: '/infocent/projectsearch/softwareinfo/' + product,
            }).then(res => {
                state.gridDataSoft.push(res.data.data);
            });
        },
        handleHardData({state},product){
            state.gridDataHard.splice(0);
            ajax({
                url: '/infocent/projectsearch/hardwareinfo/' + product,
            }).then(res => {
                state.gridDataHard.push(res.data.data);
            });
        },
    }
};