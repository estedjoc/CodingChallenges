const solution = (number) => {
    let arr = [];
    if (number === 0 || number < 0){
      return 0
    }
    for (let i = 1; i < number; i++){
      (i % 3 === 0 || i % 5 === 0) ? arr.push(i) : arr.push(0)
    }
    return arr.reduce( (previousValue, currentValue) => previousValue + currentValue, 0 );
  }