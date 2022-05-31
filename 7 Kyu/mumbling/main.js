// const accum = (s) => {
//     let splitArray = s.split('');

//     let accumArrayToString = splitArray.map( (character, index) => {
//         character[0].toUpperCase()
//         for (let i = 0; i < index; i++){
//             return splitArray.push(character.toLowerCase())
//         }
//     } ).join('-');

//     return accumArrayToString;
// }

const accum = (s) => {
    let splitArray = s.split('');

    let emptyArrayToBeFilled = [];

    splitArray.forEach( (character,index) => {
        emptyArrayToBeFilled.push(character[0].toUpperCase())

        for (let i = 0; i <= index; i++){
                return emptyArrayToBeFilled.push(character.toLowerCase())
        }

        emptyArrayToBeFilled.join('-')

    } )

    return emptyArrayToBeFilled;


}

//two honest attempts that didn't really get anywhere unfortunately. Would only print out each character twice once in uppercase and another in lowercase.

