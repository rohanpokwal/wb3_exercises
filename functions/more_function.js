"use strict";

function displayMailingLabel(name, address, city, states, zip) {
  console.log(name);
  console.log(address);
  console.log(`${city}, ${states} ${zip}`);
}

//invoking the function
displayMailingLabel(
  "Rohan Pokwal",
  "1234 Rolling Lane",
  "Keller",
  "Texas",
  "75231"
);
