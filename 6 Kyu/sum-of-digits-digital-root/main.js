// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


// const digital_root = (n) => {
//     let sum = 0
//     n.toString();
//     if (n.length > 1){
//         for (let i = 1; i < n.length; i++){
//             sum = n.split('').reduce( (previousValue, currentValue) => previousValue + currentValue, 0 )
//         }
//     }return sum
// }



//Had to look up solution, couldn't figure this one out on my own unfortunately. Did have to add some lines of code to make the solution I found work though so maybe it is not a total loss. Also reminds me a little bit of recursions and what they do which is good.


function digital_root(n){
    if (n < 10){
        return n
  }else if (n === 10){
    return 1
  }else{
    let result = 0;
    String(n).split('').map(num => {
      result += Number(num)});
      return result >= 10 ? digital_root(result) : result;
  }}