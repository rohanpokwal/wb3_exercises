"use strict";

function displayReceipt(totalDue, amountPaid) {
  if (amountPaid < totalDue) {
    let changeDue = amountPaid - totalDue;
    console.log("Total Due: ", totalDue);
    console.log("Amount Paid: ", amountPaid);
    console.log("You still owe $", Math.abs(changeDue.toFixed(2)));
  } else {
    let changeDue = amountPaid - totalDue;
    console.log("Total Due: ", totalDue);
    console.log("Amount Paid: ", amountPaid);
    console.log(
      "Congratulations, You have Paid the Bill and your Change is $",
      changeDue.toFixed(2)
    );
  }
}

displayReceipt(100, 100);
