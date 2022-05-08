//8 Kyu: Write a function to split a string and convert it into an array of words.
// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]

// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// So for this one, I actually ended up learning how to use the .split() method for strings (and arrays I guess).
//Basically, if I do .split('') (an empty string in the split method), the function will return an array whose elements are composed of every single individual character in the string. If I do .split(" "), the function will return an array that is composed of elements that are in between the empty spaces. An example of how to visualize this is the following code. 
const stringToArray1 = (str) => str.split('a');

console.log(stringToArray('codes are cool'));
//the return is this: ['codes ', 're cool']
//the .split method omits what is in its seperator (look at the split mdn if confused) and the elements will be composed of what is to the left and right of that 'a', or seperator, wherever it appears in the string. That's why when we just put a ' ' in the .split, it will return as an element everything that is between the spaces as an element in an array, the way everything that was between a's was placed in elements of an array too.
//anyways the final answer for that question is:
const stringToArray2 = (str) => str.split(' ');
//everything between a space will be split up and put into elements of a new array (that in this case hasn't been defined yet).