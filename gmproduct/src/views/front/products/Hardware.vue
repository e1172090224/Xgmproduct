<template>
    <div>
        <el-row>
            <el-col :span="8" :offset="16">
                <el-input
                        placeholder="请输入关键字"
                        icon="search"
                        class="search"
                        v-model="search"
                        @input="handleKeywordsInput">
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="23" :offset="1">
                <el-table
                        :data="tableData"
                        height="62vh"
                        border
                        style="width: 100%;margin-left:10px">
                    <el-table-column
                            fixed
                            prop="softwareProductId"
                            label="所属项目"
                            width="100">
                    </el-table-column>
                    <el-table-column label="系统">
                        <el-table-column
                                prop="mainIc"
                                label="主Ic"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="memory"
                                label="内存"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="emmc"
                                label="Emmc"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="debugMode"
                                label="Debug方式"
                                width="100">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="驱动">
                        <el-table-column
                                prop="button"
                                label="触摸板"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="airFan"
                                label="风扇"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="temperatureControl"
                                label="温控"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="focusMotor"
                                label="调焦电机"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="slidingDoorMotor"
                                label="电动滑门电机"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="motorDetectionMode"
                                label="滑门马达到头检测方式"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="electricFocus"
                                label="调焦马达到头检测方式"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="cameraModule"
                                label="摄像头"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="gensor"
                                label="Gensor"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="powerSlideDoor"
                                label="电动滑门"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="manualSlideCover"
                                label="手动滑盖"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="bluetoothWifiModel"
                                label="蓝牙/Wi-Fi模组"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="battery"
                                label="电池"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="builtInSpeaker"
                                label="内置喇叭"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="bluetoothAudio"
                                label="蓝牙音响"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="modelname"
                                label="功放驱动"
                                width="100">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="显示">
                        <el-table-column
                                prop="resolutionRatio"
                                label="Dmd/分辨率"
                                width="130">
                        </el-table-column>
                        <el-table-column
                                prop="engineManufacturer"
                                label="光机厂商"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="galvanometer"
                                label="振镜"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="ichips"
                                label="Ichips"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="steplessFocus"
                                label="无极变焦"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="projectiveMode"
                                label="投影方式"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="throwRatio"
                                label="透射比"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="diaphragm"
                                label="动态光圈"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="light"
                                label="亮度"
                                width="150">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="外部接口">
                        <el-table-column
                                prop="wiredEthernetPort"
                                label="有线网口"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="hdmiEdid"
                                label="同轴"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="fiberOpticFunction"
                                label="光纤"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="arc"
                                label="Arc"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="headset"
                                label="耳机"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="hdmiEdid"
                                label="Hdmi Edidi/接口"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="usb"
                                label="Usb接口"
                                width="100">
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: 'HardWare',
        data() {
            return {
                search: ''
            };
        },
        mounted() {
            this.$store.dispatch('HardWare/getData');
        },
        computed: {
            tableData() {
                return this.$store.state.HardWare.tableData;
            }
        },
        methods: {
            handleKeywordsInput() {
                this.$store.commit('HardWare/searchData', this.search);
            }
        },
    };
</script>

<style scoped>
    .el-table {
    margin: 20px;
    }
</style>