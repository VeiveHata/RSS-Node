/* eslint-disable no-process-exit */
const fs = require('fs');

module.exports = {
  paramsCheck: async function paramsCheck(args) {
    await checkAction(args.action);
    await checkShift(args.shift);
  },
  checkFilePath
};
async function checkAction(action) {
  if (!['encode', 'decode'].includes(action)) {
    process.stderr.write(
      "error: required option '-a, --action [action_type]'. Set correct action type: encode, decode"
    );
    process.exit(1);
  }
}

async function checkShift(shift) {
  if (!isNumeric(shift)) {
    process.stderr.write(
      "error: required option '-s, --shift [number]'. Set correct number from"
    );
    process.exit(1);
  }
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}

async function checkFilePath(input) {
  if (input && typeof input === 'string') {
    return new Promise((resolve, reject) =>
      fs.access(input, fs.F_OK, err => {
        if (err) {
          // change
          reject(err);
        }
        resolve(true);
      })
    );
  } else if (!input) {
    return false;
  }
}
