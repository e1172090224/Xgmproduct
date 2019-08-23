<template>
    <div>
        <el-row>
            <el-col :span="4" :offset="1">
                <h2>软件规格 音效属性</h2>
            </el-col>
            <el-col :span="3" :offset="12">
                <el-button class="topBut" icon="el-icon-plus" type="primary" plain @click="handleAdd">添加新项</el-button>
            </el-col>
            <el-col :span="3">
                <el-button class="topBut" icon="el-icon-delete" type="danger" plain @click="dialogVisible = true">删除选中
                </el-button>
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
                            prop="softwareProductId"
                            label="所属名称">
                    </el-table-column>
                    <el-table-column
                            prop="multipleSoundEffect"
                            label="多音效">
                    </el-table-column>
                    <el-table-column
                            prop="virtualSurrond"
                            label="虚拟环绕声">
                    </el-table-column>
                    <el-table-column width="100px">
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

    export default {
        name: 'softwareinforsoundproperties',
        data() {
            return {
                multipleSelection: [],
                dialogVisible:false,
                search:''
            };
        },
        mounted() {
            this.$store.dispatch('Softwareinforsoundproperties/getData');
        },
        computed: {
            tableData() {
                return this.$store.state.Softwareinforsoundproperties.tableData;
            }
        },
        methods: {
            handleKeywordsInput() {
                this.$store.commit('Softwareinforsoundproperties/searchData', this.search);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleAdd() {
                this.$router.push({ path: 'hardwareinfordriveradd' });
            },
            handleUpdate(row) {
                this.$router.push({
                    path: 'hardwareinfordriveradd',
                    query: { softwareProductId: row.softwareProductId }
                });
            },
            handleDelete() {
                this.dialogVisible = false;
                this.$store.dispatch('Softwareinforsoundproperties/DeleteData', this.multipleSelection)
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

    .el-table /deep/ thead {
        top: 10px;
    }
</style>