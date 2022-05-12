let abbrevName = (name) => {
    let arrayName = name.split(' ');
    return `${arrayName[0][0].toUpperCase()}.${arrayName[1][0].toUpperCase()}`
}