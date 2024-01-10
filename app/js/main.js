$(document).ready(function () {
    $(".clients__courusel").slick({
        // dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});

$(".header__nav-btn").on("click", function () {
    $(".header__nav-burger").toggleClass("header__nav-burger--active");
    $(".header__nav-list").toggleClass("header__nav-list--active");
});

// $(".cards__item-btn").on("click", function (e) {
//     $(this).next(".card__item-list").slideToggle('slow');
// });
