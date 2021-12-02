const fs = require("fs");

const file = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let commands = { forward: 0, down: 0, up: 0 };
file.map(item => {
  const splittedCommand = item.split(" ");
  commands[splittedCommand[0]] += parseInt(splittedCommand[1]);
});

console.log("Part 1: ", commands.forward * (commands.down - commands.up));

commands = { forward: 0, down: 0, up: 0, depth: 0 };
file.map(item => {
  const splittedCommand = item.split(" ");
  commands[splittedCommand[0]] += parseInt(splittedCommand[1]);
  if (splittedCommand[0] === "forward") {
    commands.depth +=
      parseInt(splittedCommand[1]) * (commands.down - commands.up);
  }
});

console.log("Part 2: ", commands.forward * commands.depth);
