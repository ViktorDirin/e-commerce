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

$(".cards__item").on("click", function (e) {
    if (window.innerWidth < 768) {
        console.log('worrrrrrrrk');
        $(this).find(".cards__item-descr").slideToggle('slow');
    };
});

$('.cards__item-link').on('click', function () {
    if (window.innerWidth > 768) {
        let modalTitle = $(this).find(".cards__item-link-text").text();
        let modalText = $(this).closest(".cards__item").find(".cards__item-descr").text();
        // console.log(modalText);
        $('.modal__inner-title').text(modalTitle);
        $('.modal__inner-text').text(modalText);
        $('.modal__filter').fadeIn(200);
    };

});
$('.modal__close, .modal__filter').on('click', function () {
    if (window.innerWidth > 768) {
        // console.log('mooooodal');
        $('.filter, .modal').fadeOut(200);
    };

});
