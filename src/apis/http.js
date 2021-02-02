import axios from 'axios';

const metaApiUrl = document.head.querySelector('meta[name="api-url"]');

const ajax = axios.create({
    baseURL: metaApiUrl ? metaApiUrl['content'] : '',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    timeout: 30 * 1000
});

/**
 * HTTP請求
 * @param {string} method 請求方法
 * @param {string} url 請求路由
 * @param {object} payload 請求資料
 */
export async function $http(method, url, payload = {}) {
    if ([ 'HEAD', 'GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS' ].indexOf(method) < 0) {
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