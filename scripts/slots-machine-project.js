/* 
So basically we need 5 arrays. If previous element and forward element matches then it will grant us money based off how many symbols matched, this is checked in verticle and horizontal both, and each symbol will have a seperate win modifier that will change the winning money based off the type of symbol and its RARETY(can or can not implement win money modifier based off rarety of that symbol) and we can bet on a symbol, and if we bet on that symbol and the symbols matches we will get extra bet winning money.


We can use 2D arrays.




| * | * | * | * | * |
| * | * | * | * | * |
| * | * | * | * | * |
| * | * | * | * | * |
| * | * | * | * | * |






*/

// nestedArray =  [['-','*','*','*','*'],
//                 ['-','-','*','-','-'],
//                 ['-','-','*','*','-'],
//                 ['*','*','*','-','-'],
//                 ['-','-','-','-','-']] 

nestedArray =  [['a','*','*','*','*'],
                ['b','c','*','d','e'],
                ['f','g','*','*','h'],
                ['*','*','*','i','j'],
                ['k','l','m','n','o']] 

/*
Logic for counting the matched items:
go from left to right in every array 


*/

// function countMatched(nArray){
//     let matchedCount = 0;
//     let rowMatchedCount = 0;
//     let columnMatchedCount = 0;

//     //loop through rows
//     for(let row =0; row<nArray.length; row++){
//         //loop through elements in the row
//         for(let col = 0; col<=nArray[row].length; col++){
//             if(col < nArray[row].length && nArray[row][col] === nArray[row][col+1]){
//                 matchedCount++;
//                 rowMatchedCount++;
//                 console.log(`matched on same row, coordinates: [${row},${col}], matchedCount: ${matchedCount}, rowMatchedCount: ${rowMatchedCount}, columnMatchedCount: ${columnMatchedCount}`);
//             }
//             if(row < nArray.length - 1 && nArray[row][col] === nArray[row+1][col]){
//                 if(row>0){
//                     if(nArray[row][col] === nArray[row-1][col]){
//                         matchedCount++;
//                         rowMatchedCount++;
//                         console.log(`matched on same row, checked above row also , column: ${row}, coordinates: [${row},${col}], matchedCount: ${matchedCount}, rowMatchedCount: ${rowMatchedCount}, columnMatchedCount: ${columnMatchedCount}`);
//                     }
//                 }
//                 else{
//                 matchedCount++;
//                 columnMatchedCount++;
//                 console.log(`matched on same column, coordinates: [${row},${col}], matchedCount: ${matchedCount}, rowMatchedCount: ${rowMatchedCount}, columnMatchedCount: ${columnMatchedCount}`);
//                 }
//             }
//         }
//     }
//     return {matchedCount, rowMatchedCount, columnMatchedCount};
// }

/*  WORKING ALGORITHM: 
            if column or row is first or last:
                if column or row is first:
                    if row is first:
                        if column is 0:
                            only check right connections
                        if column is last:
                            only check the left connections
                        only check the bottom connections
                    if row is last:
                        if column is 0:
                            only check right connections
                        if column is last:
                            only check the left connections
                        only check the top connections
            else:
                check bottom or top or left or right connections
            */
