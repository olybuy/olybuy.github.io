let sedona = document.querySelector('.button-sedona');
let sedonaScss = document.querySelector('.button-sedona-scss');
let bear = document.querySelector('.button-bear');

sedona.onmouseover = function () {
    document.querySelector('.note-sedona').classList.add('display');
}

sedona.onmouseout = function () {
    document.querySelector('.note-sedona').classList.remove('display');
}

sedonaScss.onmouseover = function () {
    document.querySelector('.note-sedona-scss').classList.add('display');
}

sedonaScss.onmouseout = function () {
    document.querySelector('.note-sedona-scss').classList.remove('display');
}

bear.onmouseover = function () {
    document.querySelector('.note-bear').classList.add('display');
}

bear.onmouseout = function () {
    document.querySelector('.note-bear').classList.remove('display');
}