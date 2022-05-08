//8 Kyu: Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

const waterNeeded = (time) => Math.floor(Math.floor(time) / 2); 
//time may be given as 6.7 so I do Math.floor on that to make time equal to 6. then the number is divided by 2 to give 3 and that number is math floored too to bring it down to the lowest integer. Let's say time number given is 11. 11 math floored is 11. divided by 2 is 5.5. however, the client wants it to be the lowest whole number. so that number has to be math floored too.