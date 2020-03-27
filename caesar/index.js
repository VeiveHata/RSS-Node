const { program } = require('commander');
const execution = require('./execute');
const path = require('path');

program.version('0.0.1', '-v, --version', 'current version');

program
  .requiredOption('-a, --action [action_type]', 'encode/decode action type')
  .requiredOption('-s, --shift [number]', 'number of shift letters', val =>
    parseInt(val, 10)
  )
  .option(
    '-i, --input [filename]',
    'name of input file',
    path.join(__dirname, 'cipheredFiles/input.txt')
  )
  .option(
    '-o, --output [filename]',
    'name of output file',
    path.join(__dirname, 'cipheredFiles/output.txt')
  );

program.parse(process.argv);

execution(program);
