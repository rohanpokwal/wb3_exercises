"use strict";

function parseAndDisplayName(someName) {
  //create a variable to hold the first name
  let fullName = someName;

  //find the position of the first space
  let spacePosition = fullName.indexOf(" ");
  let lastSpacePosition = fullName.lastIndexOf(" ");
  let firstName = fullName.substring(0, spacePosition);
  let middleName = fullName.substring(spacePosition + 1, lastSpacePosition);
  let lastName = fullName.substring(lastSpacePosition + 1);

  if (spacePosition === -1) {
    console.log(`
        Name: ${fullName}
        Only Name: ${fullName}`);
  } else {
    if (spacePosition != lastSpacePosition) {
      console.log(`
        Name: ${fullName}
        First Name: ${firstName}
        Middle Name: ${middleName}
        Last Name: ${lastName}`);
    } else {
      console.log(`
        Name: ${fullName}
        First Name: ${firstName}
        Last Name: ${lastName}`);
    }
  }
}

parseAndDisplayName("Marie");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Mario David Santos");
