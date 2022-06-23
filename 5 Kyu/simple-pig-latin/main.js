// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = (str) => {
    let stringArray = str.split(' ');
    let arrayOfStringArray = stringArray.forEach( element  => element.split(''));
    console.log(arrayOfStringArray);
}

//not solving it yet, but will attempt soon June 23 2022"
