<template>
    <div>
        <el-row>
            <el-col :span="4" :offset="1">
                <h2>硬件规格 显示</h2>
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
                            prop="resolutionRatio"
                            label="DMD/分辨率">
                    </el-table-column>
                    <el-table-column
                            prop="engineManufacturer"
                            label="光机厂商">
                    </el-table-column>
                    <el-table-column
                            width="100"
                            prop="galvanometer"
                            label="振镜">
                    </el-table-column>
                    <el-table-column
                            prop="ichips"
                            label="ICHIPS">
                    </el-table-column>
                    <el-table-column
                            width="100"
                            prop="steplessFocus"
                            label="无极变焦">
                    </el-table-column>
                    <el-table-column
                            prop="projectiveMode"
                            label="投影方式">
                    </el-table-column>
                    <el-table-column
                            prop="throwRatio"
                            label="投射比">
                    </el-table-column>
                    <el-table-column
                            prop="diaphragm"
                            label="动态光圈"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="light"
                            label="亮度">
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
        name: 'hardwareinfordisplay',
        data() {
            return {
                multipleSelection: [],
                dialogVisible: false,
                search:''
            };
        },
        mounted() {
            // ajax({
            //     url: '/infocent/projectsearch/gethardwaredisinfo',
            // }).then(res => {
            //     console.log(res);
            //     this.tableData = res.data.data;
            // });
            this.$store.dispatch('Hardwareinfordisplay/getData');
        },
        computed: {
            tableData() {
                return this.$store.state.Hardwareinfordisplay.tableData;
            }
        },
        methods: {
            handleKeywordsInput() {
                this.$store.commit('Hardwareinfordisplay/searchData', this.search);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val
            },
            handleAdd() {
                this.$router.push({ path: 'hardwareinfordisplayadd' });
            },
            handleUpdate(row) {
                this.$router.push({
                    path: 'hardwareinfordisplayadd',
                    query: { softwareProductId: row.softwareProductId }
                });
                // this.$store.commit('Hardwareinfordisplay/setId',row.softwareProductId )
            },
            handleDelete() {
                this.dialogVisible = false;
                // const selectId = [];
                // this.multipleSelection.filter(item => selectId.push(item.softwareProductId));
                // console.log(selectId);
                // ajax({
                //     method: 'post',
                //     url: '/infocent/projectsearch/removehardwaredisinfo',
                //     data: selectId
                // }).then(res => {
                //     if (res.data.status === 200) {
                //         this.$notify({
                //             title: '提示',
                //             message: '删除成功',
                //             type: 'success'
                //         });
                //     }
                //     ajax({
                //         url: '/infocent/projectsearch/gethardwaredisinfo',
                //     }).then(res => {
                //         // console.log(res);
                //         this.tableData = res.data.data;
                //     });
                // });
                this.$store.dispatch('Hardwareinfordisplay/DeleteData',this.multipleSelection)

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