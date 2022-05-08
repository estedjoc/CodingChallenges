// 8 Kyu: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = (str) => str.slice(1, str.length - 1);
// character with index 1 is kept here. character that is the last in the index and string is ommitted (since string length will always be one more than the index of the last character in the string) since that's how slice is used (first number is kept, second number is deleted.