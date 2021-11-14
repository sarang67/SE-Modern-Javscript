import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;
/*
// Number in depth
// Number methods

console.log(Number);
console.dir(Number);
console.log(Number.prototype);

let myNO = 5;

console.log((99.123).toFixed());
console.log((99.567).toFixed());
console.log(Number((99.567).toFixed()));
console.log(parseFloat((99.567).toFixed()));

console.log((999.45).toPrecision(5));
console.log((999.45).toPrecision(3));

console.log(new Number(50).valueOf(10));

*/
//===============================================

/*
// string in depth

// string creation

// literal syntax
let greet = "Hello Sarang";
let pasta = "italian pasta";
let areYouHappy = false;

let one = 1;
let two = 2;
console.log(greet);

console.log("My name is sarang jain");
console.log("My name is sarang jain");

console.log("sarang");

console.log('HI my name is "sarang jain"');
console.log("HI my name is 'sarang jain'");
console.log("hello 'sarang' \"jain\" ");

console.log("my" + " " + pasta + " " + "and this is very yummy !!!");
console.log("my " + pasta + " and this is very yummy !!!");

// string back tick syntax  (es56)  ``

console.log(` Hello sarang i am in the back tick`);
console.log(`my ${pasta} and this is very yummy !!!`);
console.log(`my number is ${one}  ${two}`);

console.log(` happy state  ${areYouHappy ? ":)" : ":("}`);
console.log(`${2 + 2}`);

console.log(`
======================================
name ===> 'sarang jain'
age ===> 30,
isMarried ===> yes i am married
`);
console.log("************************************");

console.log(String(55));
console.log(String("55"));
console.log(String(true));
console.log(String(55 + 11));

console.log(String({ name: "sarang jain" }));
console.log(String([1, 2, 3]));
console.log(String(["Hi", "Hello", "Friends"]));

console.log(55 + 11);
console.log(55 + "11");
console.log("11" + 55);
console.log(String(11 + "11"));

// function constructor (never used)
let myName = new String("12");
console.log(myName);
console.log(myName.valueOf());

*/
//=============================================

/*
// we will check object

let myInfo = {
  name: "sarang",
  age: 33,
};

// . operator

// read
console.log(myInfo.name);
console.log(myInfo.age);

// upade
myInfo.name = "sarang jain";
myInfo.age = 40;

// add new property
myInfo.city = "pune";

console.log(myInfo);

console.log("========================================");
// [] member access operator

let myInfo2 = {
  name: "sarang",
  age: 33,
};

// read
console.log(myInfo2["name"]);
console.log(myInfo2["age"]);

// update
myInfo2["name"] = "sarang jain";
myInfo2["age"] = 40;

// add a new property

myInfo2["city"] = "pune";
console.log(myInfo2);

*/

//====================================
/*
// string memory representation , and index

console.log(new String("sarang jain"), "sarang jain");
var myName = "sarang jain";

console.log("sarang jain");
console.log(myName[0]);
console.log(myName["0"]);
console.log(myName["1"]);
console.log(myName.length);

console.log(myName[myName.length - 1]);

*/
//================================================
/*
//immutability in string , pass by value

let myName = "sarang";
let refName = myName;

myName += " jain"; //myName = myname + jain
refName += " kumar jain";

console.log(myName);
console.log(refName);

const immutablestr = "i will never be changed";
const uppercase = immutablestr.toUpperCase();

console.log(immutablestr);
console.log(uppercase);
*/

//=======================================
/*
// type checking in string

console.log(typeof "sarang");
console.log(typeof "123");
console.log(typeof new String("sarang jain"));

console.log("sarang" instanceof String);
console.log(String("sarang jain") instanceof String);

*/
//=================================================

/*

// string methods

console.log(String);
console.dir(String);
console.log(String.prototype);

console.log("sarang jain".indexOf("j"));
console.log("sarang jain".indexOf("z"));

console.log("sarang jain".includes("a"));

console.log("sarangkumarjain".replace("sarang", "teacher"));

console.log("sarangkumarjain".slice(0, 5));
console.log("sarangkumarjain".slice(4, 5));
console.log("sarangkumarjain".slice(4, 9));

console.log("sarangkumarjain".slice(2, -1));
console.log("sarangkumarjain".slice(2, -2));

console.log("sarang~kumar~jain".split("n"));

console.log("               4512 8795 1512 1212                 ".trim());

*/
