//8Kyu: Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// similar to the find max problem. Use the spread notation for the array.
// the whole class thing was already included in the problem so...
// but I just wrote what the output should be within the given scope of the problem.
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
  }

  // answer I had before that literally made no sense lol^

  //new answer: 

  const sortArray = (arr) => arr.sort((a, b) => a - b)[0];

