import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

/*
4) script tag and position Manually and via tooling
5) Var and hoisting
6) let block scope
7) const variable
8) Datatypes (Premitive types and object types)

Conditional Logic

1) Truthy falsy
2) if else statement
3) ternary statement

*/

/*


// Truthy falsy check
//1) Boolen()
// using not operator !

console.log(Boolean(true));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean({ name: "sarang" }));
console.log(Boolean([]));
console.log(Boolean([1, 2, 3]));
console.log(Boolean("sarang"));
console.log(Boolean(1234));
console.log(Boolean(-1234));

console.log("---------using not operator---------");
console.log(!!true);
console.log(!!"");
console.log(!!0);
console.log(!!{});
console.log(!!{ name: "sarang" });
console.log(!![]);
console.log(!![1, 2, 3]);

// falsy

console.log("---------falsy values---------");
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(false));

console.log("---------using not operator falsy check---------");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);


// = (address assign), == (compare only value) , and === (strict compare value and type)

let a = 10;

console.log(1 == 1);
// console.log(1 == "1");
console.log(1 === "1");
*/

/*
// if else

const condition = true;

if (condition) {
  console.log("yes");
}

// if(Boolean(constion))
if (condition) {
  console.log("yes again");
} else {
  console.log("NO");
}

const number = 1; 
let result; //undefined

if (number === 99) {
  result = "ninetynine";
} else if (number === 100) {
  result = "hundred";
} else if (number === 1000) {
  result = "thousand";
} else {
  result = "not matched";
}

console.log(result);


*/

/*
3) ternary statement


// syntax

// expression ? if : else

const condition = true;

let result = condition ? "this is true" : "This is false";
console.log(result);

let isHappy = false;

console.log(isHappy ? ":)" : ":(");

const number = 10;
let anotherresult;

anotherresult =
  number === 99 ? "ninety nine" : number === 1 ? "one" : "no match";

console.log(anotherresult);
*/
