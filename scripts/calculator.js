// var A = ['Sunday','Monday','Tuesday','Wednesday','Thursday']
// array = A + ""
// array = array.replaceAll(",", ' ');
// console.log(array);
let logicArray = [];
globalLogicString = "";
function solveFunction(clickedButton){
  userInput = clickedButton.innerHTML;
  if(userInput != "C"){
    logicArray.push(userInput);  
  }
  logicString = logicArray.toString().replaceAll(",", "");

  console.log(logicArray);
  document.querySelector('.display').innerHTML = logicString;
  globalLogicString = logicString;
  //return logicStringEvaluated;
  
}

function showAnswer(){
	logicStringEvaluated = eval(globalLogicString);
	document.querySelector('.display').innerHTML = logicStringEvaluated;
}
