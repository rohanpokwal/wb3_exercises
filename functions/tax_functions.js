"use strict";

function getSocSecTax(grossPay) {
  let SocSecTax = (grossPay * 6.2) / 100;
  return SocSecTax;
}

function getMedicareTax(grossPay) {
  let medicareTax = (grossPay * 1.45) / 100;
  return medicareTax;
}

function getFederalTax(grossPay, withHoldCode) {
  switch (withHoldCode) {
    case 0:
      return grossPay * (23 / 100);
      break;
    case 1:
      return grossPay * (21 / 100);
      break;
    case 2:
      return grossPay * (19.5 / 100);
      break;
    case 3:
      return grossPay * (18.5 / 100);
      break;
    default:
      return grossPay * (18 / 100);
  }
}

//Call the function
console.log(getFederalTax(750, 0).toFixed(2));
console.log(getFederalTax(1550, 2).toFixed(2));
console.log(getFederalTax(1100, 6).toFixed(2));
