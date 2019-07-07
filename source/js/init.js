window.crutch = {};

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,       
        responsive: {
            0: {
                items: 3,
                nav: false,
                loop: true                
            },
            600: {
                items:4,
                nav: false,
                loop: true
            },
            800: {
                items: 5,
                nav: false,
                loop: true
            },
            1100: {
                items: 6,
                nav: false,
                loop: true
            }                     
        }
    })
});

