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

//check left node OR right node OR top node OR bottom node.
function countMatched(nArray){
    let conOcur = 0;
    let rowMatchedCount = 1;
    let columnMatchedCount = 1;

    for(let row =0; row<nArray.length-1;row++){
        for(let col = 0; col<nArray[row].length-1; col++){
            // check if 0th row
            if(row==0){
                //check if column isnt first and last.
                if(0<col<nArray[row].length-1){
                    //check left or right connection
                    if(nArray[row][col]==nArray[row-1][col] || nArray[row][col] == nArray[row+1][col]){
                        conOcur++;
                        console.log(`row 0,`)
                    } 
                }
                if(nArray[row][col]==nArray[row][col+1]){
                    conOcur++;
                    console.log(`row 0,`)
                }

            
            
    }




console.log(countMatched(nestedArray));
