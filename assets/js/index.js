window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("header").classList.add('scroll');
    } else {
        document.getElementById("header").classList.remove('scroll');
    }
}

window.onload = function() {
    setTimeout(function(){
        document.getElementById('loading').classList.add("hidden");
    }, 3000);
}