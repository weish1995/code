function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

function loadCookies() {
    return document.cookie.split(';');
}

export function get(name) {
    var cookies = loadCookies();
    var kv, value;

    for(var i = 0; i < cookies.length; i++) {
        kv = cookies[i].split('=');

        if(trim(kv[0]) === name) {
            value = kv[1];
            break;
        }
    }

    return value;
}
