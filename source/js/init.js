window.crutch = {};

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            800: {
                items: 4,
                nav: false
            },
            1000: {
                items: 6,
                nav: false,
                loop: false
            }
        }
    })
});

