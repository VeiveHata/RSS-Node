module.exports = function paramsCheck(args) {
  try {
    checkAction(args.action);
    checkShift(args.shift);
  } catch (err) {
    console.log(err.message);
  }
};

function checkAction(action) {
  if (!action) {
    throw new Error(
      "error: required argument '-a, --action [action_type]' is missing. Set action"
    );
  }
  if (!['encode', 'decode'].includes(action)) {
    throw new Error(
      "error: required option '-a, --action [action_type]'. Set correct action type: encode, decode"
    );
  }
}

function checkShift(shift) {
  if (!shift) {
    throw new Error(
      "error: required argument '-s, --shift [number]' is missing.Set action"
    );
  }
  if (!Number(shift)) {
    throw new Error(
      "error: required option '-s, --shift [number]'. set correct number"
    );
  }
}
