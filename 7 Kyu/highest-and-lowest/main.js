const highAndLow = (numbers) => {
    let numberArray = numbers.split(' ').sort((a, b) => a - b);
    return `${numberArray[numberArray.length - 1]} ${numberArray[0]}`
  }