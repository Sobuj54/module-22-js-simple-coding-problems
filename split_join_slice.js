const string = 'tumi kemon aso ? kal ki versity te jaba?'
// splitting the string whenever there is white space
const whiteSplit = string.split(' ')
// console.log(whiteSplit)
// the output will be following:
//  [ 'tumi',    'kemon',
//   'aso',     '?',
//   'kal',     'ki',
//   'versity', 'te',
//   'jaba?'
// ]
// splitting the string by question marks
const quesSplit = string.split('?')
// console.log(quesSplit)
// the output will be following arraY: [ 'tumi kemon aso ', ' kal ki versity te jaba', '' ]

// splitting the array by character by character
const stringSplit = string.split('')
// console.log(stringSplit)
// the output will be following array:
// [
//   't', 'u', 'm', 'i', ' ', 'k', 'e',
//   'm', 'o', 'n', ' ', 'a', 's', 'o',
//   ' ', '?', ' ', 'k', 'a', 'l', ' ',
//   'k', 'i', ' ', 'v', 'e', 'r', 's',
//   'i', 't', 'y', ' ', 't', 'e', ' ',
//   'j', 'a', 'b', 'a', '?'
// ]

// slicing a string
// the string will be sliced form 0 index upto index 9..because it will stop before the given last index
const stringSlice = string.slice(0, 10)
console.log(stringSlice)

// substring works the same way as slice
const partial = string.substring(0, 10)
console.log(partial)

// joining an array
const array = [
  't',
  'u',
  'm',
  'i',
  ' ',
  'k',
  'e',
  'm',
  'o',
  'n',
  ' ',
  'a',
  's',
  'o',
  ' ',
  '?',
  ' ',
  'k',
  'a',
  'l',
  ' ',
  'k',
  'i',
  ' ',
  'v',
  'e',
  'r',
  's',
  'i',
  't',
  'y',
  ' ',
  't',
  'e',
  ' ',
  'j',
  'a',
  'b',
  'a',
  '?',
]

const joining = array.join('')
console.log(joining)
