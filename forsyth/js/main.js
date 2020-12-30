import {CountUp} from "./countUp.min.js";

$(document).ready(function ($) {


    // const menuItems = document.querySelectorAll('.menu__main-list li');
    //
    // menuItems.forEach(menuItem => {
    //     menuItem.addEventListener('click', () => {
    //         menuItem.classList.toggle('active');
    //     })
    // });
    //
    // //tabs

    const hamburger  = document.querySelector('#hamburger'),
        menu = document.querySelector('#menu'),
        header = document.querySelector('#header');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        header.classList.toggle('header_active');
        document.body.classList.toggle('body-fix');
    })

    $('ul.menu__main-list').on('click', 'li', function() {
        $(this).toggleClass('active').siblings().removeClass('active');
    });






    //tabs end


    $('.slider-vertical').slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: '0',
        nextArrow: '.s6__slider-wrapper .pagination-next',
        prevArrow: '.s6__slider-wrapper .pagination-prev',
        asNavFor: ".s6__text-block",
        infinite: true,
        responsive: [
            {
                breakpoint: 410,
                settings: {
                    slidesToShow:1,
                }
            }]
    });

    $('.s6__text-block').slick({
        infinite: true,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true,
        arrows: false
    });

    $('.s7__slider').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        nextArrow: '.s7__pagination .pagination-next',
        prevArrow: '.s7__pagination .pagination-prev',
        adaptiveHeight: true,
        infinite: false

    });
    $('.first__descr-block').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,

    });


    document.getElementById('first__video').play();

//numbers animate

    const options = {
        duration: 5,
        separator: '',
    };

    // функция определяет нахождение элемента в области видимости
    // если элемент видно - возвращает true
    // если элемент невидно - возвращает false
    function isOnVisibleSpace(element) {
        var bodyHeight = window.innerHeight;
        var elemRect = element.getBoundingClientRect();
        var offset   = elemRect.top;// - bodyRect.top;
        if(offset<0) return false;
        if(offset>bodyHeight) return false;
        return true;
    }

    // глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости
    var listenedElements = [];

    // обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements
    // на предмет попадания(выпадения) в зону видимости
    window.onscroll = function() {
        listenedElements.forEach(item=>{
            // проверяем находится ли элемент в зоне видимости
            var result = isOnVisibleSpace(item.el);

            // если элемент находился в зоне видимости и вышел из нее
            // вызываем обработчик выпадения из зоны видимости
            if(item.el.isOnVisibleSpace && !result){
                item.el.isOnVisibleSpace = false;
                item.outVisibleSpace(item.el);
                return;
            }
            // если элемент находился вне зоны видимости и вошел в нее
            // вызываем обработчик попадания в зону видимости
            if(!item.el.isOnVisibleSpace && result){
                item.el.isOnVisibleSpace = true;
                item.inVisibleSpace(item.el);
                return;
            }
        });
    }

    // функция устанавливает обработчики событий
    // появления элемента в зоне видимости и
    // выхода из нее
    function onVisibleSpaceListener(elementId, cbIn, cbOut) {
        // получаем ссылку на объект элемента
        var el = document.getElementById(elementId);
        // добавляем элемент и обработчики событий
        // в массив отслеживаемых элементов
        listenedElements.push({
            el: el,
            inVisibleSpace: cbIn,
            outVisibleSpace: cbOut
        });
    }

    var counter1 = new CountUp('counter1', 97,options),
    counter2 = new CountUp('counter2', 100,options),
    counter3 = new CountUp('counter3', 2500,options),
    counter4 = new CountUp('counter4', 325,options);

    // устанавливаем обработчики для элемента "video"
    onVisibleSpaceListener("number-card-list",
        el=>{
            // функция вызываемая при попадании элемента в зону видимости
            // тут вставляем код запуска анимации
            counter1.start();
            counter2.start();
            counter3.start();
            counter4.start();

        },
        el=>{
            // функция вызываемая при выпадении элемента из зоны видимости
            // тут вставляем код остановки анимации
        }
    );
    //numbers animate end


    const parollerOptions = {factor: 0.3, factorXs: 0.2, factorSm: 0.1, type: 'foreground', direction: 'vertical'}

    onVisibleSpaceListener("section_5",
        el=>{
            // функция вызываемая при попадании элемента в зону видимости
            // тут вставляем код запуска анимации
            $(".s5__pattern").paroller(parollerOptions);

        },
        el=>{
            // функция вызываемая при выпадении элемента из зоны видимости
            // тут вставляем код остановки анимации
        }
    );
    onVisibleSpaceListener("section_9",
        el=>{
            // функция вызываемая при попадании элемента в зону видимости
            // тут вставляем код запуска анимации
            $(".s9__pattern").paroller(parollerOptions);

        },
        el=>{
            // функция вызываемая при выпадении элемента из зоны видимости
            // тут вставляем код остановки анимации
        }
    );

    AOS.init({
        duration: 700,
        once: true,
        startEvent: 'load',
    });

});//конец ready




