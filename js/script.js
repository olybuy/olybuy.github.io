let sedona = document.querySelector('.button-sedona');
let sedonaScss = document.querySelector('.button-sedona-scss');
let bear = document.querySelector('.button-bear');

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