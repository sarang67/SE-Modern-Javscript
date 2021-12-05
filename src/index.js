import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

/** Object in depth */

/*

//1) object property and value exist or not

let courseInformation = {
  trainer: "sarang jain",
  id: "web trainer",
  phoneNo: 7038757074,
  city: "pune",
  currentCourseName: "JS-react",
};

// property check and value also checked
let city = "pune";
if (courseInformation.city === "pune") {
  console.log("do based on city");
}

console.log("==================");
// for in loop

for (let prop in courseInformation) {
  console.log(prop);
  console.log(courseInformation[prop]);

  if (courseInformation[prop] === city) {
    console.log("do the basis of city pune");
  }
}
console.log("==================");

// valuse existance
console.log(Object.values(courseInformation));

const allValuesofInfo = Object.values(courseInformation);
console.log(allValuesofInfo.includes(city));

if (allValuesofInfo.includes(city)) {
  console.log("do the basis of city pune");
}

console.log("==================");

// propety check

console.log(Object.keys(courseInformation));
console.log(Object.keys(courseInformation).includes("phoneNo"));

if (Object.keys(courseInformation).includes("phoneNo")) {
  console.log("do the basis of phone no");
}

// using hasownproperty , not recpmmeed

//console.log(courseInformation.hasOwnProperty("trainer"));
console.log(Object.prototype.hasOwnProperty.call(courseInformation, "trainer"));

*/
/*
==============
//2) spread operator with Object

var obj1 = { one: 1, two: 2, three: 3 };
var obj2 = { four: 1, five: 2, six: 3 };

var combineObj = { ...obj1, ...obj2, name: "sarang jain", two: 20, one: 10 };
console.log(combineObj);

// Object cloinig and breaking shallow copy and deep copy

let courseInformation = {
  trainer: "sarang jain",
  id: "web trainer",
  phoneNo: 7038757074,
  city: "pune",
  currentCourseName: "JS-react",
  courseFees: { js: 15000, react: 15000, full: 30000 },
};

//let courseInformationRef = courseInformation;
// shallow is pass , but fail in deep
// let courseInformationRef = { ...courseInformation };
// shallow is pass , but fail in deep
// let courseInformationRef = Object.assign({}, courseInformation);

let courseInformationJsonSTring = JSON.stringify(courseInformation);
console.log(courseInformationJsonSTring);

let courseInformationRef = JSON.parse(courseInformationJsonSTring);
//console.log(courseInformationRef);

courseInformationRef.trainer = "sarang kumar  jain";
courseInformation.courseFees.full = 50000;

console.log(courseInformation);
console.log(courseInformationRef);

*/

//  Object merging , object.assign , spread operatr

/*
let courseInformation = {
  trainer: "sarang jain",
  id: "web trainer",
  phoneNo: 7038757074,
  city: "pune",
  currentCourseName: "JS-react",
  courseFees: { js: 15000, react: 15000, full: 30000 },
};

*/

/*



let courseInformation = {
  trainer: "sarang jain",
  id: "web trainer",
  phoneNo: 7038757074,
  city: "pune",
};

let courseFees = { js: 15000, react: 15000, full: 30000 };
//let courseFeesUpdatd = { courseFees };
let currentCName = { currentCourseName: "JS-react" };

let courseInformationMerged = {
  ...courseInformation,
  ...currentCName,
  ...{ courseFees },
};

console.log(courseInformationMerged);

let courseInformationMerged2 = Object.assign(
  {},
  courseInformation,
  { courseFees: courseFees },
  currentCName
);
console.log(courseInformationMerged2);


=========

*/

/*
//type checking in Object

let courseInformation = {
  trainer: "sarang jain",
  id: "web trainer",
  phoneNo: 7038757074,
  city: "pune",
  currentCourseName: "JS-react",
};

console.log(typeof courseInformation);
console.log(typeof []);
console.log(typeof null);

console.log(courseInformation instanceof Object);
console.log({} instanceof Object);
console.log(new Object() instanceof Object);
console.log([] instanceof Object);
console.log(null instanceof Object);
console.log("sarang" instanceof String);
console.log(new String("sarang") instanceof String);

console.log(courseInformation.toString());

console.log(Object.prototype.toString.call(courseInformation));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call("sarang"));
console.log(Object.prototype.toString.call(5));
console.log(Object.prototype.toString.call(undefined));

if (Object.prototype.toString.call(courseInformation) === "[object Object]") {
  console.log("do work for object only");
}

function Skilledge() {}
//class Skilledge {}

var obj = new Skilledge();

console.log(obj instanceof Skilledge);

*/

/*
//  loop in Object using for in loop

let courseInformation = {
  trainer: "sarang jain",
  id: "web trainer",
  phoneNo: 7038757074,
  city: "pune",
  currentCourseName: "JS-react",
  courseFees: { Js: 5000, react: 5000, full: 10000 },
};

for (let key in courseInformation) {
  const value = courseInformation[key];
  console.log(key);
  console.log(value);
  console.log("--------------------------");

  console.log(Object.prototype.toString.call(value));

  if (Object.prototype.toString.call(value) === "[object Object]") {
    for (let prop in value) {
      console.log(prop);
      console.log(value[prop]);
    }
  }
}

*/

/*

//loop in object using  array for each loop , and this is recommened

let courseInformation = {
  trainer: "sarang jain",
  id: "web trainer",
  phoneNo: 7038757074,
  city: "pune",
  currentCourseName: "JS-react",
  courseFees: { Js: 5000, react: 5000, full: 10000 },
};

console.log(Object.keys(courseInformation));

Object.keys(courseInformation).forEach((key) => {
  console.log(key);
  console.log(courseInformation[key]);
});
*/
