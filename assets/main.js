document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.hamburger');
    var nav = document.querySelector('.header-center-content nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', function () {
        var open = nav.classList.toggle('nav-open');
        btn.setAttribute('aria-expanded', open);
        btn.innerHTML = open ? '&#10005;' : '&#9776;';
    });
});
