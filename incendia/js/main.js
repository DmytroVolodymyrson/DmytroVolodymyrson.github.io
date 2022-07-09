$(document).ready(function ($) {
    //mobile menu
    const menu = document.querySelector('.header__nav'),
        menuItem = document.querySelectorAll('.header__menu li '),
        menuLink = document.querySelectorAll('.header__menu li a'),
        slidingStrip = document.querySelector(".sliding-strip"),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__nav_active');
        document.body.classList.toggle('body-fix');
        slidingStrip.classList.toggle("sliding-strip_active");
    });


    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__nav_active');
        })
    });
    //mobile menu end

    //slider
    $('.ssl__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: ".ssl__controls .arrow_left",
        nextArrow: ".ssl__controls .arrow_right",
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            },
    ]
    });
    $('.ssl-2__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: ".ssl-2__controls .arrow_left",
        nextArrow: ".ssl-2__controls .arrow_right",
    });
    //slider end

    //show more
        const show_more = document.querySelectorAll('.show-more');
        show_more.forEach(show_more_item => {
            const show_more_title = show_more_item.querySelector('.show-more__title')
            show_more_title.addEventListener('click',() => {
                show_more_item.classList.toggle("show-more_show")
            })
        })
    //show more end

    //accordion job-search on mobile

    const sort_list = document.querySelectorAll(".sort-list");
        sort_list.forEach(item => {
           if ( item.querySelector(".value__list")){
               item.classList.toggle("sort-list_accordion")
           }
        })
    const accordion = document.querySelectorAll('.sort-list_accordion');
    accordion.forEach(accordion_item => {
        const accordion_title = accordion_item.querySelector('.sort-list__title')
        accordion_title.addEventListener('click',() => {
            accordion_item.classList.toggle("sort-list_show")
        })
    })

    //accordion end
});//конец ready
