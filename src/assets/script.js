"use strict";

let baseURL = "https://restcountrieds.com/v2";

// ------------------ DATA FETCHING ------------------

async function getCountries() {
  try {
    const response = await fetch(`${baseURL}/all`);
    const result = await response.json();
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("Done fetching countries");
  }
}

getCountries() 


// ------------------ DATA RENDER ------------------


