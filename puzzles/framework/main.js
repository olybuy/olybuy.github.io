const ContextMenu = require('./disableContextMenu');
const ImageChoice = require('./imageChoice');
const Desk = require('./desk');
const Pikachu = require('./pikachu');
const Utils = require('./utils');

let actualSet = 'superwings';
let actualSize  = 9;

ContextMenu.disableContextMenu();

// Create default desk

Desk.createDesk(actualSize, actualSet);
Desk.createElements(actualSize, actualSet);

// The game

const container = document.querySelector('#container');

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
                if (Utils.parseID(endPoint.id) === Utils.parseID(target.id)) {
                    placeImage(target, endPoint);
                    startPoint.remove();
                } else {
                    placeImage(target, startPoint);
                }

            } else if (startPoint.classList.contains('element-cell') && endPoint.parentNode.classList.contains('image-part')) {
                const placeForImage = document.createElement('div');
                placeForImage.classList.add('image-part');
                placeImage(target, placeForImage);
                const parentElement = endPoint.parentNode;
                parentElement.after(placeForImage);

            } else if (startPoint.classList.contains('element-cell') && endPoint.classList.contains('element-cell')) {
                placeImage(target, startPoint);

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

// Сheck the correctness

function checkElementPlace() {
    let deskImagesArr = [];
    let n = 0;
    deskImagesArr = document.querySelectorAll('.element-cell > .image');
    if (deskImagesArr.length === 9) {
        for (let i = 0; i < deskImagesArr.length; i++) {
            if (Utils.parseID(deskImagesArr[i].id) === Utils.parseID(deskImagesArr[i].parentNode.id)) {
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
        const desk = document.querySelector('.desk');
        const reloadDiv = document.createElement('div');
        reloadDiv.classList.add('reload');
        reloadDiv.id = 'reload';
        desk.append(reloadDiv);
    }
}

// Pikachu click

Pikachu.pikachuImageClick();

// Reload desk

Desk.reload(actualSize, actualSet);

// Image choice

ImageChoice.choiceButtonClick();
ImageChoice.closeButtonClick();
ImageChoice.chooseImage(actualSize, actualSet);


