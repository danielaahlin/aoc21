const fs = require("fs");

const file = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const crabs = file[0].split(",").map(c => parseInt(c));

const crabMax = Math.max(...crabs);

let minSum = 1000000;

for (let i = 0; i < crabMax; i++) {
  let tmpSum = 0;
  crabs.forEach(c => {
    if (tmpSum > minSum) {
      return;
    }
    tmpSum += Math.abs(c - i);
  });
  if (tmpSum < minSum) {
    minSum = tmpSum;
  }
}

console.log("Part 1: ", minSum);

function sumVal(val) {
  if (val === 0) {
    return val;
  } else {
    return val + sumVal(val - 1);
  }
}

minSum = 1000000000000000000;

for (let i = 0; i < crabMax; i++) {
  let tmpSum = 0;
  crabs.forEach(c => {
    if (tmpSum > minSum) {
      return;
    }
    tmpSum += sumVal(Math.abs(c - i));
  });
  if (tmpSum < minSum) {
    minSum = tmpSum;
  }
}

console.log("Part 2: ", minSum);
