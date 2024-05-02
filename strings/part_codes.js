"use strict";

//get the supplier code
function getSupplier(code) {
  let firstDivisorValue = code.indexOf(":");
  let supplierCode = code.substring(0, firstDivisorValue);
  return supplierCode;
}

//get the product number
function getProductNumber(code) {
  let firstDivisorValue = code.indexOf(":");
  let secondDivisorValue = code.indexOf("-");
  let supplierCode = code.substring(firstDivisorValue + 1, secondDivisorValue);
  return supplierCode;
}

//get the size
function getSize(code) {
  let secondDivisorValue = code.indexOf("-");
  let supplierCode = code.substring(secondDivisorValue + 1);
  return supplierCode;
}

//User will give the code
let code = "DI:12345-M";

//print the result
console.log(`
Supplier Code: ${getSupplier(code).trim()}
Product Number: ${getProductNumber(code).trim()}
Size: ${getSize(code).trim()}
`);
