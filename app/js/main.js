$(document).ready(function () {
    $('.clients__courusel').slick({
        // dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
});

$('.header__nav-btn').on('click', function () {
    $('.header__nav-burger').toggleClass('header__nav-burger--active');
    $('.header__nav-list').toggleClass('header__nav-list--active');
})