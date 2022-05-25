const arrayDiff1 = (a, b) => {
    let newArray = [];

    if (b.length === 0){
        return a
    }else{
        for (let i = 0; i < a.length; i++){
            for (let j = 0; j < b.length; j++){
                if (a[i] != b[j]){
                    newArray.push(a[i])
                }
            }
        }
        return newArray
    }
}

//my original attempt^ was close to this solution off stack overflow:

// function arrayDiff(a,b) {
//     // Temporary array, containing all values from a, which are not contained in b
//     let diffArray = [];
//     // Looping over a
//     for(let i = 0; i < a.length; i++) {
//         // Per default we say that b does not contain a
//         let bContainsAValue = false;
//         // Loop over b
//         for(let y = 0; y < b.length; y++) {
//             // If any value in b is the same as the current value from a, we set bContainsAValue to true
//             if(a[i] === b[y]) bContainsAValue = true;
//         }
//         // Now only if bContainsAValue is still false, meaning it does not contain the a value, we push this value into our temporary array
//         if(!bContainsAValue) diffArray.push(a[i]);
//     }
//     // In the end we return the temporary array
//     return diffArray;
// }

//later found out can also be done with filter array method.

const arrayDiff = (a, b) => a.filter(number => !b.includes(number) ) 

//returns array that is filtered with values from b that are not included in a. essentially, if b does not include the value from a, it is returned. 