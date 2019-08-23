<template>
    <div>
        <el-row>
            <el-col :span="8" :offset="8">
                <el-input
                        placeholder="请输入关键字"
                        icon="search"
                        class="search"
                        v-model="search"
                        @input="handleKeywordsInput">
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="20" :offset="2">
                <el-table
                        :data="tableData"
                        border
                        height="400">
                    <el-table-column
                            prop="gmuiVersion"
                            label="GMUI版本">
                    </el-table-column>
                    <el-table-column
                            prop="platform"
                            label="机芯">
                    </el-table-column>
                    <el-table-column
                            prop="product"
                            label="项目名称">
                    </el-table-column>
                    <el-table-column
                            prop="marketName"
                            label="市场名称">
                    </el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    @click="handleEdit(scope.row)">查看详细</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>

</template>

<script>

    export default {
        name: 'GMUIversionClassify',
        data() {
            return {
                search: ''
            };
        },
        mounted() {
            this.$store.dispatch('GMUIversionClassify/getData');
        },
        computed: {
            tableData() {
                return this.$store.state.GMUIversionClassify.tableData;
            }
        },
        methods: {
            handleEdit(row){
                this.$router.push({path:"ProductDetail",query:{product:row.product}})
            },
            handleKeywordsInput() {
                this.$store.commit('GMUIversionClassify/searchData', this.search);
            }
        },
    };
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .el-row:last-child {
        margin-bottom: 0;
    }
</style>