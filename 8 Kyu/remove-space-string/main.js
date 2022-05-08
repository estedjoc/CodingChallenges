//8 Kyu: Simple, remove the spaces from the string, then return the resultant string.

const noSpace = (x) => x.split(' ').join('');
//simpler than I was making it out to be. just split the string at every space into an array and then join it back together. that should do it I think.