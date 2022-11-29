let projects = document.querySelectorAll('.projects__link');
let notes = document.querySelectorAll('.notes__item');

document.addEventListener('mouseover', function (event) {
    console.log(event.target);
    if (event.target.classList.contains('sedona1')) {
        console.log('sedona1');
    }
})