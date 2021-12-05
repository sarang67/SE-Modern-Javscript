import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

/** Object in depth */

/*
//1 object creation
const obj = {};
console.log(obj);

const personlaInfo = {
  name: "sarang jain",
  age: 33,
  isMarried: true,
  profession: "software enginer and teacher",
  friends: ["abhishek", "amit", "adarsh"],
  address: {
    flatNo: 201,
    street: "Vunay nagar",
    city: "gwalior",
    state: "MP",
    pin: 411014,
  },

  getPerdonalInfo: function () {
    console.log(this.name + this.age + this.isMarried);
  },
};

console.log(personlaInfo);

console.log(personlaInfo.address.state);
personlaInfo.getPerdonalInfo();

// using function constructor

console.log(new Object());
console.log(Object());

console.log(Object({ name: "sarang", age: 33 }));

console.log(Object("sarang"));
console.log(Object(5));
console.log(Object(true));
console.log(Object([1, 2, 3]));
console.log(Object(() => {}));

*/

//----------------------------

/*
// muatbility , pass by refrence

let kkInfo = { name: "Krishnkant", age: 35 };

let abhishekInfo = kkInfo;

console.log(kkInfo);
console.log(abhishekInfo);

kkInfo.name = "Krishnkant bharatdwaj";

console.log(kkInfo);
console.log(abhishekInfo);

abhishekInfo.age = 40;

console.log(kkInfo);
console.log(abhishekInfo);

let sarang = abhishekInfo;
sarang.lastname = "Jain";

console.log(kkInfo);
console.log(abhishekInfo);
console.log(sarang);

*/
//===============================

/*
// object properties and value

console.log(this);

let personInfo = {
  name: "Sarang Jain",
  id: "xherd123",
  age: 30,

  getInfo: function () {
    console.log(this.name + this.id);
    console.log(this);
    // this is recommended
    let test = () => {
      console.log(this);
    };
  },

  getInfo2() {
    console.log(this.name + this.id);
  },

  // we have to avoid arrow fn as a property method
  getInfo3: () => {
    // console.log(this.name + this.id);
  },

  "abc 123": "I am a valid property",
  100: "I am also a valid property",
};

console.log(personInfo);
personInfo.getInfo();
personInfo.getInfo2();
personInfo.getInfo3();

console.log(personInfo["name"]);
console.log(personInfo["abc 123"]);
console.log(personInfo["100"]);
console.log("====================");
console.log(personInfo["getInfo2"]());
*/

//=================================

/*
//object key shorthand and dynamic key

let personInfo = {
  name: "sarang jain",
  id: "Xh123td",
  age: 30,
  getInfo: function () {
    console.log(this.name, this.age);
  },
};

console.log(personInfo);

console.log("=============================");

let myName = "sarang jain";
let myId = "x123";
let myage = 45;

let personInfo2 = {
  name: myName,
  myId: myId,
  age: myage,
  getInfo: function () {
    console.log(this.name, this.age);
  },
};

console.log(personInfo2);

console.log("=============================");
let name = "abhishek";
let id = "xz654";
let age = 80;
let mylatestage = 90;

let personInfo3 = {
  name, // name:name
  id: id, // id
  age,
  mylatestagechanged: mylatestage,
  getInfo: function (param) {
    console.log(this.name, this.age, param);
  },
};

console.log(personInfo3);

personInfo3.getInfo("rishi");
console.log("=============================");

// api call getInformation()
let lateteName;
let latestId;
let latestage;
let key;

function getInformation() {
  // api call ---> inofmration
  lateteName = "sarang jain"; // inofmration1
  latestId = "asdc123"; // inofmration2
  latestage = 35; // inofmration3
  key = "updateage"; //// inofmration4
}

getInformation();

let personInfo4 = {
  lateteName: lateteName,
  latestId: latestId,
  [key]: latestage,
};

console.log(personInfo4[key]);

console.log(personInfo4);

*/
// ===============================

/*
// Object destructuring

let couurseInformation = {
  trainer: "sarang jain",
  id: "webTrainer",
  phoneNo: 9405034908,
  city: "pune",
  currentCourse: "react-js",
  multipleCourse: {
    JS: 15000,
    react: 15000,
    full: 20000,
    jscontent: { 1: "baisc", 2: "advance", 3: "DOm" },
  },
};

console.log(couurseInformation.multipleCourse.full);
console.log(couurseInformation.multipleCourse.jscontent[3]);
console.log("==================");

let { trainer, id, phoneNo, ...rest } = couurseInformation;

console.log(trainer);
console.log(id);
console.log(phoneNo);
console.log(rest);

//const currentCourse = "just for test";

let { city: mycity, currentCourse: current_course } = couurseInformation;

console.log(mycity);

console.log(current_course);

console.log("==================");

let {
  multipleCourse: { JS, react, full },
} = couurseInformation;

//console.log(multipleCourse);

console.log(JS);
console.log(react);
console.log(full);
// let { full: fullcoursefees } = multipleCourse;
// console.log(fullcoursefees);

=============================
// Object property add and update

let courseInformation = {
  trainer: "sarang jain",
  id: "web trainer",
  phoneNo: 9405034908,
  //  city: "pune",
  //  currentCourse: "JS-react",
  //  courseFree: { JS: 5000, react: 5000, full: 10000 },
};

// console.log(courseInformation);

// courseInformation.city = "Gwalior";

// console.log(courseInformation);

// courseInformation.city = "pune";
// console.log(courseInformation);

// courseInformation["currentCourse"] = "js-react";
// console.log(courseInformation);

// courseInformation["currentCourse"] = "js-react-updated";
// console.log(courseInformation);

function addAndUpdateObj(prop, value) {
  // checking exist or not
  courseInformation[prop] = value;
}

addAndUpdateObj("city", "Pune"); // add city

addAndUpdateObj("city", "Gwalior"); // update city

addAndUpdateObj("id", "web trainer");

addAndUpdateObj("courseFree", { JS: 5000, react: 5000, full: 10000 });

addAndUpdateObj("state", "maharastra");
console.log(courseInformation);

// Object remove properties

let courseInformation = {
  trainer: "sarang jain",
  id: "web trainer",
  phoneNo: 9405034908,
  city: "pune",
  currentCourse: "JS-react",
  courseFree: { JS: 5000, react: 5000, full: 10000 },
};

// delete keyword --> sow process, and recommended not to use
delete courseInformation.city;
delete courseInformation.trainer;

console.log(courseInformation);

// alternative way 1

let { trainer, id, ...updatedInformation } = courseInformation;
console.log(updatedInformation);

*/
