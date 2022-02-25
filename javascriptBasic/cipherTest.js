//node cipherTest.js로 실행

var chipher = require("./cipher");
console.log(chipher.encrypt(3, "hi how are you i am fine")); //-> kl krz duh brx l dp ilqh
console.log(chipher.decrypt(3, "kl krz duh brx l dp ilqh")); //-> hi how are you i am fine

//console.log(chipher.encrypt(5, "hi how are you i am fine")); //-> mn mtb fwj dtz n fr knsj
//console.log(chipher.decrypt(5, "mn mtb fwj dtz n fr knsj")); //-> hi how are you i am fine