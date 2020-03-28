const { paramsCheck, checkFilePath } = require('./paramsCheck');
const fs = require('fs');
const { pipeline } = require('stream');
const caesar = require('./caesar');

module.exports = async function execution(args) {
  try {
    await paramsCheck(args);
    const isInputCorrect = await checkFilePath(args.input);
    const isOutputCorrect = await checkFilePath(args.output);

    await pipeline(
      isInputCorrect ? fs.createReadStream(args.input) : process.stdin,
      caesar(args.action, args.shift),
      isOutputCorrect
        ? fs.createWriteStream(args.output, { flags: 'a' })
        : process.stdout,
      error => {
        if (error) {
          process.stderr.write('some unexpected error accured');
          // eslint-disable-next-line no-process-exit
          process.exit(1);
        } else {
          console.log('Your cipher is finished');
        }
      }
    );
  } catch (error) {
    process.stderr.write(error.message);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};
