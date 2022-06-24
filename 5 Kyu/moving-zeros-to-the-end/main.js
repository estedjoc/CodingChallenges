// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = arr => {
    let originalLength = arr.length;

    let filteredArray = arr.filter( element => element != 0);

    console.log(filteredArray);
}

//need to find a way to keep original order of array...

