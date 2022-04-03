window.onscroll = function() {scroll()};

function scroll() {
    // console.log(document.documentElement.scrollTop)
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector("nav").style.cssText = "background-color: #e74c3c; height: 60px";
        document.querySelector("nav .logo").style.lineHeight = "60px";
        document.querySelector("nav ul").style.lineHeight = "60px";
    }
    else {
        document.querySelector("nav").style.cssText = "background-color: transparent; height: 80px";
        document.querySelector("nav .logo").style.lineHeight = "80px";
        document.querySelector("nav ul").style.lineHeight = "80px";
    }
}