// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const areaRectangle = (a, b) => a * b;
console.log(areaRectangle(4, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const areaCircle = (r) => Math.PI * r ** 2;
console.log(areaCircle(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const areaCylinder = (r, h) => 2 * Math.PI * r * h + 2 * Math.PI * r ** 2;
console.log(areaCylinder(4, 2));

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

const printArray = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
printArray(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const writeParagraph = (text) => {
    document.write(`<div>
                        <p>${text}</p>
                    </div>`);
}

writeParagraph('sometext');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const writeUl1 = (text) => {
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);
}

writeUl1('sometext');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const writeUl2 = (text, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

writeUl2('hello ', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const createArray = (arr) => {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}

createArray(['hello', 45, false, true, 6734, 6]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersWithId = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
];
const id = (arrayWithId) => {
    for (const arrayWithIdElement of arrayWithId) {
        document.write(`
            <div>
                 <p>id: ${arrayWithIdElement.id}</p> 
                 <p>name: ${arrayWithIdElement.name}</p>              
                 <p>age: ${arrayWithIdElement.age}</p>
            </div>`);
    }
}
id(usersWithId);

// - створити функцію яка повертає найменше число з масиву
const minNumber = (arrayOfNumbers) => {
    let min = arrayOfNumbers[0];
    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] < min) {
            min = arrayOfNumbers[i];
        }
    }
    return min;
}

console.log(minNumber([3, -6, 45, 24, 5, 77, 0, -70, 25]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let result = 0;

    for (const arrElement of arr) {
        result += arrElement;
    }
    return result;
}

let a = sum([10, 20, 50]);
console.log(a);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    const number1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = number1;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let currencyValues = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}
];

const exchange = (sumUAH, exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return sumUAH / currencyValue.value;
        }
    }
    return 'Введено невірне значення валюти';
}

console.log(exchange(10000, 'EUR'));

