document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('stickyNavbar');
    var navbarHeight = navbar.offsetHeight;
    var headerHeight = document.querySelector('.main-header').offsetHeight;
    var lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > headerHeight) {
            if (!navbar.classList.contains('sticky-navbar')) {
                navbar.classList.add('sticky-navbar', 'animate-slide-down');
                document.body.classList.add('has-sticky-navbar');
                document.body.style.paddingTop = navbarHeight + 'px';
            }
        } else {
            navbar.classList.remove('sticky-navbar', 'animate-slide-down');
            document.body.classList.remove('has-sticky-navbar');
            document.body.style.paddingTop = '0';
        }

        lastScrollTop = scrollTop;
    });
});
