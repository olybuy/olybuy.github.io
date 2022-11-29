let sedona = document.querySelector('.button-sedona');
let sedonaScss = document.querySelector('.button-sedona-scss');
let bear = document.querySelector('.button-bear');

sedona.addEventListener('mouseover', function (event) {
    document.querySelector('.note-sedona').classList.add('display');
})