//  Read/Write Async
const { readFile, writeFile } = require("fs");

console.log('start');
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/results-async.txt",
      `This is the result of first and second : ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Done with this task!');
      }
    );
  });
});
console.log('starting the next task!');
