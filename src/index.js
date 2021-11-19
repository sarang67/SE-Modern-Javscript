import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;
/*
// boolean in depth
// boolean literal

let isMarried = true;
let hasChild = false;

console.log(isMarried);
console.log(hasChild);

// boolean function for type conversion
let arg = "x";
console.log(Boolean(arg));
console.log(Boolean("sarang"));
console.log(!!arg);
console.log(Boolean({}));
console.log(Boolean([]));
console.log("---------------");
console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

// Boolean function constructor

console.log(new Boolean(true));
console.log(new Boolean(true).valueOf());


// boolean type checking
console.log(typeof false);
console.log(typeof true);
console.log(typeof Boolean(true));
console.log(Boolean(true) instanceof Boolean);
console.log(new Boolean(true) instanceof Boolean);

// immutabilty and pass by value
console.log("---------------------------");
let isMarried = true;
let isMarriedRefrence = isMarried;

console.log(isMarried);
console.log(isMarriedRefrence);

isMarried = false;
console.log(isMarried);
console.log(isMarriedRefrence);

// prototype methods
console.log("---------------------------");
console.log(Boolean);
console.dir(Boolean);
console.dir(Boolean.prototype);

console.log(true.toString());
console.log(true);

// Function in depth



/*
//1 function declaration
==========================

function add() {
  console.log("i am add function body");
}
// invoking the function, calling the funtion
add();
console.log(add);
// parameter
function add2(no1, no2) {
  console.log(no1 + no2);
}
// argument
add2(10, 20);

console.log("---------------------------");

// 2 function expression (anonymous funtion)

let addExpression = function () {
  console.log("i am add function expression");
};

addExpression();

let addExpression2 = function (no1, no2) {
  console.log(no1 + no2);
};

addExpression2(50, 50);

console.log(add2.name);
console.log("---------------------------");

//3 short function/lambda function , arrow function after ES6 (2015)

//function add() {
//  console.log("i am add function body");
//}

//function add2(no1, no2) {
//  console.log(no1 + no2);
//}


let addArrow = () => {
  console.log("i am add arrow function");
};

let addArrowParameter = (no1, no2) => {
  console.log(no1 + no2);
};

let addArrowParameter2 = (no1, no2) => console.log(no1 + no2);

addArrowParameter(10, 20);
addArrowParameter2(50, 100);

//4
//function constructor

var addfnco = new Function();
console.log(addfnco);
*/

/*
//hoisting with function
==========================
add(10, 20);
console.log(add);
console.log(addExp);
console.log(addArrow);

function add(a, b) {
  console.log(a + b);
}

let addExp = function (a, b) {
  console.log(a + b);
};

let addArrow = (a, b) => console.log(a + b);
*/

/*
// function rest parameter
==========================
function makePrice() {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
  console.log(`Total price ${total}`);
}

makePrice(100, 200, 300, 400, 500);
//makePrice(5000, 10000);

console.log("------------------------------");

function makePriceRest(a, b, ...param) {
  console.log(a, param);

  let total = 0;
  for (let i = 0; i < param.length; i++) {
    total = total + param[i];
  }
  console.log(`Total price ${total}`);
}

makePriceRest(100, 200, 300, 400, 500);
*/

/*
// function return value
// emplicit return

function makePriceRest(...param) {
  let total = 0;
  for (let i = 0; i < param.length; i++) {
    total = total + param[i];
  }
  // return undefined;
}

let result = makePriceRest(100, 200, 300, 400, 500);
console.log(result);

let result2 = makePriceRest(1, 2, 3, 4, 5);
console.log(result2);
*/

/*
  note: rest will always be a last parameter
  function test(param1 , ...param){} --> valid
   function test(param1 , ...param, param3){} --> invalid
     function test( ...param, param1 , param3){} --> invalid

*/

// Functions are Objects:- first class function, means they are object

/*
In only JS , function are object, menas what you can do with object, you can do with function , you can assign a function in a variable, you can pass the function as a parameter, you can create function on the fly as a object literals.
*/

/*
// function are object
==========================
// first class function, means they are variable , means they are objects

let logparam = function (param) {
  console.log(param);
};

logparam(1);
logparam("sarang");
logparam([]);
logparam({});
console.log("-----------------");

logparam(function () {});
logparam(function () {});
// param = function {}
// param = function(){}

function add() {
  console.log("i am a add fn");
}

logparam(add);
logparam(() => {});


let greet = function () {
  console.log("hello");
};

greet();

console.log(greet);
console.dir(greet);

greet.instructorName = "sarang jain";

console.log(greet.instructorName);

greet.instructorName = "sarang kumar jain";

console.log(greet.instructorName);
// function call
greet();

// function using as a object
greet.iamobj = "i am afn and i am obj as well";

console.dir(greet);
*/
