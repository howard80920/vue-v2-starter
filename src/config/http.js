
export const allowedMethods = [ 'HEAD', 'GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS' ];

export const headers = {
    'Content-Type'    : 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
};

export const timeoutSec = 30;

const metaApiUrl = document.head.querySelector('meta[name="api-url"]');

export const apiUrl = metaApiUrl ? metaApiUrl['content'] : '';