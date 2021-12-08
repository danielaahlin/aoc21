const fs = require("fs");

const file = fs
  .readFileSync("easyexample.txt")
  .toString()
  .trim()
  .split("\n");

console.log(file);
const outputValues = file.map(f => f.split("|")[1].trim());
console.log(outputValues);

/*
nummber - längd
1 - 2
4 - 4
7 - 3
8 - 7
*/
const segementLengths = {
  2: 0, // 1
  3: 0, // 7
  4: 0, // 4
  7: 0 // 8
};

outputValues.forEach(output => {
  const splitOutput = output.split(" ");

  splitOutput.map(s => {
    if (Object.keys(segementLengths).includes(s.length.toString())) {
      segementLengths[s.length] += 1;
    }
  });
});

console.log(
  "Part 1: ",
  Object.values(segementLengths).reduce((a, b) => a + b, 0)
);

const segments = {
  acedgfb: 8,
  cdfbe: 5,
  gcdfa: 2,
  fbcad: 3,
  dab: 7,
  cefabd: 9,
  cdfgeb: 6,
  eafb: 4,
  cagedb: 0,
  ab: 1
};

const sortedSegments = {};
Object.keys(segments).map(
  s => (sortedSegments[[...s].sort().join("")] = segments[s])
);

// console.log(sortedSegments);

const outputs = [];

const inputValues = file.map(f => f.split("|")[0].trim());
// console.log(inputValues);

function segmentFunction(inputVal) {
  const seg = {
    top: "",
    bot: "",
    mid: "",
    topL: "",
    topR: "",
    botL: "",
    botR: ""
  };

  const inputs = inputVal[0].split(" ").sort((a, b) => a.length - b.length);
  console.log(inputs);

  const one = inputs[0].split("");
  const seven = inputs[1].split("");
  const four = inputs[2].split("");
  console.log(one, seven, four);

  seven.map(s => (!one.includes(s) ? (seg.top = s) : undefined));

  console.log(seg);
}

segmentFunction(inputValues);

// outputValues.forEach((output, i) => {
//   const splitOutput = output.split(" ");
//   let buildOutput = [];
//
//   const sortedSegments = {};
//   Object.keys(segments).map(
//     s => (sortedSegments[[...s].sort().join("")] = segments[s])
//   );
//
//   splitOutput.map(s => {
//     console.log([...s].sort().join(""));
//     buildOutput.push(sortedSegments[[...s].sort().join("")]);
//   });
//   console.log(buildOutput);
// });
