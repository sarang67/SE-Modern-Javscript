import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

// interview purpose : Inheritance achiving in ES5

/*

 one object can acces the member (propert and method) from another object
 (resusablity , maintainbility , sclaibility)

  parent class --> Human --> property ---> firstname , lastname , age
                           --> method   --> getfirstname() --> this.firstname
                           --> method   --> getfullName() --> firstname + lastname
          
                                

    child  class --> Employee --> Property --> salary 
                              method   --> getsalary() --> salary
                              method   --> getfullInformation() -->   firstname , lastname , age , salary                   


  super() ---> callimd the parent constructor from child class

  this is the rule whenever you are doing inheritance , you must have to call parent constructor from child constructor using super function

*/

/*
class Human {
  firstname;
  lastname;
  age;

  constructor(fn, ln, ag) {
    this.firstname = fn;
    this.lastname = ln;
    this.age = ag;
  }

  getfirstname() {
    console.log(this.firstname);
  }

  getfullName() {
    console.log(this.firstname + this.lastname);
  }
}

class Employee extends Human {
  salary;
  constructor(fn, ln, ag, sal) {
    super(fn, ln, ag);
    this.salary = sal;
  }

  getsalary() {
    console.log(this.salary);
  }

  getfullInformation() {
    console.log(this.firstname + this.lastname + this.salary + this.age);
  }
}

const emp1 = new Employee("sarang", "jain", 32, 50000);
// emp1.___proto = Employee.prototype

 //  Employee.prototype : { getsalary() , getfullInformation()}

 

console.log(emp1);

console.log(emp1 instanceof Employee);
console.log(emp1 instanceof Human);
console.log(emp1 instanceof Object);
*/

/*

 one object can acces the member (propert and method) from another object
 (resusablity , maintainbility , sclaibility)

  parent class --> Human --> property ---> firstname , lastname , age
                           --> method   --> getfirstname() --> this.firstname
                           --> method   --> getfullName() --> firstname + lastname
          
                                

    child  class --> Employee --> Property --> salary 
                              method   --> getsalary() --> salary
                              method   --> getfullInformation() -->   firstname , lastname , age , salary                   


  super() ---> callimd the parent constructor from child class

  this is the rule whenever you are doing inheritance , you must have to call parent constructor from child constructor using super function

*/

/*
function Human(fn, ln, ag) {
  this.firstname = fn;
  this.lastname = ln;
  this.age = ag;
}

// Human.prototype = {getfirstname() , getfullName()}

Human.prototype.getfirstname = function () {
  console.log(this.firstname);
};

Human.prototype.getfullName = function () {
  console.log(this.firstname + this.lastname);
};

var vasu = new Human("vasu", "shrivastava", 25);

// ==============================

function Employee(fn, ln, ag, sl) {
  Human.call(this, fn, ln, ag); // this line inheritedd all the property members of parent , not method
  this.salary = sl;
}

Employee.prototype = Human.prototype;

Employee.prototype = Human.prototype; // this line inheritedd all the property member (method)

Employee.prototype = new Human(); //--> not recommnede

Employee.prototype.getsalary = function () {
  console.log(this.salary);
};

Employee.prototype.getFullInformation = function () {
  console.log(this.firstname + this.lastname + this.age + this.salary);
};

let emp1 = new Employee("sarang", "jain", 32, 5000);
// emp1.__proto__ = Employee.prototype
console.log(emp1);
//emp1.getFullInformation();

emp1.getfullName();

*/

/*
===========================================
// DOM ----> DOCUMENT OBJECT MODEL

//  what is dom nodes
// console.log(document);
// console.dir(document);

// // html nodes
// console.log(document.documentElement);
// console.dir(document.documentElement);

// // body nodes
// console.log(document.body);
// console.dir(document.body);

// // head node
// console.log(document.head);
// console.dir(document.head);

console.log("--------------------------------------------");

console.dir(document.body instanceof HTMLBodyElement);
console.dir(document.body instanceof HTMLElement);
console.dir(document.body instanceof Element);
console.dir(document.body instanceof Node);
console.dir(document.body instanceof EventTarget);

console.dir(app);



// Nodetype --> number
console.log(document.body.nodeType);
console.log(document.nodeType);

// nodetype name
console.log(document.body.nodeName);
console.log(document.nodeName);

// tagname
console.log(document.body.tagName);
console.log(document.tagName);

*/

/*Node Type
https://www.w3schools.com/jsref/prop_node_nodetype.asp
1	Element	
2	Attr	
3	Text	
4	CDATASection	
5	EntityReference	
6	Entity	
7	ProcessingInstruction	
8	Comment	
9	Document	
10	DocumentType	
11 	DocumentFragment	
12	Notation
*/

/*

// how to create nodes.

const div = document.createElement("div");
const text = document.createTextNode("this is dom");
const comment = document.createComment("This is my commment");

// append --> we can put inside the node others node

div.append(text);
app.append(div);
app.append(comment);

let myul = document.createElement("ul");
let li = document.createElement("li");
let liText = document.createTextNode("I am li text");

li.append(liText);
myul.append(li);

console.log(myul);

app.append(myul);

*/
