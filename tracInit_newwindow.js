init();

function loadScript(scriptURL) {
    var scriptElem = document.createElement('script');
    scriptElem.setAttribute('type', 'text/javascript');
    scriptElem.setAttribute('language', 'JavaScript');
    scriptElem.setAttribute('src', scriptURL);
    
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(scriptElem);
    void(0);
}

function init() {
    loadScript("https://www.neuland-bfi.de/~thilo.ettelt/trac/prototype_newwindow.js");
}
