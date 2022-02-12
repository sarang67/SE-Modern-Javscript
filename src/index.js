import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
    <main class="container">
       <div class="countries"></div>
    </main>
`;

// chaining promise

const countriesContainer = document.querySelector(".countries");

function renderCountry(data, clasName = "") {
  const { name, region, flag, population, languages, currencies } = data;

  const html = `
<article class="country ${clasName}">
  <img class="country__img" src="${flag}" />
  <div class="country__data">
    <h3 class="country__name">${name}</h3>
    <h4 class="country__region">${region}</h4>
    <p class="country__row"><span>👫${population}</span>POP people</p>
    <p class="country__row"><span>🗣️ ${languages[0].name}</span>LANG</p>
    <p class="country__row"><span>💰 ${currencies[0].name}</span>CUR</p>
  </div>
</article>
`;

  //console.log(html);
  countriesContainer.innerHTML += html;
  countriesContainer.style.opacity = 1;
}

const getCountrydata = function (country) {
  const request = fetch(`https://restcountries.com/v2/name/${country}`);
  console.log(request); // pending

  /*
    1) panding
    2) fullfilled ---> A) succes --> then
                  ---> B) rejecty --> catch
  */

  request
    .then((res) => {
      // console.log(res);
      // for finding the real data
      return res.json();
      //return "sarang jain";
    })
    .then((data) => {
      console.log(data[0]);
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) {
        return;
      }

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      renderCountry(data, "neighbour");
    })
    .catch((errData) => {
      console.log(errData);
    });
};

getCountrydata("portugal");

/*

Asynchronous JavaScript, AJAX and APIs
==============================================
our Javascript executes line by line , so during execution some statament are blocking statement means they block our code to execute until thay itself executes, so such blocking statament executes as asynchronusly . means they executes behind the scene for example setTimeout . setInterval , xhr call , event . so javascript run such bloking task(which depends on other thing) behid the scene . and we attach event to to bloking task , when the task is completed our attach event handler will be called. for example

1) our in programme we changed the src attribute url , now this may take time as per image size , now what will happen javascript executes this behind the scene, asynchronus behaviour and we attach the even handler, so once our image get load our even handler will be executed.

2) we make xhr request , when we send the xhr request , and attach event handler so as per javascript execution javascript send the request and wont wait for complete and will execute next statement, and now once background process complete our xhr event handler will be called.

//steps
1)  craete request usnig new XMLHttpRequest()
2) open request req.open('get or any method', 'url')
3) send the request req.send()
4) use the addEventListner for load request , so when your result will come you will get response


Welcome to Callback Hell
========================

 in this example we want to showing country information , so that is fine , but what happened we need toshow countrey's border country , then our call will be sequential call suppose we are shaowing india , and india's response we are getting border bangladesh , now we are showing bangladesh a, and bangladesh border we are getting bhutan , now means our request will be depend on each other means this is called sequentail call and when we have lot of sequnetial call we have callback hell and after sometime we itself unable to understand what is happening in code. so the solution came for callback hell is promise object. here we can make promise chain which wll always give better look and devloper will easily understand how chaining is working.

 Promises and the Fetch API
=================================
Promise is ES6 feature to handle asynchronus behaviour , and fetch is the new api introduced in es6 which is used for xhr request, fetch will always return a promise type of object.

bet defination of promise is promise is the container object which keep the result of future , so this result could be success or reject , and when reult will be successful our then method will be called which take a callback, or when reject in future our error catch function will be called.


const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request); // pending


  1) panding
  2) fullfilled ---> A) succes --> then
                ---> B) rejecty --> catch



*/

/*

2) Our First AJAX Call_ XMLHttpRequest old pattern
===================================================
import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
    <main class="container">
       <div class="countries"></div>
    </main>
`;

const countriesContainer = document.querySelector(".countries");

function getCountryData(country) {
  // create a request
  const request = new XMLHttpRequest();
  // open a request
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  // send a request
  request.send();
  //console.log("===>", request.responseText);

  request.addEventListener("load", function () {
    //console.log("result came");
    //console.log(request.responseText);
    //console.log(JSON.parse(request.responseText));

    const data = JSON.parse(request.responseText)[0];
    console.log(data);

    const { name, region, flag, population, languages, currencies } = data;

    const html = `
  <article class="country">
    <img class="country__img" src="${flag}" />
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row"><span>👫${population}</span>POP people</p>
      <p class="country__row"><span>🗣️ ${languages[0].name}</span>LANG</p>
      <p class="country__row"><span>💰 ${currencies[0].name}</span>CUR</p>
    </div>
  </article>
`;

    console.log(html);
    countriesContainer.innerHTML += html;
    countriesContainer.style.opacity = 1;
  });
}

getCountryData("portugal");
getCountryData("usa");
getCountryData("germany");

*/

