const commander = require('commander');
const execution = require('./execute');

const program = new commander.Command();

program.storeOptionsAsProperties(false);

program.version('0.0.1', '-v, --version', 'current version');
program
  .requiredOption('-a, --action [action_type]', 'encode/decode action type')
  .requiredOption('-s, --shift [number]', 'number of shift letters')
  .option('-i, --input [filename]', 'name of input file')
  .option('-o, --output [filename]', 'name of output file');

program.parse(process.argv);

execution(program.opts());
