<template>
    <div>
        <Top></Top>
        <el-row>
            <el-col :span="4">
                <Nav></Nav>
            </el-col>
            <el-col :span="18">
                <router-view/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Nav from '@/components/Navmenu.vue';
    import Top from '@/components/Navtop.vue';

    export default {
        name: 'Layout',
        components: {
            Nav,
            Top,
        },
    };
</script>

<style scoped>

</style>