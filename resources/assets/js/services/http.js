import {ls} from '@/services';

export const http = {
    request(method, url, data = {}, successCb = null, errorCb = null) {
        return axios.request({url, data, method: method.toLowerCase()}).then(successCb).catch(errorCb);
    },

    post(url, data = {}, successCb = null, errorCb = null) {
        return this.request('post', url, data, successCb, errorCb);
    },

    init() {
        axios.defaults.baseURL = `${process.env.MIX_BASE_URL}`;
    }
};