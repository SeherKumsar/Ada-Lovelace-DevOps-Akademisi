console.log('Hello, world!');

// variable defination
const name_1 = "Seher"; // name is deplicated in js
var age = 24;
let isMarried = false;

console.log(name_1);
console.log(age);
console.log(isMarried);

// var, const değiştirilemezken let değiştirilebilir değişkendir

isMarried = true; // reassigning the value of isMarried
console.log(isMarried);

// Sum Operation
var number1 = 10;
var number2 = 20;

console.log(number1 + number2);

// if else statement
if (age >= 10) {
    console.log('You are an adult');
    // tek tırnak ve çift tırnak arasında bellek optimizasyonunda tek tırnak olan daha avantajlıdır
} else {    
  console.log('You are an child');
}

// object
const person = {
    name: 'Emin',
    age: 17,
    isMarried: false
};

console.log(person); // { name: 'Emin', age: 17, isMarried: false }
console.log(person.name); // Emin
console.log(person.age); // 17
console.log(person.isMarried); // false

// function

// void function
function sayHello() {
    console.log('Hello, world!');
}

function computeSum(number1, number2) {
    console.log("i am here");
    return number1 + number2;
}

// console.log(computeSum(10, 20)); // 30

// void fonksiyonları data döndürmeyen fonksiyonlardır

sayHello();
computeSum(); // i am here yazdırır fakat return değeri döndürmez

const total = computeSum(10, 20);
console.log(total);
