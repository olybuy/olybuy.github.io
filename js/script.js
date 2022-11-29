let sedona = document.querySelector('.button-sedona');
let sedonaScss = document.querySelector('.button-sedona-scss');
let bear = document.querySelector('.button-bear');
let buttonsArr = document.querySelectorAll('.projects__link');

sedona.onmouseover = function () {
    document.querySelector('.note-sedona').classList.add('display');
}

sedona.onmouseout = function () {
    document.querySelector('.note-sedona').classList.remove('display');
}

document.onmouseover = function (event) {
    let target = event.target;
    if (target.classList.contains('projects__link')) {
        console.log(done);
    }
}

for (let elem of buttonsArr) {
    if (elem.onmouseover) {
        console.log('there is action');
        console.log(elem);
    }
}