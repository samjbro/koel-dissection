<template>
    <section class="main-content">
        <home v-show="view === 'home'" class="main-content__section"/>
        <songs v-show="view === 'songs'" class="main-content__section"/>
    </section>
</template>

<script>
    import {event} from '@/utils';
    import Home from '@/components/pages/Home';
    import Songs from '@/components/pages/Songs';
    export default {
        components: {Home, Songs},
        data() {
            return {
                view: 'home'
            }
        },
        created() {
            event.on(event.names.LOAD_MAIN_CONTENT, view => this.view = view);
        }
    }
</script>

<style lang="scss">
    .main-content {
        flex: 1;

        &__section {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;

        }
    }
</style>