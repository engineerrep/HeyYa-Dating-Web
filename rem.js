(function (doc, win, designWidth) {
    const dpr = Math.min(win.devicePixelRatio, 3),
        scale = 1 / dpr,
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

    var recalCulate = function () {
        var docEle = document.documentElement,
            w = docEle.clientWidth,
            num = (w > designWidth ? designWidth : w) / designWidth;
            if(w>1000){
                docEle.style.fontSize = (num).toFixed(1) + 'px';
            }else{
                docEle.style.fontSize = (1000/designWidth).toFixed(1) + 'px';
            }
            
    };
    recalCulate();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);
})(document, window,
    1920
);




