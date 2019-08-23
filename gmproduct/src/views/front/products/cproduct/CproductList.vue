<template>
    <div class="terminal">
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
            <el-col :span="22" :offset="1">
                <el-table
                        :data="tableData"
                        height="400"
                        border
                        style="width: 100%;margin-left:10px ">
                    <el-table-column
                            fixed
                            prop="product"
                            label="项目名称"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="platform"
                            label="机芯"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="marketName"
                            label="市场名称"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="swpm"
                            label="软件PM"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="modelname"
                            label="ModelName"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="customerid"
                            label="CustomerID"
                            width="130">
                    </el-table-column>
                    <el-table-column
                            prop="roProductName"
                            label="ro_product_name"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="xgimiProductName"
                            label="xgimi_product_name"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="roProductModel"
                            label="ro_product_model"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="roProductDevice"
                            label="ro_product_device"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="roProductBoard"
                            label="ro_product_board"
                            width="150">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Terminal',
        data() {
            return {
                search: ''
            };
        },
        mounted() {
            this.$store.dispatch('Productlist/getData');
        },
        computed: {
            tableData() {
                return this.$store.state.Productlist.tableData;
            }
        },
        methods: {
            handleKeywordsInput() {
                this.$store.commit('Productlist/searchData', this.search);
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