/*
=====================================================
// 4) Welcome to Callback Hell problem

import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
    <main class="container">
       <div class="countries"></div>
    </main>
`;

const countriesContainer = document.querySelector(".countries");

// 2) renderuing view

function renderCountry(data, clasName = "") {
  const { name, region, flag, population, languages, currencies } = data;

  const html = `
<article class="country ${clasName}">
  <img class="country__img" src="${flag}" />
  <div class="country__data">
    <h3 class="country__name">${name}</h3>
    <h4 class="country__region">${region}</h4>
    <p class="country__row"><span>👫${population}</span>POP people</p>
    <p class="country__row"><span>🗣️ ${languages[0].name}</span>LANG</p>
    <p class="country__row"><span>💰 ${currencies[0].name}</span>CUR</p>
  </div>
</article>
`;

  console.log(html);
  countriesContainer.innerHTML += html;
  countriesContainer.style.opacity = 1;
}

// 1) get country
function getCountryData(country) {
  // create a request ---> ajax call for country 1
  const request = new XMLHttpRequest();
  // open a request  --> call for country 1
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  // send a request --> call for country 1
  request.send();

  // call back functiomn --> call for country 1
  request.addEventListener("load", function () {
    const data = JSON.parse(request.responseText)[0];
    console.log(data);
    renderCountry(data);

    // ajax call 2 for neighbour country
    // create a request2 ---> ajax call for country 1 neighbour
    const request2 = new XMLHttpRequest();
    const neighbour = data.borders[0];

    if (!neighbour) {
      return;
    }

    // open a request  --> call for country 1 neighbour
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);

    // send a request --> call for country 1 neighbour
    request2.send();

    request2.addEventListener("load", function () {
      const data = JSON.parse(request2.responseText);
      renderCountry(data, "neighbour");
    });
  });
}

getCountryData("portugal");
// getCountryData("usa");
// getCountryData("germany");

// callback hell problem
// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

*/

/*
=================================================================
// 6) Consuming Promises

const countriesContainer = document.querySelector(".countries");

function renderCountry(data, clasName = "") {
  const { name, region, flag, population, languages, currencies } = data;

  const html = `
<article class="country ${clasName}">
  <img class="country__img" src="${flag}" />
  <div class="country__data">
    <h3 class="country__name">${name}</h3>
    <h4 class="country__region">${region}</h4>
    <p class="country__row"><span>👫${population}</span>POP people</p>
    <p class="country__row"><span>🗣️ ${languages[0].name}</span>LANG</p>
    <p class="country__row"><span>💰 ${currencies[0].name}</span>CUR</p>
  </div>
</article>
`;

  //console.log(html);
  countriesContainer.innerHTML += html;
  countriesContainer.style.opacity = 1;
}

  .then((res) => {
    console.log(res);
    // for finding the real data
    return res.json();
    //return "sarang jain";
  })
  .then((data) => {
    console.log(data[0]);
    renderCountry(data[0]);
  })
  .catch((errData) => {
    console.log(errData);
  });

  */

/*
===============================
// 7) Chaining Promises:- for resolve callbacl hell issue

const countriesContainer = document.querySelector(".countries");

function renderCountry(data, clasName = "") {
  const { name, region, flag, population, languages, currencies } = data;

  const html = `
<article class="country ${clasName}">
  <img class="country__img" src="${flag}" />
  <div class="country__data">
    <h3 class="country__name">${name}</h3>
    <h4 class="country__region">${region}</h4>
    <p class="country__row"><span>👫${population}</span>POP people</p>
    <p class="country__row"><span>🗣️ ${languages[0].name}</span>LANG</p>
    <p class="country__row"><span>💰 ${currencies[0].name}</span>CUR</p>
  </div>
</article>
`;

  //console.log(html);
  countriesContainer.innerHTML += html;
  countriesContainer.style.opacity = 1;
}


  request
    .then((res) => {
      // console.log(res);
      // for finding the real data
      return res.json();
      //return "sarang jain";
    })
    .then((data) => {
      console.log(data[0]);
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) {
        return;
      }

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      renderCountry(data, "neighbour");
    })
    .catch((errData) => {
      console.log(errData);
    });
};

getCountrydata("portugal");
*/
