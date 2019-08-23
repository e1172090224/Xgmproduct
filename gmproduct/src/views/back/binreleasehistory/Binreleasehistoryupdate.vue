<template>
    <div>
        <el-row>
            <el-col :offset="1">
                <h2>修改 项目基本信息</h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="15">
                <el-form
                        ref="form"
                        :model="form"
                        label-width="200px">
                    <el-form-item label="OA流程编号:">
                        <el-input v-model="form.oa_id" style="width: 400px"></el-input>
                    </el-form-item>
                    <el-form-item label="申请人:">
                        <el-input v-model="form.proposer"></el-input>
                    </el-form-item>
                    <el-form-item label="申请日期:">
                        <el-input v-model="form.propose_time"></el-input>
                    </el-form-item>
                    <el-form-item label="发布版本:">
                        <el-input v-model="form.bin_version"></el-input>
                    </el-form-item>
                    <el-form-item label="GMUI版本:">
                        <el-input v-model="form.bin_gmui_version"></el-input>
                    </el-form-item>
                    <el-form-item label="所属项目:">
                        <el-input v-model="form.bin_product"></el-input>
                    </el-form-item>
                    <el-form-item label="API版本:">
                        <el-input v-model="form.api_version"></el-input>
                    </el-form-item>
                    <el-form-item label="升级策略:">
                        <el-input v-model="form.push_strategy"></el-input>
                    </el-form-item>
                    <el-form-item label="推送渠道:">
                        <el-input v-model="form.push_channel"></el-input>
                    </el-form-item>
                    <el-form-item label="升级内容:">
                        <el-input type="textarea" v-model="form.push_content"></el-input>
                    </el-form-item>
                    <el-form-item label="备注要求:">
                        <el-input type="textarea" v-model="form.comment"></el-input>
                    </el-form-item>
                    <el-form-item label="推送类型:">
                        <el-input v-model="form.push_class"></el-input>
                    </el-form-item>
                    <el-form-item label="软件包获取地址BIN:">
                        <el-input v-model="form.sw_urls"></el-input>
                    </el-form-item>
                    <el-form-item label="软件包获取地址OTA:">
                        <el-input v-model="form.sw_ota_urls"></el-input>
                    </el-form-item>
                    <el-form-item label="MD5值Bin:">
                        <el-input v-model="form.md5_bin_information"></el-input>
                    </el-form-item>
                    <el-form-item label="MD5值OTA:">
                        <el-input v-model="form.md5_ota_information"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="handleUpdate">保存修改</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    import ajaxw from '../../../assets/js/ajaxw';

    export default {
        name: 'Binreleasehistoryupdate',
        data() {
            return {
                form: {
                },
            }
        },
        computed:{
            getForm(){
                return this.$store.state.Binreleasehistory.resform;
            }
        },
        watch:{
            getForm(val,oldval){
                this.form = val;
            }
        },
        mounted() {
            this.$store.dispatch('Binreleasehistory/getFormData',this.$route.query.oa_ID )
        },
        methods: {
            handleUpdate() {
                this.$store.dispatch('Binreleasehistory/updateFormData',this.form)
            }
        }
    };
</script>

<style scoped>
    .el-form /deep/ button {
        margin-left: 30px;
        /*margin-right: 100px;*/
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