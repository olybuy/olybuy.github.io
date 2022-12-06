let toggle = document.querySelector('.toggle');
let navList = document.querySelector('.nav__list');

toggle.onclick = function () {
    navList.classList.toggle('nav__list--opened');
}