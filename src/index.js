import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
    <main class="container">
       <div class="countries"></div>
    </main>
`;

// async and await

// async function whereIam() {
//   // always return a promise
// }

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

const whereAmI = async (country) => {
  const request = await fetch(`https://restcountries.com/v2/name/${country}`);
  console.log(request);

  const data = await request.json();
  console.log(data);

  renderCountry(data[0]);

  const neighbour = data[0].borders[0];
  const request2 = await fetch(
    `https://restcountries.com/v2/alpha/${neighbour}`
  );

  const data2 = await request2.json();
  console.log(data2);

  renderCountry(data2, "neighbour");
};

whereAmI("portugal");

// Promise.resolve("success").then((data) => console.log(data));

// Promise.reject("errrrrrr is there").catch((data) => console.log(data));
/*
1) await statemant cant be written outside of async fn
2) async function if return something that would be promise object
3) if await statemanet does not resolve succefully next line will not be executed

*/

// ********************************************************************************

/*
1) revison
2) Handling Rejected Promises
3) Throwing Errors Manually --> tell them theory
4) Building a Simple Promise (90% time we consume , but sometime we get ooprtunity to build)
5) Consuming Promises with Async_Await

*/

/*
const countriesContainer = document.querySelector(".countries");
const btn = document.querySelector(".btn-country");

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
  // countriesContainer.style.opacity = 1;
}

function renderError(message) {
  countriesContainer.innerHTML += message;
  // countriesContainer.style.opacity = 1;
}

const getCountrydata = function (country) {
  const request = fetch(`https://restcountries.com/v2/name/${country}`);
  console.log(request); // pending

  // consume the promise
  request
    .then((res) => {
      console.log(res);
      return res.json(); // promise
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
    .catch((err) => {
      // this err is a real js object like create from new Error('ane message')
      console.log(err, err.message);
      renderError(`Something went wrong**** ${err.message}...please try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", () => {
  getCountrydata("portugal");
});

*/
/*
======================


import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
    <main class="container">
       <div class="countries"></div>
       <button class="btn-country">Where I am </button>
    </main>
`;

// building a simple promise


// new Promise() // pending

//new Promise((resolve , reject)=>{
//  resolve() ---> success
//  reject() ---> error
// }) // pending


// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log("Lotter is going on");
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve("You win the lottery 💰");
//     } else {
//       reject(new Error("You loose the lottry"));
//     }
//   }, 5000);
// });

// lotteryPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err, err.message);
//   })
//   .finally(() => {
//     console.log("i will always work");
//   });

// promisifying

const wait = (second) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, second * 1000);
  });
};

wait(1)
  .then((data) => {
    console.log("1 second passed");
    return wait(1);
  })
  .then((data) => {
    console.log("1 second passed");
    return wait(1);
  })
  .then((data) => {
    console.log("1 second passed");
  });

*/
/*
===================
import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
    <main class="container">
       <div class="countries"></div>
    </main>
`;

// async and await

// async function whereIam() {
//   // always return a promise
// }

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

const whereAmI = async (country) => {
  const request = await fetch(`https://restcountries.com/v2/name/${country}`);
  console.log(request);

  const data = await request.json();
  console.log(data);

  renderCountry(data[0]);

  const neighbour = data[0].borders[0];
  const request2 = await fetch(
    `https://restcountries.com/v2/alpha/${neighbour}`
  );

  const data2 = await request2.json();
  console.log(data2);

  renderCountry(data2, "neighbour");
};

whereAmI("portugal");

*/

// promise utility function

// Promise.resolve("success").then((data) => console.log(data));

// Promise.reject("errrrrrr is there").catch((data) => console.log(data));
/*
1) await statemant cant be written outside of async fn
2) async function if return something that would be promise object
3) if await statemanet does not resolve succefully next line will not be executed

*/
