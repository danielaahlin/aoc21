const fs = require("fs");

const file = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n");

let inc = 0;
let prevVal = file[0];

file.map((depthVal, i) => {
  if (parseInt(prevVal) < parseInt(depthVal)) {
    inc += 1;
  }
  prevVal = depthVal;
});

console.log("Part 1: ", inc);

const newInput = file
  .map((f, i) => {
    if (i + 3 < file.length) {
      return file
        .slice(i, i + 3)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
  })
  .filter(Boolean);

let inc2 = 0;
prevVal = newInput[0];

newInput.map((depthVal, i) => {
  if (parseInt(prevVal) < parseInt(depthVal)) {
    inc2 += 1;
  }
  prevVal = depthVal;
});

console.log("Part 2: ", inc2);
