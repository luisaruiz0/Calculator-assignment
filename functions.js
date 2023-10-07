
let expression = "";
// shows the value of the button
function displayChar(x){
    expression += x;
    setVal();
}
// uses button c to clear the numbers
function clearExpression()
{
    expression = "";
    setVal();
}
// changes the value to correspond to each button on click
function setVal(){
    document.getElementById("display").textContent = expression;
}
// gets the value, calculates the expression and 
function getVal(){
    try{
        const result = calc(expression);
        document.getElementById('display').textContent = result;
        expression = result     // then replaces it with the value
        setVal();
    }
    catch (error){
        document.getElementById('display').textContent = 'ERROR';
    }
}
// separates the operators, converts string into float number, and calculates the results using switch cases
function calc(expression){
    const ops = ['+', '-', 'x', '/'];
    const splitOperators = expression.split(/(\+|-|\x|\/)/);
    let result = parseFloat(splitOperators[0]);

    for (let i =1; i<splitOperators.length; i +=2){
        const op = splitOperators[i];
        const operand = parseFloat(splitOperators[i+1]);
        if (isNaN(operand) || !ops.includes(op)){
            throw new Error('Invalid expression');
        }
        switch(op){
            case '+':
                result+=operand;
                break;
            case '-':
                result-=operand;
                break;
            case 'x':
                result*=operand;
                break;
            case '/':
                if (operand === 0){
                    throw new Error('UNDEFINED')
                }
                result /= operand;
                break      
        }
    }
    return result;
}
