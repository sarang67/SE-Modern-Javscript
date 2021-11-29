import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Javascript Basic</h1>
 
`;

/*
  foreach((p1,p2)=>{//your logic}) -expect a call back , this does not return anything
  p1 --> item
  p2 --> index

  map((p1,p2)=>{//your logic}) --> this will return a brand new array for each mapped item
  
  filter((p1,p2)=>{//your logic}) --> will return brand new array for filtered items

  reduce((p1,p2)=>{//your logic},default value);  // reduce to multiple value to a single value
  // prev--> accuumulative value, after doing operation on last item this will return final result 
  
  find((p1,p2)=>{//your logic}) ---> when cb function return true it will return that item , so its upt to use as per our logiv when we need to return true ,

  findIndex((p1,p2)=>{//your logic}) --> same funda like find , but it will return a index , in case not found it returns -1
  */

/*
//1) foreach ,

  [1, 2, 3, 4].forEach((item, index) => {
    //  console.log(item * 2);
  });
  
  const items = [
    { id: "🍔", name: "super burger", price: 399 },
    { id: "🍟", name: "Jumbo fries", price: 199 },
    { id: "🍾", name: "big slurp", price: 299 },
  ];
  
  items.forEach((item, index) => {
    // console.log(item);
    app.innerHTML += ` <li> Item no ${index + 1} ${item.id} ${item.name} -- ${
      item.price
    } Rs</li>`;
    console.log(app.innerHTML);
  });
  
  */

/*
  // map
  
  const fiftyperOffBurger = items.map((item, index) => {
    if (item.id === "🍔") {
      return { id: item.id, name: item.name, price: item.price / 2 };
    }
    return item;
  });
  
  console.log(fiftyperOffBurger);
  
  console.log("===============");
  
  const mapped = [1, 2, 3, 4].map((item, index) => {
    return "😍";
  });
  
  console.log(mapped);
  
  
 */

/*
  // filter
  const items = [
    { id: "🍔", name: "super burger", price: 399 },
    { id: "🍟", name: "Jumbo fries", price: 199 },
    { id: "🍾", name: "big slurp", price: 299 },
  ];
  
  console.log(items);
  
  const expensiveItems = items.filter((item) => {
    if (item.price > 200) {
      return true;
    }
  });
  
  console.log(expensiveItems);
  
  console.log([true, true, false, false, true].filter((item) => item === true));
  
  console.log(
    ["sarang", "rishi", "sandeep", "vassu", "yogi"].filter(
      (item) => item.length > 5
    )
  );
  
  */
/*
  // reduce
  const items = [
    { id: "🍔", name: "super burger", price: 399 },
    { id: "🍟", name: "Jumbo fries", price: 199 },
    { id: "🍾", name: "big slurp", price: 299 },
  ];
  
  const menutotal = items.reduce((prev, next) => {
    console.log(prev, next);
    return prev + next.price;
  }, 0);
  
  console.log(menutotal);
  
  // const total = [1, 2, 3, 4, 5, 6].reduce((prev, next) => {
  //   console.log(prev, next);
  //   return prev + next;
  // }, 0);
  
  // console.log(total);
  
 */

/*
   // find / findindex

  const items = [
    { id: "🍔", name: "super burger", price: 399 },
    { id: "🍟", name: "Jumbo fries", price: 199 },
    { id: "🍾", name: "big slurp", price: 299 },
  ];
  
  const friesFound = items.find((item, index) => {
    if (item.id === "🍟") {
      return true;
    }
  });
  
  if (friesFound) {
    console.log(
      `fries is avaibvale in menu and its price id ${friesFound.price}`
    );
  } else {
    console.log("not found");
  }
  
  const friesFoundIndex = items.findIndex((item, index) => {
    if (item.id === "🍟") {
      return true;
    }
  });
  
  console.log("===>", friesFoundIndex);
  */
