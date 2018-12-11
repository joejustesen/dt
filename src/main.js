const minimist = require('minimist');
const chalk = require('chalk');

const args = minimist(process.argv.slice(2));
const log = console.log;
const cmd = args._[0] || 'help';

try {
  require(`./cmds/dt-${cmd}`)(args);

} catch(err) {
  log(chalk.red('"') + chalk.white(cmd) + chalk.red('"') + chalk.red(' is not a valid command'));
} 
