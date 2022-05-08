//8 Kyu: Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
//I start by setting a variable =  to zero so that I can sum the values to it. Then I set up a for loop that will start off with the value 1, and add each value of i until it reaches the num that we declare when calling the function. 
const summation = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++){
      sum += i;
    }
    return sum;
  }
  
  