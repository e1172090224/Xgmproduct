<template>
    <div>
        <el-row>
            <el-col :span="23" :offset="1">
                <h2>修改/添加 软件规格 梯形校正属性</h2>
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
                    <el-form-item label="I-CHIPS梯形:">
                        <el-select v-model="form.ichipsSupport">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="垂直梯形DLP:">
                        <el-select v-model="form.verticalTrapezoidDlpSupport">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="软解梯形:">
                        <el-select v-model="form.softcorrectionSupport">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="智能辅助:">
                        <el-select v-model="form.aiAssistSupport">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="FPGA:">
                        <el-select v-model="form.fpgaSupport">
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
        name: 'softwareinforkeystonecorrectionadd',
        data() {
            return {
                form: {},
            };
        },
        computed:{
            getForm(){
                return this.$store.state.Softwareinforkeystonecorrection.resform;
            }
        },
        watch:{
            getForm(val,oldval){
                this.form = val;
            }
        },
        mounted() {
            this.$store.dispatch('Softwareinforkeystonecorrection/getFormData',this.$route.query.softwareProductId ? this.$route.query.softwareProductId:'' )
        },
        methods: {
            handleAdd() {
                this.$store.dispatch('Softwareinforkeystonecorrection/addFormData',this.form)
            },
            handleUpdate() {
                this.$store.dispatch('Softwareinforkeystonecorrection/updateFormData',this.form)
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