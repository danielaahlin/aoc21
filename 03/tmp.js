const fs = require("fs");

const file = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
