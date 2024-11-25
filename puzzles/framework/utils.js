class Utils {
    static shuffleArray(arr) {
        const array = [...arr];

        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    static createArr(length) {
        const arr = [];

        for (let i = 1; i <= length; i++) {
            arr.push(i);
        }
        return arr;
    }

    static parseID(id) {
        return id.slice(-1);
    }
}

module.exports = Utils;