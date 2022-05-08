//8 Kyu: Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
//original attempt:
let repeatStr1 = (num, str) => {
    for (let i = 0; i < num; i++){
    return str += str
      }
    }
    
    console.log(repeatStr(1,'I'));
    
    // would only repeat twice and then not again, have to revisit to figure out why.
    // this is the attempt and correct one after using the repeat string method. the repeat method works by The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together:
    
    let repeatStr2 = (num, str) => str.repeat(num);
    console.log(repeatStr(6,'lolumad'));