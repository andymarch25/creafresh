var $header = $('.header');
var $menu = $('.menu');

var isIE10 = !!navigator.userAgent.match(/MSIE 10/);
if(isIE10){
    $('html').addClass('ie10');
}

console.log(navigator.userAgent);


$('.nav-button').on('click', function(){
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
});


// $(window).on('scroll', function(){
//    if($(window).scrollTop() > 0){
//        $header.addClass('on-scroll');
//    }else{
//        $header.removeClass('on-scroll');
//    }
// });