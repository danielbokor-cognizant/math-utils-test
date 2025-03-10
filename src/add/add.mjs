import chalk from "chalk";
import winston from "winston";

let ora;

try {
  ora = await import("ora");
} catch (e) {
  winston.info("ora not installed; proceeding without spinners");
}

export function showSpinner() {
  if (ora) {
    const spinner = ora.default("processing...").start();
    setTimeout(() => spinner.succeed("Done!"), 1000);
  } else {
    winston.info("processing...done");
  }
}

export function add(a, b) {
  winston.info(chalk.green("adding in ESM"));
  return a + b;
}
