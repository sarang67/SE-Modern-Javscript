import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
   `;

/*
 // preventing-default-event-actions  
   app.innerHTML = `
   <h1>Javascript Basic</h1>
    <form>
      <label>
       Sign up emeil
       <input type="email" id="email"/>
       </label>
 
       <label>
          I agree terms and condition
          <input type="checkbox" id="condition"/>
       </label>
 
       <input type="submit">
 
       <a href="google.com">click me</a>
    </form>
    `;
 
 // event prevent default
 
 const form = document.querySelector("form");
 const email = document.querySelector("#email");
 const condition = document.querySelector("#condition");
 
 const anchor = document.querySelector("a");
 
 // register form submit event
 form.addEventListener("submit", handleform);
 condition.addEventListener("click", handlecheckbox);
 anchor.addEventListener("click", (event) => {
   event.preventDefault();
 });
 
 function handleform(event) {
   event.preventDefault();
   if (email.value && condition.checked) {
     alert("Yur form is succefully submited");
   } else {
     alert("kindly fill your correct and all the detail");
   }
 }
 
 function handlecheckbox(event) {
   event.preventDefault();
   console.log(condition.checked);
 }
 
 */

  /* using of event delegation taking the advantage of bubbling effect, 
   and we are hanling event on parent once , and taking advanctage on child
 */

 /*
 //event-delegation-dynamic-events
 ==================================
 
 app.innerHTML = `
   <h1>Javascript Basic</h1>
   <button>add list</button>
   <ul id="list" style="border:1px solid red">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
    `;
 
 // event delegtaion

 const list = document.querySelector("#list");
 //const listItems = document.querySelectorAll("li");
 const btn = document.querySelector("button");
 
 btn.addEventListener("click", handleButton);
 list.addEventListener("click", handleCLick);
 
 function handleCLick(event) {
   if (event.target.nodeName === "LI") {
     console.log(event.target.innerText);
   }
 }
 
 // listItems.forEach((item) => {
 //   item.addEventListener("click", handleCLick);
 // });
 
 function handleButton() {
   const listItems = document.querySelectorAll("li");
   const li = document.createElement("li");
   li.innerText = `Item ${listItems.length + 1}`;
   list.append(li);
 }
 
 */

/*
 =============
 // keybard events
 
 document.addEventListener("keyup", (event) => {
   console.log(event);
 });
 
 document.addEventListener("keydown", (event) => {
   console.log(event);
 });
 
 */

 /*
 //access-forms-and-elements
 =============
 
 app.innerHTML = `
   <h1>Javascript Basic</h1>
    <form name="order">
      <label for="userName">
        Full Name
        <input type="text" name="userName"  id="userName"/>
      </label>
    </form>
   `;
 
 // **********Form and events*************
 // create a form and access the form
 
 // console.log(document.forms)  --> [order]
 //console.log(form);  form.elemnts --. [userName]
 //console.dir(form.elements);
 
 const orderform = document.forms.order;
 const username = orderform.elements.userName;
 console.log(username);
 
 function handleChnage(event) {
   console.log("changeed");
   console.log(event.target.value);
 }
 
 function handleInput(event) {
   console.log(event.target.value);
 }
 username.addEventListener("change", handleChnage);
 username.addEventListener("input", handleInput);
 
 */