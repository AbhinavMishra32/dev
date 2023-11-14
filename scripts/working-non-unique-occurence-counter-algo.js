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

function countGivenArr(arr) {
    const counts = {};
  
    arr.forEach(obj => {
      const symbol = Object.keys(obj)[0];
      counts[symbol] = (counts[symbol] || 0) + obj[symbol];
    });
  
    return counts;
  }

function countMatched(nArray) {
    let totalConOcur = 0;
    let totalConOcurArr = [];
    for (let i = 0; i < nArray.length; i++) {
        for (let j = 0; j < nArray[i].length; j++) {
            const currentSymbol = nArray[i][j];
            let symbolOcur = 0;
            if (i > 0 && nArray[i - 1][j] === currentSymbol) { // Check top
                totalConOcur++;
                symbolOcur++;
                totalConOcurArr.push({[currentSymbol]: symbolOcur});
                continue;
            }

            if (i < nArray.length - 1 && nArray[i + 1][j] === currentSymbol) { // Check bottom
                totalConOcur++;
                symbolOcur++;
                totalConOcurArr.push({[currentSymbol]: symbolOcur});
                continue;
            }

            if (j > 0 && nArray[i][j - 1] === currentSymbol) { // Check left
                totalConOcur++;
                symbolOcur++;
                totalConOcurArr.push({[currentSymbol]: symbolOcur});
                continue;
            }

            if (j < nArray[i].length - 1 && nArray[i][j + 1] === currentSymbol) { // Check right
                totalConOcur++;
                symbolOcur++;
                totalConOcurArr.push({[currentSymbol]: symbolOcur});
                continue;
            }
            
        }
    }
    console.log(totalConOcurArr);
    console.log(countGivenArr(totalConOcurArr));
    return totalConOcur;
}
datasetArray = ['🍅','🍇','🍌','🍊']
function createArrays(dataArr, dimension){
    //nxn array
    let finalArray = [];
    
    for(let i =0;i<dimension;i++){
        innerArray =[];
        for(let j = 0; j<dimension; j++){
            randomIndex =Math.floor((Math.random()*dataArr.length));
            innerArray.push(datasetArray[randomIndex]);
        }
        finalArray.push(innerArray);
    }
    return finalArray;
}


const nestedArray = [
    ['a', '*', '*', '*', '*'],
    ['🍅', 'g', '*', 'd', 'h'],
    ['🍅', 'g', '*', '*', 'h'],
    ['*', '*', '*', 'i', 'j'],
    ['k', 'l', 'm', 'n', 'o']
];

console.log(createArrays(datasetArray, 6))

console.log(countMatched(createArrays(datasetArray, 6)));
