const { chalk } = require("chalk");

function add(a, b) {
  console.log(chalk.blue("adding in Common JS"));
  return a + b;
}

module.exports = { add };
