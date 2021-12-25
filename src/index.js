import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
   <!-- <button style="padding:20px; font-size:20; color:red;border-left:2px solid green"> Click Me </button> -->
   <button> Click Me </button>
   `;

/***
      * The parent node property is read only property which returns
      us the name of the parent node of the selected node as a node
      object. The Node object represents a single node in the 
      document tree and a node can be an element node, 
      text node or more.

      The parent element is read only property which returns the parent 
      element of the selected element.The element object represents an 
      HTML element, like P, DIV, etc.

      // event emitting --> browser will do continously
      // event capturing ---> if you want to takse some action on perticular event then capture it
 
* */

/*
// finding parent element

app.innerHTML = `
  <h1>Javascript Basic</h1>
  <div class="item"></div>
`;

console.log(app);
const div = document.querySelector(".item");
console.log(div);

console.log(div.parentNode);
console.log(div.parentNode.parentNode.parentNode);

console.log("=================");
console.log(div.parentElement);
console.log(div.parentElement.parentElement);
console.log(div.parentElement.parentElement.parentElement);

console.log("====================");
console.log(div.closest("#app"));

==============================
*/

/*

// ============== Querying in the DOM ======================
// finding the sibling

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="ulElement" class="ul-list">
    <li class="li-list">Sarng</li>
    <li class="li-list">Saurabh</li>
    <li class="li-list">manish</li>
    <li class="li-list">kk</li>
 </ul>
`;

const listItem = document.querySelector("#ulElement li");
console.log(listItem);

// next sibling
console.log(listItem.nextSibling);
console.log(listItem.nextElementSibling);

// previous sibling

console.log(listItem.previousSibling);
console.log(listItem.previousElementSibling);

**************************************************************
*/

/*
// ******** Html attributes v/s javascript dom properties**************
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <input type="text" />
  `;

const input = document.querySelector("input");
console.log(input);

console.dir(input);

// getting properties
console.dir(input.type);
console.log(input.value);

//setting properties
input.value = 50;
// mirroring attributes and properties
input.setAttribute("value", 50);
//input.type = "email";

*/

/*
=========================
  <h1>Javascript Basic</h1>
   <!-- <button style="padding:20px; font-size:20; color:red;border-left:2px solid green"> Click Me </button> -->
   <button> Click Me </button>
   `;

// ******** setting and getting styles**************

const btn = document.querySelector("button");
console.dir(btn);
console.dir(btn.style);
console.log(btn.style.cssText);

const myStyle =
  "padding:20px; font-size:20; color:red;border-left:2px solid green";

btn.style.cssText = myStyle;

btn.style.padding = "20px";
btn.style.fontSize = "20px";
btn.style.color = "red";
btn.style["border-left"] = "2px solid green";

document.querySelector("h1").style.color = "red";
*/

/*
========================

/*

================================================
// setting and getting class


app.innerHTML = `
  <h1>Javascript Basic</h1>
   <!-- <button style="padding:20px; font-size:20; color:red;border-left:2px solid green"> Click Me </button> -->
   <button class="one  two"> Click Me </button>
   `;




const btn = document.querySelector("button");
console.dir(btn);
console.dir(btn.className);
console.dir(btn.classList);

// old way set class
btn.className += " three";

btn.classList.add("four");
btn.classList.remove("one");

// toggle behaviour  true --> false --> true
setTimeout(() => {
  btn.classList.toggle("four"); // if avaibale --> remove
}, 8000); // 8 sec

setTimeout(() => {
  btn.classList.toggle("four"); // if avaibale --> add
}, 10000);  // 10 sec

console.dir(btn.className);

btn.classList.add("nine", "ten");
btn.classList.add("two", "three");


*/

/*
=========================================

// *****************Event ****************\

// event emitting --> browser will do continously
// event capturing ---> if you want to takse some action on perticular event then capture it

const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
console.dir(btn);

// event capturing
btn.onmouseenter = function () {
  console.log("I am entering");
};

btn.onmouseleave = function () {
  console.log("I am leaving");
};

h1.onclick = function () {
  console.log("I am also clicked");
};

h1.oncopy = function () {
  console.log("I am copied");
};



*/
