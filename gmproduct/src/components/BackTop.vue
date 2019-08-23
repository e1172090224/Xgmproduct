<template>
    <div>
        <el-row>
            <el-col>
                <el-page-header @back="goBack" title="返回目录" content="终端软件信息中心后台管理">
                </el-page-header>
                <el-link class="gofront" style="color:white" href="/" target="_self">返回前台 >></el-link>
                <el-link class="gofront" style="color:white" href="/" target="_self" >{{userName}}</el-link>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-popover
                        placement="top"
                        width="160"
                        v-model="visible">
                    <p>确定要注销嘛？</p>
                    <div style="text-align: right; margin: 0">
                        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                        <el-button type="primary" size="mini" @click="logout">确定</el-button>
                    </div>
                    <el-button class="logout" size="mini" slot="reference">注销</el-button>
                </el-popover>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'BackTop',
        data() {
            return {
                visible: false
            };
        },
        computed:{
          userName(){
              console.log(this.$store.state.Login.userName)
              return this.$store.state.Login.userName;
          }
        },
        methods: {
            goBack() {
                this.$router.push({ path: '/back' });
            },
            logout() {
                this.$store.dispatch('Login/loginOut');
                this.visible = false
            }
        }
    };
</script>

<style scoped>
    .el-page-header {
        line-height: 60px;
        color: white;
        background: #62abef;
    }

    .el-page-header /deep/ .el-page-header__content {
        color: white;
        font-size: 1.5rem;
    }

    .el-link {
        margin-left: 20px;
    }

    .gofront {
        position: relative;
        float: right;
        right: 10px;
        bottom: 39px;
    }

    .logout {
        position: relative;
        left: 95%;
        bottom: 15px;
    }

    .gofront :hover {
        color: white;
    }
</style>