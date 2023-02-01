// reverse a string word by word
function reverse (string){
    let str = ''
    for(let i = string.length -1 ; i>=0; i--){
        str = str + string[i]
    }
    return str;
}
const string = "hi my name is sobuj"
let reverseString = reverse(string)
console.log(reverseString)