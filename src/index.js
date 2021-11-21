import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;
// Function in Depth

/*
Notes:

//iife  Immediately Invoked Functions Expressions (IIFEs):=

IIFES(imediate invoked function execution statement ):- we can call our function efter just writing it immediatly, 
so the purpose of this we can hide or do data privacy using the concept of IIFE. iife is executed only once, there is no concept 
of reuse the purpose of iife only is data privacy of global execution contecxt so accidently our variable will not 
be changed because they are only scoped inside the iife.


(function(aValue){
	var a = aValue || 10;
	console.log(a);
})();


// function closure and functin scopes

 
closure, is the behaviour of function in javascript,
child function can access the property of it's parent function, when its parent execution context already poped up from the stack


// callback function

callback this is a design pattern you write function where another function is being called , 
 which you have passed in the parameter , in terms of api , setTimeout , click etc thy are taking af function and executing them call back 
 ,after finishing own works.


 
Callback function :- such function that are not being called by you , this is called by another function. 
means that function is passed in another function as a parameter , and that function will call them instead you, called callback function.

callback function:-  A function you give to another function, to be run when the other function is finished. 
so the function you will call (i.e invoke), 'Calls back' by calling the function you gave it when it finishes.	


*/

/*
//iife  Immediately Invoked Functions Expressions (IIFEs):=

(function () {
  console.log("hello");
})();

(function (myName) {
  console.log(`Hello ==> ${myName}`);
})("sarang");

(function (a, b) {
  console.log(a + b);
})(10, 30);



*/

/*
// function closure and functin scopes

// scope 1
const anotherID = '1234abcd';

funcion makeCarPartID(id){
	// scope 2
	funcion anotherFunction() {
		// scope 3
		const someId = 99
		console.log(id,anotherID , someId)
	}
}

makeCarPartID('x8ydsz12')

example 
=========

function add(no1, no2) {
  return function (no3 , no4) {
    console.log(no1 + no2 + no3 + no4);
  };
}

var addResult = add(10,20);
console.log(addResult);
addResult(30,40)


example 
=========

function test(){
  var one ="one"; 
  return function(){
    var two ="two";
    return function(){
      var three ="three";
      return function(){
        var four="four";
        console.log(one , two , three , four)
      }
    }
  }
}

test()()()();

try to understand above example and make more for your practice understand it and think about function return

example 
=========

function makeCarPartID(id) {
  const theId = `CAR_PART_${id}`;
  return function(name) {
    return `${theId}_${name.toUpperCase()}`;
  };
}

const carPartId = makeCarPartID('x8YdsZ12');
console.log(carPartId('Left Door'));
console.log(carPartId('Right Door'));
console.log(carPartId('Windscreen'));

const anotherCarPartId = makeCarPartID('7hs9zSaq0');
console.log(anotherCarPartId('Left Door'));
console.log(anotherCarPartId('Right Door'));
console.log(anotherCarPartId('Windscreen'));

example 
=========
function greet(whatToSay) {
  return function (name) {
    console.log(whatToSay + " " + name);
  };
}

greet("namastey")("sarang");

let NamasteyInSpanish = greet("hola");
NamasteyInSpanish("amar");


*/


/*
Callback functions
example
======

  function tellMeWhenDone(callback) {
	console.log(
	  "tellMeWhenDone , now callback function will be executed back to back"
	);
	callback();
  }

  tellMeWhenDone(function () {
	console.log("All Done .....");
  });

  tellMeWhenDone(function () {
	console.log("I am done....");
  });


  // example

  function getCarId(name, fn) {
  const theId = `${name}_xyz`;
  return fn(theId);
}

  const carId = getCarId("Maruti", function callBack(id) {
    return `car part ID : ${id}`;
  });

  console.log(carId);

  example
  =========
  setTimeout(()=> {
  console.log('i will print after 1 sec')
},1000)

  example
  =========
  setInterval(()=>{
  console.log('i will print after 1 sec')
},1000)

 example
  =========
[1,2,3,4,5].forEach((item , index)=>{
   console.log(item , index)
})

// for example here we can see our inbuilt function are taking acall back function 
means they will call means setTimout and setInterval and foreach will all what function i will pass , you an pass any function 
nameed function , arrow function , or expression , short function is mostly preferred
*/