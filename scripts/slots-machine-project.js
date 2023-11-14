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


function countMatched(nArray){
    rowMatchCount = 0;
    for(let row of nArray){
        for(let i = 0; i < row.length-1; i++){
            if(row[i]==row[i+1]){
                rowMatchCount++;
            }
        }

    }
    return rowMatchCount;
}

console.log(countMatched(nestedArray));
