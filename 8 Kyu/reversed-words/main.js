// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


const reverseWords = str => str.split(' ').reverse().join(' ');

//first try, just remember to put space in split and join which I did first round through but sometimes may forget in the future