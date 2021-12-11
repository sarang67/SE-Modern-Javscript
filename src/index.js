import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

/*
 Prototypes and .__proto__ , and prototype chain , and inheritance achiving by protptypl way
===============================================================================================
A) inheritance achiving by protptypl way
=========================================
Inheritance means one object can access the properties and method of another object, this terminology called inheritance. 

We can achieve inheritance in different language by classical way or other ways, but in JavaScript it is archived by only prototypal way. 

B) prototype and __proto__ ([[prototype]]) :-
===========================================
Every Object has prototype property , which keep the reference of another object.
Every JavaScript object has a one prototype property (__proto__), which makes inheritance possible in JavaScript. 

C) prototype chain 
=====================
When a certain method or property is called , the search starts in the object itself first , if it is not found , theSearch moves on the object's prototype(__Proto__), its continue until the method or properties is found that is called prototype chain.

Note:-
======
Never ever use __proto__ property , it is not for us, it is used by JS internally.
Every function has two prototype property (prototype) and (__prto__).
Developer will always  use prototype property(prototype) property not prototype(__proto__) property , both has same purpose . 
The Prototype property(prototype) in function is where we put methods and properties that we want in other object to inherit.

*/

/*

// __proto__ [[prototype]] property

let myOBj = {};
let myArray = [];
let myFUnction = function () {};

console.log(myOBj);
console.log(myOBj.__proto__);

console.log("=====================");

console.log(myArray);
console.log(myArray.__proto__);

console.log("=====================");

console.dir(myFUnction);
console.dir(myFUnction.__proto__);


====================================
*/

/*
// protytype chain

let obj_1 = {
  prop1: "I am prop1",
  // [[prototype]] / __proto__ : {}
};

let obj_2 = {
  prop2: "I am prop2",
  // [[prototype]] / __proto__ : {}
};

let obj_3 = {
  prop3: "I am a prop3",
  // [[prototype]] / __proto__ : {}
};

obj_1.__proto__ = obj_2;
obj_2.__proto__ = obj_3;

console.log(obj_1);

console.log(obj_1.prop1);
console.log(obj_1.prop2);
console.log(obj_1.prop3);
console.log(obj_1.prop4);
*/

/*
=============================================================


// why classes function constructor a,d blueprint are needed




let emp1 = {
  firstname: "sarang",
  lastname: "jain",
  age: 35,
  getfullInformation() {
    console.log(this.firstname + this.lastname + this.age);
  },
};

let emp2 = {
  firstname: "rrishi",
  lastname: "shrivastava",
  age: 28,
  getfullInformation() {
    console.log(this.firstname + this.lastname + this.age);
  },
};

let emp3 = {
  firstname: "rrishi",
  lastname: "shrivastava",
  age: 28,
  getfullInformation() {
    console.log(this.firstname + this.lastname + this.age);
  },
};

console.log(emp1);
console.log(emp2);
console.log(emp3);

console.log("=========================");

function Employee(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.getfullInformation = function () {
    console.log(this.firstname + this.lastname + this.age);
  };
}

let emp4 = new Employee("amar", "sjharma", 40);
let emp5 = new Employee("abhsihe", "gupta", 45);
let emp6 = new Employee("kanupriya", "jain", 20);

console.log(emp4);
console.log(emp5);
console.log(emp6);



=================================

*/


/*
=================================


// how we write the classes

function Emplyee(fn, ln, ag) {
  this.firstname = fn;
  this.lastname = ln;
  this.age = ag;
  this.getname = function () {
    console.log(this.firstname);
  };
  this.getfulEmployeeInformation = function () {
    console.log(this.firstname + "" + this.lastname + this.age);
  };
}

let emp1 = new Emplyee("sarang", "jain", 33);
console.log(emp1);



// problems in this class we never have to write method inside the class , we have to write inside the parent prototype

function Emplyee(fn, ln, ag) {
  this.firstname = fn;
  this.lastname = ln;
  this.age = ag;
}

// this is  recommneded way  for method
Emplyee.prototype.getname = function () {
  console.log(this.firstname);
};

Emplyee.prototype.getfulEmployeeInformation = function () {
  console.log(this.firstname + "" + this.lastname + this.age);
};

console.dir(Emplyee);

let emp1 = new Emplyee("sarang", "jain", 33);
// emp1.__proto__ = Emplyee.prototype  ---> behind the scene JS is doing for us
console.log(emp1);
emp1.getname();
emp1.getfulEmployeeInformation();

let emp2 = new Emplyee("rishi", "shrivastava", 33);
// emp2.__proto__ = Employee.prototype ---> behind the scene JS is doing for us
console.log(emp2);


*/