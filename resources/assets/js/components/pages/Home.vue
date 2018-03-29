<template>
    <section class="home-page">
        <page-header :title="greeting" />


        <div class="home-page__content">
            <div class="home-page__cols">

            </div>
        </div>
    </section>
</template>

<script>
    import PageHeader from '@/components/shared/PageHeader';
    export default {
        components: {PageHeader},
        computed: {
            greeting() {
                return 'Hello there!';
            }
        }
    }
</script>

<style lang="scss">
    @import "~#/abstracts/variables";
    .home-page {

    }
</style>
