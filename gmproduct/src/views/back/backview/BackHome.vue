<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="1">
                <el-table
                        :data="tableData"
                        stripe
                        style="width: 650px">
                    <el-table-column
                            prop="information"
                            label="终端软件项目信息">
                    </el-table-column>
                    <el-table-column width="150">
                        <template slot-scope="scope">
                            <!--                    <el-button @click="handleAdd(scope.row)" size="mini" icon="el-icon-plus" type="primary" round>增加</el-button>-->
                            <el-button @click="handleUpdate(scope.row)" size="mini" icon="el-icon-edit" type="primary" round>修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>

    </div>

</template>

<script>
    export default {
        name: 'BackHome',
        data(){
            return{
                tableData:[{
                  information:'硬件规格 外部接口',
                    router:'hardwareinforperipheralinterface'
                },{
                    information:'硬件规格 显示',
                    router:'hardwareinfordisplay'
                },{
                    information:'硬件规格 系统',
                    router:'hardwareinforsystem'
                },{
                    information:'硬件规格 驱动',
                    router:'hardwareinfordriver'
                },{
                    information:'硬件规格 HDMI属性',
                    router:'softwareinforhdmiattribute'
                },{
                    information:'软件规格 升级',
                    router:'softwareinforupgrade'
                },{
                    information:'软件规格 对焦方式',
                    router:'softwareinforfucosmode'
                },{
                    information:'软件规格 摄像头辅助',
                    router:'softwareinforcameraassisted'
                },{
                    information:'软件规格 显示',
                    router:'softwareinfordisplay'
                },{
                    information:'软件规格 梯形校正属性',
                    router:'softwareinforkeystonecorrection'
                },{
                    information:'软件规格 系统',
                    router:'softwareinforsystem'
                },{
                    information:'软件规格 音响模式',
                    router:'softwareinforstereomode'
                },{
                    information:'软件规格 音效属性',
                    router:'softwareinforsoundproperties'
                },{
                    information:'项目发布历史',
                    router:'binreleasehistory'
                },{
                    information:'项目基本信息',
                    router:'productcommon'
                }]
            }
        },
        // mounted:{
        //
        // },
        methods:{
            handleAdd(row){},
            handleUpdate(row){
                this.$router.push({path:row.router})
            },
        }
    };
</script>

<style scoped>
    /*.el-table /deep/ td{*/
    /*    padding:6px 0;*/
    /*}*/
</style>