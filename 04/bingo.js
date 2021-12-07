const fs = require("fs");

const file = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

console.log(file);
const bingoNumbers = file[0];

console.log(bingoNumbers);

/*
[
[]
[]
[]
[]
[]
]
*/
