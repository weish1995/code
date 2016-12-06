/**
 * AJAX 请求工具
 *
 * var request = require('../utils/request');

 * var result = request.get('/user.json', {
 *     name: 'xiaoyage'
 * });

 * result.then(function(data) {
 *     console.log(data)
 * }).fail(function(xhr, errorType, message) {
 *     console.log('error', message)
 * });
 *
 */

import * as Cookie from './cookie';

// 主域
const HOST = `//${location.host}`;
const TIMEOUT = 30 * 1000;

/**
 * 统一处理接口异常返回值
 * @param response
 * @returns Promise
 */
function responseFilter(response) {
    let deferred;

    if (response.code) {
        deferred = $.Deferred();

        return deferred.reject({
            status: 400,
        }, 'Server Exception', response.message);
    }

    return response;
}

export function DEFAULT_ERROR_HANDLER(xhr, errorType, error) {
    $.hideIndicator();
    let status = xhr.status;

    if (status >= 400 && status < 500) {
        try {
            error = JSON.parse(xhr.response).message;
            $.toast(error);
        } catch (e) {
            $.toast(e.message);
        }
    } else if (status >= 500) {
        $.toast(error);
    } else {
        $.toast('网络开小差了');
    }
}

/**
 * 发起一个GET请求
 * @param url
 * @param query
 * @returns Promise
 */
export function get(url, query) {
    return $.ajax({
        url: HOST + url,
        type: 'GET',
        data: query,
        cache: false,
        timeout: TIMEOUT,
    }).then(responseFilter);
}

/**
 * 发起一个POST请求
 * @param url
 * @param formData
 * @returns Promise
 */
export function post(url, formData) {
    return $.ajax({
        url: HOST + url,
        type: 'POST',
        data: formData,
        cache: false,
        timeout: TIMEOUT,
        headers: {
            'X-Xsrftoken': Cookie.get('_xsrf'),
        },
    }).then(responseFilter);
}

/**
 * 发起一个JSON POST请求
 * @param url
 * @param jsonData
 * @returns Promise
 */
export function postJSON(url, jsonData) {
    return $.ajax({
        url: HOST + url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(jsonData),
        cache: false,
        timeout: TIMEOUT,
        headers: {
            'X-Xsrftoken': Cookie.get('_xsrf'),
        },
    }).then(responseFilter);
}

/**
 * 发起一个PUT请求
 * @param url
 * @param formData
 * @returns Promise
 */
export function put(url, jsonData) {
    return $.ajax({
        url: HOST + url,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(jsonData),
        cache: false,
        timeout: TIMEOUT,
        headers: {
            'X-HTTP-Method-Override': 'PUT',
            'X-Xsrftoken': Cookie.get('_xsrf'),
        },
    }).then(responseFilter);
}

/**
 * 发起一个DELETE请求
 * @param url
 * @returns Promise
 */
export function del(url) {
    return $.ajax({
        url: HOST + url,
        type: 'DELETE',
        cache: false,
        timeout: TIMEOUT,
        headers: {
            'X-HTTP-Method-Override': 'DELETE',
            'X-Xsrftoken': Cookie.get('_xsrf'),
        },
    }).then(responseFilter);
}
