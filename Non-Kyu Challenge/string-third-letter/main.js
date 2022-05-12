//8 Kyu: How to return a string made up of every third letter?
//here are my attempts. I had to google how to find the index I was looking for specifically. I learned from it though. I found two ways of pinpointing an index away from the one that is being iterated through. 

//from stack overlow: It is returning 14 because your loop starts in 0 and 0 % 0 is equal to 0. Then, when it gets to number 4, the index i is equal to 3, and again 3 % 3 = 0.
//Try something like:
// if((i+1) % 3 == 0){
//     newString += (string.charAt(i));
// }
// and the other way is
// if (i % 3 == 2)
// but I think the first method is easier to understand. Anyways, 
//first attempt
let emptyStr = '';
let returnEveryThirdLetter = (str) => {
 for (let i = 0; i < str.length; i++){
 if (i % 3 === 0){
 emptyStr += str[i - 1];
 }
 }
}
let slicedEmptyStr = emptyStr.slice(9);
returnEveryThirdLetter('iamyourlyftdriver');
console.log(slicedEmptyStr);

//second attempt
let newArr = '';
let returnTheThirdLetter = (str) => {
 str.split('').forEach( (element, index) => {
 if (index % 3 === 0){
 newArr.push(str[index - 1])
 }
 })
 newArr.join('');
}
newString = returnTheThirdLetter('iamyourlyftdriver');

//before making it into the final function
let str = 'iamyourlyftdriver';
let thirdLettersOnly = str.split('').filter( (element, index) => ((index + 1) % 3 === 0)).join('');

// final 

let findTheThirdLetter = (str) => {
 return str.split('').filter( (element, index) => ((index + 1) % 3 === 0)).join('');
};

fetch('https://lyft-interview-test.glitch.me/test', {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        string_to_cut: 'iamyourlyftdriver'
    })
}).then(res => {
    return res.json()
    })
    .then(data => data.split('').filter( (element, index) => (index + 1) % 3 === 0).join(''))
    .catch(error => console.log('ERROR'));
