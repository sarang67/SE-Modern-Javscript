import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
   `;

/*
   //1) access-forms-and-elements

 const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
  <form name="order">
     <label>
       Full Name
        <input type="text" name="fullname"/>
     </label>

      <br/>
     <button type="submit">Order Please</button>
  </form>
  `;

//const form = document.querySelector("form");
//console.log(form);

console.log(document.forms);

const orderForm = document.forms.order;
const user = orderForm.elements.userEmail;

console.log(orderForm);
console.log(user);

user.addEventListener("input", handleUser);

function handleUser(event) {
  // grab the value
  console.log(event.target.value);
  // grab the target
  console.log(event.target);
  // grab the form
  console.log(event.target.form);
}

*/


// submit-event

/*
app.innerHTML = `
  <h1>Javascript Basic</h1>
  <form name="order">
     <label>
       Customer Name
        <input type="text" name="fullname"/>
     </label>
    
     <br/><br/>
     <label>
      <select>
          <option>Select the pizza ?</option>
            <option value="peproni">Peproni</option>
            <option value="cheesy">cheesy</option>
            <option value="onion">onion</option>
      </select>
     </label>

     <br/><br/>
     <button type="submit">Order Please</button>
  </form>
  `;

//const form = document.querySelector("form");
//console.log(form);

console.log(document.forms);

const orderForm = document.forms.order;
const user = orderForm.elements.userEmail;

console.log(orderForm);
console.log(user);

function handleUser(event) {
  console.log(event.target.value);
}

function handlesubmit(event) {
  event.preventDefault();
  console.log(event.target);
}

user.addEventListener("input", handleUser);
orderForm.addEventListener("submit", handlesubmit);
*/

/* 
// formdata Event
=================================


const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
  <form name="order">
     <label>
       Customer Name
        <input type="text" name="fullname"/>
     </label>
    
     <br/><br/>
     <label>
      <select name="pizza">
          <option>Select the pizza ?</option>
            <option value="peproni">Peproni</option>
            <option value="cheesy">cheesy</option>
            <option value="onion">onion</option>
      </select>
     </label>

     <br/><br/>
     <button type="submit">Order Please</button>
  </form>
  `;

const orderForm = document.forms.order;
const user = orderForm.elements.fullname;

function handleUser(event) {
  //console.log(event.target.value);
}

function handlesubmit(event) {
  event.preventDefault();
  const orderForm = event.target;
  new FormData(orderForm); // formData event will emit or fire
}

function handleformData(event) {
  const formdata = event.formData;
  console.log(formdata);

  console.log([...formdata]); // entries [key , value]
  console.log([...formdata.values()]); // [values , values]
  console.log([...formdata.entries()]); // entries [key , value]
}

user.addEventListener("input", handleUser); // input box
orderForm.addEventListener("submit", handlesubmit); // form submit
orderForm.addEventListener("formdata", handleformData); // when new FormData() will construct

*/

/*
// radio box
================================

app.innerHTML = `
  <h1>Javascript Basic</h1>
  <form name="order">
     <label>
       Customer Name
        <input type="text" name="fullname" />
     </label>
    
     <br/><br/>
     <label>
      <select name="pizza">
          <option>Select the pizza ?</option>
            <option value="peproni">Peproni</option>
            <option value="cheesy">cheesy</option>
            <option value="onion">onion</option>
      </select>
     </label>

     <br/><br/>
     What Sizes ?
        <label>
          <input type="radio" value="small" name="sizes"/> Small 
        </label>
        <lablel>
          <input type="radio" value="medium" name="sizes"/> Medium 
        </label>
        <lablel>
          <input type="radio" value="large" name="sizes"/> Large 
        </label>
        <lablel>
          <input type="radio" value="xlarge"  name="sizes" checked /> Extra large 
        </label>
     <br/><br/>
     <label>
        Quantity ?
        <input type="number" name="quantity" value="1"/>

     </label>
     <br/><br/>
     <button type="submit">Order Please</button>
  </form>
  `;

const orderForm = document.forms.order;
const user = orderForm.elements.fullname;

function handleUser(event) {
  //console.log(event.target.value);
}

function handlesubmit(event) {
  event.preventDefault();
  const orderForm = event.target;
  new FormData(orderForm); // formData event will emit or fire
}

function handleformData(event) {
  const formdata = event.formData;
  console.log(formdata);

  console.log([...formdata]); // entries [key , value]
  console.log([...formdata.values()]); // [values , values]
  console.log([...formdata.entries()]); // entries [key , value]
}

user.addEventListener("input", handleUser); // input box
orderForm.addEventListener("submit", handlesubmit); // form submit
orderForm.addEventListener("formdata", handleformData); // when new FormData() will construct

=====================================
*/

