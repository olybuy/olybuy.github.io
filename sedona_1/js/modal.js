let wantButton = document.querySelector('.navigation-search-button');
let searchButton = document.querySelector('.search-form-button');
let toggle = document.querySelector('.modal-close-button');
let modal = document.querySelector('.modal-container');

wantButton.onclick = function () {
  modal.classList.remove('modal-container-close');
}

searchButton.onclick = function () {
  modal.classList.remove('modal-container-close');
}

toggle.onclick = function () {
  modal.classList.add('modal-container-close');
}
