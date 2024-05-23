
// const {name1,name2}= require('./4-names.js');
// const printName = require('./5-utils');


// printName(name1);
// printName(name2);

const names = require("./4-names.js");
const printName = require("./5-utils");
const alternative = require("./6-alternative-flavours");

//from utils
printName(names.name1)
printName(names.name2)

//from 6-Alternative
console.log(alternative);
printName(alternative.items[0])
printName(alternative.items[1])
printName(alternative.singlePerson.person1)

//from mind-grenade
require('./7-mind-grenade.js')