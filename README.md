# html-escape

将html的'<','>',''', '"', '&' 标签分别转义成 '&lt;', '&gt;, '&apos;, '&quot;, '&amp;'
或者反向将html的以上5个转义字符翻译成html的以上对应标签。

# Example

```js

let escape = require("./index").escape;
let translate = require("./index").translate;

let html = '<a href="http://xxx.com?p=1&q=2"></a>';
let text = "&lt;a href=&quot;http://xxx.com?p=1&amp;q=2&quot;&gt;&lt;/a&gt;";

console.log(escape(html));
console.log(translate(text));

```

# Installation

```
npm install html-escape-translate
```
