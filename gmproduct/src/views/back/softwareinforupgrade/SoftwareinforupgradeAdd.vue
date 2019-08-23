<template>
    <div>
        <el-row>
            <el-col :span="23" :offset="1">
                <h2>修改/添加 软件规格 升级</h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="15">
                <el-form
                        ref="form"
                        :model="form"
                        label-width="200px">
                    <el-form-item label="项目名称:">
                        <el-input v-model="form.softwareProductId">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="MODEL刷入:">
                        <el-select v-model="form.modelFlash">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="强刷BIN:">
                        <el-select v-model="form.binFlash">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="OTA全量:">
                        <el-select v-model="form.fullOta">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="OTA差分:">
                        <el-select v-model="form.deltaOta">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="USB升级MCU:">
                        <el-select v-model="form.usbUpgradeMcu">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="USB升级DLP:">
                        <el-select v-model="form.usbUpgradeDlp">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleAdd">添加新项</el-button>
                        <el-button @click="handleUpdate">保存修改</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: 'softwareinforupgradeadd',
        data() {
            return {
                form: {},
            };
        },
        computed:{
            getForm(){
                return this.$store.state.Softwareinforupgrade.resform;
            }
        },
        watch:{
            getForm(val,oldval){
                this.form = val;
            }
        },
        mounted() {
            this.$store.dispatch('Softwareinforupgrade/getFormData',this.$route.query.softwareProductId ? this.$route.query.softwareProductId:'' )
        },
        methods: {
            handleAdd() {
                this.$store.dispatch('Softwareinforupgrade/addFormData',this.form)
            },
            handleUpdate() {
                this.$store.dispatch('Softwareinforupgrade/updateFormData',this.form)
            }
        }
    };
</script>

<style scoped>
    .el-form /deep/ button {
        margin-left: 30px;
        /*margin-right: 100px;*/
    }
    /*select 样式*/
    .el-form /deep/ .el-select-dropdown .el-popper{
        width: 400px;
        margin-left: 30px;
    }


    .el-form /deep/ input {
        width: 400px;
    }

    .el-form /deep/ textarea {
        width: 100%;
        height: 250px;
        margin-left: 30px;
    }
</style>