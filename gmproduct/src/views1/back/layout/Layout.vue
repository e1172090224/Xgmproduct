<template>
    <div>
       <router-view></router-view>
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