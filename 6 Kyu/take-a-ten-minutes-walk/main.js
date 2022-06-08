// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//initial thoughts are to equate each n and s to 1 and -1 respectively attached to a y variable for y axis. Likewise for e and w for an x variable.

const isValidWalk = (walk) => {

    let xSum = 0;
    let ySum = 0;

    walk.forEach( direction => {
            if (direction === 'n'){
            ySum++
            }else if(direction === 's'){
            ySum--
            }else if(direction === 'e'){
            xSum++
            }else{
            xSum--
            }
    } )

    return ((xSum === 0) && (ySum === 0) && (walk.length === 10)) ? true : false;
}

// I kept getting errors because I assumed I could get away with just setting xSum equal to ySum but this could also mean that xSum and ySum could both be 3 and thus, away from the initial point. I had to make sure they were both 0 to show that they indeed were bakc in the original position! Great kata tbh.