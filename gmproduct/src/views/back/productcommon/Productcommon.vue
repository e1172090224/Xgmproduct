<template>
    <div>
        <el-row>
            <el-col :span="4" :offset="1">
                <h2>项目基本信息</h2>
            </el-col>
            <el-col :span="3" :offset="12">
                <el-button class="topBut" icon="el-icon-plus" type="primary" plain @click="handleAdd">添加新项</el-button>
            </el-col>
            <el-col :span="3">
                <el-button class="topBut" icon="el-icon-delete" type="danger" plain @click="dialogVisible = true">删除选中</el-button>
            </el-col>
        </el-row>
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
        <el-row type="flex" justify="center">
            <el-col :span="22">
                <el-table
                        :data="tableData"
                        stripe
                        style="width:100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="product"
                            label="项目名称"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="platform"
                            label="机芯"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="productClass"
                            label="项目类别"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="swpm"
                            label="软件PM">
                    </el-table-column>
                    <el-table-column width="150px">
                        <template slot-scope="scope">
                            <el-button type="primary" round plain @click="handleUpdate(scope.row)">修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span class="confirm">确认要删除吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleDelete">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ajaxw from '../../../assets/js/ajaxw';

    export default {
        name: 'Productcommon',
        data() {
            return {
                multipleSelection: [],
                dialogVisible:false,
                search:''
            };
        },
        mounted() {
            this.$store.dispatch('Productcommon/getData')
        },
        computed: {
            tableData() {
                return this.$store.state.Productcommon.tableData;
            }
        },
        methods: {
            handleKeywordsInput() {
                this.$store.commit('Productcommon/searchData', this.search);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleDelete() {
                this.dialogVisible = false;
                this.$store.dispatch('Productcommon/DeleteData',this.multipleSelection)
            },
            handleAdd() {
                this.$router.push({ path: 'Productcommonadd' });
            },
            handleUpdate(row) {
                this.$router.push({ path: 'Productcommonadd', query: { product: row.product } });
                console.log(row.product)
            },
            handleClose(){
                this.dialogVisible = false;
            }
        }
    };
</script>

<style scoped>
    .topBut {
        margin: 20px 0;
    }
</style>