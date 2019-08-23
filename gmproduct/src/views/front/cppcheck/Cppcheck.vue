<template>
    <div id="cppcheck">
        <div id="myChart"></div>
        <div class="explain">
            <el-row>
                <el-col :span="5">
                    <label>检查结果类别说明：</label>
                </el-col>
                <el-col :span="23" :offset="1">
                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                prop="type"
                                label="类别"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="explain"
                                label="说明">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    let myChart,arrx,arry;
    export default {
        name: 'cppcheck',
        data() {
            return {
                tableData: [{
                    type: 'error',
                    explain: 'used when bugs are found'
                }, {
                    type: 'warning',
                    explain: 'suggestions about defensive programming to prevent bugs'
                }, {
                    type: 'style',
                    explain: 'stylistic issues related to code cleanup (unused functions, redundant code, constness, and such)'
                }, {
                    type: 'performance',
                    explain: 'Suggestions for making the code faster. These suggestions are only based on common knowledge. It is not certain you\'ll get any measurable difference in speed by fixing these messages.'
                }, {
                    type: 'portability',
                    explain: 'portability warnings. 64-bit portability. code might work different on different compilers. etc.'
                }, {
                    type: 'information',
                    explain: 'Configuration problems. The recommendation is to only enable these during configuration.'
                }]
            };
        },
        mounted() {
            this.$store.dispatch('CppCheck/getData');
            console.log(this.$store.state.CppCheck.chartData)
            myChart = this.$echarts.init(document.getElementById('myChart'));
            arrx = [];
            arry = [];
        },
        computed:{
            mychaData(){
                return  this.$store.state.CppCheck.chartData
            }
        },
        watch:{
            mychaData(val){
                for (let key in val) {
                    if (val.hasOwnProperty(key)) {
                        arrx.push(key);
                        arry.push(val[key]);
                    }
                }
                myChart.setOption({
                    title: { text: 'cppcheck数据概览' },
                    tooltip: {},
                    xAxis: {
                        data: arrx
                    },
                    yAxis: {},
                    series: [{
                        name: '数量',
                        type: 'bar',
                        data: arry
                    }]
                });
            }
        },
        methods: {},
    };
</script>

<style scoped>
    #cppcheck {
        margin-left: 7vh;
    }

    #myChart {
        width: 900px;
        height: 400px;
    }
</style>