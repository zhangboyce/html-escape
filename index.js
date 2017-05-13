"use strict";

let map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\'': '&apos;',
    '"': '&quot;'
};

let isEmpty = str => { return str == null || str == undefined || str == '' };
let replace = (str, callback) => {
    if (isEmpty(str)) return str;
    if (typeof str !== "string") {
        str = String(str);
    }

    for (let k in map) {
        if (map.hasOwnProperty(k)) {
            let v = map[k];
            str = callback(str, k, v);
        }
    }
    return str;
};



/**
 * html to text
 * @param html
 */
function escape(html) {
    return replace(html, (str, k, v) => {
        return str.replace(new RegExp(k, 'g'), v);
    });
}

/**
 * text to html
 * @param text
 */
function translate(text) {
    return replace(text, (str, k, v) => {
        return str.replace(new RegExp(v, 'g'), k);
    });
}

module.exports = { escape, translate };