class Pikachu {

    static pikachuImageClick() {
        const pikachu = document.querySelector('#pikachuByeBye');

        pikachu.onclick = function (event) {
            const target = event.target;
            if (target.classList.contains('pikachu-img')) {
                target.parentNode.classList.remove('pikachu-up');
            }
        }
    }
}

module.exports = Pikachu;