const fs = require("fs");

const file = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const positions = file[0].split("").map(_ => ({ "0": 0, "1": 0 }));
file.map(item => {
  const bits = item.split("");
  bits.map((b, i) => (positions[i][b] += 1));
});

const gamma = positions
  .map(bit => (bit["0"] > bit["1"] ? "0" : "1"))
  .reduce((a, b) => a + b, "");
const epsilon = positions
  .map(bit => (bit["0"] < bit["1"] ? "0" : "1"))
  .reduce((a, b) => a + b, "");

console.log("Part 1: ", parseInt(gamma, 2) * parseInt(epsilon, 2));

// in - list of bits, index - what index to look at
function filterInput(inp, index, filterPos, oxygen) {
  inp.map(item => {
    const bits = item.split("");
    bits.map((b, i) => (filterPos[i][b] += 1));
  });

  const mostCommon = filterPos[index]["0"] > filterPos[index]["1"] ? "0" : "1";

  const filterValues = oxygen
    ? inp.filter(bits => bits.split("")[index] === mostCommon)
    : inp.filter(bits => bits.split("")[index] !== mostCommon);

  return filterValues;
}

function oxygen(inputList, nbr, ox) {
  if (inputList.length < 2 || nbr > inputList[0].length) {
    return inputList;
  } else {
    return oxygen(
      filterInput(
        inputList,
        nbr,
        inputList[0].split("").map(_ => ({ "0": 0, "1": 0 })),
        ox
      ),
      nbr + 1,
      ox
    );
  }
}

const ox = oxygen(file, 0, true).reduce((a, b) => a + b, "");
const co2 = oxygen(file, 0, false).reduce((a, b) => a + b, "");

console.log("Part 2: ", parseInt(ox, 2) * parseInt(co2, 2));
