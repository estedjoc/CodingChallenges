const countBits = (n) => {
    let bitNumber = (n >>> 0).toString(2);

    if (bitNumber.toString().length >= 10){
        return bitNumber.toString().split('').map( element => Number(element) ).reduce( (previousVal, currentVal) => previousVal + currentVal, 1 )
    }else{
        return bitNumber.toString().split('').map( element => Number(element) ).reduce( (previousVal, currentVal) => previousVal + currentVal, 0 );
    }
}

//made some more progress here today 05/30/22

