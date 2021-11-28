import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

/*

// 1) spread operator,  merging-arrays

const course1 = ["a", "b", "c"];
const course2 = ["d", "e", "f"];
const combineCourse = ["x", "y", ...course2, ...course1, "z", ...[[1, 2, 3]]];
console.log(combineCourse);

console.log("-------------");

let courses = [
  ["angular", 5000],
  ["react", 5000],
  ["javascript", 5000],
  ["typescript", 5000],
];

let courseVue = [["vue", 5000]];
let courseNode = ["node", 5000];

let combineAllcourses = [...courses, ...courseVue, ...[courseNode]];
console.log(combineAllcourses);

// merging using concat method

let allCourses = courses.concat(courseVue, [courseNode]);
console.log(allCourses);
console.log(courses);


*/
//===============
/*
//1) array-shallow-deep-cloning break

let courses = [
  "angular",
  ["v9", 5000],
  "react",
  ["v16", 5000],
  "javascript",
  ["V6", 5000],
  "typescript",
  ["V3", 5000],
];

// let courseClone = courses;

// using spread operator
//let courseClone = [...courses];

// using slice method
// let courseClone = courses.slice();

//let courseClone = Array.from(courses);

// how to resolve deep copy issue
// 1) you can change to string , and again to array


 //  const arrstr = JSON.stringify(arr ) ---> array will  convert to sring

 // const arr =  JSON.parse (arrstr) ---> array string will  convert to array



let courseArrString = JSON.stringify(courses);

console.log(courseArrString);

let courseClone = JSON.parse(courseArrString); 

//console.log(courseClone);

courseClone[0] = "angular is updated";
courseClone[1][0] = "v10";

console.log(courses);
console.log(courseClone);
*/

/*
// 3) array reverse , and sort

let courses = ["angular", "javascript", "react", "typescript"];

console.log(courses.reverse());
console.log(courses);

let numbers = [1, 9, 8, 18, 16];

// let cb = (a, b) => {
//   return b - a;
// };

let sortArray = numbers.sort((a, b) => {
  return b - a;
});

console.log(sortArray);

let courseswithId = [
  { id: 18, name: "angular" },
  { id: 28, name: "react" },
  { id: 3, name: "javascript" },
  { id: 45, name: "typescript" },
];

console.log(courseswithId);

const sortResult = courseswithId.sort((a, b) => {
  console.log(a);
  console.log(b);
  return a.id - b.id;
});

console.log(sortResult);


===============================
*/

/*

//4) array type checking

console.log(typeof []);
console.log([] instanceof Array);
console.log([] instanceof Object);

console.log(new Array() instanceof Array);
console.log(new Array() instanceof Object);

console.log({} instanceof Object);

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({}));
console.log(Array.isArray("sarang"));

console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(5))

=========
*/

/*
// array imperative iteration

let courses = ["angular", "react", "javascript", "typescript"];

for (let i = 0; i <= courses.length; i++) {
  const course = courses[i];
  if (course === "javascript") {
    console.log("do something for js");
  }
  console.log(course);
}

*/

/*
// break and continue statement

// the break statement "Jump out" from loop
// the continue statement jump over one iteration in the loop

let courses = ["angular", "react", "javascript", "typescript"];

for (let i = 0; i <= courses.length; i++) {
  const course = courses[i];
  console.log(course);

  if (course === "react") {
    console.log("My work done");
    break;
  }
}

let courses = ["angular", "react", "javascript", "typescript"];

for (let i = 0; i <= courses.length; i++) {
  const course = courses[i];
  console.log(course);

  if (course === "react") {
    console.log("My work done");
    continue;
  }
  console.log("----Log me----");
}
*/

/*

//  iteration-for-of declarativew ay
let courses = ["angular", "react", "javascript", "typescript"];

for (let course of courses) {
  console.log(course);
}
*/
