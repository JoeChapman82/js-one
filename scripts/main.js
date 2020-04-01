console.log("This is a string!");

var aString = "anything thats in a quotes";

console.log(aString);

var aNumber = 123;

console.log(aNumber);

aNumber = aNumber * 2;

console.log(aNumber);

var anotherString = "12";
var anotherNumber = 2;
console.log(anotherNumber * anotherString);

var tvShow = "Friends";
var characters = 6;
characters = 8;
var rating = 8.5;
var hasShowFinished = false;

console.log(tvShow, characters, rating);

var boolean = true;
var anotherBoolean = false;

var aNullVariable = null;
var anUndefined = undefined;

var string1 = "Code First Girls";
var string2 = "is awesome!";

console.log(string1 + " " + string2);
console.log(`${string1} ${string2} \nSo say all of us!`);

var myName = "Joe";
console.log(`Hello my name is ${myName}. Nice to meet you.`);

var sentence = `${myName} ${string2}. He is older than ${aNumber - 212}`;

console.log(sentence);

if(true) {
    console.log('I ran');
} else {
    console.log('I didnt run');
}

var userInput1 = 5;
var userInput2 = 120;

if(userInput1 * userInput2 > 100) {
    console.log('It was over 100');
} else {
    console.log('It was under 100');  
}

if(userInput1 * userInput2 < 100) {
    console.log('Less than 100');
} else if(userInput1 * userInput2 < 200) {
    console.log('Over 100 but less than 200');   
} else {
    console.log("Over 200");
}

var userInput3 = "100";

if(userInput3 !== 100) {
    console.log("We have a winner!!!!!!!!");  
}

alert("Hello there. I'm annoying!");
var result = prompt("Do you want a cookie?");
alert(`You said ${result}`);

console.log(result);

var anArray = [
    "item",
    2,
    null,
    undefined,
    123
];

console.log(anArray[1]);
anArray[3] = "Bob";
console.log(anArray);

anArray.push("Lightning");

console.log(anArray);

anArray.pop();

console.log(anArray);

anArray.unshift("Lightning");

console.log(anArray);

console.log(anArray.join(', '));































































