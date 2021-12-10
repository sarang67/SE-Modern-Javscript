import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

/*

1 Procedural Programming
=========================
Prcesural programming means no structure , no immutability maintain , no encapsulation no pattern , just whatever your need write accordingly.


02 Object Literals and Encapsulation
=======================================
we can make state , and behaviour wrap one place , which is too easy to understand rather than procedure programming.

03 Object Literals and Factory Functions (abstraction , and reusability)
==========================================
A factory function is a pattern which allow us to construct and return a newly created object. it deoes not use new keyword like  class or function constructor , but still this gives us every time brand new object.

// problem of muatbality , in this factory  we are getting reusablity ,
//and abstraction but the problem is our state can be mutated outside
// that is the big problem there. our state should not be changed from outside


04  Frozen State and Immutable Patterns
======================================
Here we have solved the problem, where anyonce can not mutate out state , yes here any one can assign any new item , but can not cange existing state means can not be mutated.

*/

/*
// procedural programming

// const cart = [];

// const addToCart = (item) => {
//   cart.push(item);
// };

// const removeFromCart = (id) => {
//   const index = cart.findIndex((item) => {
//     return item.id === id;
//   });

//   cart.splice(index, 1);
// };

// let hotDog = { id: "🌭", name: "hot dog", price: 399 };

// addToCart(hotDog);

// setTimeout(() => {
//   removeFromCart("🌭");
//   console.log(cart);
// }, 5000);

// console.log(cart);
*/

/*
//2) object literal and ecncapsilation with OOPs
const cart = {
  items: [],

  add(item) {
    this.items.push(item);
  },

  remove(id) {
    const index = this.items.findIndex((item) => {
      return item.id === id;
    });

    this.items.splice(index, 1);
  },
};

let hotDog = { id: "🌭", name: "hot dog", price: 399 };
let pizza = { id: "🍕", name: "cheese pizza", price: 999 };

cart.add(hotDog);
cart.add(pizza);
console.log(cart);

setTimeout(() => {
  cart.remove("🍕");
  console.log(cart);
}, 3000);

*/

/*
// 3) object literal and factory functions for the abstraction , and reusability

// const cart = {
//   items: [],

//   add(item) {
//     this.items.push(item);
//   },

//   remove(id) {
//     const index = this.items.findIndex((item) => {
//       return item.id === id;
//     });

//     this.items.splice(index, 1);
//   },
// };

// let hotDog = { id: "🌭", name: "hot dog", price: 399 };

// let shooes = { id: "👞", name: "bata", price: 30 - 00 };

// let tshirt = { id: "👕", name: "t shirt", price: 4000 };

// cart.add(hotDog);
// console.log(cart);

const createCart = (items = []) => {
  return {
    items, // items:items

    add(item) {
      this.items.push(item);
    },

    remove(id) {
      const index = this.items.findIndex((item) => {
        return item.id === id;
      });

      this.items.splice(index, 1);
    },
  };
};

let minicart = createCart([
  { id: "🌭", name: "hot dog", price: 399 },
  { id: "🍕", name: "cheese pizaa", price: 1000 },
]);

minicart.items = [];
console.log(minicart);

*/

/*

6) frozen state and immutable patterns

const createCart = (items = []) => {
  return {
    items: Object.freeze(items),
    //items,

    add(item) {
      //this.items.push(item);
      const state = [...items, item];
      this.items = Object.freeze(state);
    },

    remove(id) {
      // const index = this.items.findIndex((item) => {
      //   return item.id === id;
      // });

      // this.items.splice(index, 1);

      const state = this.items.filter((item) => item.id !== id);
      this.items = Object.freeze(state);
    },
  };
};

let minicart = createCart([{ id: "🌭", name: "hot dog", price: 399 }]);

//minicart.items.push("rishikesh");

minicart.add({ id: "🍕", name: "cheese pizaa", price: 1000 });

minicart.remove("🌭");

*/
