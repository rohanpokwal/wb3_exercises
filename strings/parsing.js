"use strict";

function parseAndDisplayName(someName) {
  //create a variable to hold the first name
  let fullName = someName;

  //find the position of the first space
  let spacePosition = fullName.indexOf(" ");

  //create variable for the first and last name

  //for the first name we start at position 0 and goto the space
  //since it doesnot inclde tje cjatacter in tehe last oposition, we get the first name
  let firstName = fullName.substring(0, spacePosition);

  //if we start at the space position and do not supply and ending position, it gives us the characters from the space until the end
  //since we dont want the space, we add to the starting to move us past the space
  let lastName = fullName.substring(spacePosition + 1, fullName.length);

  console.log(`
Name: ${fullName}
First Name: ${firstName}
Last Name: ${lastName}`);
}

parseAndDisplayName("Rohan Pokwal");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Gautam Sidhartha");
