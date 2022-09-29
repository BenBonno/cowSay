const tintin = require("./information.js")
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `I'm coding in ${tintin.campusName} and i like it!`,
    e: "xX",
    T: "||"
}));
