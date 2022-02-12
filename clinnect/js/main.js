import {CountUp} from "./countUp.min.js";

$(document).ready(function ($) {
    //header animation

    const first = document.querySelector('.first')
    if (first) {
        $('#header').addClass('header_disable');
        $(window).scroll(function () {
            if ($(this).scrollTop() > first.clientHeight) {
                $('#header').addClass('header_active');
            } else {
                $('#header').removeClass('header_active');
            }
        });
    }
    const menu = document.getElementById('menu');
    if (menu) {
        const hamburgers = document.querySelectorAll('.hamburger');
        hamburgers.forEach(hamburger => {
            hamburger.addEventListener('click', () => {
                menu.classList.toggle('menu_active');
            })
        })

    }

    const cards2 = document.querySelectorAll('.card-2');
    if (cards2) {
        cards2.forEach(card2 => {
            card2.addEventListener('click', () => {
                card2.classList.toggle("card-2_active")
            })
        })
    }

    const sideFilter = document.querySelector('.side-filter');
    if (sideFilter) {
        const filterBlocks = sideFilter.querySelectorAll(".filter-block")
        filterBlocks.forEach(filterBlock => {
            const filterBlockTilte = filterBlock.querySelector('.fb__title');
            filterBlockTilte.addEventListener('click', () => {
                filterBlock.classList.toggle('filter-block_active')
            })
        })
    }

    const overlay = document.getElementById('overlay');
    if (overlay) {
        const btns = document.querySelectorAll('[data-modal=contact]'),
            overlayBg = overlay.querySelector('.overlay__bg'),
            closeBtn = overlay.querySelector('.btn-close');
        overlayBg.addEventListener('click', () => {
            overlay.classList.remove('overlay_active')
        })
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('overlay_active')
        })
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                overlay.classList.add('overlay_active')
            })
        })
    }

    //parallax
    $(".first-2__pattern").paroller({factor: 0.2, type: 'foreground', direction: 'vertical'});
    //parallax end


    //numbers animate


    var listenedElements = [];
    window.onload = function () {
        listenedElements.forEach(item => {
            var result = isOnVisibleSpace(item.el);

            if (item.el.isOnVisibleSpace && !result) {
                item.el.isOnVisibleSpace = false;
                item.outVisibleSpace(item.el);
                return;
            }

            if (!item.el.isOnVisibleSpace && result) {
                item.el.isOnVisibleSpace = true;
                item.inVisibleSpace(item.el);
                return;
            }
        });
    }
    window.onscroll = function () {
        listenedElements.forEach(item => {

            var result = isOnVisibleSpace(item.el);

            if (item.el.isOnVisibleSpace && !result) {
                item.el.isOnVisibleSpace = false;
                item.outVisibleSpace(item.el);
                return;
            }

            if (!item.el.isOnVisibleSpace && result) {
                item.el.isOnVisibleSpace = true;
                item.inVisibleSpace(item.el);
                return;
            }
        });
    }

    function isOnVisibleSpace(element) {
        var bodyHeight = window.innerHeight;
        var elemRect = element.getBoundingClientRect();
        var offset = elemRect.top;// - bodyRect.top;
        if (offset < 0) return false;
        if (offset > bodyHeight) return false;
        return true;
    }

    function onVisibleSpaceListener(elementId, cbIn, cbOut) {

        var els = document.querySelectorAll(elementId);
        els.forEach(el => {
            listenedElements.push({
                el: el,
                inVisibleSpace: cbIn,
                outVisibleSpace: cbOut
            });
        })
    }

    const options = {
        duration: 5,
        separator: ',',
    };

    onVisibleSpaceListener(".counter",
        el => {
            if (!el.classList.contains('once')) {
                const counterNumber = el.getAttribute('data-count')
                new CountUp(el, counterNumber, options).start();
                el.classList.add('once');
            }
        },
        el => {

        }
    );
    onVisibleSpaceListener(".bn__canvas",
        el => {
            if (!el.classList.contains('once')) {
                var gauge = new Gauge(el).setOptions(opts); // create sexy gauge!
                gauge.maxValue = 5; // set max gauge value
                gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
                gauge.animationSpeed = 100; // set animation speed (32 is default value)
                gauge.set(5); // set actual value
                el.classList.add('once')
            }
        },
        el => {

        }
    );
    //numbers animate end

    onVisibleSpaceListener(".title-2",
        el => {
            if (!el.classList.contains("once")) {
                el.classList.add("title-animate")
                el.classList.add("once")
            }
        },
        el => {

        }
    );


    //circle animate
    var opts = {
        angle: -0.5, // The span of the gauge arc
        lineWidth: 0.08, // The line thickness
        radiusScale: 1.13, // Relative radius
        pointer: {
            length: 0, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#25b19a',   // Colors
        colorStop: '#25b19a',    // just experiment with them
        strokeColor: '#ffffff',  // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: false,     // High resolution support

    };

    //circle animate end


});//конец ready


//tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active title-4 title-4_2 title-underline-2 title-underline-2_2').siblings().removeClass(' active title-4 title-4_2 title-underline-2 title-underline-2_2')
        .closest('div.tabs').find('ul.tabs__content>li').removeClass('active').eq($(this).index()).addClass('active');
});
//tabs end





