jQuery( document ).ready(function($){
        
    // Анимация шапки----------------------------------------------------------------------------------------------------------------
        $(window).scroll(function(){
            if ($(this).scrollTop() > 20) {
                $('.header').addClass('scroll-active');
            } else {
                $('.header').removeClass('scroll-active');
            }
        });
    
    //Меню в мобильной версии
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__nav'),
        menuItem = document.querySelectorAll('.header__menu li'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__nav_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('header__nav_active');
            })
        });
    });
    
$(document).ready(function(){
    $('.studies__slider').slick({
        dots: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite:true,
        slidesToShow: 2,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
              }
            },]
    });
   
});
   
});//конец ready