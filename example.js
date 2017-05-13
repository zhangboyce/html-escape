let escape = require("./index").escape;
let translate = require("./index").translate;

let html = '<a href="http://xxx.com?p=1&q=2"></a>';
let text = "&lt;a href=&quot;http://xxx.com?p=1&amp;q=2&quot;&gt;&lt;/a&gt;";

console.log(escape(html));
console.log(translate(text));
