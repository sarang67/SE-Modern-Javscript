// 1) Setup Instructions , take images and already written CSS

/*
//2) Structuring our HTML Template
=================================
app.innerHTML = `
  <div class="todos">
     <div class="todos-header">
       <h3 class="todos-title">Todo List</h3>
       <div>
        <p>You have <span class="todos-count"></span>items</p>
        <button class="todos-clear" style="display:none">Clear completed</button>
       </div>
     </div>

     <form class="todos-form" name="todos">
       <input type="text" placeholder="what you want to add next?" name="todo">
     </form>

     <ul class="todos-list">
     </ul>
  </div>
`;

*/

/*
// 3) State Initialization and Submit Events
=====================================
app.innerHTML = `
  <div class="todos">
     <div class="todos-header">
       <h3 class="todos-title">Todo List</h3>
       <div>
        <p>You have <span class="todos-count"></span>items</p>
        <button class="todos-clear" style="display:none">Clear completed</button>
       </div>
     </div>

     <form class="todos-form" name="todos">
       <input type="text" placeholder="what you want to add next?" name="todo">
     </form>

     <ul class="todos-list">
     </ul>
  </div>
`;

const form = document.forms.todos;
const input = form.elements.todo;

// state management
let todos = []; // [{ label: 1, complete: true } , { label: 2, complete: false }]

// functions

// add functionality
function addTodo(event) {
  event.preventDefault();
  const label = input.value.trim();
  const complete = false;

  const todo = { label, complete };
  todos = [...todos, todo];
  //  console.log(todos);
  input.value = "";
}

// init
function initi() {
  form.addEventListener("submit", addTodo);
}

initi();

*/

/*
4) Rendering State with Template Literals
==============================

app.innerHTML = `
  <div class="todos">
     <div class="todos-header">
       <h3 class="todos-title">Todo List</h3>
       <div>
        <p>You have <span class="todos-count"></span>items</p>
        <button class="todos-clear" style="display:none">Clear completed</button>
       </div>
     </div>

     <form class="todos-form" name="todos">
       <input type="text" placeholder="what you want to add next?" name="todo">
     </form>

     <ul class="todos-list">
     </ul>
  </div>
`;

// selector
const root = document.querySelector(".todos");
const list = root.querySelector(".todos-list");

const form = document.forms.todos;
const input = form.elements.todo;

// state management
let todos = []; // [{ label: 1, complete: true } , { label: 2, complete: false }]

// functions

// render functinality
function renderTodos(todos) {
  // console.log(todos);
  let todosString = ``;

  // construct
  todos.forEach((todo, index) => {
    todosString += `
       <li id="${index}">
          <input type="checkbox">
          <span>${todo.label}</span>
          <button></button>
       </li>
     `;
  });

  //console.log(todosString);
  list.innerHTML = todosString;
}

// add functionality
function addTodo(event) {
  event.preventDefault();
  const label = input.value.trim();
  const complete = false;

  const todo = { label, complete };
  todos = [...todos, todo];
  //  console.log(todos);
  renderTodos(todos);
  input.value = "";
}

// init
function initi() {
  form.addEventListener("submit", addTodo);
}

initi();

*/

/*
5) Updating State via Event Delegation
=========================================
app.innerHTML = `
  <div class="todos">
     <div class="todos-header">
       <h3 class="todos-title">Todo List</h3>
       <div>
        <p>You have <span class="todos-count"></span> items</p>
        <button class="todos-clear" style="display:none">Clear completed</button>
       </div>
     </div>

     <form class="todos-form" name="todos">
       <input type="text" placeholder="what you want to add next?" name="todo">
     </form>

     <ul class="todos-list">
     </ul>
  </div>
`;

// selector
const root = document.querySelector(".todos");
const list = root.querySelector(".todos-list");
const count = root.querySelector(".todos-count");

const form = document.forms.todos;
const input = form.elements.todo;

// state management
let todos = []; // [{ label: 1, complete: false } , { label: 2, complete: false }]

// functions

// render functinality
function renderTodos(todos) {
  // console.log(todos);
  let todosString = ``;

  // construct
  todos.forEach((todo, index) => {
    todosString += `
       <li id="${index}" ${todo.complete ? "class='todos-complete'" : ""}>
          <input type="checkbox" ${todo.complete ? "checked" : ""}>
          <span>${todo.label}</span>
          <button></button>
       </li>
     `;
  });

  //console.log(todosString);
  list.innerHTML = todosString;
  count.innerText = todos.filter((todo) => !todo.complete).length;
}

// create/ add functionality
function addTodo(event) {
  event.preventDefault();
  const label = input.value.trim();
  const complete = false;

  const todo = { label, complete };
  todos = [...todos, todo];
  //  console.log(todos);
  renderTodos(todos);
  input.value = "";
}

// updateTodo
function updateTodo(event) {
  console.log(event.target);
  const id = Number(event.target.parentNode.getAttribute("id")); // 1
  const complete = event.target.checked; // true

  todos = todos.map((todo, index) => {
    if (id === index) {
      const updatedTodo = { ...todo, complete: complete };
      return updatedTodo;
    }
    return todo;
  });

  console.log(todos);
  renderTodos(todos);
}

// init
function initi() {
  form.addEventListener("submit", addTodo);
  list.addEventListener("change", updateTodo);
}

initi();

*/