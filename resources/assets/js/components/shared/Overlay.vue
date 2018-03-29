<template>
    <div class="overlay" v-if="state.showing">
        <div class="overlay__display">
            <sound-bar v-if="isLoading"/>
            <span class="overlay__message" v-html="state.message"></span>
        </div>
    </div>
</template>

<script>
    import {event} from '@/utils';
    import SoundBar from '@/components/shared/SoundBar';

    export default {
        components: {SoundBar},
        data() {
            return {
                state: {
                    showing: true,
                    type: 'loading',
                    message: ''
                }
            }
        },

        methods: {
            show(options) {
                Object.assign(this.state, options);
                console.log(this.state.type);
                this.state.showing = true;
            },
            hide() {
                this.state.showing = false;
            }
        },

        computed: {
            isLoading() {
                return this.state.type === 'loading';
            }
        },

        created() {
            event.on(event.names.SHOW_OVERLAY, options => this.show(options));
            event.on(event.names.HIDE_OVERLAY, () => this.hide());

        }
    }
</script>

<style lang="scss">
    @import "~#/abstracts/variables";

    .overlay {
        flex-direction: column;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        overflow: auto;
        background-color: $color-overlay-bg;
        position: fixed;

        &__display {
            display: flex;
            align-items: center;
            height: 100%;
            justify-content: center;
        }

        &__message {
            font-size: 1.8rem;
        }
    }
</style>
