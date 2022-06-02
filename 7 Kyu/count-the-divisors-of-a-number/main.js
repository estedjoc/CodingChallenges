// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

const getDivisorsCnt = (n) => {
    
    let arrayHere = [];

    for (let i = 1; i <= n; i++){
        if (n % i === 0){
            arrayHere.push(i);
        }
    }

    return arrayHere.length


}

//dont always have to return what is in a scope, make sure to play around with that too if u get the chance, since it is not always what is needed. I had a return in the conditional that made me return what I didn't need.