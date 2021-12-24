import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

// ============== Querying in the DOM ======================
/*
// Querying DOM Nodes (HTMLCollections)getElementById : this will give live data

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="ulElement" class="ul-list"></ul>
`;

const ulElem = document.getElementById("ulElement");

const names = ["sarang", "manish", "kk", "amar"];

names.forEach((name) => {
  const liItem = document.createElement("li");
  liItem.textContent = name;
  liItem.className = "li-list";
  ulElem.append(liItem);
});

console.dir(ulElem);

//getElementsByClassName :  HTMLCollection live collection
const listByClassname = document.getElementsByClassName("li-list");
console.log(listByClassname);

// getElementBYTagname :  HTMLCollection live collection

const listByTagname = document.getElementsByTagName("li");
console.log(listByTagname);

const newFriend = `<li class="li-list">vasu</li>`;
ulElem.innerHTML += newFriend;

console.log("===================");
console.log(listByTagname);
console.log(listByClassname);

// ======================
*/

/*

// Querying DOM Nodes (NodeLists)---> this gives snapshot

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="ulElement" class="ul-list"></ul>
`;

// const ulElem = document.getElementById("ulElement");

const ulElem = document.querySelector("ul");
console.log(ulElem);
//#ulElement {}
// .ulElement {}
// ul li

const names = ["sarang", "manish", "kk", "amar"];

names.forEach((name) => {
  const liItem = document.createElement("li");
  liItem.textContent = name;
  liItem.className = "li-list";
  ulElem.append(liItem);
});

console.dir(ulElem);

//querySelectorAll :nodeList

const ulElemAll = document.querySelectorAll("li");
console.log(ulElemAll);

const ulElemt = `<li class="li-list">rishi</li>`;
ulElem.innerHTML += ulElemt;

console.log("===================");
console.log(ulElemAll);

const ulElemAllAgain = document.querySelectorAll("li");
console.log(ulElemAllAgain);

*/

//=================

// Looping over DOM Elements

/*
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="ulElem" class="ul-list">
    <li class="li-list">Sarng</li>
    <li class="li-list">Saurabh</li>
    <li class="li-list">manish</li>
    <li class="li-list">kk</li>
 </ul>
`;

const ulLiElementList = document.querySelectorAll(".li-list");
console.log(ulLiElementList);

console.log("===for loop====");
for (let i = 0; i < ulLiElementList.length; i++) {
  console.log(ulLiElementList[i]);
}

console.log("===for..of====");
for (let item of ulLiElementList) {
  console.log(item);
}

console.log("===for each====");

ulLiElementList.forEach((item) => console.log(item));

console.log("===spread====");

[...ulLiElementList].forEach((item) => console.log(item));

console.log("===array from====");

Array.from(ulLiElementList).forEach((item) => console.log(item));
*/

// Finding Child Elements

/*
import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="ulElem" class="ul-list">
    <li class="li-list">Sarng</li>
    <li class="li-list">Saurabh</li>
    <li class="li-list">manish</li>
    <li class="li-list">kk</li>
 </ul>
`;

const ulElemet = document.querySelector("#ulElem");
const liElemnts = ulElemet.querySelectorAll(".li-list");

console.log(ulElemet);
console.log(liElemnts); // nodeList

console.log("===childre/childNodes==========");
console.log(ulElemet.children); // HtmlCollection
console.log(ulElemet.childNodes); // nodes with whitespace

console.log("===first/last==========");
console.log(ulElemet.firstChild);
console.log(ulElemet.firstElementChild);

console.log(ulElemet.lastChild);
console.log(ulElemet.lastElementChild);


*/
