"use strict";

function parseAndDisplayName(someName) {
  //create a variable to hold the first name
  let fullName = someName;

  //find the position of the first space
  let spacePosition = fullName.indexOf(" ");
  let lastSpacePosition = fullName.lastIndexOf(" ");
  let firstName = fullName.substring(0, spacePosition);
  let lastName = fullName.substring(spacePosition + 1);
  let middleName = fullName.substring(lastSpacePosition, fullName.length);

  if (spacePosition === -1) {
    console.log(`
    Name: ${fullName}
    Only Name: ${fullName}`);
  } else if (spacePosition) {
    console.log(`
    Name: ${fullName}
    First Name: ${firstName}
    Last Name: ${lastName}`);
  } else if (spacePosition >= 0 && lastSpacePosition >= 0) {
    console.log(`
    Name: ${fullName}
    First Name: ${firstName}
    Middle Name: ${middleName}
    Last Name: ${lastName}`);
  }
}

parseAndDisplayName("Rohan");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Gautam Bahadur Sidhartha");