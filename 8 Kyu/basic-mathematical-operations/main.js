const basicOp = (operation, value1, value2) => {
    if (operation == '+'){
        return value1 + value2
    }else if (operation == '-'){
        return value1 - value2
    }else if (operation =='*'){
        return value1 * value2
    }else if (operation == '/'){
        return value1 / value2
    }
}


//Helping the buddy David out while working on this codewars challenge

// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];

//slight objects review^^

  

// const profileLookup = (name, prop) => {
//     for (let i = 0; i < contacts.length; i++){
//         if ((name == contacts.firstName) && ((prop == contacts.lastName) || (prop == contacts.number) || (prop == contacts.likes))){
//             return prop;
//         }else{
//             return "Error"
//         }
//     }
// }