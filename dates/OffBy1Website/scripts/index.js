"use strict";
console.log("I am working");

window.onload = function () {
  let theButton = document.querySelector("#theButton");
  theButton.addEventListener("click", displayTime);
};

function displayTime() {
  console.log("You clicked the button");
  let theDate = document.querySelector("#theDate");
  let theParagraph = document.querySelector("#theParagraph");
  console.log(theDate.value);

  let generatedDate = new Date(theDate.value);
  theParagraph.innerHTML = generatedDate.toLocaleString();
}

let theDate = new Date();

//Just get the Year
console.log(theDate.getFullYear());
console.log(theDate.getMonth());
console.log(theDate.getHours());
