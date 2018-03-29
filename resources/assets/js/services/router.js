import {loadMainView} from '@/utils';

export const router = {
    routes: {
        '/home' () {
            loadMainView('home');
        },
        '/queue' () {
            loadMainView('queue');
        },
        '/songs' () {
            loadMainView('songs');
        },
        '/albums' () {
            loadMainView('albums');
        },
        '/artists' () {
            loadMainView('artists');
        },
    },
    init() {
        window.addEventListener('popstate', () => this.loadState(), true);
    },
    loadState() {
        Object.keys(this.routes).forEach(route => {
           const matches = window.location.hash.match(new RegExp(`^#!${route}$`));
           if (matches) {
               const [, ...params] = matches;
               this.routes[route](...params);
               return false;
           }
        });
    }
};