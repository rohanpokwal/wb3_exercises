"use strict";

let message = "Our corporate offices are located in Dallas";
console.log(message);

let newMessage = message.replace("Dallas", "Austin");
console.log(newMessage);

message = message.replace(/DALLAS/i, "dallas");
console.log(message);
