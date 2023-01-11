let sedona = document.querySelector('.button-sedona');
let sedonaScss = document.querySelector('.button-sedona-scss');
let bear = document.querySelector('.button-bear');
let housevop = document.querySelector('.button-housevop');


let slider = document.querySelector('.slider');
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let slides = document.querySelectorAll('.projects__item');
let slideList = document.querySelector('.projects__list');
let slideIndex = 0;
let screenWidth = document.documentElement.clientWidth;
let slideWidth = slides[0].offsetWidth + 20;


slide = function () {
    let shift = slideWidth * -1;
    slideList.style.transition = 'transform .5s';
    slideList.style.transform = 'translateX(' + shift * slideIndex  + 'px)';

    arrowLeft.classList.toggle('disabled', slideIndex === 0);
    if (screenWidth < 480) {
        arrowRight.classList.toggle('disabled', slideIndex === --slides.length);
    } else if (screenWidth >= 480 && screenWidth < 650) {
        arrowRight.classList.toggle('disabled', slideIndex === --slides.length-1);
    } else {
        arrowRight.classList.toggle('disabled', slideIndex === --slides.length-2);
    }
}

slider.addEventListener('click', function () {
    let target = event.target;

    if (target === arrowRight) {
        slideIndex++;
    } else if (target === arrowLeft) {
        slideIndex--
    } else {
        return;
    }

    slide();
})

let display = function (elemClass) {
    document.querySelector(elemClass).classList.add('display');
}

let hide = function (elemClass) {
    document.querySelector(elemClass).classList.remove('display');
}

sedona.onmouseover = function () {
    display('.note-sedona');
}

sedona.onmouseout = function () {
    hide('.note-sedona');
}

sedonaScss.onmouseover = function () {
    display('.note-sedona-scss');
}

sedonaScss.onmouseout = function () {
    hide('.note-sedona-scss');
}

bear.onmouseover = function () {
    display('.note-bear');
}

bear.onmouseout = function () {
    hide('.note-bear');
}

housevop.onmouseover = function () {
    display('.note-housevop');
}

housevop.onmouseout = function () {
    hide('.note-housevop');
}