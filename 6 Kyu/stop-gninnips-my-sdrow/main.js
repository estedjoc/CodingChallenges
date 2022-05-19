// const reverseLongWords = (str) => {
//     str.length >= 5 ? str.split(' ').map( element => {
//       if (element.length > 5){
//       return element.split('').reverse().join('')) : return str
//   }

const spinWords = (string) => {
    let emptyString = '';
    if (string.length >= 5 && string.includes(' ')){
        emptyString += string.split(' ').map( element => {
            if ( element.length >= 5 ){
                return element.split('').reverse().join('')
            }else{
                return element
            }
        } ).join(' ')
    }else if(string.length >= 5){
        return string.split('').reverse().join('')
    }else{
      return string
    }
    return emptyString
}

//my solution that I was SOOOO CLOSE to figuring out on my own but didn't realize I needed one or two more quick little fixes in the code to make it work (the returns in the map method since the element had nowhere to go to)