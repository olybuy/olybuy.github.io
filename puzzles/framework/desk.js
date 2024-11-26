const Utils = require('./utils');

class Desk {
    static createDesk(size, bgName) {
        const desk = document.querySelector('.desk');
        desk.innerHTML = '';

        for (let i = 1; i <= size; i++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('element-cell');
            cellDiv.id = 'cell-' + i;
            desk.append(cellDiv);
        }

        desk.style.backgroundImage = `url(img/${bgName}_set/${bgName}_450.jpg)`;
    }

    static createElements(size, setName) {
        const elements = document.querySelector('.elements');
        elements.innerHTML = '<div class="image-part"></div>'.repeat(size);

        const imagePartArr = document.querySelectorAll('.image-part');

        const arrLength = imagePartArr.length;
        const indexesArr = Utils.createArr(arrLength);
        const randomIndexesArr = Utils.shuffleArray(indexesArr);

        for (let i = 0; i < randomIndexesArr.length; i++) {
            const imagePart = document.createElement('img');
            imagePart.id = 'img-' + randomIndexesArr[i];
            imagePart.classList.add('image');
            imagePart.src = `img/${setName}_set/cut_images/image_part_00${randomIndexesArr[i]}.jpg`;
            imagePartArr[i].append(imagePart);
        }
    }

    static reload(actualSize, actualSet) {
        onclick = function (event) {
            const target = event.target;
            if (target.classList.contains('reload')) {
                Desk.createDesk(actualSize, actualSet);
                Desk.createElements(actualSize, actualSet);
            }
        }
    }
}

module.exports = Desk;