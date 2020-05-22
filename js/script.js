// Scroll to top
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var top = document.getElementById('totop');
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        top.style.display = 'block';
    } else {
        top.style.display = 'none';
    }
};
function scrollToTop() {
    var position = document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout('scrollToTop()', 30);
    } else clearTimeout(scrollAnimation);
};