function countMatched(nArray){
    let conOcur = 0;
    const maxRowIndex = nArray.length -1;
    const maxColIndex = nArray[0].length-1;

    for(let row =0; row<nArray.length;row++){
        for(let col = 0; col<nArray[row].length; col++){
            
            // if column or row is first or last:
            if(row==0 || row == maxRowIndex || col == 0 || col == maxColIndex){
                //if in first row
                if(row ==0){
                    //if column isnt a corner
                    if(col != 0 && col != maxColIndex){
                        //check top or bot or left or right
                        if(nArray[row][col] == nArray[row][col+1] || nArray[row][col]==nArray[row][col-1] || nArray[row][col]==nArray[row+1][col] || (row < maxRowIndex && nArray[row][col] === nArray[row + 1][col])){
                            conOcur++;
                        }
                    }
                }
                //if last row
                else if(row == maxRowIndex){
                    //if not corner columns
                    if(col != 0 && col !=maxColIndex){  
                        //check top or bot or left or right
                        if(nArray[row][col] == nArray[row][col+1] || nArray[row][col]==nArray[row][col-1] || nArray[row][col]==nArray[row-1][col] ||(row < maxRowIndex && nArray[row][col] === nArray[row + 1][col])){
                            conOcur++;
                        }
                    }
                }
                //if in first column
                else if(col ==0){
                    if(row!=0 && row != maxRowIndex){
                        //check top or bot or left or right
                        if(nArray[row][col] == nArray[row][col+1] || nArray[row][col]==nArray[row][col-1] || nArray[row][col]==nArray[row+1][col] || nArray[row][col]==nArray[row-1][col] || 
                            (row < maxRowIndex && nArray[row][col] === nArray[row + 1][col])){
                            conOcur++;
                        }
                    }
                }
                //if in last column
                else if(col == maxColIndex){
                    if(row!=0 && row!=maxRowIndex){
                        //check top or bot or left or right
                        if(nArray[row][col] == nArray[row][col+1] || nArray[row][col]==nArray[row][col-1] || nArray[row][col]==nArray[row+1][col] || 
                            (row < maxRowIndex && nArray[row][col] === nArray[row + 1][col])){
                            conOcur++;
                        }
                    }
                }
                else{
                    if(nArray[row][col] == nArray[row][col+1] || nArray[row][col]==nArray[row][col-1] || nArray[row][col]==nArray[row+1][col] || 
                        (row < maxRowIndex && nArray[row][col] === nArray[row + 1][col])){
                        conOcur++;
                    }
                }

            }
        }
    }
    return conOcur;
}
console.log(countMatched(nestedArray));




















    //         if(row==0){
    //             //when column isnt first and last.
    //             if(0<col<nArray[row].length-1){
    //                 //check left OR right connection.
    //                 if(nArray[row][col]==nArray[row-1][col] || nArray[row][col] == nArray[row+1][col]){
    //                     conOcur++;
    //                     console.log(`row 0,`)
    //                 } 
    //             }
    //             // checks if in first column, then only check the right connection.
    //             else if(col == 0){
    //                 if(nArray[row][col] == nArray[row][col+1]){
    //                     conOcur++;
    //                 }
    //             }
    //             // checks if in last column, then only check the left connection.
    //             else if(col ==nArray[row].length-1){
    //                 if(nArray[row][col] == nArray[row][col-1]){
    //                     conOcur++;
    //                 }
    //             }
    //             //only counting the bottom connections in row 0.
    //             if(nArray[row][col]==nArray[row][col+1]){
    //                 conOcur++;
    //                 console.log(`row 0,`)
    //             }
    //         }
    //         // check if in last row
    //         if(row== nArray.length-1){
    //             //when column isnt first and last.
    //             if(0<col<nArray[row].length-1){
    //                 //check left OR right connection.
    //                 if(nArray[row][col]==nArray[row-1][col] || nArray[row][col] == nArray[row+1][col]){
    //                     conOcur++;
    //                     console.log(`row 0,`)
    //                 }
    //             // checks if in first column, then only check the right connection.
    //             else if(col == 0){
    //                 if(nArray[row][col] == nArray[row][col+1]){
    //                     conOcur++;
    //                 }
    //             }
    //             // checks if in last column, then only check the left connection.
    //             else if(col ==nArray[row].length-1){
    //                 if(nArray[row][col] == nArray[row][col-1]){
    //                     conOcur++;
    //                 }
    //             //only counting the top connections in last row.
    //             if(nArray[row][col]==nArray[row][col-1]){
    //                 conOcur++;
    //                 console.log(`row 0,`)
    //             }
    //         }
    //     }
    //         }
    //         //for rows not first and last

    //     }
    // }

