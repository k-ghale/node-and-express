//  Read/Write Sync
const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first,second);

writeFileSync(
  "./content/results.txt",
  // `Hello World!`
  `The result of first and second : ${first},${second}`,
  { flag: "a" }
);
console.log("done with the task!");
console.log("starting with the next task!");
