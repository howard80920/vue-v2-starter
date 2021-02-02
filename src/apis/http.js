import axios from 'axios';
import { allowedMethods, timeoutSec, headers, apiUrl } from '@/config/http';

const ajax = axios.create({
    baseURL: apiUrl,
    headers: headers,
    timeout: timeoutSec * 1000
});

/**
 * HTTP請求
 * @param {string} method 請求方法
 * @param {string} url 請求路由
 * @param {object} payload 請求資料
 */
export async function $http(method, url, payload = {}) {
    if (allowedMethods.indexOf(method) < 0) {
        throw new Error(`Not Allowed Method: '${ method }'`);
    }
    try {
        const response = await ajax.request({
            url,
            method,
            data  : payload.body || null,
            params: payload.query || null,
        });
        return response.data;
    } catch (err) {
        if (err.response) {
            throw err.response;
        }
        throw err;
    }
}