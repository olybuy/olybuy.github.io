// Создание объектов

let fruit = 'apple';

let user = {
    name: 'John',
    "likes birds": true,
    [fruit]: 5, // использование переменной в ключе
};

user.age = 13;
user.isAdmin = true;
user["likes birds"] = false;
user[fruit] = 7;

let key = "name";
user[key] = 'Maria'; // присвоение значения свойству через переменную

delete user.age; // удаление свойства

console.log('name' in user); // поиск свойства в объекте (редко)
console.log(user.name === undefined); // поиск через сравнение с undefined

let checkObj = function (obj) {
    let propArr = [];
    for (let prop in obj) { // перебор свойств объекта
        propArr.push(prop);
    }
    console.log(propArr);
}
checkObj(user);

// функция создания объекта

function createUser(name, age) {
    return {
        name,
        age,
    }
}
console.log(createUser('Alice', 13));

// создание методов и использование this

let newUser = {
    name: 'Clod',
    age: 13,
    sayHi() { // метод приветствия для объекта newUser
        console.log('Hi! I am ' + this.name);
    }
}
newUser.sayHi();

// конструктор объектов

function User(name, age) { // функция-конструктор, всегда с большой буквы
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log('My name is ' + this.name + 'I am ' + this.age + ' y.o.');
    }
}

let jack = new User('Jack', 13);
console.log(jack.sayHi());

// Геттеры и сеттеры

let userA = {
    name: "John",
    surname: "Smith",

    get age() {
        return this._age;
    },

    set age(value) {
        this._age = value + ' years';
    },

    get fullName() {
      return this.name + ' ' + this.surname;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
};

userA.age = 14;
userA.fullName = 'Anna Boss';
console.log(userA.age + ' ' + userA.fullName);

// test click

let buttons = document.querySelectorAll('.supernova-button');
for (let elem of buttons) {
    if (elem.getAttribute('data-qa') === 'login') {
        elem.click();
    }
}

// класс

class UserB {
    constructor(name, surname, age, city) { // универсальный конструктор, ключевое слово
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.city = city;
    }

    sayHi() {
        console.log('Hi, Class! I am ' + this.name + ' ' + this.surname + ' ' + this.age + ' y.o. ' + 'from ' + this.city);
    }
}

let john = new UserB('John', 'Smith', 13, 'Moscow');
let sofia = new UserB('Sophia', 'Clark', 15, 'Perm');
john.sayHi();
sofia.sayHi();

// наследование от класса

class UserC extends UserB {
    isWriter = true;
    sayHi() {
        super.sayHi();
        console.log('and I am writer!');
    }
}
let maria = new UserC('Maria', 'Took', 16, 'Riga');
maria.sayHi();

// промисы

let promise = new Promise(function(resolve, reject) {
    // эта функция выполнится автоматически, при вызове new Promise
    setTimeout(() => resolve("done!"), 1000);
    setTimeout(() => reject(new Error("Ошибка!")), 2000);
});

promise.then(
    result => console.log(result), // выведет "done!" через одну секунду
    error => console.log(error) // не будет запущена
)
promise.catch(console.log);

// async await

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("готово!"), 1000)
    });

    console.log('before finish promise');

    let result = await promise; // будет ждать, пока промис не выполнится (*)

    console.log(result); // "готово!"
}

f();

// REST

let state = {
    posts: [],
};

function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((result) => result.json())
        .then((posts) => state.posts = state.posts.concat(posts))
}
getPosts();
setTimeout(() => console.log('title: ' + state.posts[2].title), 3000);

// Fetch

let todos = {
    todosList: [],
}

async function getUsers() {

    let getTodos = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10', {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    let result = await getTodos.json();
    todos.todosList = todos.todosList.concat(result);

    console.log(todos.todosList[2]);

    let addHTML = function(name) {
        let div = document.createElement('p');
        div.innerHTML = name;

        let placeToAppend = document.querySelector('.note-sedona-city');
        placeToAppend.append(div);
    }
    addHTML(todos.todosList[2].name);

    class User {
        constructor(name, username, email, phone, address) {
            this.name = name;
            this.username = username;
            this.email = email;
            this.phone = phone;
            this.address = address;
        }
    }

    let ervin = new User(todos.todosList[1].name, todos.todosList[1].username, todos.todosList[1].email, todos.todosList[1].phone, todos.todosList[1].address);
    console.log(ervin.name);
}

getUsers();

// try catch

let json = {name: 'Karl', age: 30,}
try {
    let user = JSON.parse(json);
    console.log(user.name);
} catch (e) {
    console.log(e.name);
}

// Map

let colin = { name: "Colin" };
let elsa = {name: "Elsa"};
let nadia = {name: "Nadia"};

// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();

// объект john - это ключ для значения в объекте Map
visitsCountMap.set(colin, 1233445435);
visitsCountMap.set(elsa, 45545446);
visitsCountMap.set(nadia, 409099);

console.log(visitsCountMap.get(colin)); // 123
console.log(visitsCountMap);