if($('body').width() < 922) {
    $('.slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
    })
}