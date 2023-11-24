// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersArr = [
    new User(1, 'Vasya', 'Pupkin', 'vncsdjnv@gmail.com', 3827487),
    new User(2, 'Petya', 'Pupkin', 'kvndkjfv@gmail.com', 47367423),
    new User(3, 'Kolya', 'Pupkin', 'jfgbjkfgv@gmail.com', 63633463),
    new User(4, 'Olya', 'Pupkin', 'kjnfgkd@gmail.com', 348738975),
    new User(5, 'Max', 'Pupkin', 'fmnvkgdf@gmail.com', 39573984),
    new User(6, 'Anya', 'Pupkin', 'lgfndjlg@gmail.com', 98430953),
    new User(7, 'Oleg', 'Pupkin', 'fkdjnkg@gmail.com', 498579238),
    new User(8, 'Andrey', 'Pupkin', 'dflmgnkfsd@gmail.com', 8549345),
    new User(9, 'Masha', 'Pupkin', 'flgkmdsl@gmail.com', 928509248),
    new User(10, 'Olya', 'Pupkin', 'fkdmgkdf@gmail.com', 84524924)
]
console.log(usersArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersArrFilter = usersArr.filter(value => value.id % 2 === 0);
console.log(usersArrFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let userArrSort = usersArr.sort((id1, id2) => id1.id - id2.id);
console.log(userArrSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientsArr = [
    new Client(1, 'Vasya', 'Pupkin', 'vncsdjnv@gmail.com', 3827487, ['butter', 'beans', 'potatoes', 'chocolate']),
    new Client(2, 'Petya', 'Pupkin', 'kvndkjfv@gmail.com', 47367423, ['milk', 'potatoes']),
    new Client(3, 'Kolya', 'Pupkin', 'jfgbjkfgv@gmail.com', 63633463, ['rice', 'beef', 'apples']),
    new Client(4, 'Olya', 'Pupkin', 'kjnfgkd@gmail.com', 348738975, ['yoghurt', 'eggs', 'bananas']),
    new Client(5, 'Max', 'Pupkin', 'fmnvkgdf@gmail.com', 39573984, ['bread']),
    new Client(6, 'Anya', 'Pupkin', 'lgfndjlg@gmail.com', 98430953, ['butter', 'beans', 'potatoes', 'chocolate', 'milk', 'potatoes']),
    new Client(7, 'Oleg', 'Pupkin', 'fkdjnkg@gmail.com', 498579238, ['tea', 'avocados', 'nuts', 'cucumbers', 'chicken']),
    new Client(8, 'Andrey', 'Pupkin', 'dflmgnkfsd@gmail.com', 8549345, ['soda', 'pork', 'rice']),
    new Client(9, 'Masha', 'Pupkin', 'flgkmdsl@gmail.com', 928509248, ['apples', 'apricots', 'sugar', 'rice', 'beef', 'apples']),
    new Client(10, 'Olya', 'Pupkin', 'fkdmgkdf@gmail.com', 84524924, ['olive oil', 'salt', 'tomatoes', 'salmon', 'bread'])
]
console.log(clientsArr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientsArrSort = clientsArr.sort((order1, order2) => order1.order.length - order2.order.length);
console.log(clientsArrSort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car1(model, carbrand, year, maxspeed, enginecapacity) {
    this.model = model;
    this.carbrand = carbrand;
    this.year = year;
    this.maxspeed = maxspeed;
    this.enginecapacity = enginecapacity;
    this.driver = {};
    this.drive1 = function () {
        console.log(`їдемо зі швидкістю ${maxspeed} на годину`);
    }
    this.increaseMaxSpeed1 = function (newSpeed1) {
        return this.maxspeed += newSpeed1;
    }
    this.changeYear1 = function (newValue1) {
        return this.year = newValue1;
    }
    this.addDriver1 = function (driver1) {
        this.driver = driver1;
    }
}

let carObject1 = new Car1('Golf GTE', 'Volkswagen', 2014, 250, 1.4);
console.log(carObject1);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
carObject1.drive1();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car1.prototype.info1 = function () {
    console.log(`model - ${this.model}, carbrand - ${this.carbrand}, year - ${this.year}, maxspeed - ${this.maxspeed}, enginecapacity - ${this.enginecapacity}`);
}
carObject1.info1();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
carObject1.increaseMaxSpeed1(20);
carObject1.info1();

// -- changeYear (newValue) - змінює рік випуску на значення newValue
carObject1.changeYear1(2020);
carObject1.info1();

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Driver1(name, age) {
    this.name = name;
    this.age = age;
}

let driverConstructor = new Driver1('Viktor', 45);
carObject1.addDriver1(driverConstructor);
console.log(carObject1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
class Car2 {
    constructor(model, carbrand, year, maxspeed, enginecapacity) {
        this.model = model;
        this.carbrand = carbrand;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engine = enginecapacity;
        this.driver = {};
    }

    drive2() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }

    info2() {
        console.log(`model - ${this.model}, carbrand - ${this.carbrand}, year - ${this.year}, maxspeed - ${this.maxspeed}, enginecapacity - ${this.engine}`);
    }

    increaseMaxSpeed2(newSpeed2) {
        return this.maxspeed += newSpeed2;
    }

    changeYear2(newValue2) {
        this.year = newValue2;
        // return newValue2;
    }

    addDriver2(driver2) {
        this.driver = driver2;
    }
}

let carObject2 = new Car2('Tundra', 'Toyota', 2017, 300, 5.7);
carObject2.drive2();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
carObject2.info2();
// або
Car2.prototype.info = function () {
    console.log(`model - ${this.model}, carbrand - ${this.carbrand}, year - ${this.year}, maxspeed - ${this.maxspeed}, enginecapacity - ${this.engine}`);
}
carObject2.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
carObject2.increaseMaxSpeed2(50);
carObject2.info2();

// -- changeYear (newValue) - змінює рік випуску на значення newValue
carObject2.changeYear2(2007);
carObject2.info2();

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Driver2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

carObject2.addDriver2(new Driver2('Stepan', 33));
console.log(carObject2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
let Cinderella = class { /*class expression*/
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let Cinderellas = [
    new Cinderella('Olia', 18, 38),
    new Cinderella('Tania', 46, 38),
    new Cinderella('Maria', 20, 37),
    new Cinderella('Tania', 25, 40),
    new Cinderella('Diana', 16, 36),
    new Cinderella('Oleksandra', 14, 35),
    new Cinderella('Olia', 28, 38),
    new Cinderella('Veronika', 37, 37),
    new Cinderella('Yulia', 19, 36),
    new Cinderella('Ira', 18, 41)
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Cinderella {
    constructor(name, age, shoesize) {
        super(name, age);
        this.shoesize = shoesize;
    }
}

let prince = new Prince('Mykola', 28, 41);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of Cinderellas) {
    if (cinderella.footsize === prince.shoesize) {
        console.log(cinderella);
        break;
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findCinderella = Cinderellas.find(value => value.footsize === 41);
console.log(findCinderella);



// function asd ({b}) {
//     console.log(b);
// }
//
// let vasyl = {a: 'hello', b: 'world', name: 'di'};
// asd(vasyl);
//
//
// let [a, b, c] = [11, 22, 33];
// console.log(a, c);
