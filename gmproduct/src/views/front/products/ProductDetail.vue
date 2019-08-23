<template>
    <div>
        <el-row>
            <el-col :span="23" :offset="1">
                <el-table
                        :data="productData"
                        style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="productData-table-expand">
                                <el-form-item label="ModelName">
                                    <span>{{ props.row.modelname }}</span>
                                </el-form-item>
                                <el-form-item label="customerid">
                                    <span>{{ props.row.customerid }}</span>
                                </el-form-item>
                                <el-form-item label="ro.product.name">
                                    <span>{{ props.row.roProductName }}</span>
                                </el-form-item>
                                <el-form-item label="xgimi.product.name">
                                    <span>{{ props.row.xgimiProductName }}</span>
                                </el-form-item>
                                <el-form-item label="ro.product.model">
                                    <span>{{ props.row.roProductModel }}</span>
                                </el-form-item>
                                <el-form-item label="ro.product.board">
                                    <span>{{ props.row.roProductBoard }}</span>
                                </el-form-item>
                                <el-form-item label="Android版本">
                                    <span>{{ props.row.androidVersion }}</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column
                            width="120"
                            label="项目名称"
                            prop="product">
                    </el-table-column>
                    <el-table-column
                            width="120"
                            label="市场名称"
                            prop="marketName">
                    </el-table-column>
                    <el-table-column
                            width="120"
                            label="项目类别"
                            prop="productClass">
                    </el-table-column>
                    <el-table-column
                            width="120"
                            label="极米UI版本"
                            prop="gmuiVersion">
                    </el-table-column>
                    <el-table-column
                            width="120"
                            label="机芯"
                            prop="platform">
                    </el-table-column>
                    <el-table-column
                            width="120"
                            label="软件PM"
                            prop="swpm">
                    </el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleHardData(scope.row)">硬件信息
                            </el-button>
                            <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleSoftData(scope.row)">软件信息
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-dialog :visible.sync="dialogTableVisibleSoft">
            <el-table
                    :data="gridDataSoft"
                    border
                    style="width: 100%;">
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
        </el-dialog>
        <el-dialog :visible.sync="dialogTableVisibleHard">
            <el-table
                    :data="gridDataHard"
                    border
                    style="width: 100%">
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
        </el-dialog>

        <h1>发布历史</h1>
        <span>OA上的历史数据所属项目与数据中心的项目不能准确匹配，使用模糊搜索条件来搜索发布历史。</span>
        <el-row>
            <el-col :span="22" :offset="1">
                <el-table
                        :data="releaseHistory"
                        style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="id"
                            prop="id">
                    </el-table-column>
                    <el-table-column
                            width="200"
                            label="OA流程编号"
                            prop="oa_id">
                    </el-table-column>
                    <el-table-column
                            label="申请人"
                            prop="proposer">
                    </el-table-column>
                    <el-table-column
                            label="申请日期"
                            prop="propose_time">
                    </el-table-column>
                    <el-table-column
                            label="发布版本"
                            prop="bin_version">
                    </el-table-column>
                    <el-table-column
                            label="所属项目"
                            prop="bin_product">
                    </el-table-column>
                    <el-table-column
                            label="API版本"
                            prop="api_version">
                    </el-table-column>
                    <el-table-column
                            label="升级策略"
                            prop="push_strategy">
                    </el-table-column>
                    <el-table-column
                            label="推送渠道"
                            prop="push_channel">
                    </el-table-column>
                    <el-table-column
                            width="270"
                            label="升级内容"
                            prop="push_content">
                    </el-table-column>
                    <el-table-column
                            width="270"
                            label="备注要求"
                            prop="comment">
                    </el-table-column>
                    <el-table-column
                            label="推送类型"
                            prop="push_class">
                    </el-table-column>
                    <el-table-column
                            width="270"
                            label="软件包获取地址BIN"
                            prop="sw_urls">
                    </el-table-column>
                    <el-table-column
                            width="270"
                            label="软件包获取地址OTA"
                            prop="sw_ota_urls">
                    </el-table-column>
                    <el-table-column
                            width="270"
                            label="MD5值Bin"
                            prop="md5_bin_information">
                    </el-table-column>
                    <el-table-column
                            width="270"
                            label="MD5值OTA"
                            prop="md5_ota_information">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    import ajax from '@/assets/js/ajax';
    import ajaxw from '../../../assets/js/ajaxw'
    export default {
        name: 'ProductDetail',
        data() {
            return {
                productData: [],
                product: '',
                dialogTableVisibleSoft: false,
                dialogTableVisibleHard: false,
                releaseHistory: []
            };
        },
        created() {
            this.product = this.$route.query.product;
        },
        mounted() {
            this.$store.dispatch('ProductDetail/getData', this.product)
            this.$store.dispatch('ProductDetail/getHistoryData', this.product.toLowerCase())
        },
        computed: {
            getForm() {
                return this.$store.state.ProductDetail.productData;
            },
            getHistory(){
                return this.$store.state.ProductDetail.releaseHistory;
            },
            gridDataSoft(){
                return this.$store.state.ProductDetail.gridDataSoft;
            },
            gridDataHard(){
                return this.$store.state.ProductDetail.gridDataHard;
            }
        },
        watch: {
            getForm(val) {
                this.productData = val;
            },
            getHistory(val){
                this.releaseHistory = val;
            }
        },
        methods: {
            handleSoftData(row) {
                this.dialogTableVisibleSoft = true;
                this.$store.dispatch('ProductDetail/handleSoftData',row.product)
                // ajax({
                //     url: '/infocent/projectsearch/softwareinfo/' + row.product,
                // }).then(res => {
                //     // console.log(res.data.data);
                //     this.gridDataSoft.push(res.data.data);
                // });
            },
            handleHardData(row) {
                this.dialogTableVisibleHard = true;
                this.$store.dispatch('ProductDetail/handleHardData',row.product)
                // ajax({
                //     url: '/infocent/projectsearch/hardwareinfo/' + row.product,
                // }).then(res => {
                //     // console.log(res.data.data);
                //     this.gridDataHard.push(res.data.data);
                // });
            }
        }
    };
</script>

<style scoped>
    .productData-table-expand {
        font-size: 0;
    }

    .productData-table-expand /deep/ label {
        width: 200px;
        color: cornflowerblue;
    }

    .productData-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    h1{
        margin-left: 7vh;
    }
    span{
        margin-left: 7vh;
    }
</style>