const XO = (str) => {
    let sumX = 0;
    let sumO = 0;
    let strArray = str.split('');
    strArray.forEach( letter => {
        if (letter === 'x' || letter === 'X'){
           return sumX++
        }else if(letter === 'o' || letter === 'O'){
           return sumO++
        }
    } )
    return sumX === sumO ? true: false
}

//finally got over a mental block I was dealing with for a couple days now woooo

