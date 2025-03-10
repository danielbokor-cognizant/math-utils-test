import chalk from "chalk";

let ora;

try {
  ora = await import("ora");
} catch (e) {
  console.log("ora not installed; proceeding without spinners");
}

export function showSpinner() {
  if (ora) {
    const spinner = ora.default("processing...").start();
    setTimeout(() => spinner.succeed("Done!"), 1000);
  } else {
    console.log("processing...done");
  }
}

export function add(a, b) {
  console.log(chalk.green("adding in ESM"));
  return a + b;
}
