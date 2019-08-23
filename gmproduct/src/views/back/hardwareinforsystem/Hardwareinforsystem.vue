<template>
    <div>
        <el-row>
            <el-col :span="4" :offset="1">
                <h2>硬件规格 系统</h2>
            </el-col>
            <el-col :span="3" :offset="12">
                <el-button class="topBut" icon="el-icon-plus" type="primary" plain @click="handleAdd">添加新项</el-button>
            </el-col>
            <el-col :span="3">
                <el-button class="topBut" icon="el-icon-delete" type="danger" plain @click="dialogVisible = true">删除选中
                </el-button>
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
                            width="100"
                            prop="softwareProductId"
                            label="所属项目">
                    </el-table-column>
                    <el-table-column
                            prop="mainIc"
                            label="主IC">
                    </el-table-column>
                    <el-table-column
                            prop="memory"
                            label="内存">
                    </el-table-column>
                    <el-table-column
                            prop="emmc"
                            label="EMMC">
                    </el-table-column>
                    <el-table-column
                            prop="debugMode"
                            label="DeBug方式">
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
        name: 'hardwareinforsystem',
        data() {
            return {
                multipleSelection: [],
                dialogVisible:false,
                search:''
            };
        },
        mounted() {
            this.$store.dispatch('Hardwareinforsystem/getData');
        },
        computed: {
            tableData() {
                return this.$store.state.Hardwareinforsystem.tableData;
            }
        },
        methods: {
            handleKeywordsInput() {
                this.$store.commit('Hardwareinforsystem/searchData', this.search);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleAdd() {
                this.$router.push({ path: 'hardwareinforsystemadd' });
            },
            handleUpdate(row) {
                this.$router.push({
                    path: 'hardwareinforsystemadd',
                    query: { softwareProductId: row.softwareProductId }
                });
            },
            handleDelete() {
                this.dialogVisible = false;
                this.$store.dispatch('Hardwareinfordriver/DeleteData', this.multipleSelection)
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