<template>
    <section class="main-wrapper">
        <sidebar/>
        <main-content/>
    </section>
</template>

<script>
    import Sidebar from '@/components/Sidebar';
    import MainContent from '@/components/MainContent';
    export default {
        components: {Sidebar, MainContent}
    }
</script>

<style lang="scss">
    .main-wrapper {
        display: flex;
        flex: 1;
    }
</style>