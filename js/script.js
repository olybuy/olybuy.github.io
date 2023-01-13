let slider = document.querySelector('.slider');
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let slides = document.querySelectorAll('.projects__item');
let slideList = document.querySelector('.projects__list');
let slideIndex = 0;
let screenWidth = document.documentElement.clientWidth;
let slideWidth = slides[0].offsetWidth;


slide = function () {
    let shift = slideWidth * -1;
    slideList.style.transition = 'transform .5s';
    slideList.style.transform = 'translateX(' + shift * slideIndex + 'px)';

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


let projectsArr = ['sedona', 'sedona-scss', 'bear', 'housevop', 'pages'];

let textAppear = function (arr) {
    for (let elem of arr) {
        let projectButton = document.querySelector('.button-' + elem);
        projectButton.onmouseover = function () {
            document.querySelector('.note-' + elem).classList.add('display');
        }
        projectButton.onmouseout = function () {
            document.querySelector('.note-' + elem).classList.remove('display');
        }
    }
}

textAppear(projectsArr);
