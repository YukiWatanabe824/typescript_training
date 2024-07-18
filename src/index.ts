import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("入力して", (line) => {
  const num = Number(line)
  console.log(num + 1000)
  rl.close;
});
