const { Transform } = require('stream');

module.exports = function caesar(action, shift) {
  createVocabulary(action === 'encode' ? shift : -shift);

  const caesarTransform = new Transform({
    transform: (data, encoding, callback) => {
      const chunk = data.toString();
      let newChunk = '';
      for (let i = 0; i < chunk.length; i++) {
        const changingLetter = chunk[i];
        const changedValue = ABC[changingLetter];
        newChunk += changedValue ? changedValue : changingLetter;
      }
      callback(null, newChunk);
    },
    flush: callback => callback()
  });

  return caesarTransform;
};

const createVocabulary = shiftValue => {
  const movedArray = [
    ...abcArray.slice(shiftValue),
    ...abcArray.slice(0, shiftValue)
  ];
  abcArray.forEach((letter, index) => {
    ABC[letter] = movedArray[index];
    ABC[letter.toUpperCase()] = movedArray[index].toUpperCase();
  });
};

const ABC = {};

const abcArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
