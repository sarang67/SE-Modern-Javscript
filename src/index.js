import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;



/*

// setter dom content......


console.log(app);

app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;


//app.innerText = "<h1>JavaScript DOM</h1>";

let h1Tag = document.createElement("h1");
h1Tag.innerText = "This is Dom class";


app.append(h1Tag);

// getter dom content......

// gives the full html visible or onvisible.
console.log(app.innerHTML);
// give the text , remove whitespaces. only return visible text
// applies on Elements
console.log(app.innerText);
// give the full text (visible or invisible), inclusing whitespaces etc
// aplies on nodes
console.log(app.textContent);
*/


/*
// creating dom node using innerHtml with literal string v/s createelement

// create dom node using createelement

// { label, type } = { label: "First name", type: "text" } // destructring
function createInputElement({ label, type }) {
  const labelElem = document.createElement("label"); // <lable></label>
  const inputElem = document.createElement("input"); // <input >

  labelElem.innerText = label; // <lable>First name</label>
  inputElem.type = type; // <input type="text">
  labelElem.append(inputElem); // <lable>First name <input type="text"></label>

  //console.log(labelElem, inputElem);

  return labelElem;
}

const nameField = createInputElement({ label: "First name", type: "text" });
console.log(nameField);
app.append(nameField);

// create dom node  using innerHtml with literal string

function createInputElement2({ label, type }) {
  return `
      <label>
         ${label}
         <input type="${type}">
      </label>
  `;
}

const passwordField = createInputElement2({
  label: "passwrd please",
  type: "password",
});

console.log(passwordField);
app.innerHTML += passwordField;


=================================================
*/

/*

// inserting dom elements (node)

const div = document.createElement("div");
const span = document.createElement("span");
const p = document.createElement("p");
const i = document.createElement("i");
const b = document.createElement("b");

//append --> last child
div.append(span);
//div.append(p);
// prepend ---> opposite od append --> first child node
div.prepend(i);
//div.prepend(b);

span.after(p);
span.before(b);

app.append(div);
console.log(app);

*/

/*
=============================

app.innerHTML = `
  <h1>Javascript Basic</h1>

  <ul id="myUl">
   <li>1</li>
  </ul>
`;

// inserting string template
const ulElement = document.getElementById("myUl");
console.log(ulElement);

ulElement.insertAdjacentHTML("beforebegin", `<p>My onordered list</p>`);
ulElement.insertAdjacentHTML("afterbegin", `<li>first item position</li>`);
ulElement.insertAdjacentHTML("beforeend", `<li>last item position</li>`);
ulElement.insertAdjacentHTML("afterend", `<p> list is completed</p>`);


/*
app.innerHTML = `
  <h1>Javascript Basic</h1>
  <div id="divElem">
     Relpace me
  </div>
`;

// replacing dom element
const divElem = document.getElementById("divElem");
console.log(divElem);

const newdiv = document.createElement("div");
newdiv.innerText = "i will replace";

console.log(newdiv);

setTimeout(() => {
  divElem.replaceWith(newdiv);
}, 2000);

const anotherUL = document.createElement("ul");
setTimeout(() => {
  newdiv.replaceWith(anotherUL);
}, 3000);

*/
/*
======================
// cloning the dom

const div = document.createElement("div");
const span = document.createElement("span");

span.innerText = "can you clone me ?";
div.append(span);

console.log(div);
app.append(div);

const clone = div.cloneNode(false);
console.log(clone);

const cloneDeep = div.cloneNode(true);
console.log(cloneDeep);

app.append(cloneDeep);
console.log("----------------");
const appclonne = app.cloneNode(true);
console.log(appclonne);

app.append(appclonne);

*/

/*
=======
// removing dom nodes

const div = document.createElement("div");
div.innerText = "I am message";

app.append(div);

setTimeout(() => {
  div.remove();
  app.remove();
}, 2000);

*/

/*

=======================assignment=========
app.innerHTML = `
  <h1>Javascript Basic</h1>
  <div id="family">
    Family detaail
  <div>
`;

// using inerHtml and using createElement

// 1) create node for father name insert 
// 2) create node for mother name insert first postion
// 3) sister name from starting div
// 4) brother name after div
// 5) clone and you need to insert inside body
// 6) you need to delete father name
// 7) uyou have to replace your mother name with full name "mrs xyz abc surname"

*/
