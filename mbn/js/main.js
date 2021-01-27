$(document).ready(function ($) {
    //main-menu
    const hamburger = document.querySelector('#hamburger'),
        mainMenu = document.querySelector('#main-menu'),
        menuClose = document.querySelector('#main-menu__close')
    hamburger.addEventListener('click', () => {
        mainMenu.classList.toggle('main-menu_active');
        document.body.classList.toggle('body-fix')
    });
    menuClose.addEventListener('click', () => {
        mainMenu.classList.toggle('main-menu_active')
        document.body.classList.toggle('body-fix')
    });
    //main-menu end


    //sliders
    $('.slider-1-wrapper').each(function (key, item) {

        var sliderIdName = 'slider-1_' + key;

        this.id = sliderIdName;


        var sliderId = '#' + sliderIdName;

        $(sliderId + ' .slider-1').slick({
            slidesToShow: 5,
            nextArrow: sliderId + ' .slider-arrow_right',
            prevArrow: sliderId + ' .slider-arrow_left',
            responsive: [
                {
                    breakpoint: 1084,
                    settings: {
                        slidesToShow: 3,

                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,

                    }
                },
            ]
        });


    });
    $('.slider-2-wrapper').each(function (key, item) {

        var sliderIdName = 'slider-2_' + key;

        this.id = sliderIdName;


        var sliderId = '#' + sliderIdName;

        $(sliderId + ' .slider-2').slick({
            slidesToShow: 3,
            infinite: true,
            centerMode: true,
            arrows: false,
            centerPadding: '0',
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false
                    }
                }
            ]

        });


    });
    $('.slider-3-wrapper').each(function (key, item) {

        var sliderIdName = 'slider-3_' + key;

        this.id = sliderIdName;


        var sliderId = '#' + sliderIdName;

        $(sliderId + ' .slider-3').slick({
            slidesToShow: 6,
            nextArrow: sliderId + ' .slider-arrow_right',
            prevArrow: sliderId + ' .slider-arrow_left',
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 5,

                    }
                },
                {
                    breakpoint: 1084,
                    settings: {
                        slidesToShow: 3,

                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,

                    }
                },
            ]
        });


    });
    $('.slider-4-wrapper').each(function (key, item) {

        var sliderIdName = 'slider-4_' + key;

        this.id = sliderIdName;


        var sliderId = '#' + sliderIdName;

        $(sliderId + ' .slider-4').slick({
            slidesToShow: 1,
            nextArrow: sliderId + ' .slider-arrow_right',
            prevArrow: sliderId + ' .slider-arrow_left',

        });


    });
    $('.slider-5-wrapper').each(function (key, item) {

        var sliderIdName = 'slider-5_' + key;

        this.id = sliderIdName;


        var sliderId = '#' + sliderIdName;

        $(sliderId + ' .slider-5').slick({
            slidesToShow: 3,
            infinite: false,
            arrows: false,
            dots: true,
            dotsClass: 'slider-dots',
            draggable: false,
            responsive: [
                {
                    breakpoint: 1084,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]

        });


    });
    $('.slider-6-wrapper').each(function (key, item) {

        var sliderIdName = 'slider-6_' + key;

        this.id = sliderIdName;


        var sliderId = '#' + sliderIdName;

        $(sliderId + ' .slider-6').slick({
            slidesToShow: 3,
            infinite: false,
            arrows: false,
            dots: true,
            dotsClass: 'slider-dots slider-dots_blue',
            responsive: [
                {
                    breakpoint: 1084,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]

        });


    });
    $('.slider-7-wrapper').each(function (key, item) {

        var sliderIdName = 'slider-7_' + key;

        this.id = sliderIdName;


        var sliderId = '#' + sliderIdName;

        $(sliderId + ' .slider-7').slick({
            slidesToShow: 1,
            infinite: false,
            arrows: false,
            dots: true,
            dotsClass: 'slider-dots slider-dots_blue',

        });


    });
    $('.slider-9-wrapper').each(function (key, item) {

        var sliderIdName = 'slider-9_' + key;

        this.id = sliderIdName;


        var sliderId = '#' + sliderIdName;

        $(sliderId + ' .slider-9').slick({
            slidesToShow: 1,
            infinite: false,
            arrows: true,
            nextArrow: sliderId + ' .slider-arrow_right',
            prevArrow: sliderId + ' .slider-arrow_left',
            dots: true,
            dotsClass: 'slider-dots slider-dots_blue',

        });


    });
    //sliders end


    //popups
    const overlay = document.querySelector('#overlay');
    if (overlay) {
        const popupBtns = document.querySelectorAll('.pop-up-btn'),
            popups = overlay.querySelectorAll('.pop-up'),
            overlayBg = overlay.querySelector('.overlay__bg');

        popupBtns.forEach(item => {
            item.addEventListener('click', () => {
                popups.forEach(pop_up => {
                    const attribute = item.getAttribute('data-modal');
                    pop_up.classList.remove('pop-up_active');
                    if (pop_up.getAttribute('data-modal') === attribute) {
                        overlay.classList.add('overlay_active');
                        pop_up.classList.add('pop-up_active');
                        document.body.classList.add('body-fix');
                    }
                });
            })

        });
        overlayBg.addEventListener('click', () => {
            overlay.classList.remove('overlay_active');
            document.body.classList.remove('body-fix');
            popups.forEach(pop_up => {
                pop_up.classList.remove('pop-up_active');
                const iframe = pop_up.querySelector('iframe');
                iframe.src = iframe.src;
            });
        });
    }
    //popups end

    //values-list accordion
    const valuesCard = document.querySelector('#values-card');
    if (valuesCard) {
        const valueListWrappers = valuesCard.querySelectorAll('.value-list-wrapper');
        valueListWrappers.forEach(valueListWrapper => {
            const valueListTitle = valueListWrapper.querySelector('.value-list__title');
            valueListTitle.addEventListener('click', () => {
                valueListWrapper.classList.toggle('value-list-wrapper_active')
            })
        })
    }
    //values-list accordion end

    //jobs slider
    var $slider8 = $('.slider-8');
    var slideCount = null;

    $(document).ready(function () {
        $slider8.slick({
            slidesToShow: 1,
            infinite: false,
            prevArrow: '.slider-8-wrapper .slider-arrow-block_left',
            nextArrow: '.slider-8-wrapper .slider-arrow-block_right'
        });
    });

    $slider8.on('init', function (event, slick) {
        slideCount = slick.slideCount;
        setSlideCount();
        setCurrentSlideNumber(slick.currentSlide);
    });

    $slider8.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        setCurrentSlideNumber(nextSlide);
    });

    function setSlideCount() {
        var $el = $('.slide-count-wrap').find('.total');
        $el.text(slideCount);
    }

    function setCurrentSlideNumber(currentSlide) {
        var $el = $('.slide-count-wrap').find('.current');
        $el.text(currentSlide + 1);
    }
    //jobs slider end


    //teem board

    const teamBoard = document.querySelector('#teem-board');
    if (teamBoard){
        const teamCards = teamBoard.querySelectorAll('.card-8');
        teamCards.forEach(teamCard => {
            const cardMore = teamCard.querySelector('.card-8__more-block');
            cardMore.addEventListener('click', () => {
                teamCard.classList.toggle('card-8_active')
            })
        })
    }

    //team board end


   //viewport height correction on mobile
    var customViewportCorrectionVariable = 'vh';
    function setViewportProperty(doc) {
        var prevClientHeight;
        var customVar = '--' + ( customViewportCorrectionVariable || 'vh' );
        function handleResize() {
            var clientHeight = doc.clientHeight;
            if (clientHeight === prevClientHeight) return;
            requestAnimationFrame(function updateViewportHeight(){
                doc.style.setProperty(customVar, (clientHeight * 0.01) + 'px');
                prevClientHeight = clientHeight;
            });
        }
        handleResize();
        return handleResize;
    }
    window.addEventListener('resize', setViewportProperty(document.documentElement));
    //viewport height correction on mobile end

});//конец ready


//tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('.tab__content').removeClass('active').eq($(this).index()).addClass('active');
});
//tabs end




