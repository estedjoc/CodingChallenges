// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

const countPositivesSumNegatives = (input) => {
    let countPositives = 0;
    let sumNegatives = 0;

    if ((input === null) || (input.length < 1)){
        return []
    }else{
        input.forEach( num => {
            if (num <= 0){
                sumNegatives += num
            }else{
                countPositives++
            }
        });
        return [countPositives, sumNegatives];
    }
}

//I tried to be cute here and use the ternary operator but didn't work out initially and I had also forgotten to account for null cases. Always something to learn: PAY ATTENTION TO THE PROMPT AND ITS DEMANDS