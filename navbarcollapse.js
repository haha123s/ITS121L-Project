// JavaScript code for collapsing navbar on scroll
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = document.querySelector('#header').offsetHeight;

window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - currentScroll) <= delta)
        return;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.querySelector('#header').style.transition = 'transform 0.3s ease-in-out';
        document.querySelector('#header').style.transform = 'translateY(-' + navbarHeight + 'px)';
    } else {
        // Scrolling up
        document.querySelector('#header').style.transition = 'transform 0.3s ease-in-out';
        document.querySelector('#header').style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll;
});