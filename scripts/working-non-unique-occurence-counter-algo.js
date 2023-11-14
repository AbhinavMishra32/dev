// function countMatched(nArray) {
//     const symbolCountArr = [];
//     const totalCountArr = [];
//     let totalSymbolOcur = 0;
//     for (let row = 0; row < nArray.length; row++) {
//         symbolCountArr[row] = [];
//         for (let col = 0; col < nArray[row].length; col++) {
//             const currentSymbol = nArray[row][col];

//             let symbolOcur = 0;

//             if (row > 0 && nArray[row - 1][col] === currentSymbol) { // Check top
//                 symbolOcur++;
//             }

//             if (row < nArray.length - 1 && nArray[row + 1][col] === currentSymbol) { // Check bottom
//                 symbolOcur++;
//             }

//             if (col > 0 && nArray[row][col - 1] === currentSymbol) { // Check left
//                 symbolOcur++;
//             }

//             if (col < nArray[row].length - 1 && nArray[row][col + 1] === currentSymbol) { // Check right
//                 symbolOcur++;
//             }
//             totalSymbolOcur+=symbolOcur;
//             if (symbolOcur >= 2) {
//                 symbolCountArr[row].push(symbolOcur);
//             } else {
//                 symbolCountArr[row].push(0);
//             }
//             totalCountArr.push({ [currentSymbol]: symbolOcur })
//         }
//     }

//     console.log(symbolCountArr);
//     console.log(totalSymbolOcur);
// }

// const nestedArray = [
//     ['a', '*', '*', '*', '*'],
//     ['b', 'c', '*', 'd', 'e'],
//     ['f', 'g', '*', '*', 'h'],
//     ['*', '*', '*', 'i', 'j'],
//     ['k', 'l', 'm', 'n', 'o']
// ];

// console.log(countMatched(nestedArray));



function countMatched(nArray) {
    let conOcur = 0;

    for (let i = 0; i < nArray.length; i++) {
        for (let j = 0; j < nArray[i].length; j++) {
            const currentSymbol = nArray[i][j];

            if (i > 0 && nArray[i - 1][j] === currentSymbol) { // Check top
                conOcur++;
                continue;
            }

            if (i < nArray.length - 1 && nArray[i + 1][j] === currentSymbol) { // Check bottom
                conOcur++;
                continue;
            }

            if (j > 0 && nArray[i][j - 1] === currentSymbol) { // Check left
                conOcur++;
                continue;
            }

            if (j < nArray[i].length - 1 && nArray[i][j + 1] === currentSymbol) { // Check right
                conOcur++;
                continue;
            }
        }
    }

    return conOcur;
}

const nestedArray = [
    ['a', '*', '*', '*', '*'],
    ['b', 'c', '*', 'd', 'e'],
    ['f', 'g', '*', '*', 'h'],
    ['*', '*', '*', 'i', 'j'],
    ['k', 'l', 'm', 'n', 'o']
];

console.log(countMatched(nestedArray)); // Output: 12
