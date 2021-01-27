$(document).ready(function ($) {
    const hamburger = document.querySelector('#hamburger'),
        menu = document.querySelector('#menu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        document.body.classList.toggle('body-fix');
    })


    // envelope animation
    window.onload = function () {
        var tl = new TimelineLite({delay: 0}),
            firstBg = document.querySelectorAll('.text__first-bg'),
            secBg = document.querySelectorAll('.text__second-bg'),
            word = document.querySelectorAll('.text__word');

        tl
            .to(firstBg, 0.2, {scaleX: 1})
            .to(secBg, 0.2, {scaleX: 1})
            .to(word, 0.1, {opacity: 1}, "-=0.1")
            .to(firstBg, 0.2, {scaleX: 0})
            .to(secBg, 0.2, {scaleX: 0});

    }


    //tabs
    const memberCardList = document.querySelector('#member-card-list');
    if (memberCardList) {
        let itemsInRow = 1;
        if (window.screen.width >= 1080) {
            itemsInRow = 4;
        } else if (window.screen.width >= 576) {
            itemsInRow = 3;
        } else if (window.screen.width >= 410) {
            itemsInRow = 2;
        }
        const memberCards = memberCardList.querySelectorAll('.member-card'); //check if list exists
        memberCards.forEach(memberCard => {
            memberCard.addEventListener('click', () => { //click listener
                memberCards.forEach(memberCard => {
                    memberCard.classList.remove('member-card_active')
                }) //remove all active image-blocks
                memberCard.classList.add('member-card_active') //activate current image-block
                const memberCardInfo = memberCard.querySelector('.member-card__info-block'); //get info-block from clicked image-block
                let memberCardListElems = document.querySelectorAll('#member-card-list>li'); //get all li-elem from member-card-list list
                memberCardListElems.forEach(li => { //search and remove active info-blocks
                    if (li.classList.contains('member-card__info-block_active')) {
                        li.remove();
                    }
                })
                if (memberCardInfo) { //check if image-block has info-block
                    const li = document.createElement("li"); //create wrapper for new info-block
                    li.classList.toggle('member-card__info-block_active'); //add class
                    li.appendChild(memberCardInfo); //pushing info-block into wrapper
                    memberCard.appendChild(memberCardInfo.cloneNode(true)); //clone our info-block so it does not disappear from it's initial parent
                    const memberCardIndex = Array.prototype.indexOf.call(memberCards, memberCard); //get index of clicked elem
                    const insertRowIndex = Math.floor(memberCardIndex / itemsInRow) + 1 //calculate row to insert info-block
                    li.style.cssText = `grid-row-start: ${insertRowIndex + 1} ` //set styles for the info-block so it appear on the row we need
                    memberCardList.appendChild(li) //and push info-block to the list
                }
            })


        })
    }


    //tabs end

    //select activate

    const selects = document.querySelectorAll('.select-1');
    selects.forEach(select => {
        select.addEventListener('change', () => {
            select.classList.add('select-1_active')
        })
    })

    //select activate end


    //search form selection

    const searchSideForm = document.querySelector('#search-side-form');
    if (searchSideForm) {
        const formBlocks = searchSideForm.querySelectorAll(".form-3__block");
        formBlocks.forEach(formBlock => {
            const formBlockSelect = formBlock.querySelector('.form-3__input select'),
                formBlockSelectedList = formBlock.querySelector('.form-3__selected-list');
            let formBlockSelectedListLi = formBlockSelectedList.querySelectorAll('li');
            formBlockSelect.addEventListener('change', () => {
                let reSelect = false
                formBlockSelectedListLi.forEach(li => {
                    if (li.value == formBlockSelect.value) {
                        reSelect = true
                    }
                })
                if (!reSelect) {
                    const selectedValue = formBlockSelect.options[formBlockSelect.selectedIndex].text;
                    const li = document.createElement("li"); //create wrapper for new selected value
                    li.classList.add('selected', 'descr', 'descr_18'); //add class
                    li.textContent = selectedValue;
                    li.value = formBlockSelect.value;
                    formBlockSelectedList.appendChild(li);
                    formBlockSelectedListLi = formBlockSelectedList.querySelectorAll('li');
                    formBlockSelectedListLi.forEach(li => {
                        li.addEventListener('click', () => {
                            li.remove()
                            formBlockSelectedListLi = formBlockSelectedList.querySelectorAll('li');
                        })
                    })
                }

            })

        })
    }

    //search form selection end


    //sliders

    $('.blogs-slider-wrapper').each(function (key, item) {

        var sliderIdName = 'blogs-slider_' + key;

        this.id = sliderIdName;


        var sliderId = '#' + sliderIdName;

        $(sliderId + ' .blogs-slider').slick({
            slidesToShow: 1,
            infinite: false,
            dots:true,
            nextArrow: sliderId + ' .slider-arrow_right',
            prevArrow: sliderId + ' .slider-arrow_left',
            appendArrows:sliderId+ ' .blogs-slider__nav',
            appendDots:sliderId+ ' .blogs-slider__nav',
            dotsClass: 'slider-dots',

        });


    });
    $('.videos-slider-wrapper').each(function (key, item) {

        var sliderIdName = 'blogs-slider_' + key;

        this.id = sliderIdName;


        var sliderId = '#' + sliderIdName;

        $(sliderId + ' .videos-slider').slick({
            slidesToShow: 3,
            infinite: true,
            nextArrow: sliderId + ' .slider-arrow_right',
            prevArrow: sliderId + ' .slider-arrow_left',
            responsive: [
                {
                    breakpoint:1080,
                    settings: {
                        slidesToShow:2,
                    }
                },
                {
                    breakpoint:576,
                    settings: {
                        slidesToShow:1,
                    }
                }
            ]


        });


    });

    $('.meet-up-img-list').each(function (key, item) {

        var sliderIdName = 'blogs-slider_' + key;

        this.id = sliderIdName;


        var sliderId = '#' + sliderIdName;

        $(sliderId).slick({
            slidesToShow: 1,
            infinite: true,
            arrows: false
        });


    });

    $('.meet-up-list-wrapper').each(function (key, item) {

        var sliderIdName = 'blogs-slider_' + key;

        this.id = sliderIdName;


        var sliderId = '#' + sliderIdName;

        $(sliderId + ' .meet-up-list').slick({
            slidesToShow: 1,
            infinite: true,
            nextArrow: sliderId + ' .slider-arrow_right',
            prevArrow: sliderId + ' .slider-arrow_left',
            asNavFor:'.meet-up-img-list',
        });


    });

    //slider end
});//конец ready





