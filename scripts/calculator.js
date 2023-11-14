let logicArray = [];
let globalLogicString = "";
function solveFunction(clickedButton){
  userInput = clickedButton.innerHTML;
  if(userInput != "C" && userInput != "AC"){
    logicArray.push(userInput);
  }
  //make array to string
  logicString = logicArray.toString().replaceAll(",", "");
  console.log(logicArray); //for debugging

  //change paragraph to logicString
  document.querySelector('.display').innerHTML = logicString;
  globalLogicString = logicString;
  //return logicStringEvaluated;
  
  if(userInput == "AC"){
    globalLogicString = "&nbsp";
    logicArray = [];
     document.querySelector('.display').innerHTML = globalLogicString;
  }
  if(userInput == "C"){
    if(document.querySelector('.display').innerHTML.length == 1){
      document.querySelector('.display').innerHTML = "&nbsp";
    }
    else{
    logicArray.pop();
    logicString = logicArray.toString().replaceAll(",", "");
    globalLogicString = logicString;
    document.querySelector('.display').innerHTML = globalLogicString;
    }
  }
}
function showAnswer(){
	logicStringEvaluated = eval(globalLogicString);
	document.querySelector('.display').innerHTML = logicStringEvaluated;
  globalLogicString = logicStringEvaluated;
}
