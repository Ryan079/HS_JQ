$(function() {

    $(".hamburger-menu").on('click', function() {
        $('body').toggleClass('hamburger-menu-show');
    });

    $('.dropdown').click(function(e) {
        e.preventDefault();
        $('.dropdown-open').stop(true,false).slideToggle();
    });

    //偵測TOP BTN顯示與否
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll > 100) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    //點擊後往上top
    $('.top a').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    //nivoSlider banner的效果
    $(window).load(function() {
        $('#slider').nivoSlider({
            controlNav: false
        });
    });

    // lightbox 的效果
    lightbox.option({
        'resizeDuration': 400,
        'wrapAround': true
    });
});