
let expression = "";
function displayChar(x){
    expression += x;
    setVal();
}
function clearExpression()
{
    expression = "";
    setVal();
}
function setVal(){
    document.getElementById("display").textContent = expression;
}
function getVal(){
  
}