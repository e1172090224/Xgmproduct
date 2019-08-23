<template>
    <el-row>
        <el-col :span="10" :offset="7">
            <h1><img alt="Vue logo" src="../assets/favicon.png">终端软件信息中心</h1>
        </el-col>
            <el-col :span="3" :offset="21"><el-link style="margin-bottom: 20px" href="/login" type="primary">后台信息管理</el-link></el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'top'
    };
</script>

<style scoped>
    h1{
        text-align: center;
        margin-bottom: 25px
    }
    img{
        vertical-align:middle;
        margin-right: 15px;
    }
    /*el-link{*/
    /*    margin-bottom: 30px;*/
    /*}*/
</style>