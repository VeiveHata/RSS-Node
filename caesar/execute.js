const { paramsCheck, checkFilePath } = require('./paramsCheck');
const fs = require('fs');
const { pipeline } = require('stream');
const caesar = require('./caesar');
const path = require('path');

module.exports = async function execution(args) {
  try {
    await paramsCheck(args);
    const isInputCorrect = await checkFilePath(args.input);
    const isOutputCorrect = await checkFilePath(args.output);
    if (!isInputCorrect) {
      process.stdout.write('Press Ctrl+C for exit\n');
    }
    await pipeline(
      isInputCorrect
        ? fs.createReadStream(path.join(__dirname, args.input))
        : process.stdin,
      caesar(args.action, args.shift),
      isOutputCorrect
        ? fs.createWriteStream(path.join(__dirname, args.output), {
            flags: 'a'
          })
        : process.stdout,
      error => {
        if (error) {
          process.stderr.write(error);
          // eslint-disable-next-line no-process-exit
          process.exit(1);
        } else {
          console.log('Your cipher is finished');
        }
      }
    );
  } catch (error) {
    process.stderr.write(`${error}\n`);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};
