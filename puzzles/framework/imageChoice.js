const Desk = require('./desk');

class ImageChoice {

    static choiceButtonClick () {
        const choiceButton = document.querySelector('#choiceButton');

        choiceButton.onclick = () => {
            const choiceFrame = document.querySelector('.choice-frame');
            choiceFrame.classList.remove('none-display');
        }
    }

    static closeButtonClick () {
        const closeButton = document.querySelector('#closeButton');

        closeButton.onclick = () => {
            const choiceFrame = document.querySelector('.choice-frame');
            choiceFrame.classList.add('none-display');
        }
    }

    static chooseImage (actualSize, actualSet) {
        const container = document.querySelector('#container');

        container.onclick = function (event) {
            const target = event.target;
            if (target.classList.contains('set-image')) {
                Desk.createDesk(actualSize, target.id);
                Desk.createElements(actualSize, target.id);
                actualSet = target.id;
                const choiceFrame = document.querySelector('.choice-frame');
                choiceFrame.classList.add('none-display');
            }
        }
    }
}

module.exports = ImageChoice;