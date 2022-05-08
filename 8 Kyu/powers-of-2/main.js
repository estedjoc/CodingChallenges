//8 Kyu: Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//originally I had the "solution" as
const powersOfTwo1 = (n) => {
    let powerArray =[];
    for (let i = 0; i <= n; i++){
      powerArray.push((Math.pow(n,i)));
    }
    return powerArray;
  }
  // but then I remembered it only wants us to check the powers of the number 2, the n is just to designate how many "powers" it will display. so I had to change the base in the math pow to always be 2.
  
  // therefore the solution is as follows below:
  const powersOfTwo2 = (n) => {
    let powerArray =[];
    for (let i = 0; i <= n; i++){
      powerArray.push((Math.pow(2,i)));
    }
    return powerArray;
  }