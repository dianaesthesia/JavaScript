// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hello = 'hello world';
console.log(hello.length);

let lorem = 'lorem ipsum';

let loremArray = [];
let loremSizeOfArray = loremArray.push('lorem ipsum');
console.log(loremSizeOfArray);

let cool = 'javascript is cool';
console.log(cool.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(hello.toUpperCase());
console.log(lorem.toUpperCase());
console.log(cool.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str1 = ' dirty string   '
console.log(str1.trim());
// console.log(str1.replace(' ', '').replace('   ', '')); /*нединамічний спосіб*/


// let arrr = [1, 2, 3, 4, 5, 6]
// arrr.splice(0); /*повертає новий пустий вже вирізаний масив*/
// console.log(arrr);

// let arrr = [1, 2, 3, 4, 5, 6]
// let ssplice = arrr.splice(0); /*нова змінна, для того, щоб отримати елементи, вирізані з масиву*/
// console.log(ssplice);

// =========================

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str2 = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str2); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToArray = (str2) => str2.split(' ');

let splitArray = stringToArray('Ревуть воли як ясла повні');
console.log(splitArray);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrOfNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let map1 = arrOfNumbers.map(value => value + '');
console.log(map1);

// або варіант 2
let map2 = arrOfNumbers.map(value => value.toString());
console.log(map2);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let arrNums = [11, 21, 3];
const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return arrNums.sort((num1, num2) => num1 - num2);
    } else if (direction === 'descending') {
        return arrNums.sort((num1, num2) => num2 - num1);
    }
}

console.log(sortNums(arrNums, 'ascending'));

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortCoursesAndDurationArray= coursesAndDurationArray.sort((m1, m2) => m2.monthDuration - m1.monthDuration);
console.log(sortCoursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterCoursesAndDurationArray = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filterCoursesAndDurationArray);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

let mapCoursesAndDurationArray = coursesAndDurationArray.map(value => {
    value.id = uuidv4();
    return value;
});
console.log(mapCoursesAndDurationArray);

// або варіант2
// let mapCoursesAndDurationArray = coursesAndDurationArray.map((value, index) => {
//     return {
//         id: index + 1,
//         title: value.title,
//         monthDuration: value.monthDuration
//     }
// });
// console.log(mapCoursesAndDurationArray);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cardsArray = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'}
];
// - знайти піковий туз
let spadeAceCard = cardsArray.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAceCard);

// - всі шістки
let allSix = cardsArray.filter(card => card.value === '6');
console.log(allSix);

// - всі червоні карти
let allRedCards = cardsArray.filter(card => card.color === 'red');
console.log(allRedCards);

// - всі буби
let allDiamondCards = cardsArray.filter(card => card.cardSuit === 'diamond');
console.log(allDiamondCards);

// - всі трефи від 9 та більше
let clubsCards = cardsArray.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value));
console.log(clubsCards);

// або варіант 2:
// let clubsCards = cardsArray.filter(card => card.cardSuit === 'clubs' && (card.value === '9' || card.value === '10' || card.value === 'ace' || card.value === 'jack' || card.value === 'queen' || card.value === 'king'));
// console.log(clubsCards);

// або варіант 3:
// let clubsCards = cardsArray.filter(card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8');
// console.log(clubsCards);

// =========================

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduceCards = cardsArray.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;

}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reduceCards);
// =========================

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'js',
            'css',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let saasFilter = coursesArray.filter(value => value.modules.includes('sass'));
console.log(saasFilter);

// --написати пошук всіх об'єктів, в який в modules є docker
let dockerFilter = coursesArray.filter(value => value.modules.includes('docker'));
console.log(dockerFilter);

class Userr {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Customer extends Userr {

    constructor(name, age, password) {
        super(name, age);
        this._password = password;
    }
}