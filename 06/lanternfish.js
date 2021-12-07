const fs = require("fs");

const file = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let lanternfish = file[0].split(",").map(c => parseInt(c));

for (let day = 0; day < 80; day++) {
  const updateLanternfish = lanternfish.map(fish => {
    if (fish === 0) {
      return [6, 8];
    }
    return fish - 1;
  });

  lanternfish = updateLanternfish.flat();
}

console.log("Part 1:", lanternfish.length);
