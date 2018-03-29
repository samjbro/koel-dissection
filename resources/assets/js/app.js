import './bootstrap';
import {http} from '@/services';
import {event} from '@/utils';
import App from  './App.vue';

new Vue({
    el: '#app',
    components: {App},
    template: '<App/>',
    created() {
        http.init();
        event.init();
    }
});