/*
// transform-formdata (json):-

app.innerHTML = `
  <h1>Javascript Basic</h1>
  <form name="order">
     <label>
       Customer Name
        <input type="text" name="fullname" />
     </label>
    
     <br/><br/>
     <label>
      <select name="pizza">
          <option>Select the pizza ?</option>
            <option value="peproni">Peproni</option>
            <option value="cheesy">cheesy</option>
            <option value="onion">onion</option>
      </select>
     </label>

     <br/><br/>
     What Sizes ?
        <label>
          <input type="radio" value="small" name="sizes"/> Small 
        </label>
        <lablel>
          <input type="radio" value="medium" name="sizes"/> Medium 
        </label>
        <lablel>
          <input type="radio" value="large" name="sizes"/> Large 
        </label>
        <lablel>
          <input type="radio" value="xlarge"  name="sizes" checked /> Extra large 
        </label>
     <br/><br/>
     <label>
        Quantity ?
        <input type="number" name="quantity" value="1"/>

     </label>
     <br/><br/>
     <button type="submit">Order Please</button>
  </form>
  `;

const orderForm = document.forms.order;
const user = orderForm.elements.fullname;

function handleUser(event) {
  //console.log(event.target.value);
}

function handlesubmit(event) {
  event.preventDefault();
  const orderForm = event.target;
  new FormData(orderForm); // formData event will emit or fire
}

function handleformData(event) {
  const formdata = event.formData;
  console.log(formdata);

  console.log([...formdata]); // entries [key , value]
  console.log([...formdata.values()]); // [values , values]
  console.log([...formdata.entries()]); // entries [key , value]

  const entriesData = [...formdata.entries()];

  const entriesObj = Object.fromEntries(entriesData);
  console.log(entriesObj);
  const payloadFormatJSON = JSON.stringify(entriesObj);
  console.log(payloadFormatJSON);
}

user.addEventListener("input", handleUser); // input box
orderForm.addEventListener("submit", handlesubmit); // form submit
orderForm.addEventListener("formdata", handleformData); // when new FormData() will construct

*/

// fetch-api-formdata (send form data):-
/*
================================
const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
  <form name="order">
     <label>
       Customer Name
        <input type="text" name="fullname" />
     </label>
    
     <br/><br/>
     <label>
      <select name="pizza">
          <option>Select the pizza ?</option>
            <option value="peproni">Peproni</option>
            <option value="cheesy">cheesy</option>
            <option value="onion">onion</option>
      </select>
     </label>

     <br/><br/>
     What Sizes ?
        <label>
          <input type="radio" value="small" name="sizes"/> Small 
        </label>
        <lablel>
          <input type="radio" value="medium" name="sizes"/> Medium 
        </label>
        <lablel>
          <input type="radio" value="large" name="sizes"/> Large 
        </label>
        <lablel>
          <input type="radio" value="xlarge"  name="sizes" checked /> Extra large 
        </label>
     <br/><br/>
     <label>
        Quantity ?
        <input type="number" name="quantity" value="1"/>

     </label>
     <br/><br/>
     <button type="submit">Order Please</button>
  </form>
  `;

const orderForm = document.forms.order;
const user = orderForm.elements.fullname;

function handleUser(event) {
  //console.log(event.target.value);
}

function handlesubmit(event) {
  event.preventDefault();
  const orderForm = event.target;
  new FormData(orderForm); // formData event will emit or fire
}

function handleformData(event) {
  const formdata = event.formData;
  console.log(formdata);

  console.log([...formdata]); // entries [key , value]
  console.log([...formdata.values()]); // [values , values]
  console.log([...formdata.entries()]); // entries [key , value]

  const entriesData = [...formdata.entries()];

  const entriesObj = Object.fromEntries(entriesData);
  console.log(entriesObj);
  const payloadFormatJSON = JSON.stringify(entriesObj);
  console.log(payloadFormatJSON);

  // how you will communicate the server
  fetch("/fakeaddress", {
    method: "post",
    body: payloadFormatJSON,
    headers: {
      "Content-Type": "application/json",
      "x-my-custom-header": "test",
    },
  });
}

user.addEventListener("input", handleUser); // input box
orderForm.addEventListener("submit", handlesubmit); // form submit
orderForm.addEventListener("formdata", handleformData); // when new FormData() will construct




*/
