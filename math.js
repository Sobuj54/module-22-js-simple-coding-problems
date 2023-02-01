const power = Math.pow(2, 3)
console.log('2^3 is =', power)

// using absolute is js
const x = 20
const y = 200
// we used Math.abs to get positive value all the time
const difference = Math.abs(x - y)
console.log(difference)

// removing decimal point or rounding up a number
const number = 2.224
// if the number after decimal is 5 or greater than 5 then the rounded number will be greater than the base number...if the number after the decimal point is less than 5 or 0-4 then the rounded number will be the base number
const roundedNumber = Math.round(number)
console.log(roundedNumber)

// using ceil to upgrade the number greater than the decimal point
const num = 2.354
const ceiling = Math.ceil(num)
console.log(ceiling)

// using floor to retain the base number by removing the decimal point
const num2 = 2.555
const flooring = Math.floor(num2)
console.log(flooring)

// getting random number form 0 to 1
console.log(Math.random())

// getting random number from 0 to 100
console.log(Math.random() * 100)

// getting random full number form 0 to 100
console.log(Math.round(Math.random() * 100))
