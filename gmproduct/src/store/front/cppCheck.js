import ajax from '@/assets/js/ajax';

export default {
    namespaced: true,
    state: {
        chartData:[]
    },
    mutations: {
        getChartData(state,res){
            state.chartData=res.data.data
        }
    },
    actions: {
        getData({ commit }) {
            ajax({
                url: '/infocent/cppcheck/info',
            }).then(res => {
                commit('getChartData', res);
            });
        }
    }
};