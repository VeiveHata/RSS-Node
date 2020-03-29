/* eslint-disable no-process-exit */
const fs = require('fs');
const path = require('path');

module.exports = {
  paramsCheck: async function paramsCheck(args) {
    await checkAction(args.action);
    await checkShift(args.shift);
  },
  checkFilePath
};
async function checkAction(action) {
  if (!['encode', 'decode'].includes(action)) {
    throw new Error(
      "error: required option '-a, --action [action_type]'. Set correct action type: encode, decode"
    );
  }
}

async function checkShift(shift) {
  if (!isNumeric(shift)) {
    throw new Error(
      "error: required option '-s, --shift [number]'. Set correct number from 1"
    );
  }
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}

async function checkFilePath(file) {
  if (file && typeof file === 'string') {
    return new Promise((resolve, reject) =>
      fs.access(path.join(__dirname, file), fs.F_OK, err => {
        if (err) {
          reject('error: Set correct file path');
        }
        resolve(true);
      })
    );
  } else if (!file) {
    return false;
  }
}
