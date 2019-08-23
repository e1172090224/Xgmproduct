<template>
    <div>
        <el-row>
            <el-col :offset="1">
                <h1>APK ReleaseNote查询</h1>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="5" :offset="2">
                <template>
                    <el-select v-model="value" @change="getAPK(value)" filterable placeholder="选择APK">
                        <el-option
                                v-for="item in APKName"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="5" :offset="2">
                <template>
                    <el-select v-model="APKVersion1" filterable placeholder="选择APK版本1">
                        <el-option
                                v-for="item in APKVersion"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-col>
            <!--        </el-row>-->
            <el-col :span="5">
                <template>
                    <el-select v-model="APKVersion2" filterable placeholder="选择APK版本2">
                        <el-option
                                v-for="item in APKVersion"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3" :offset="3">
                <el-button type="primary" @click="TAGDifference">查看TAG差异</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import ajaxw from '@/assets/js/ajaxw';

    export default {
        data() {
            return {
                APKName: [{
                    value: 'APK_BootWizard',
                    label: 'BootWizard'
                }, {
                    value: 'APK_BurnInSoftware',
                    label: 'BurnInSoftware'
                }, {
                    value: 'APK_Misckey',
                    label: 'Misckey'
                }, {
                    value: 'APK_Rlease_List',
                    label: 'Rlease_List'
                }, {
                    value: 'APK_Settings',
                    label: 'Settings'
                }, {
                    value: 'APK_Settings4.0',
                    label: 'Settings4.0'
                }, {
                    value: 'APK_Windowsystem',
                    label: 'Windowsystem'
                }, {
                    value: 'APK_XgimiTVFactoryMenu',
                    label: 'XgimiTVFactoryMenu'
                }],
                APKVersion: [],
                value: '',
                APKVersion1: '',
                APKVersion2: ''
            };
        },
        methods: {
            getAPK(value) {
                ajaxw({
                    url: 'infocent/appAPK/info/history/releaseNote/' + value,
                }).then(res => console.log(res));
            },
            TAGDifference() {
                ajaxw({
                    method: 'post',
                    url: '/GetAPKReleaseNote',
                    data: {
                        APKVersion1: this.APKVersion1,
                        APKVersion2: this.APKVersion2
                    }
                }).then(res => console.log(res));
            }
        }
    };
</script>

<style scoped>
    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }

    .el-select{
        margin: 20px 0;
    }
</style>