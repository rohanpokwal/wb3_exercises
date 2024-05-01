"use strict";

function convertFtoC(someTemp) {
  let fahrenheit = someTemp;
  let celcius = ((fahrenheit - 32) * 5) / 9;
  return celcius;
}

console.log("Converting 212 from F to C: " + convertFtoC(212).toFixed(2));
console.log("Converting 90 from F to C: " + convertFtoC(90).toFixed(2));
console.log("Converting 72 from F to C: " + convertFtoC(72).toFixed(2));
console.log("Converting 32 from F to C: " + convertFtoC(32).toFixed(2));
console.log("Converting 0 from F to C: " + convertFtoC(0).toFixed(2));
console.log("Converting -40 from F to C: " + convertFtoC(-40).toFixed(2));
