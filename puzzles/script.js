createDesk(9, 'superwings');
createElements(9, 'superwings_set');

container.onpointerdown = function (event) {
    const target = event.target;
    target.hidden = true;
    const startPoint = document.elementFromPoint(event.clientX, event.clientY);
    target.hidden = false;

    if (target.classList.contains('image')) {
        target.style.position = 'absolute';
        target.style.zIndex = 1000;
        document.body.append(target);
        moveAt(event.pageX, event.pageY);

        document.addEventListener('pointermove', onPointerMove);
        function onPointerMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        target.onpointerup = function(event) {
            document.removeEventListener('pointermove', onPointerMove);
            target.onpointerup = null;

            target.hidden = true;
            const endPoint = document.elementFromPoint(event.clientX, event.clientY);

            if (startPoint.classList.contains('image-part') && endPoint.classList.contains('element-cell')) {
                target.style.width = '150px';
                target.style.height = '150px';
                placeImage(target, endPoint);
                startPoint.remove();

            } else if (startPoint.classList.contains('element-cell') && endPoint.parentNode.classList.contains('image-part')) {
                const placeForImage = document.createElement('div');
                placeForImage.classList.add('image-part');
                placeImage(target, placeForImage);
                const parentElement = endPoint.parentNode;
                parentElement.after(placeForImage);

            } else if (startPoint.classList.contains('element-cell') && endPoint.classList.contains('element-cell')) {
                placeImage(target, endPoint);

            } else if(startPoint.classList.contains('element-cell') && endPoint.classList.contains('elements')) {
                const placeForImage = document.createElement('div');
                placeForImage.classList.add('image-part');
                placeImage(target, placeForImage);
                endPoint.append(placeForImage);

            } else {
                placeImage(target, startPoint);
            }

            setTimeout(checkElementPlace, 100);
        };

        function moveAt(pageX, pageY) {
            target.style.left = pageX - target.offsetWidth / 2 + 'px';
            target.style.top = pageY - target.offsetHeight / 2 + 'px';
        }

        function placeImage(image, place) {
            image.style.cssText = 'none';
            place.append(image);
            image.hidden = false;
        }

        target.ondragstart = function() {
            return false;
        };
    }
}

// Проверка правильности
function checkElementPlace() {
    let deskImagesArr = [];
    let n = 0;
    deskImagesArr = document.querySelectorAll('.element-cell > .image');
    if (deskImagesArr.length === 9) {
        for (let i = 0; i < deskImagesArr.length; i++) {
            if (+deskImagesArr[i].id === i) {
                n++
            }
        }
    }
    if (n === 9) {
        const deskCellsArr = document.querySelectorAll('.element-cell');
        for (let elem of deskCellsArr) {
            elem.classList.add('element-cell-frameless');
        }
        const pikachuDiv = document.querySelector('.pikachu');
        pikachuDiv.classList.add('pikachu-up');
    }
}

// Нажатие на Пикачу
onclick = function (event) {
    const target = event.target;
    if (target.classList.contains('pikachu-img')) {
        target.parentNode.classList.remove('pikachu-up');
    }
}

// Создание поля
function createDesk(size, bgName) {
    const desk = document.querySelector('.desk');
    desk.innerHTML = '<div class="element-cell"></div>'.repeat(size);
    const bg = document.createElement('div');
    bg.classList.add('background');
    bg.style.backgroundImage = `url(img/${bgName}_set/${bgName}_450.jpg)`;
    desk.prepend(bg);
}

// Создание элементов
function createElements(size, set) {
    const elements = document.querySelector('.elements');
    elements.innerHTML = '<div class="image-part"></div>'.repeat(size);

    const imagePartArr = document.querySelectorAll('.image-part');
    for (let i = 0; i < imagePartArr.length; i++) {
        const imagePart = document.createElement('img');
        imagePart.id = String(i);
        imagePart.classList.add('image');
        imagePart.src = `img/${set}/cut_images/image_part_00${i + 1}.jpg`;
        imagePartArr[i].append(imagePart);
    }
}

// Отключение контекстного меню в браузере

// document.oncontextmenu = function (event) {
//     const target = event.target;
//     if (target.tagName === 'img') {
//         return false;
//     }
// }
// document.addEventListener('contextmenu', event => event.preventDefault());

document.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation(); // not necessary in my case, could leave in case stopImmediateProp isn't available?
    event.stopImmediatePropagation();
    return false;
};