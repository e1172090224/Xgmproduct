<template>
    <div>
        <el-row>
            <el-col :span="23" :offset="1">
                <h2>修改/添加 软件规格 显示</h2>
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
                    <el-form-item label="无极变焦:">
                        <el-select v-model="form.infiniteZoom">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="画面比例调节功能:">
                        <el-select v-model="form.imageScale">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="MEMC:">
                        <el-select v-model="form.memc">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="HDR10:">
                        <el-select v-model="form.hdr10">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="双屏模式:">
                        <el-select v-model="form.doubleScreen">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="4K解码:">
                        <el-select v-model="form.decode4k">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="2DTO3D:">
                        <el-select v-model="form.to3d">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="自动3D:">
                        <el-select v-model="form.auto3d">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="自动白平衡:">
                        <el-select v-model="form.autoWhiteBalance">
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
        name: 'softwareinfordisplayadd',
        data() {
            return {
                form: {},
            };
        },
        computed:{
            getForm(){
                return this.$store.state.Softwareinfordisplay.resform;
            }
        },
        watch:{
            getForm(val,oldval){
                this.form = val;
            }
        },
        mounted() {
            this.$store.dispatch('Softwareinfordisplay/getFormData',this.$route.query.softwareProductId ? this.$route.query.softwareProductId:'' )
        },
        methods: {
            handleAdd() {
                this.$store.dispatch('Softwareinfordisplay/addFormData',this.form)
            },
            handleUpdate() {
                this.$store.dispatch('Softwareinfordisplay/updateFormData',this.form)
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
</style>