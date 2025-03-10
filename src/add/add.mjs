import { chalk } from "chalk";

export function add(a, b) {
  console.log(chalk.green("adding in ESM"));
  return a + b;
}
