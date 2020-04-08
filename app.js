window.addEventListener('scroll', function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var switcher = (winScroll / height) * 100;
    document.getElementsByClassName('scroll-progress')[0].style.width = switcher + "%";
});