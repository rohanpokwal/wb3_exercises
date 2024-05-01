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
  let rate = 0;
  let federalTaxAmount = 0;
  let message = "";

  if (withHoldCode < 0) {
    message = "The withhold Code must be above 0";
    return message;
  } else if (withHoldCode === 0) {
    rate = 0.23;
  } else if (withHoldCode === 1) {
    rate = 0.21;
  } else if (withHoldCode === 2) {
    rate = 0.195;
  } else if (withHoldCode === 3) {
    rate = 0.185;
  } else {
    rate = 0.18 - (withHoldCode - 4) * 0.005;
  }

  federalTaxAmount = grossPay * rate;
  return federalTaxAmount;
}

//Call the function

console.log(getFederalTax(1550, -1));
console.log(getFederalTax(1100, 6).toFixed(2));
