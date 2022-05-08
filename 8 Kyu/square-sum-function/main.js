//8 Kyu: Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

const squareSum = (numbers) => {
    let sum = 0;
    numbers.forEach( a => {
      sum += (Math.pow(a,2));
    })
    return sum;
  }
//we declare a variable to take the sum of the different elements of the array. then we use the forEach method of the arrays to go through each element and square its value using a Math method to add the value of the element squared to the sum. The for each does it for each element of the array.