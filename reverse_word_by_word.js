// reverse a string word by word
function reverse(string){
    let str = string.split(' ');
    const word = [];
    for(let i = str.length - 1; i>=0; i--){
        word.push(str[i]);
    }
    const rev = word.join(' ')
    return rev
}
const str = "hello how are you?"
const reverseStr = reverse(str)
console.log(reverseStr)