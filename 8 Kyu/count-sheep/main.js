// 8 Kyu: If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = (num) => {
    let str = "";
    for (let i = 1; i <= num; i++){
      str += `${i} sheep...`
    }
    return str
  }
//here we are adding to a string that is initially blank. The loop is created so that based on the number inputted, we keep adding the same string back to the variable str with the numbers increasing. 