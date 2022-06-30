// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = arr => {

    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0){
            arr.splice(i,1);
            sum++
        }
    }

    for (let count = 0; count < sum; count++){
        arr.push(0);
    }

    return arr
}

// my original attempt on June 30 2022
// I think I was just missing the i-- that the actual solution below provides, and that's due to reducing the size of the array that will be looped throiugh due to removing the zero, which it appears I forgot to do. essentially, the array being looped through is getting smaller and me not puttin i-- neglected the second of two zeros in a row becauyse it would skip it when the second zero would take the place of the first.

// basically if we had [0, 0, 1, 0] the first zero had index 0 but when the loop was done it would move to index 1, which is now the 1 number instead of the second zero that follows the first, which has since been removed. 

//need to find a way to keep original order of array...

//solution found online, that I was rather close to!

const moveZeroes = (nums) => {
    let zeros = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0){
            zeros++
            nums.splice(i, 1)
            i--
        }
    }
    for (let i = 0; i < zeros; i++){
      nums.push(0)
    }
    return nums
};

