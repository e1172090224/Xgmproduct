<template>
    <div>
        <el-row>
            <el-col :span="23" :offset="1">
                <h2>修改/添加 硬件规格 显示</h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="15">
                <el-form
                        ref="form"
                        :model="form"
                        label-width="200px">
                    <el-form-item label="项目名称:">
                        <el-input v-model="form.product"></el-input>
                    </el-form-item>
                    <el-form-item label="机芯名称:">
                        <el-input v-model="form.platform"></el-input>
                    </el-form-item>
                    <el-form-item label="项目类别:">
                        <el-select v-model="form.productClass">
                            <el-option label="家用机" value="family"></el-option>
                            <el-option label="海外机" value="abroad"></el-option>
                            <el-option label="定制机" value="custom"></el-option>
                            <el-option label="TBD" value="tbd"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="市场名称:">
                        <el-input v-model="form.marketName"></el-input>
                    </el-form-item>
                    <el-form-item label="软件PM:">
                        <el-input v-model="form.swpm"></el-input>
                    </el-form-item>
                    <el-form-item label="ModelName:">
                        <el-input v-model="form.modelname"></el-input>
                    </el-form-item>
                    <el-form-item label="CustomerID:">
                        <el-input v-model="form.customerid"></el-input>
                    </el-form-item>
                    <el-form-item label="Ro.product.name:">
                        <el-input v-model="form.roProductName"></el-input>
                    </el-form-item>
                    <el-form-item label="Xgimi.product.name:">
                        <el-input v-model="form.xgimiProductName"></el-input>
                    </el-form-item>
                    <el-form-item label="Ro.product.model:">
                        <el-input v-model="form.roProductModel"></el-input>
                    </el-form-item>
                    <el-form-item label="Ro.product.device:">
                        <el-input v-model="form.roProductDevice"></el-input>
                    </el-form-item>
                    <el-form-item label="Ro.product.board:">
                        <el-input v-model="form.roProductBoard"></el-input>
                    </el-form-item>
                    <el-form-item label="Android:">
                        <el-input v-model="form.androidVersion"></el-input>
                    </el-form-item>
                    <el-form-item label="GMUI版本:">
                        <el-select v-model="form.gmuiVersion">
                            <el-option label="GMUI2.0" value="g2"></el-option>
                            <el-option label="GMUI3.0" value="g3"></el-option>
                            <el-option label="GMUI4.0" value="g4"></el-option>
                            <el-option label="GMUI2.0/3.0" value="g2g3"></el-option>
                            <el-option label="GMUI3.0/4.0" value="g3g4"></el-option>
                            <el-option label="TBD" value="tbd"></el-option>
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
    import debounce from '../../../assets/js/debounce';

    export default {
        name: 'Productcommonadd',
        data() {
            return {
                form: {},
            };
        },
        mounted() {
            this.$store.dispatch('Productcommon/getFormData', this.$route.query.product ? this.$route.query.product : '');
        },
        computed: {
            getForm() {
                return this.$store.state.Productcommon.resform;
            }
        },
        watch: {
            getForm(val) {
                this.form = val;
            }
        },
        methods: {
            handleAdd: debounce.debounce(function () {
                this.$store.dispatch('Productcommon/addFormData', this.form);

            }),
            handleUpdate() {
                this.$store.dispatch('Productcommon/updateFormData', this.form);

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
    .el-form /deep/ .el-select-dropdown .el-popper {
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