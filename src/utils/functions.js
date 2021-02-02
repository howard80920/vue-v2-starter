/**
 * 非同步執行
 * @param {Promise} promise 非同步物件
 * @returns {any[]}
 */
export function asyncDo(promise) {
    return promise
    .then((res) => [ undefined, res ])
    .catch((err) => [ err, undefined ]);
}

/**
 * 
 * @param {string} input 字串
 * @returns {object}
 */
export function parseJSON(input) {
    try {
        return JSON.parse(input);
    } catch (e) {
        console.error(e);
        return null;
    }
}

/**
 * 
 * @param {any} input
 * @returns {string}
 */
export function toJSON(input) {
    try {
        return JSON.stringify(input);
    } catch (e) {
        console.error(e);
        return '';
    }
}