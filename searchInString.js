// search something in string

const string = 'tumi kemon aso ? kal ki versity te jaba?'
// secarch in string
const search = string.includes('aso')
console.log(search)

// finding index in string
console.log(string.indexOf('kal'))

// checking if something exists in string or not
if (string.indexOf('ki') !== -1) {
  console.log('exists')
} else {
  console.log('does not exists')
}

// checking if a sting stars with something specific
console.log(string.startsWith('tumi'))

// checking if a string ends with something specific
const myFile = 'honey.pdf'
console.log(myFile.endsWith('pdf'))
