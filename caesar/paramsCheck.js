/* eslint-disable no-process-exit */
module.exports = function paramsCheck(args) {
  checkAction(args.action);
  checkShift(args.shift);
};

function checkAction(action) {
  if (!['encode', 'decode'].includes(action)) {
    process.stderr.write(
      "error: required option '-a, --action [action_type]'. Set correct action type: encode, decode"
    );
    process.exit(1);
  }
}

function checkShift(shift) {
  console.log(shift, !isNaN(shift));
  if (!isNumeric(shift)) {
    process.stderr.write(
      "error: required option '-s, --shift [number]'. set correct number from 1"
    );
    process.exit(1);
  }
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}
