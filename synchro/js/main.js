$(document).ready(function ($) {

    //mobile menu
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('#menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });


    //mobile menu end
    AOS.init({
        duration: 700,
        once: true,
        startEvent: 'load',
    });


    // function isScrolledIntoView(elem) {
    //     var docViewTop = $(window).scrollTop();
    //     var docViewBottom = docViewTop + $(window).height();
    //
    //     var elemTop = $(elem).offset().top;
    //     var elemBottom = elemTop + $(elem).height();
    //     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    // }

    // var revealedOnce = false,
    //     revealedOnce2 = false;
    //
    // $(function () {
    //     $(window).scroll(function () {
    //         if (isScrolledIntoView(".s2__title") && revealedOnce === false) {
    //             TextReveal(document.querySelector(".s2__title"));
    //             revealedOnce = true;
    //         }
    //         if (isScrolledIntoView(".s4__title") && revealedOnce2 === false) {
    //             TextReveal(document.querySelector(".s4__title"));
    //             revealedOnce2 = true;
    //         }
    //     });
    // });

    // function TextReveal(element = document) {
    //     var tl = new TimelineLite({delay: 0.3}),
    //         firstBg = element.querySelectorAll('.text__first-bg'),
    //         secBg = element.querySelectorAll('.text__second-bg'),
    //         word = element.querySelectorAll('.text__word');
    //
    //     tl.to(firstBg, 0.2, {scaleX: 1})
    //         .to(secBg, 0.2, {scaleX: 1})
    //         .to(word, 0.1, {opacity: 1}, "-=0.1")
    //         .to(firstBg, 0.2, {scaleX: 0})
    //         .to(secBg, 0.2, {scaleX: 0});
    //
    //
    // }
    //
    // window.onload = TextReveal(document.querySelector(".first__title"));
    // window.onload = $(function () {
    //     if (isScrolledIntoView(".s2__title") && revealedOnce === false) {
    //         TextReveal(document.querySelector(".s2__title"));
    //         revealedOnce = true;
    //     }
    //
    // });

    $(".paroller").paroller({factor: 0.2, factorXs: 0.2, factorSm: 0.3, type: 'foreground', direction: 'vertical'});
    $(".paroller-2").paroller({factor: 0.1, factorXs: 0.3, factorSm: 0.3, type: 'foreground', direction: 'vertical'});

    // var typingEffect = function () {
    //     "use strict";
    //     return function (e, {speed: t = 30, delay: r = 300, reset: n = !0} = {}) {
    //         const i = {speed: t, delay: r, reset: n};
    //         let a = 0;
    //         if (e instanceof Array || (e = [e]), 0 !== e.length) return function (e) {
    //             e.forEach(e => {
    //                 let t = !1;
    //                 const r = e.innerHTML.trim().replace(/\s{2,}/g, " ").replace(/(\r\n|\n|\r)/gm, "");
    //                 let n = "";
    //                 e.hasAttribute("data-typing-effect") || (e.style = "visibility: hidden;"), e.setAttribute("aria-label", r);
    //                 for (let e = 0; e < r.length; e += 1) "<" === r.charAt(e) && (t = !0), n += t ? r.charAt(e) : `<span aria-hidden="true" style="visibility: hidden">${r.charAt(e)}</span>`, ">" === r.charAt(e) && (t = !1);
    //                 e.innerHTML = n
    //             })
    //         }(e), new Promise(t => {
    //             !function r(n) {
    //                 (function (e, t) {
    //                     return e.removeAttribute("data-typing-effect"), e.removeAttribute("style"), new Promise(r => {
    //                         !function n() {
    //                             const i = e.querySelector("span[style]");
    //                             i ? (i.removeAttribute("style"), setTimeout(n, t.speed)) : (t.reset && function (e) {
    //                                 e.innerHTML = e.getAttribute("aria-label"), e.removeAttribute("aria-label")
    //                             }(e), r())
    //                         }()
    //                     })
    //                 })(e[n], i).then(() => {
    //                     (a += 1) < e.length ? setTimeout(() => {
    //                         r(a)
    //                     }, i.delay) : t()
    //                 })
    //             }(a)
    //         })
    //     }
    // }();
    //
    //
    // const options = {
    //     speed: 50,
    //     delay: 0,
    //     reset: false
    // }
    //
    // typingEffect(Array.from(document.querySelectorAll(".first__title [data-typing-effect]")), options);
    //
    //
    // $(window).scroll(function () {
    //     if (isScrolledIntoView(".s2__title")) {
    //         document.querySelectorAll(".s2__title.cross-bar-glitch")
    //         // typingEffect(Array.from(document.querySelectorAll(".s2__title [data-typing-effect]")), options);
    //     }
    //     if (isScrolledIntoView(".s3__title")) {
    //         typingEffect(Array.from(document.querySelectorAll(".s3__title [data-typing-effect]")), options);
    //     }
    //     if (isScrolledIntoView(".s4__list-title")) {
    //         typingEffect(Array.from(document.querySelectorAll(".s4__list-title [data-typing-effect]")), options);
    //     }
    //     if (isScrolledIntoView(".s5__title")) {
    //         typingEffect(Array.from(document.querySelectorAll(".s5__title [data-typing-effect]")), options);
    //     }
    //     if (isScrolledIntoView(".s6__title")) {
    //         typingEffect(Array.from(document.querySelectorAll(".s6__title [data-typing-effect]")), options);
    //     }
    //     if (isScrolledIntoView(".s7__title")) {
    //         typingEffect(Array.from(document.querySelectorAll(".s7__title [data-typing-effect]")), options);
    //     }
    //
    // });

    "use strict";

// Класс или тег элемента на которые нужно повесить анимации

    const items = document.querySelectorAll('.title-glitch');

// Начало перебора всех элементов

    items.forEach(item => {

// Функция скролла

        function isVisible(tag) {
            var t = $(tag);
            var w = $(window);
            var wt = w.scrollTop();
            var tt = t.offset().top;
            var tb = tt + t.height();
            return ((tb <= wt + w.height() - 50) && (tt >= wt));
        }

// Функция просмотра поля видимости

        function signal() {
            var b = $(item);
            if (!b.prop("shown") && isVisible(b)) {
                b.prop("shown", true);

// Переменная сохраняет содержимое до анимации

                let tagContent = item.innerHTML;

// Добавляет класс для анимации на все нужные элементы

                b.addClass('cross-bar-glitch');

// Функция самой анимации, которая была предоставленна в codpene

                const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                let crossBarGlitchTexts = document.querySelectorAll(".cross-bar-glitch");
                crossBarGlitchTexts.forEach(text => {
                    let content = text.textContent;
                    text.textContent = "";
                    // Glitch Text
                    let slice = text.dataset.slice;
                    let glitchText = document.createElement("div");
                    glitchText.className = "glitch";
                    glitchText.style.setProperty("--slice-count", slice);
                    for (let i = 0; i <= Number(slice); i++) {
                        let span = document.createElement("span");
                        span.textContent = content;
                        span.style.setProperty("--i", `${i + 1}`);
                        if (i !== Number(slice)) {
                            span.style.animationDelay = `${800 + random(100, 300)}ms`;
                        }
                        glitchText.append(span);
                    }
                    text.appendChild(glitchText);
                    // Cross Bars
                    let bars = document.createElement("div");
                    bars.className = "bars";
                    for (let i = 0; i < 5; i++) {
                        let bar = document.createElement("div");
                        bar.className = "bar";
                        bars.append(bar);
                    }
                    text.append(bars);

                });

// Конец Функции анимации


// Таймер, который возвращает значение Элемента, что было до анимации

                setTimeout(() => {
                    item.innerHTML = tagContent;
                    b.removeClass('cross-bar-glitch');
                }, 1500);

            }
        }

// Вызов функции во время скролла и загрузки страницы

        $(function () {
            signal();
            $(window).scroll(signal);
        });

    });








});//конец ready



// envelope animation




