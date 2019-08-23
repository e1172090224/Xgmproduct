<template>
    <el-row>
        <el-col :span="24">
            <el-menu
                    style="text-align:left;height: 70vh"
                    :router="useRouter"
                    :collapse="isCollapse"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>项目查询</span>
                    </template>
                    <el-menu-item index="/productlist">项目列表</el-menu-item>
                    <el-menu-item index="/hardware">硬件信息概览</el-menu-item>
                    <el-menu-item index="/software">软件信息概览</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>终端软件APK</span>
                    </template>
                    <el-menu-item index="/terminal">
                        <span>APK概览</span>
                    </el-menu-item>
                    <el-menu-item index="/apkhistory">APK发布历史查询</el-menu-item>
                </el-submenu>

                <el-menu-item index="/cppcheck">
                    <i class="el-icon-menu"></i>
                    <span slot="title">cppckeck检查情况</span>
                </el-menu-item>
                <el-menu-item index="/">
                    <i class="el-icon-menu"></i>
                    <span slot="title">固件发布历史</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'NavMenu',
        data() {
            return {
                useRouter: true,
                isCollapse: false,
                screenWidth:''
            };
        },
        methods: {
            handleOpen() {
                // eslint-disable-next-line no-console
            },
            handleClose(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath);
            },
        },
        mounted() {
            window.onresize = () => {
                return (() => {
                    this.screenWidth = document.body.clientWidth;
                    this.isCollapse = this.screenWidth < 1000;
                })();
            };
        },

        watch: {
            windowWidth: 'changeWindowWidth'
        }
    };
</script>

<style scoped>

</style>