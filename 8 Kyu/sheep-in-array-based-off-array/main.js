//8 Kyu: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

//my solution:
const countSheeps = (arrayOfSheep) => {
    let sum = 0;
    arrayOfSheep.forEach( checkSheep => checkSheep ? sum++ : sum += 0 );
    return sum;
  }
  //iterate through array, adding the count by 1 of a value that is truthy is returned. this accounts for null and undefined since those values are considered falsy too.