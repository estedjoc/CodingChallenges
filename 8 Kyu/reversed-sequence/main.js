// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let arr = [];

    for (let i = n; i > 0; i--){
        arr.push(i);
    }

    return arr
}

//forgot how unshift and push differ oops but its ok figured it out now and also stumbled a bit with the for loop but also figured that one out
