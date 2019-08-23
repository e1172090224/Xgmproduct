<template>
    <div class="terminal">
        <el-row>
            <el-col :span="3" :offset="21">
                <el-link style="margin-bottom: 20px" href="http://172.21.16.242/APK/" type="primary">历史版本APK下载</el-link>
            </el-col>
            <el-col :span="22" :offset="1">
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%;margin-left:10px">
                    <el-table-column
                            prop="apkName"
                            label="APK 名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="apkCodeRepo"
                            label="APK 源码地址"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="apkReleaseRepo"
                            label="APK Release git库">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Terminal',
        mounted() {
            this.$store.dispatch('Terminal/getData');
        },
        computed: {
            tableData() {
                return this.$store.state.Terminal.tableData;
            }
        },
        methods: {},
    };
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
        /*&:last-child {*/
        /*     margin-bottom: 0;*/
        /* }*/
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>