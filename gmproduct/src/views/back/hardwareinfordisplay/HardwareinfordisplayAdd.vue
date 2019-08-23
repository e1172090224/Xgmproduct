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
                    <el-form-item label="所属项目:">
                        <el-input v-model="form.softwareProductId"></el-input>
                    </el-form-item>
                    <el-form-item label="DMD/分辨率:">
                        <el-input v-model="form.resolutionRatio"></el-input>
                    </el-form-item>
                    <el-form-item label="光机厂商:">
                        <el-input v-model="form.engineManufacturer"></el-input>
                    </el-form-item>
                    <el-form-item label="振镜:">
                        <el-select v-model="form.galvanometer">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Ichips:">
                        <el-input v-model="form.ichips"></el-input>
                    </el-form-item>
                    <el-form-item label="无极变焦:">
                        <el-select v-model="form.steplessFocus">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="投影方式:">
                        <el-input v-model="form.projectiveMode"></el-input>
                    </el-form-item>
                    <el-form-item label="投射比:">
                        <el-input v-model="form.throwRatio"></el-input>
                    </el-form-item>
                    <el-form-item label="动态光圈:">
                        <el-select v-model="form.diaphragm">
                            <el-option label="TBD" value="tbd"></el-option>
                            <el-option label="√" value="yes"></el-option>
                            <el-option label="×" value="no"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="亮度:">
                        <el-input v-model="form.light"></el-input>
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
        name: 'hardwareinfordisplayadd',
        data() {
            return {
                form: {},
            };
        },
        mounted() {
            // ajax({
            //     url: '/infocent/projectsearch/gethardwaredisinfo',
            // }).then(res => {
            //     // console.log(res);
            //     const targetData1 = res.data.data.filter(item => item.softwareProductId === this.$router.history.current.query.softwareProductId);
            //     targetData1.filter(items => this.$set(this, 'form', items));
            // });
            this.$store.dispatch('Hardwareinfordisplay/getFormData',this.$route.query.softwareProductId?this.$route.query.softwareProductId:'' );
            // this.$set(this, 'form', this.$store.state.Hardwareinfordisplay.resform)
        },
        computed:{
            getForm(){
                return this.$store.state.Hardwareinfordisplay.resform;
            }
        },
        watch:{
          getForm(val,oldval){
              this.form = val;
          }
        },
        methods: {
            handleAdd: debounce.debounce(function(){
                this.$store.dispatch('Hardwareinfordisplay/addFormData',this.form)
                // ajax({
                //     url: '/infocent/projectsearch/addhardwaredisinfo',
                //     method: 'post',
                //     data: this.form
                // }).then(res => {
                //     if (res.data.status === 411) {
                //         this.$notify({
                //             title: '提示',
                //             message: '请不要重复添加',
                //             type: 'warning'
                //         });
                //     } else if (res.data.status === 200) {
                //         this.$notify({
                //             title: '提示',
                //             message: '添加成功',
                //             type: 'success'
                //         });
                //     }
                // });
            }),
            handleUpdate() {
                this.$store.dispatch('Hardwareinfordisplay/updateFormData',this.form)
                // ajax({
                //     url: '/infocent/projectsearch/changehardwaredisinfo',
                //     method: 'post',
                //     data: this.form,
                // }).then(res => {
                //     if (res.data.status === 200) {
                //         this.$notify({
                //             title: '提示',
                //             message: '修改成功',
                //             type: 'success'
                //         });
                //     }else{
                //         this.$notify({
                //             title: '提示',
                //             message: '修改失败',
                //             type: 'success'
                //         });
                //     }
                // });
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