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
                    <el-table-column label="梯形校正属性">
                        <el-table-column
                                prop="ichipsSupport"
                                label="ps梯形"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="verticalTrapezoidDlpSupport"
                                label="垂直梯形Dlp"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="softcorrectionSupport"
                                label="软解梯形"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="aiAssistSupport"
                                label="智能辅助"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="fpgaSupport"
                                label="Fpga梯形"
                                width="100">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="对焦方式">
                        <el-table-column
                                prop="focuseCentreSupport"
                                label="中心"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="focuseOverallSupport"
                                label="全局"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="hotlossfocusCompensationSupport"
                                label="热失焦补偿"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="moveFocuseSupport"
                                label="位移对焦"
                                width="100">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="摄像头辅助">
                        <el-table-column
                                prop="curtainAligne"
                                label="幕布对齐"
                                width="100">
                        </el-table-column>

                    </el-table-column>
                    <el-table-column label="显示">
                        <el-table-column
                                prop="infiniteZoom"
                                label="无极变焦"
                                width="130">
                        </el-table-column>
                        <el-table-column
                                prop="imageScale"
                                label="画面比例调节功能"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="memc"
                                label="Memc"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="hdr10"
                                label="Hdr10"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="doubleScreen"
                                label="双屏模式"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="decode4k"
                                label="4K解码"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="to3d"
                                label="2Dto3D"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="auto3d"
                                label="自动3D"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="autoWhiteBalance"
                                label="自动白平衡"
                                width="150">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="HDMI属性">
                        <el-table-column
                                prop="arc"
                                label="Arc"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="hdcp2_2"
                                label="Hdcp2.2"
                                width="100">
                        </el-table-column>

                    </el-table-column>
                    <el-table-column label="音效属性">
                        <el-table-column
                                prop="multipleSoundEffect"
                                label="多音效"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="virtualSurrond"
                                label="虚拟环绕声"
                                width="100">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="音响模式">
                        <el-table-column
                                prop="wifiSound"
                                label="Wifi音响"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="bluetoothSound"
                                label="蓝牙音箱"
                                width="100">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="升级">
                        <el-table-column
                                prop="modelFlash"
                                label="Model刷入"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="binFlash"
                                label="强刷Bin"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="fullOta"
                                label="Ota全量"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="deltaOta"
                                label="Ota差分"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="usbUpgradeMcu"
                                label="Usb升级Mcu"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="usbUpgradeDlp"
                                label="Usb升级Dlp"
                                width="100">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="系统">
                        <el-table-column
                                prop="emmcSelfAdaption"
                                label="Emmc自适应"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="str"
                                label="Str"
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
        name: 'SoftWare',
        data() {
            return {
                search: ''
            };
        },
        mounted() {
            this.$store.dispatch('SoftWare/getData');
        },
        computed: {
            tableData() {
                return this.$store.state.SoftWare.tableData;
            }
        },
        methods: {
            handleKeywordsInput() {
                this.$store.commit('SoftWare/searchData', this.search);
            }
        },
    };
</script>

<style scoped>
.el-table{
    margin-top: 20px;
}
</style>