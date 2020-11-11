$(document).ready(function(){
    $('.mobile__btn').on('click', function(){
        $(this).toggleClass('mobile__btn_active');
        $('.nav__menu').toggleClass('nav-list-active')
    });
    $('.nav__item').on('click', function(){
        $('.nav__menu').removeClass('nav-list-active');
        $('.mobile__btn').removeClass('mobile__btn_active');
    });
});