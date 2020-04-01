// let countries = ['england', 'ireland', 'scotland', 'wales']

// for(let i = 0; i < 9; i++) {
//     console.log(i);
//     for(let j = 0; j < 20; j++) {
//         console.log(`J = ${j}`);
//     }
// }

// for(let i = 0; i < 9; i++) {
//     console.log(i);
// }

// for(let i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
// }

// countries.forEach(function(item) {
//     console.log(item);
// });

// for(let i = 10; i > 0; i--) {
//     console.log(i);
// }

// function myFunction() {
//     console.log('This is my function');
//     return "A string";
// }

// myFunction();

// var myResult = myFunction();

// console.log(myResult);

// function getUserName() {
//     return prompt('What is your name?');
// }

// var name = getUserName();

// console.log(name);



function add(value1 = 0, value2 = 0) {
    return value1 + value2;
}

function subtract(value1 = 0, value2 = 0) {
    return value1 - value2;
}

function multiply(value1 = 0, value2 = 0) {
    return value1 * value2;
}

function divide(value1 = 0, value2 = 0) {
    return value1 / value2;
}
const calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}

// console.log(calculator.add(1, 77));

// console.log(add(1, 2));
// console.log(add(77, 23));
// console.log(add(77));
// console.log(subtract(5, 2));

// function movieDetails(title, releaseDate) {
//     return `${title} was released in ${releaseDate}`
// }

// var movie1 = movieDetails('Sonic the Hedgehog', 2020);
// var movie2 = movieDetails('Lion King', 1993);

// console.log(movie1);
// console.log(movie2);

// function verifyAge(name, age) {
//     return age >= 18 ? `${name} is old enough to drive` : `${name} needs to be 18 to drive`;
// }

// console.log(verifyAge('Bob', 67));
// console.log(verifyAge("Sally", 2));

// // create a function taking three arguments, item cost, balance
// function shoppingCart(item, cost, balance) {
//     if(cost > balance) {
//         return `You cannot afford ${item}`;
//     } else {
//         balance = balance - cost;
//         return `You can afford ${item}. Your new balance is ${balance}`;
//     }
// }

// // if cost > balance return 'Cant afford'
// // else return can affot

// // returns if item can be afforded
// console.log(shoppingCart('Hand Santiser', 2000, 5));
// console.log(shoppingCart('Teddy Bear', 1, 5));

var freePerson = 'Lucy'

function outerFence() {
    var prisoner = 'Tim';
    console.log(freePerson);
}

outerFence();
// console.log(prisoner);

for(const i = 0; i < 10; i++) {
    // do nothing
}

console.log(i);
