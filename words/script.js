let insertDesk = function () { // создаем большое поле
    for (let i=0; i<100; i++) {
        let cell = document.createElement('div');
        cell.innerHTML = '';
        cell.classList.add('cell');
        desk.append(cell);
    }
}
insertDesk();

class Cell {
    constructor(id) {
        this.id = id;
        let point = Math.floor(Math.random() * 29);
        this.value = 'абвгдеёжзийклмнопрстуфхцчшщэюя'.slice(point,point+1);
    }
}

let insertLetters = function () { // добавляем буквы игроку
    for (let i=0; i<10; i++) {
        let cell = document.createElement('div');
        cell.innerHTML = new Cell(i).value;
        cell.classList.add('cell');
        letters.append(cell);
    }
}
insertLetters();

function moveLetters() {
    let letter;

    letters.onclick = function (event) {
        let target = event.target;
        letter = target.innerHTML;
    }
    desk.onclick = function (event) {
        let target = event.target;
        target.innerHTML = letter;
        letter = '';
    }
}

moveLetters();