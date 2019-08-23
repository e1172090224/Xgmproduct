import ajaxw from '../../assets/js/ajaxw';

export default {
    namespaced: true,
    state: {
        tableData: [],
    },
    mutations: {
        getTableData(state, res) {
            console.log(res)
            state.tableData = res.data.data;
        },
    },
    actions: {
        getData(context) {
            ajaxw({
                url: 'infocent/appAPK/info',
            }).then(res => {
                context.commit('getTableData', res);
            });
        }
    }
};