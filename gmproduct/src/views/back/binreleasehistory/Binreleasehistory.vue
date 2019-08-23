<template>
    <div>
        <el-row>
            <el-col :span="4" :offset="1">
                <h2>项目发布历史</h2>
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
                        height="75vh"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="oa_ID"
                            label="OA流程编号"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="bin_product"
                            label="所属项目"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="bin_version"
                            label="发布版本">
                    </el-table-column>
                    <el-table-column
                            prop="bin_gmui_version"
                            label="GMUI版本">
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
        name: 'Binreleasehistory',
        data() {
            return {
                multipleSelection: [],
                dialogVisible:false,
                search:''
            };
        },
        mounted() {
            this.$store.dispatch('Binreleasehistory/getData')
        },
        computed: {
            tableData() {
                return this.$store.state.Binreleasehistory.tableData;
            }
        },
        methods: {
            handleKeywordsInput() {
                this.$store.commit('Binreleasehistory/searchData', this.search);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleDelete() {
                this.dialogVisible = false;
                this.$store.dispatch('Binreleasehistory/DeleteData',this.multipleSelection)
            },
            handleAdd() {
                this.$router.push({ path: 'binreleasehistoryadd' });
            },
            handleUpdate(row) {
                this.$router.push({ path: 'binreleasehistoryupdate', query: { oa_ID: row.oa_ID } });
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