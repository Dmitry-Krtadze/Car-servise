$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        scrollHorizontally: true,
        scrollingSpeed: 700,
        navigation: true,
        avigationPosition: 'right',
        scrollBar: false
    });
});

$(".main").on("click", function(e) {
    e.preventDefault();
    fullpage_api.moveTo(1);
    var instance = fullpage_api
        .getActiveSection()
        .item.querySelector(".fp-scrollable").fp_iscrollInstance;
    instance.scrollTo(0, -950, 900);
    setTimeout(function() {
        instance.refresh();
    }, 1000 + 150);
});

$(".advantages").on("click", function(e) {
    e.preventDefault();
    fullpage_api.moveTo(2);
    var instance = fullpage_api
        .getActiveSection()
        .item.querySelector(".fp-scrollable").fp_iscrollInstance;
    instance.scrollTo(0, -950, 900);
    setTimeout(function() {
        instance.refresh();
    }, 1000 + 150);
});

$(".reviews").on("click", function(e) {
    e.preventDefault();
    fullpage_api.moveTo(3);
    var instance = fullpage_api
        .getActiveSection()
        .item.querySelector(".fp-scrollable").fp_iscrollInstance;
    instance.scrollTo(0, -950, 900);
    setTimeout(function() {
        instance.refresh();
    }, 1000 + 150);
});

$(".services").on("click", function(e) {
    e.preventDefault();
    fullpage_api.moveTo(4);
    var instance = fullpage_api
        .getActiveSection()
        .item.querySelector(".fp-scrollable").fp_iscrollInstance;
    instance.scrollTo(0, -950, 900);
    setTimeout(function() {
        instance.refresh();
    }, 1000 + 150);
});

$('.slider__S1').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
$('.slider__S2').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
$('.slider__S4').slick({
    dots: false,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3

});