<template>
    <div class="app">
        <div class="app__main" v-show="authenticated">
            <main-wrapper/>
            <overlay/>
        </div>
        <div class="app__login" v-if="!authenticated">
            <login-form @loggedin="onUserLoggedIn"/>
        </div>
    </div>
</template>

<script>
    import {showOverlay, hideOverlay} from '@/utils';
    import {router} from '@/services';
    import {event} from '@/utils';
    import MainWrapper from '@/components/MainWrapper';
    import Overlay from '@/components/shared/Overlay';
    import LoginForm from '@/components/LoginForm';

    export default {
        components: {MainWrapper, Overlay, LoginForm},
        data() {
            return {
                authenticated: false
            }
        },
        methods: {
            async init() {
                showOverlay();
                await setTimeout(() => hideOverlay(), 1000);
                event.emit(event.names.KOEL_READY);
            },
            onUserLoggedIn() {
                this.authenticated = true;
                this.init();
            },
        },

        created() {
            event.on(event.names.KOEL_READY, () => router.init());
        }
    }
</script>

<style lang="scss">
    @import "~#/abstracts/variables";
    .app {
        height: 100vh;

        & > * {
            display: flex;
            height: calc(100% - #{$footer-height});
            flex-direction: column;
        }

        &__main {

        }
        &__login {
            align-items: center;
            justify-content: center;
        }
    }
</style>