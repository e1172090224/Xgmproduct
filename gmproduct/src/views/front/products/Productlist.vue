<template>
    <div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="基本信息概览" name="first"> <ProList></ProList></el-tab-pane>
            <el-tab-pane label="项目类别分类" name="second"><Typec></Typec></el-tab-pane>
            <el-tab-pane label="GMUI版本分类" name="third"> <GMUIc></GMUIc></el-tab-pane>
        </el-tabs>
    </div>

</template>

<script>
    import ProList from './cproduct/CproductList.vue';
    import GMUIc from './cproduct/GMUIversionClassify.vue';
    import Typec from './cproduct/TypeClassify.vue';

    export default {
        name: 'productList',
        data() {
            return {
                activeName: 'first',
                tableData: [],
                search:''
            };
        },
        components: {
            ProList,
            GMUIc,
            Typec
        },
    };
</script>

<style scoped>
.el-tabs{
    margin-left:20px ;
}
</style>