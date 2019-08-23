<template>
    <div>
        <el-row>
            <el-col :span="23" :offset="1">
                <h2>修改/添加 硬件规格驱动</h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="15">
                <el-form
                        ref="form"
                        :model="form"
                        label-width="200px">
                    <el-form-item label="所属项目:">
                        <el-input v-model="form.softwareProductId">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="触摸板:">
                        <el-input v-model="form.button"></el-input>
                    </el-form-item>
                    <el-form-item label="风扇:">
                        <el-input v-model="form.airFan"></el-input>
                    </el-form-item>
                    <el-form-item label="温控:">
                        <el-input v-model="form.temperatureControl"></el-input>
                    </el-form-item>
                    <el-form-item label="调焦电机:">
                        <el-input v-model="form.focusMotor"></el-input>
                    </el-form-item>
                    <el-form-item label="电动滑门电机:">
                        <el-input v-model="form.slidingDoorMotor"></el-input>
                    </el-form-item>
                    <el-form-item label="滑门马达到头方式:">
                        <el-input v-model="form.motorDetectionMode"></el-input>
                    </el-form-item>
                    <el-form-item label="调焦马达到头检测方式:">
                        <el-input v-model="form.electricFocus"></el-input>
                    </el-form-item>
                    <el-form-item label="摄像头:">
                        <el-input v-model="form.cameraModule"></el-input>
                    </el-form-item>
                    <el-form-item label="GENSOR:">
                        <el-select v-model="form.gensor">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="电动滑门:">
                        <el-select v-model="form.powerSlideDoor">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="手动滑盖:">
                        <el-select v-model="form.manualSlideCover">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="蓝牙/wifi模组:">
                        <el-input v-model="form.bluetoothWifiModel"></el-input>
                    </el-form-item>
                    <el-form-item label="电池:">
                        <el-select v-model="form.battery">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="内置喇叭:">
                        <el-select v-model="form.builtInSpeaker">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="蓝牙音响:">
                        <el-select v-model="form.bluetoothAudio">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="功放驱动:">
                        <el-input v-model="form.powerAmplifier"></el-input>
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
        name: 'hardwareinfordriveradd',
        data() {
            return {
                form: {},
            };
        },
        computed:{
            getForm(){
                return this.$store.state.Hardwareinfordriver.resform;
            }
        },
        watch:{
            getForm(val,oldval){
                this.form = val;
            }
        },
        mounted() {
            this.$store.dispatch('Hardwareinfordriver/getFormData',this.$route.query.softwareProductId ? this.$route.query.softwareProductId:'' )
        },
        methods: {
            handleAdd() {
                this.$store.dispatch('Hardwareinfordriver/addFormData',this.form)
            },
            handleUpdate() {
                this.$store.dispatch('Hardwareinfordriver/updateFormData',this.form)
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
        margin-left: 30px;
    }

    .el-form /deep/ textarea {
        width: 100%;
        height: 250px;
        margin-left: 30px;
    }
</style>