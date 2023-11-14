function countMatched(nArray) {
  
let symbolCountArr = []
  for (let i = 0; i < nArray.length; i++) {
    let symbolOcur = 0;
      for (let j = 0; j < nArray[i].length; j++) {
          const currentSymbol = nArray[i][j];
          
          if (i > 0 && nArray[i - 1][j] === currentSymbol) { // Check top
              symbolOcur++;
              continue;
          }

          if (i < nArray.length - 1 && nArray[i + 1][j] === currentSymbol) { // Check bottom
              symbolOcur++;
              continue;
          }

          if (j > 0 && nArray[i][j - 1] === currentSymbol) { // Check left
              symbolOcur++;
              continue;
          }

          if (j < nArray[i].length - 1 && nArray[i][j + 1] === currentSymbol) { // Check right
              symbolOcur++;
              continue;
          }
		  symbolCountArr.push({ [currentSymbol]: symbolOcur });
      }
	  
  }

  return symbolCountArr;
}

const nestedArray = [
  ['a', '*', '*', '*', '*'],
  ['b', 'c', '*', 'd', 'e'],
  ['f', 'g', '*', '*', 'h'],
  ['*', '*', '*', 'i', 'j'],
  ['k', 'l', 'm', 'n', 'o']
];

console.log(countMatched(nestedArray)); // Output: 12
