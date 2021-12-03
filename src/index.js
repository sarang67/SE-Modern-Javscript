import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

/*
1) array add
2) array remove

/*

splice : return deleted array , mutable , (start index , lenghth , add extra item place of start index)
--> delete , and add item instead of dlt
--> only add item anywhere


slice : returned slice array , immutabke , (start index , last index), last index is excluded ,  
---> delete item from anywhere

*/

/*
=================
let subject = ["JS", "React", "Angular"];

// add in begining - mutable way
subject.unshift("Vue");

// add the last item -mutable way

subject.push("redux");
console.log(subject);

console.log("------------------------");

let subject2 = ["JS", "React", "Angular"];
// add in begining - immutable way

console.log(["Vue", ...subject2]);

// add in last -immutable way
console.log([...subject2, "Redux"]);
console.log(subject2);

// add anywhere in the array
console.log("------------------------");
let count = [1, 2, 3, 4, 5];
//count.splice(startIndex, lengthcount to delete,  whatdo ypu want to place instead startindex)

//console.log(count.splice(0));
//console.log(count.splice(0, 2));

console.log(count.splice(2, 0, "vasu"));
console.log(count);
console.log("------------------------");

let subject3 = ["JS", "React", "Angular"];

// add anywhere
const index = 2;
console.log([...subject3.splice(0, index), "Vue", ...subject3.splice(0)]);


console.log(subject3);
*/

/*
subject3 ---> ["JS", "React", "Angular"]
...subject3.splice(0, index) --> ["JS", "React"]
subject3 ---> [ "Angular"]


Result(["JS", "React", "Vue" , "Angular"])
*/

//=======================================================

// add remove

/*
let subject = ["Vue", "JS", "React", "Angular", "redux"];

// removing first elemnt --mutable way

console.log(subject.shift());

console.log(subject);

// removing last elemnt --mutable way

console.log(subject.pop());

console.log(subject);

// immutable way
console.log("----------------");

var test = [1, 2, 3, 4, 5];
// test.slice(start index, last index);
console.log(test.slice(0));
console.log(test.slice(0, 2));
console.log(test.slice(1, 4));

console.log(test.slice(-1));
console.log(test.slice(-2));
console.log(test.slice(-3));

console.log(test.slice(-5, -3));
console.log(test);

console.log("----------------");
// remove from anywhere
const index = 2;
let subject2 = ["Vue", "JS", "React", "redux"];

console.log([...subject2.slice(0, index), ...subject2.slice(index + 1)]);
console.log(subject2);
*/
