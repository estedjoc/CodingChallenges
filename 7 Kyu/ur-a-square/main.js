const isSquare = (n) => {
    if (n < 0){
      return false
    }else if (n === 0){
      return true
    }else{
      let squareRootedNumber = Math.sqrt(n);
      return squareRootedNumber % 1 === 0 ? true : false;
    }
  }