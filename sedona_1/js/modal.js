let button = document.querySelector('.navigation-search-button');
let toggle = document.querySelector('.modal-close-button');
let modal = document.querySelector('.modal-container');

button.onclick = function () {
  modal.classList.remove('modal-container-close');
}

toggle.onclick = function () {
  modal.classList.add('modal-container-close');
}
