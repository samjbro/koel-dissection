import {event} from '@/utils';

export function loadMainView(view, ...args) {
    event.emit(event.names.LOAD_MAIN_CONTENT, view, ...args);
}
export function showOverlay (message = 'Just a little patience...', type = 'loading', dismissable = false) {
    event.emit(event.names.SHOW_OVERLAY, { message, type, dismissable });
}
export function hideOverlay () {
    event.emit(event.names.HIDE_OVERLAY);
}