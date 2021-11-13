import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

// conditional logic : using switch case
/*

const number = "1";
let result;

switch (number) {
  case "1": {
    let text = "one";
    result = text;
    break;
  }
  case 2: {
    let text = "two";
    result = text;
    break;
  }
  case 3:
    result = "three";
    break;
  default: 
    result = "not metched";
}

console.log(result);

*/

// ***************Number in depth *********************

// the Number() function in window object.

/*
// literal syntax (Alway prefered way)
const literalNumber = 99;
const literalNumber1 = "99";
console.log(literalNumber);
console.log(literalNumber1);

// function syntax , used for ype conversion.
// perform a type conversion in an non constructor context
console.log(Number(99));
console.log(Number("99"));
console.log(Number("99px"));

// constructor syntax , creates a wrapper object
// avoid it to use

console.log(new Number(44));
console.log(new Number("44px"));
*/

/*

//decimal in mumber

console.log(2 + 3);
console.log(0.1 + 0.2);

console.log(100 / 3);
console.log(33.333333333333336 * 3);

const price = 9.33;
const quality = 3;
console.log(price * quality);

const anotherPrice = 9.33 * 100;
const anotherQuality = 3;
console.log((anotherPrice * anotherQuality)/100);

*/

/*

// parsing   to number

console.log(parseInt("55"));
console.log(parseInt("55px"));
console.log(parseInt("55.2323px"));

console.log(parseInt(1010101, 10));
console.log(parseInt(1010101, 16));
console.log(parseInt(1010101, 2));
console.log(parseInt(1010101, 8));

console.log(parseFloat("55.23px"));
console.log(parseFloat("55.4545"));

console.log(Number("555e10"));
console.log(Number("555.999"));

console.log(+"999");
console.log(-"999");

console.log(10 + "999");
console.log(10 + +"999");
*/

/*******
 *
 *NAN 
 // The global isNaN() function converts given value to NUmber() then test it

 isNaN(value )  ---> isNaNcheck is given value Nan or not and if yes then return true else return false
 so  isNaN(value )  ----> 1) check Number(value) --> and result will check in isNaN(esult )  ----> true or false

const reuslt = Number(55);
console.log(result);

console.log(isNaN(reuslt)); // false 
console.log(isNaN("I am string")); // true
console.log(isNaN(10));
console.log("---------------");

console.log(Number.isInteger(10.01));


 * */

/*
// immutability :- all premitive value are immutable while assignig
// all premitive are pass by value
// https://developer.mozilla.org/en-US/docs/Glossary/Mutable




const immutableNo = 99;
let refrenceNumber = immutableNo;
console.log(immutableNo);
console.log(refrenceNumber);
refrenceNumber = 44;
console.log(immutableNo);
console.log(refrenceNumber);

*/


// type checking number

// console.log(typeof 99.66);
// console.log(99 instanceof Number);
// console.log(Number(99) instanceof Number);
// console.log(new Number(99) instanceof Number);