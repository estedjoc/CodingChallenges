// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// const DNAStrand = (dna) => {
//     let DNAArray = dna.split('');

//     let complementaryDNA = DNAArray.map( letter => {
//         if (letter === 'A'){
//             letter = 'T'
//         }else if (letter === 'T'){
//             letter = 'A'
//         }else if (letter === 'C'){
//             letter = 'G'
//         }else if (letter === 'G'){
//             letter = 'C'
//         }
//     })

//     return complementaryDNA.join('');
// }

// attempt 1 ^;

// const DNAStrand = (dna) => {

//     let regex1 = /A/i;

//     let regex2 = /T/i

//     let regex3 = /C/i

//     let regex4 = /G/i

//     return dna.replace(regex1,'T').replace(regex2, 'A').replace(regex3, 'G').replace(regex4, 'C');
// }

//poor attempt 2^

const DNAStrand = (dna) => {

    let newArrayForString = [];

    for (let i = 0; i < dna.length; i++){
        if (dna[i] === 'A'){
            newArrayForString.push('T')
        }else if (dna[i] === 'T'){
            newArrayForString.push('A')
        }else if (dna[i] === 'C'){
            newArrayForString.push('G')
        }else if (dna[i] === 'G'){
            newArrayForString.push('C')
        }
            
    }

    return newArrayForString.join('');
}

//final and successful attempt on the first try using it.