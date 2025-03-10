import chalk from "chalk";
import winston from "winston";

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

let ora;

try {
  ora = await import("ora");
} catch (e) {
  logger.log("ora not installed; proceeding without spinners");
}

export function showSpinner() {
  if (ora) {
    const spinner = ora.default("processing...").start();
    setTimeout(() => spinner.succeed("Done!"), 1000);
  } else {
    logger.log("processing...done");
  }
}

export function add(a, b) {
  logger.log(chalk.green("adding in ESM"));
  return a + b;
}
