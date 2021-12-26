import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
   `;

// ***** Event and Event listners********

/*
// removehandler will work only named function ,  it wont with arrow and anonuymous function


We have three phase for our eevent propagate, first phase is capturing phase (event goes down to the element), 
second phase is target phase(wether the event reaches the target element), third phase is bubbling phase (whether the event up for the elemet)

buubling phase is better than capturing phase , so if we make the third option of addEventListner is false (which is by default) 
means we want to use bubbling phase , or suppose we  make true third parameter , we want to use capturing phase

// will stop propagation on next level // event.stopPropagation();

// will stop immidiate propagation as well , means only one event handler will call, other attached will be avoided
// event.stopImmediatePropagation();

*/


/*
   // 1) Adding Event listnets


app.innerHTML = `
<h1>JavaScript DOM</h1>
<button>Click me</button>
`;
const btn = document.querySelector("button");
console.dir(btn);

// first wat to listen or capture the event , and we should not use this way, this way is not recommneded
// event listning

// btn.onclick = function () {
//   console.log(1);
// };

// btn.onclick = function () {
//   console.log("Task 2");
// };

// btn.onclick = function () {
//   console.log("Task 3");
// };

// event listing using addEventListner // this is the recommened way to use
// node.addEventListener('event name' , 'function name')

// function handleClick() {
//   console.log("Task 1");
// }

// function handleClick2() {
//   console.log("Task 2");
// }

// btn.addEventListener("click", handleClick); // this pattern is always recommened
// btn.addEventListener("click", handleClick2);

// // using arrow function

// btn.addEventListener("click", () => {
//   console.log("task 3");
// });

// btn.addEventListener("click", function () {
//   console.log("task 4");
// });

function handleClick(ev) {
console.log(ev); // all the information about event
console.log(this); // this will be the same node , where addEventListener applied
console.log(ev.target);
console.log("click event");
}

btn.addEventListener("click", handleClick);

console.log("==============================");

btn.addEventListener("click", (ev) => {
console.log(ev);
// console.log(this);
console.log(ev.target);
console.log("click from arrow function");
});

*/

/*
// 2) Remove  Event listnets

app.innerHTML = `
<h1>JavaScript DOM</h1>
<button>Click me</button>
`;


const btn = document.querySelector("button");

function handleClickonlyOnce() {
console.log("clicked happened");
btn.removeEventListener("click", handleClickonlyOnce);
}

// attach the event listner
btn.addEventListener("click", handleClickonlyOnce);

// remove the eventlistner from the name function , they acnt be removed from arrow function

// setTimeout(() => {
//   btn.removeEventListener("click", handleClick);
// }, 2000);

btn.addEventListener("click", () => {
console.log("clicked happened from arrow");
});

*/

// 3) event-bubbling-capturing-propagation
/*

app.innerHTML = `
<h1>Javascript Basic</h1>
 <div class="one" style ="border:1px solid red; padding:20px">
    <div class="two" style ="border:1px solid green; padding:20px">
     <button> Click Me </button>
    </div>
 </div>
 `;



const one = document.querySelector(".one");
const two = document.querySelector(".two");
const btn = document.querySelector("button");

function handleClick(event) {
// this will stop propagation to the next level
// event.stopPropagation();

event.stopImmediatePropagation();
console.log(event.target); // target
}

// function handleClickOne(event) {
//   console.log(event.target); // target
// }

// function handleClickTwo(event) {
//   console.log(event.target); // target
// }

one.addEventListener("click", handleClick);
two.addEventListener("click", handleClick);
btn.addEventListener("click", handleClick);

btn.addEventListener("click", () => {
console.log("another handller");
});


*/
