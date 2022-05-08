//8 Kyu: Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// two different ways to answer this one.
// Originally this is what I wanted to do for my approach but I wasn't exactly sure how to go about it. I knew it would have to involve a for loop (or a loop in general) since it would involve having to do multiple iterations through the indeces of a string. I had just simply forgotten about setting the i variable to the top (right) number of the string and decrementing my way down. So the solution with that in mind looks as follows.
function reverseString1(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
// the function sets a new variable that is an empty string.
// the for loop starts at the highest number index 
// and sets that index number to be the first 
// character in the empty string, adding each new 
// character into the newly declared string.
// if we did 'hello' as our string for example,
// it starts off with index[string.length - 1 (which equals 4)]
// and sets i[4] as the first character in the newly declared string. then it decrements
// and sets i[3] as the next character after that in the stirng and so on and so forth.

// the other solution involves using methods for both arrays and strings.

function reverseString2(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
reverseString("hello");
// here we use the split method to turn every character
// in the string into the elements of an array. then we use the array method
// of reverse to flip the order of the string. finally, we
// use the join method to join the elemnts of the array into
// one single string.
