// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle(a, b) {
    let result = a * b;
    console.log(result);
}

areaRectangle(4, 10);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
    // let result = Math.PI * r ** 2;
    return Math.PI * r ** 2;
}

let Circle = areaCircle(2);
console.log(Circle);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(r, h) {
    let result = 2 * Math.PI * r * h + 2 * Math.PI * r ** 2;
    console.log(result);
}

areaCylinder(4, 2);

// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function printArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

printArray(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writeParagraph(text) {
    document.write(`<div>
                        <p>${text}</p>
                    </div>`);
}

writeParagraph('sometext');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function writeUl1(text) {
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);
}

writeUl1('sometext');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function writeUl2(text, number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

writeUl2('hello ', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// variant1
function createArray2() {
    // let array2 = Array.from(arguments);
    return Array.from(arguments);
}

let array2 = createArray2('hello', 45, false);
console.log(array2);

// variant2
function createArray1(...rest) {
    console.log(rest);
}

createArray1('world', 565, true);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
function id(arrayWithId) {
    for (const arrayWithIdElement of arrayWithId) {
        document.write (`<h1>${arrayWithIdElement.id} ${arrayWithIdElement.name} ${arrayWithIdElement.status}</h1>`);
    }
}
id(usersWithId);
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum() {
    const arr = Array.from(arguments);
    let result = 0;

    for (const arrElement of arr) {
        result = result + arrElement;
    }
    return result;
}

let a = sum(1, 3, 6, 2, 646, 345, 72);
console.log(a);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let currencyValues = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}
];

function exchange(sumUAH, exchangeCurrency) {
    for (const currencyValue of currencyValues) {
        if (exchangeCurrency === currencyValue.currency) {
            return sumUAH / currencyValue.value;
        }
    }
    return 'Введено невірне значення валюти';
}

let result = exchange(10000, 'EUR');
console.log(result);