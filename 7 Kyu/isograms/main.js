// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

let isIsogram = (str) => {
    let lowerCaseString = str.toLowerCase();
    for (let i = 0; i < lowerCaseString.length; i++){  
        for (let j = 0; j < lowerCaseString.length; j++){
            return (lowerCaseString[i] === lowerCaseString[j]) ? true : false;
        }
    }
}

//second attempt ^

let isIsogram = (str) => {
    let strArray = str.toLowerCase().split('');

    for (let i = 0; i < strArray.length; i++){

        let sum = 0;

        for (let j = 0; j < strArray.length; j++){
            (strArray[i] === strArray[j]) ? sum++ : sum += 0;
        }

        return (sum > 0) ? true : false

    }
}

//first attempt ^... honestly I tend to get pretty close with my attempts smh its a shame.

// I kept getting soooo close but somehow the above doesn't work even after different iterations of changing some things around. the solution I found is below

function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i) {
      for(j = i + 1; j < str.length; ++j) {
        if(str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
 }

