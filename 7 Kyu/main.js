// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

const maskify = (cc) => {
    let ccArray = cc.split('');

    for (let i = ccArray.length - 5; i >= 0; i--){
        ccArray[i] = '#'
    }

    return ccArray.join('');
}

//FIRST TRY WITH  ALOOP I WAS AFRAID OF USING CUZ I THOUGHT IT WOULD BE INFINITE LETSG GOOOOOOOOOOOO

