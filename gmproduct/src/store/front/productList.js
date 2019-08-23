import ajax from '@/assets/js/ajax';

export default {
    namespaced: true,
    state: {
        tableData: [],
        origin: []
    },
    mutations: {
        getTableData(state, res) {
            state.tableData.splice(0, state.tableData.length);
            state.tableData = res.data.data;
            state.origin = res.data.data;
        },
        searchData(state, search) {
            if (search) {
                state.tableData = state.origin.filter(item =>
                    Object.keys(item).some(key =>
                        String(item[key]).indexOf(search) > -1)
                );
            }else state.tableData = state.origin;
        }

    },
    actions: {
        getData(context) {
            ajax({
                url: '/infocent/projectsearch/projectlist/getbaseinfo',
            }).then(res => {
                context.commit('getTableData', res);
            });
        }
    }
};