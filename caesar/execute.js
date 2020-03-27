const paramsCheck = require('./paramsCheck');
const fs = require('fs');
const { pipeline } = require('stream');
const caesar = require('./caesar');

module.exports = async function execution(args) {
  try {
    paramsCheck(args);
    await pipeline(
      fs.createReadStream(args.input),
      caesar(args.action, args.shift),
      fs.createWriteStream(args.output, { flags: 'a' }),
      error => {
        if (error) {
          throw new Error(error);
        } else {
          console.log('Your cipher is finished');
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};
