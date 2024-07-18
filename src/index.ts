import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("入力して", (line) => {
  console.log(line + 1000);
  rl.close;
});
