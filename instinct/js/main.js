jQuery( document ).ready(function($){

    /*$('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: false,
        responsiveWidth: 700,
        anchors: ['about us', 'product', 'expertise', 'meet the team', 'media hub', 'success stories', 'contact'],
        parallax: true
    });*/


    /*$('#pagepiling').pagepiling({
        //menu: '#myMenu',
        navigation: false,
        direction: 'vertical',
        verticalCentered: true,
        //anchors: ['about_us', 'product', 'expertise', 'meet_the_team', 'media_hub', 'success_stories', 'contact'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });*/


    var pageable = new Pageable("#pagepiling",{
        pips: false,
        animation: 1000,
        delay: 0,
        swipeThreshold: 10,
        orientation: "vertical",
        infinite: false,
        /*slideshow: {
            interval: 5000,
            delay: 100
        },*/
        childSelector: '[data-anchor]',
        freeScroll: true,
        onFinish: (data) => {
			if (data.index == 4)
				stopScrl();
		},
    });

    function stopScrl() {
		pageable.slideshow().stop();
    }



//Меню в мобильной версии
    $(".menu-icon").click(function () {
        $("#site").toggleClass('open-menu');
    });

    $(".mob-menu li a").click(function () {
        $("#site").removeClass('open-menu');
    });

//Анимация при скроле--------------------------------------------------------------------------------------------------------------
    AOS.init({
        useClassNames: true,
        initClassName: false,
        animatedClassName: 'animated',
        once: true,
        offset: 50,
    });

// --------------------------------------------------------------------------------------------------------------
    $('.aim-carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 350,
        arrows: false,
        dots: true
    });

        
});//конец ready