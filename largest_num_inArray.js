// largest number in an array
function largest (number){
    let large = number[0]
    for(let i =0; i< number.length ; i++){
        if(number[i] > large){
            large = number[i]
        }
    }
    return large
}
const number = [12, 15, 14, 58, 78, 666, 25, 785, 12]
const largestNum = largest(number)
console.log("largest number :", largestNum)