class Desk {
    static createDesk(size, bgName) {
        const desk = document.querySelector('.desk');
        desk.innerHTML = '';

        for (let i = 0; i <= size; i++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('element-cell');
            cellDiv.id = 'cell-' + i;
            desk.append(cellDiv);
        }

        const bg = document.createElement('div');
        bg.classList.add('background');
        bg.style.backgroundImage = `url(img/${bgName}_set/${bgName}_450.jpg)`;
        desk.prepend(bg);
    }

    static createElements(size, setName) {
        const elements = document.querySelector('.elements');
        elements.innerHTML = '<div class="image-part"></div>'.repeat(size);

        const imagePartArr = document.querySelectorAll('.image-part');
        for (let i = 0; i < imagePartArr.length; i++) {
            const imagePart = document.createElement('img');
            imagePart.id = 'img-' + i;
            imagePart.classList.add('image');
            imagePart.src = `img/${setName}_set/cut_images/image_part_00${i + 1}.jpg`;
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