<template>
    <div>
        <backTop></backTop>
        <router-view></router-view>
    </div>
</template>

<script>
    import backTop from '../../../components/BackTop';

    export default {
        name: 'Layout',
        components: {
            backTop,
        }
    };
</script>

<style scoped>

</style>