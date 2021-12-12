import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

/*
// when ever you want to see who is function constructor of prototype
console.log({}.constructor);
console.log([].constructor);

function test() {}
console.log(test.constructor);

function Employee() {}

console.log(new Employee());


*/

/*
// Employee function constructor using es5 approach
============================================== 
function Employeee(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Employeee.prototype.getFullName = function () {
  return this.firstname + " " + this.lastname;
};

var sarang = new Employeee("sarang", "jain");

console.log(sarang);
sarang.getFullName();

var kapil = new Employeee("kapil", "gandhi");

console.log(kapil);
kapil.getFullName();

*/

/*
// this is the ES6 approach using class pattern
===========================

class Employee {
  constructor(fn, ln, a) {
    this.firstname = fn;
    this.lastName = ln;
    this.age = a;
  }

  getAge() {
    console.log(this.age);
  }

  getfullName() {
    console.log(this.name + this.age);
  }
}

console.log(typeof Employee);

let obj1 = new Employee("rishi", "shrivastava", "45");
console.log(obj1);
*/

// function constructor assignment solve and craete function for father information using ES5

/*
 FamilyIformation {
   --> name
   -->lastName
   ---> age
   ---> fathername
   --> motherName
   --> fatherInfo : {
       fFathertname 
       fMothername
   }
   motherInfo :{
     mfathername
     mMotherName
   }

   getfatherInformation()
   getmotherInformati()
}
*/

/*
function FamililyInformation(
  fname,
  lname,
  age,
  fNam,
  mName,
  fFName,
  fMname,
  mFname,
  mMName
) {
  this.name = fname;
  this.lastName = lname;
  this.age = age;
  this.fatherName = fNam;
  this.motherName = mName;
  this.fatherInformation = {
    fFName,
    fMname,
  };
  this.motherInformation = {
    mFname,
    mMName,
  };
}

FamililyInformation.prototype.getMotherInformation = function () {
  const { mFname, mMName } = this.motherInformation;
  console.log(mFname + "" + mMName);
};

let mySister = new FamililyInformation(
  "shalini",
  "jain",
  30,
  "maya jain",
  "p k jain ",
  "k.c jain",
  "dadi jain",
  "abc jain",
  "xyz jain"
);

// mySister.__proto__ = FamililyInformation.prototype

console.log(mySister);
mySister.getMotherInformation();


 // assignment solve using ES6 approach class
 ===========================================

class FamililyInformation2 {
  constructor(fname, lname, age, fNam, mName, fFName, fMname, mFname, mMName) {
    this.name = fname;
    this.lastName = lname;
    this.age = age;
    this.fatherName = fNam;
    this.motherName = mName;
    this.fatherInformation = {
      fFName,
      fMname,
    };
    this.motherInformation = {
      mFname,
      mMName,
    };
  }

  getMotherInformation() {
    const { mFname, mMName } = this.motherInformation;
    console.log(mFname + "" + mMName);
  }
}

let mySister2 = new FamililyInformation(
  "shalini",
  "jain",
  30,
  "maya jain",
  "p k jain ",
  "k.c jain",
  "dadi jain",
  "abc jain",
  "xyz jain"
);

// mySister.__proto__ = FamililyInformation.prototype

console.log(mySister2);
mySister2.getMotherInformation();

class Classname {
  constructor() {}

  m1() {}
  m2() {}
}
*/

/*
// countryInformation ----> new assignment from class and using function constructor
==================================================================================
--> city
                      --> state
                      --> currency
                      --> prime minsiter
                      --> language : []
                      --> counryName
                      ---> nighbourscountrty : []
                      -->getCountryName
                      --> getneghburs countryname                        

*/

/*

// class pattern // convert cart factory function to 

class CreateCart {
  constructor(items = []) {
    this.items = Object.freeze(items);
    this.#test = "sarang jain";
  }

  add(item) {
    const state = [...this.items, item];
    this.items = Object.freeze(state);
  }

  remove(id) {
    const state = this.items.filter((item) => item.id !== id);
    this.items = Object.freeze(state);
  }
}

let minicart = new CreateCart([{ id: "🌭", name: "hot dog", price: 399 }]);

minicart.add({ id: "🍕", name: "cheese pizaa", price: 1000 });

console.log(minicart);
*/
