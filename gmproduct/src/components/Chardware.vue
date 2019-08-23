<template>
    <el-row>
        <el-col :span="22" :offset="1">
            <el-table
                    :data="tableData"
                    height="400"
                    border
                    style="width: 100%;margin-left:10px">
                <el-table-column
                        fixed
                        prop="product"
                        label="所属项目"
                        width="100">
                </el-table-column>
                <el-table-column label="系统">
                    <el-table-column
                            prop="platform"
                            label="机芯"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="marketName"
                            label="市场名称"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="swpm"
                            label="软件PM"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="modelname"
                            label="ModelName"
                            width="100">
                    </el-table-column>
                </el-table-column>

                <el-table-column
                        prop="customerid"
                        label="CustomerID"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="roProductName"
                        label="ro_product_name"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="xgimiProductName"
                        label="xgimi_product_name"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="roProductModel"
                        label="ro_product_model"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="roProductDevice"
                        label="ro_product_device"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="roProductBoard"
                        label="ro_product_board"
                        width="150">
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'AllInformation'
    };
</script>

<style scoped>

</style>