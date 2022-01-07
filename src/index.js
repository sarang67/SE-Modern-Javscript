import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
   `;

/*

   // 1) input element
========================

const form = document.forms.example;
const myInput = form.elements.myInput;
console.dir(myInput);

// 1 properties

// set
myInput.value = "updated value ";

// get the value
console.log(myInput.value);

// myInput.readOnly = true;
// myInput.disabled = true;

// important event

myInput.addEventListener("focus", () => {
  console.log("I am inside input");
});

myInput.addEventListener("blur", () => {
  console.log("I am out of focus");
});

myInput.addEventListener("change", () => {
  console.log("The value is changed");
});

myInput.addEventListener("input", () => {
  console.log("i am input event");
});

// important method
myInput.focus();

setTimeout(() => {
  myInput.blur();
}, 2500);

*/

/*
==============================================

app.innerHTML = `
  <h1>Javascript Basic</h1>
  <form name="example">
  Choose one color ? 
  <div id="container">
    <label>
      Red: <input type="radio" value="red" name="color" checked/>
    </label>
    <label>
      Green: <input type="radio" value="green" name="color"/>
    </label>
    <label>
      Yellow: <input type="radio" value="yellow" name="color"/>
    </label>
  </div>
  </form>
   `;

// 1) radio element

const form = document.forms.example;
const radios = [...form.elements.color]; // [input{checked:true}, input, input]

console.log(radios);

// imortant properties

radios.forEach((radio) => {
  //  radio.addEventListener("change", handleChange);
  //console.log(radio);
  console.log(radio.value);
  console.log(radio.checked);
});

const checked = radios.find((radio) => radio.checked === true);
console.log(checked);
console.log(checked.value);

// use of event delegation

const container = document.querySelector("#container");
container.addEventListener("change", handleChange);
function handleChange() {
  //const checked = radios.find((radio) => radio.checked === true);
  //console.log(checked);
  //console.log(checked.value);

  // modern way to get value of radio box
  console.log(form.elements.color.value);
}

// important method
radios[1].checked = true;
radios[1].select();
*/

/*
==============================================

const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
  <div id="container">
      <label>
        marketing ? 
        <input type="checkbox"   name="marketing" />
      </label>


  </div>
  </form>
`;

// 1) checkbox element

const form = document.forms.example;
const checkbox = form.elements.marketing;

console.log(checkbox);

// property

console.log(checkbox.checked);
console.log(checkbox.value);

checkbox.checked = false;

// event
checkbox.addEventListener("change", () => {
  console.log(checkbox.checked);
  console.log(checkbox.value);
});

// methods
checkbox.select();

const container = document.querySelector("#container");
const occupation = [];

container.addEventListener("change", (event) => {
  occupation.push(event.target.value);
  console.log(occupation);
});

*/

/*
==========================================

app.innerHTML = `
  <h1>Javascript Basic</h1>
  <form name="example">
  <div id="container">
      <select name="framework">
        <option value="">Sekelecr framework </option>
        <option value="angular">angular</option>
        <option value="react">react</option>
        <option value="vue">vue</option>
      </select>
  </form>
   `;

// 1) select element

const form = document.forms.example;
const select = form.elements.framework;

console.dir(select);

// property
select.value = "react";
console.log(select.value);

// selectedIndex
select.selectedIndex = 3;
console.log(select.selectedIndex);

// selected dom elment
console.log(select.options);
console.log(select.options[select.selectedIndex]);

// event

select.addEventListener("change", () => {
  console.log(select.value);
  console.log(select.selectedIndex);
  console.log(select.options[select.selectedIndex]);
});

// method of adding a new option

const option = document.createElement("option"); //<option></option>
option.value = "javascript"; //<option value="javascript"></option>
option.innerText = "Javascript"; //<option value="javascript">Javascript</option>
//select.append(option);

// important method
select.add(option, 2);


*/
