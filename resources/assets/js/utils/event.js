export const event = {
    bus: null,

    names: {
        KOEL_READY: 'koel:ready',
        LOAD_MAIN_CONTENT: 'main-content:load',
        SHOW_OVERLAY: 'overlay:show',
        HIDE_OVERLAY: 'overlay:hide'
    },

    init() {
        if (!this.bus) {
            this.bus = new Vue();
        }
    },
    emit(name, ...args) {
        this.bus.$emit(name, ...args);
    },

    on(name, cb) {
        this.bus.$on(name, cb);
    }
};