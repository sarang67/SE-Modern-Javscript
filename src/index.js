import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
`;

/*
// private property and static class member

class Cart {
  // declare the members prposal of the property
  #items; // private property ---> can be used inside the class , not outside the class
  property1;

  // static property or utility property
  static name = "cart class";
  static methodfn() {
    console.log(
      "I am a static function , i can be used directly from the class name"
    );
  }

  constructor(items = []) {
    // inilization
    this.#items = Object.freeze(items);
    this.property1 = "inilized";
  }

  add(item) {
    const state = [...this.#items, item];
    this.#items = Object.freeze(state);
  }
  remove(id) {
    const state = this.#items.filter((item) => item.id !== id);
    this.#items = Object.freeze(state);
  }
}

const cart = new Cart();
const hotdog = { id: "🌭", name: "Posh Dog", price: 399 };
cart.add(hotdog);

console.log(cart);
//console.log(cart.#items);

console.log(Cart.name);
console.log(Cart.methodfn());

console.dir(Cart);

// class MathUtility

class MathUtility {
  static pi = 3.14;
  static inch = "some unit";
  static cm = "some unint";
}

console.dir(MathUtility);
*/

/*
/// setter and getter
=================
// getter setter
class Cart {
  #items;
  // static property or utility property

  constructor(items = []) {
    this.value = items; //  set value(items)
  }

  set value(items) {
    this.#items = Object.freeze(items);
  }

  get value() {
    return this.#items;
  }

  add(item) {
    const state = [...this.value, item]; // get value()
    this.value = Object.freeze(state); //set value(items)
  }

  remove(id) {
    const state = this.value.filter((item) => item.id !== id); // // get value()
    this.value = Object.freeze(state); // set value(items)
  }

  get count() {
    return this.#items.length;
  }

  dispalycount() {
    console.log(this.#items.length);
  }
}

const cart = new Cart();
const hotdog = { id: "🌭", name: "Posh Dog", price: 399 };
cart.add(hotdog);

console.log(cart.dispalycount());

console.log(cart.value); // get value();
console.log(cart.count); // get count()
============================================
*/

/*

// Inheritance : - one object can access the property of another object
class Cart {
  items;
  constructor(items = []) {
    this.value = items; //  set value(items)
  }

  set value(items) {
    this.items = Object.freeze(items);
  }

  get value() {
    return this.items;
  }

  add(item) {
    const state = [...this.value, item]; // get value()
    this.value = Object.freeze(state); //set value(items)
  }

  remove(id) {
    const state = this.value.filter((item) => item.id !== id); // // get value()
    this.value = Object.freeze(state); // set value(items)
  }
}

const cart = new Cart();

class Product {
  id;
  name;
  price;
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  get displayName() {
    return `${this.id} ${this.name}`;
  }
}

// food class inheriting Product class
class Food extends Product {
  // i will handle extra array
  constructor(id, name, price, extra) {
    // yu are calling parent class constructor
    super(id, name, price);
    this.extra = extra;
  }
}

// Drink class inheriting product class

class Drink extends Product {
  // i will handle extra string
  constructor(id, name, price, extra) {
    super(id, name, price);
    this.extra = extra;
  }
}

//const hotdog = { id: "🌭", name: "Posh Dog", price: 399 };
//const hotdog = new Product("🌭", "Posh Dog", 399, ["pickles"]);
//const burger = new Product("🍔", "super burger", 449, ["custored", "onion"]);

const hotdog = new Food("🌭", "Posh Dog", 399, ["pickles"]);
const burger = new Food("🍔", "super burger", 449, ["custored", "onion"]);

//const smallDrink = new Product("🥂", "small slurp", 199, "small");
//const mediumDrink = new Product("🍷", "medium slurp", 199, "medium");
//const largeDrink = new Product("🍾", "large slurp", 199, "large");

const smallDrink = new Drink("🥂", "small slurp", 199, "small");
const mediumDrink = new Drink("🍷", "medium slurp", 199, "medium");
const largeDrink = new Drink("🍾", "large slurp", 199, "large");

cart.add(hotdog);
cart.add(burger);
cart.add(smallDrink);
cart.add(mediumDrink);
cart.add(largeDrink);
console.log(cart);

console.log(hotdog);

console.log(hotdog instanceof Food);
console.log(hotdog instanceof Product);

//
console.log([] instanceof Array);
console.log([] instanceof Object);

*/