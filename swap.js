// swapping with temp variable
let x = 10;
let y = 20;
console.log('before swap:', x, y);
  // approach 1
  // let temp = x
  // x = y
  // y = temp
  // console.log('after swap :', x, y)

  // approach 2-----destructuring

  [ x, y ] = [ y, x ];
console.log('after swap:', x, y);
