import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

/* 
   Array in depth
   // array in JS :- array is the collection of anything , this is the special kind of object array are structured or ordered datastructure


*/

/*
// array literal syntax and preferred syntax

const myInformTion = ["sarang jain", 9405034908, "frontend trainer"];
const myInformTionRef = myInformTion;

// mutablilty in array (value can be changed on same address), pass by refrence,
myInformTion.push("married");
myInformTionRef.push("pune");

console.log(myInformTion);
console.log(myInformTionRef);


// using function constructor (not preferred way)
const information2 = new Array("sarang jain", 9405034908, "frontend trainer");
console.log(information2);


// function conversion (Array() and new Array() both are doing same work)
const information3 = Array("sarang jain", 9405034908, "frontend trainer");
console.log(information3);

console.log(Array(1, 2, 3, 4));


const collection = [
  {},
  true,
  "sarang",
  function () {
    console.log("Hello");
  },
  [1, 2, 3],
  new Array(),
  new String(),
];

console.log(collection);
collection[3]();

console.log(collection[3]);

*/

/*

//3) array index properties element

const trainerInfo = ["sarang jain", "Pune", "front end trainer"];

// access the element
console.log(trainerInfo[0]);
console.log(trainerInfo["1"]);
console.log(trainerInfo["2"]);

console.log(trainerInfo.length);
// access the last element
console.log(trainerInfo[trainerInfo.length - 1]);

// array are special kind of object

trainerInfo.contactno = 9405034908;

console.log(trainerInfo.contactno);
console.log(trainerInfo["contactno"]);

//trainerInfo.contactno = 12345565;

// update the value
trainerInfo[0] = "Mr saranag jain";

// empty array
trainerInfo.length = 0;

console.log(trainerInfo);

*/

/*

//  multidimenssinal array
// array inside ayyar is  called multidimenss array
// [[] , [] , []]


const trainerInfo = [
  ["Javascript", 5000],
  ["React", 5000],
  ["Angular", 5000],
];

console.log(trainerInfo);
console.log(trainerInfo[2]);
console.log(trainerInfo[2][0]);

let jsCourse = trainerInfo[0];
console.log(jsCourse);
console.log(jsCourse[0]);
console.log(jsCourse[1]);

*/

/*
// array destructuring

const tranerInformation = [
  ["Javascript", 5000],
  ["React", 15000],
  ["Angular", 25000],
  ["Vue", 35000],
  ["Nodejs", 45000],
  ["ionic", 55000],
  ["react-native", 65000],
  ["html-css", 75000],
];

console.log(tranerInformation);

let jsCollection = tranerInformation[0];
console.log(jsCollection);

let jsFees = jsCollection[1];
console.log(jsFees);

const [a, b, c, [d, e], infoIonic, , rn] = tranerInformation;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(infoIonic);
const [coursename, coursefeess] = infoIonic;
console.log(coursename);
console.log(coursefeess);

console.log(rn);

console.log("-------------------------------------");
const tranerInformation2 = [
  ["Javascript", 5000],
  ["React", 15000],
  ["Angular", 25000],
  ["Vue", 35000],
  ["Nodejs", 45000],
  ["ionic", 55000],
  ["react-native", 65000],
  ["html-css", 75000],
];

const [aa, bb, cc, ...restElemet] = tranerInformation2;

console.log(aa, bb, cc);

console.log(restElemet);
*/

/*
// finding array element


let courses = ["angular", "react", "javascript", "typescript"];

// findinf item with index
const reactIndex = courses.indexOf("react");

if (reactIndex !== -1) {
  console.log(`react is present in array at no of ${reactIndex}`);
}

// // findinf item with  yes or no
console.log(courses.includes("javascript"));

let courseWIthId = [
  { id: 1, name: "angular" },
  { id: 2, name: "react" },
  { id: 3, name: "javascript" },
  { id: 4, name: "typescript" },
];

console.log(courseWIthId);

// findindex
// callback function

function findTheitemsCB(course, courseIndex) {
  console.log(course);
  console.log(courseIndex);
  if (course.name === "javascript") {
    return true;
  }
}

// let cb = (item, index) => {
//   console.log(item);
//   console.log(index);
// };

console.log(courseWIthId.findIndex(findTheitemsCB));

const index = courseWIthId.findIndex((course, courseIndex) => {
  if (course.name === "javascript") {
    return true;
  }
});

console.log(index);

console.log(
  courseWIthId.findIndex((item, index) => item.name === "javascript")
);

console.log(courseWIthId[index]);

// find item in true false
const ItemFound = courseWIthId.find((course, index) => {
  if (course.name === "react") {
    return true;
  }
});

console.log(ItemFound);

*/
