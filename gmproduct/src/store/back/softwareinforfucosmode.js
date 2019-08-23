import ajax from '../../assets/js/ajax'
import { Notification } from 'element-ui';

export default {
    namespaced: true,
    state: {
        tableData: [],
        origin: [],
        resform:{}
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
                        String(item[key]).indexOf(search)> -1)
                )
            }else state.tableData = state.origin;
        }
    },

    actions: {
        getData({commit}) {
            ajax({
                url: '/infocent/projectsearch/getsoftwarefucinfo',
            }).then(res => {
                commit('getTableData', res);
            });
        },
        //删除
        DeleteData(context,multipleSelection){
            const selectId = [];
            multipleSelection.filter(item => selectId.push(item.softwareProductId));
            ajax({
                method: 'post',
                url: '/infocent/projectsearch/removesoftwarefucinfo',
                data: selectId
            }).then(res => {
                if (res.data.status === 200) {
                    Notification({
                        title: '提示',
                        message: '删除成功',
                        type: 'success'
                    });
                }
                ajax({
                    url: '/infocent/projectsearch/getsoftwarefucinfo',
                }).then(res => {
                    context.commit('getTableData', res);
                });
            });
        },
        //添加修改页
        //显示数据
        getFormData({state},softwareProductId){
            ajax({
                url: '/infocent/projectsearch/getsoftwarefucinfo',
            }).then(res => {
                const targetData = res.data.data.filter(item => item.softwareProductId === softwareProductId);
                state.resform=targetData[0]
            });
        },
        //增加
        addFormData(context,form){
            console.log(form)
            ajax({
                url: '/infocent/projectsearch/addsoftwarefucinfo',
                method: 'post',
                data: form
            }).then(res => {
                if (res.data.status === 411) {
                    Notification({
                        title: '提示',
                        message: '请不要重复添加',
                        type: 'warning'
                    });
                } else if (res.data.status === 200) {
                    Notification({
                        title: '提示',
                        message: '添加成功',
                        type: 'success'
                    });
                }
            });
        },
        //修改
        updateFormData(context,form){
            ajax({
                url: '/infocent/projectsearch/changesoftwarefucinfo',
                method: 'post',
                data: form,
            }).then(res => {
                if (res.data.status === 200) {
                    Notification({
                        title: '提示',
                        message: '修改成功',
                        type: 'success'
                    });
                }else{
                    Notification({
                        title: '提示',
                        message: '修改失败',
                        type: 'success'
                    });
                }
            });
        }
    }
};