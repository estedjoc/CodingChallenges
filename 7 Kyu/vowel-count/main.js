const getCount  = (str) => {
    let vowelsCount = 0;
    
    let countOfVowels = str.split('').filter( letter => (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o'|| letter === 'u'))
    
    vowelsCount = countOfVowels.length
    
    return vowelsCount;
  }